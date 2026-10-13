import test, { expect } from "@playwright/test";

test.describe("Testes Básicos na Página Inicial", () => {
    test("Deve visitar a página inicial", async ({ page }) => {
        await page.goto("/"); // ação
        await expect(page).toHaveTitle("Jornada Milhas"); // asserção
        
        
        // const tituloPassagens = page.getByRole("heading", { name: "Passagens"});

        // await expect(tituloPassagens).toBeVisible();
        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toBeVisible();

        const opcaoIdaVolta = page.getByRole('button', { name: 'IDA E VOLTA' });
        await expect(opcaoIdaVolta).toBeVisible();

        const tituloPromocoes = page.getByTestId('titulo-promocoes');
        await expect(tituloPromocoes).toBeVisible();

        const tituloDepoimentos = page.getByTestId('titulo-depoimentos');
        await expect(tituloDepoimentos).toBeVisible();
    })
});