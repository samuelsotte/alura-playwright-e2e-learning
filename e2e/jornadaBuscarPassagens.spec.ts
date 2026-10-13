// import test from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrincipal"; // não precisa mais devido à fixture, que já puxa o arquivo
import { test } from './fixtures/fixturePaginaPrincipal';

test.describe('Buscar Passagens', () => {
    test.beforeEach(async ({ paginaPrincipal }) => { // Hook de visitar a página principal antes de cada teste
        await paginaPrincipal.visitarPaginaPrincipal(); // posso fazer o hook de visitar por aqui, pois a fixture apenas criou a page e usou
    });

    test('Deve buscar passagem de somente ida', async ({ paginaPrincipal }) => {
        // const paginaPrincipal = new PaginaPrincipal(page);


        // await paginaPrincipal.visitarPaginaPrincipal(); // desnecessário devido ao hook
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(1);
        await paginaPrincipal.definirPassageirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('Minas Gerais', 'Rio de Janeiro');

        const dataIda = new Date();
        await paginaPrincipal.definirData(dataIda);
        await paginaPrincipal.clicarBotaoBuscarPassagens();

        await paginaPrincipal.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro', dataIda);
    })
})