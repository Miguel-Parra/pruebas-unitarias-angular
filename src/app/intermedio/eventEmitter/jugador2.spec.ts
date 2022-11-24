import { Jugador2 } from "./jugador2";


describe('Pruebas EMIT', () => {

    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe emitir un evento cuando recibe danio', () => {
        let nuevoHP = 0;
        //respuesta sera el hp que emite el evento emit
        jugador.hpCambia.subscribe( respuesta => {
            nuevoHP = respuesta;
        })

        jugador.recibeDanio(1000);
        expect(nuevoHP).toBe(0);
    })

    it('Debe emitir un evento cuando recibe danio, y sobrevivir', () => {
        let nuevoHP = 0;
        //respuesta sera el hp que emite el evento emit
        jugador.hpCambia.subscribe( respuesta => {
            nuevoHP = respuesta;
        })

        jugador.recibeDanio(50);
        expect(nuevoHP).toBeGreaterThan(0);
    })

})