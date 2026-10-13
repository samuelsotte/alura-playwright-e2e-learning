import { test, Page, Locator, expect } from "@playwright/test";

export default class PaginaCadastro {
    private readonly page: Page;
    private readonly botaoCadastro: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoCadastro = page.getByRole('button', { name: 'CADASTRE-SE' });
    }

    async visitarPaginaCadastro() {
        await this.page.goto("/");
        await this.botaoCadastro.click();
        await expect(this.page).toHaveURL('/auth/cadastro');
    }
}

