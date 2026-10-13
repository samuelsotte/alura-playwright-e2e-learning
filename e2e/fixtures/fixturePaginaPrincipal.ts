import PaginaPrincipal from "../page-objects/PaginaPrincipal";
import {test as base} from "@playwright/test";

export const test = base.extend<{ paginaPrincipal: PaginaPrincipal }>({
    paginaPrincipal: async ({ page }, use) => {
        const paginaPrincipal = new PaginaPrincipal(page);
        await use(paginaPrincipal);
    }
});