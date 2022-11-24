import { usuarioLoguedo } from "./boolean"

describe('Pruebas de booleanos', () => {

    it('Debe retornar true', () => {
        const resp = usuarioLoguedo();
        expect(resp).toBeFalsy();

    })
})