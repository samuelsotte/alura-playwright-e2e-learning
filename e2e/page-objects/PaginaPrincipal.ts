import { Page, Locator, expect } from "@playwright/test";

export default class PaginaPrincipal {
    private readonly page: Page;
    private readonly campoDropdownOrigem: Locator;
    private readonly botaoAbrirModalPassageiros: Locator;
    private readonly botaoSomenteIda: Locator;
    private readonly incrementarAdultos: Locator;
    private readonly incrementarCriancas: Locator;
    private readonly incrementarBebes: Locator;
    private readonly botaoFecharModalPassageiros: Locator;
    private readonly campoDropdownDestino: Locator;
    private readonly dataIda: Locator;
    private readonly botaoBuscarPassagens: Locator;
    private readonly textoIdaVolta: Locator;
    private readonly containerOrigem: Locator;
    private readonly containerDestino: Locator;
    private readonly botaoComprar: Locator;
    private readonly containerDataIda: Locator;

    constructor(page: Page) {
        this.page = page;

        this.botaoSomenteIda = page.getByRole('button', { name: 'SOMENTE IDA' });
        this.botaoAbrirModalPassageiros = page.getByTestId('abrir-modal-passageiros');
        this.incrementarAdultos = page
        .getByTestId('seletor-passageiro-adultos')
        .getByRole('button', { name: 'Ícone do operador de adição' });
        this.incrementarCriancas = page
        .getByTestId('seletor-passageiro-criancas')
        .getByRole('button', { name: 'Ícone do operador de adição' });
        this.incrementarBebes = page
        .getByTestId('seletor-passageiro-bebes')
        .getByRole('button', { name: 'Ícone do operador de adição' })
        this.botaoFecharModalPassageiros = page.getByTestId('fechar-modal-passageiros');
        this.campoDropdownOrigem = page
        .getByTestId('campo-dropdown-origem')  
        .getByLabel('Origem');
        this.campoDropdownDestino = page
        .getByTestId('campo-dropdown-destino')  
        .getByLabel('Destino');
        this.dataIda = page.getByTestId('campo-data-ida');
        this.botaoBuscarPassagens = page.getByTestId('botao-buscar-passagens');

        this.textoIdaVolta = page.getByTestId('texto-ida-volta');
        this.containerOrigem = page.getByTestId('container-origem');
        this.containerDestino = page.getByTestId('container-destino');
        this.botaoComprar = page.getByTestId('botao-comprar');
        this.containerDataIda = page.getByTestId('container-data-ida');
    }

    async visitarPaginaPrincipal() {
        await this.page.goto('/');
    }

    async definirSomenteIda() {
        await this.botaoSomenteIda.click();
    }

    async abrirModalPassageiros() {
        await this.botaoAbrirModalPassageiros.click();
    }

    async definirPassageirosAdultos(quantidade: number) {
        for (let i = 1; i < quantidade; i++) {
            await this.incrementarAdultos.click();
        }
    }

    async definirPassageirosCriancas(quantidade: number) {
        for (let i = 0; i < quantidade; i++) {
            await this.incrementarCriancas.click();
        }
    }

    async definirPassageirosBebes(quantidade: number) {
        for (let i = 0; i < quantidade; i++) {
            await this.incrementarBebes.click();
        }
    }

    async fecharModalPassageiros() {
        await this.botaoFecharModalPassageiros.click();
    }

    async definirOrigemEDestino(origem: string, destino: string) {
        await this.campoDropdownOrigem.fill(origem);
        await this.campoDropdownOrigem.press('Enter');
        
        await this.campoDropdownDestino.fill(destino);
        await this.campoDropdownDestino.press('Enter');
    }

    async definirData(data: Date) {
        const dataFormatadaUS = data.toLocaleString('en-US', { dateStyle: 'short' }); // formatando pois o site só aceita data formato US
        await this.dataIda.fill(dataFormatadaUS);
    }

    async clicarBotaoBuscarPassagens() {
        await this.botaoBuscarPassagens.click();
    }

    async estaMostrandoPassagem(
        tipoTrajeto: 'Somente ida' | 'Ida e volta',
        origem: string,
        destino: string,
        dataIda: Date
    ) {
        const dataIdaFormatada = dataIda.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
        });

        await expect(this.textoIdaVolta).toHaveText(tipoTrajeto); // TENHA o texto, exato
        await expect(this.containerOrigem).toContainText(origem); // CONTENHA o texto ali dentro
        await expect(this.containerDestino).toContainText(destino);
        await expect(this.containerDataIda).toContainText(dataIdaFormatada);
        await expect(this.botaoComprar).toBeVisible();
    }
}