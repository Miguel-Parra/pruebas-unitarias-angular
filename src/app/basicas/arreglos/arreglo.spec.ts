import { obtenerRobosts } from "./arreglo"

describe('Pruebas de arreglo', () => {
    it('Debe retornar al menos 3 robots', () => {
        const resp = obtenerRobosts();
        expect(resp.length).toBeGreaterThanOrEqual(3)
    })

    it('Debe exister MegaMan y Ultron', () => {
        const resp = obtenerRobosts();
        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Ultron');
    })
})