
import { incrementar } from "./numeros"

describe('Pruebas de numeros', () => {

    it('Mayor a 100,retorna 100', () => {
        const resp = incrementar(300);
        expect(resp).toBe(100);
    })

    it('Menor a 100, retorna numero ingresado + 1', () => {
        let numero = 50
        const resp = incrementar(numero);
        expect(resp).toBe(numero +1 );

    })

})