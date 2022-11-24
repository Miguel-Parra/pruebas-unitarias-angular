import { mensaje } from "./string"


describe('Pruebas de String', () => {

    it('Debe regresar un string', () => {
        const resp = mensaje('Miguel');
        expect(typeof resp).toBe('string');

    })

    it('Debe contener el nombre', () => {
        const nombre = "Miguel"
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);

    })

})