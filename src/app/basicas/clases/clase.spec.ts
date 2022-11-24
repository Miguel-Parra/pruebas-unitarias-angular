import { Jugador } from "./clase"

describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    beforeAll(() => {
        // console.log('beforeAll');
    });

    beforeEach(() => {
        // console.log('beforeEach');
        jugador = new Jugador();
    });

    afterAll(() => {
        // console.log('afterAll');
    });

    afterEach(() => {
        // console.log('afterEach');
    });


    it('Retornar 80 de hp, si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20)
        expect(resp).toBe(80)
    })


    it('Retornar 50 de hp, si recibe 50 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50)
        expect(resp).toBe(50)
    })

    it('Retornar o, si recibe 100 o mas de danio', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(101)
        expect(resp).toBe(0)
    })

})