import { Locator, Page, expect } from "@playwright/test";
import { test as base } from "@playwright/test";

export const test = base.extend<{ paginaLogin: PaginaLogin }>({
    paginaLogin: async ({ page }, use) => {
        const paginaLogin = new PaginaLogin(page);
        await paginaLogin.visitarPaginaLogin();
        await use(paginaLogin);
    }
})

export default class PaginaLogin {
    private readonly page: Page;
    private readonly botaoLogin: Locator;
    private readonly inputEmail: Locator;
    private readonly inputSenha: Locator;
    private readonly botaoAcessarConta: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoLogin = page.getByTestId('botao-login');
        this.inputEmail = page.getByTestId('input-email');
        this.inputSenha = page.getByTestId('input-senha');
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');
    }

    async visitarPaginaLogin() {
        await this.page.goto("/");
        await this.botaoLogin.click();
        await expect(this.page).toHaveURL('/auth/login');
    }

    async fazerLogin(email: string, senha: string) {
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.botaoAcessarConta.click();
    }

    async loginFeitoComSucesso() {
        await expect(this.page).toHaveURL('/home');
    }

    async estaMostrandoMensagemDeErro(mensagem: string) {
        const elementoMensagemErro = this.page.getByText(mensagem);
        await expect(elementoMensagemErro).toBeVisible();
    }

    async loginComEmailInvalidoMostraErro(email: string, senha: string, mensagemErro: string) {
        const elementMensagemErroEmailInvalido = this.page.getByText(mensagemErro);

        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await expect(elementMensagemErroEmailInvalido).toBeVisible();
    }

    async loginComCampoVazioMostraErro(email: string, senha: string) {
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await expect(this.botaoAcessarConta).toBeDisabled();
    }
};