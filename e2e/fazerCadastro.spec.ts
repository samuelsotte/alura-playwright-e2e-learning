import {test, expect, Locator} from "@playwright/test";
import PaginaCadastro from "./page-objects/PaginaCadastro";


test.describe("Testes de Cadastro", () => {
    test("Deve visitar a página de cadastro", async ({ page }) => {
        const paginaCadastro = new PaginaCadastro(page);

        await paginaCadastro.visitarPaginaCadastro();
        
        const tituloCrieSuaConta = page.getByText('Crie sua conta');
        await expect(tituloCrieSuaConta).toBeVisible();
    })
});