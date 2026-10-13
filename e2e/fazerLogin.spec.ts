// import test, { expect } from "@playwright/test";
import PaginaLogin from "./page-objects/PaginaLogin"; // não precisa por conta da fixture abaixo, mas deixei descomentado pra não quebrar os teste de baixo
import { test } from './page-objects/PaginaLogin';

test.describe("Testes de Login", () => {
    test("Deve realizar login com email e senha válidos", async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin("sottemartins57@gmail.com", "123");
        await paginaLogin.loginFeitoComSucesso();
    });

    test("Deve exibir mensagem de erro ao tentar login com email e senha inválidos", async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin("a@gmail.com", "senhaErrada");
        await paginaLogin.estaMostrandoMensagemDeErro("Você não está autorizado a acessar este recurso");
    });

    test("Deve exibir mensagem de erro ao tentar logar com email inválido", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitarPaginaLogin();
        await paginaLogin.loginComEmailInvalidoMostraErro("gmail.com", "123", "E-mail inválido");
    });

    test("Não deve permitir login com e-mail vazio", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitarPaginaLogin();
        await paginaLogin.loginComCampoVazioMostraErro("", "123");
    });

    test("Não deve permitir login com senha vazia", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitarPaginaLogin();
        await paginaLogin.loginComCampoVazioMostraErro("a@gmail.com", "");
    });
});