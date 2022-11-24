import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, of, throwError } from 'rxjs'
import { EXDEV } from 'constants';


describe('MedicosComponent', () => {

    let componenteMedicos: MedicosComponent;
    const servicioMedicos = new MedicosService(null as any);

    beforeEach(() => {
        componenteMedicos = new MedicosComponent(servicioMedicos);

    });


    it('Init debe de cargar los medicos', () => {
        const medicos = ['medi1', 'medi2', 'medi3']
        spyOn(servicioMedicos, 'getMedicos').and.callFake(() => {
            return from([medicos])
        })
        componenteMedicos.ngOnInit();
        expect(componenteMedicos.medicos.length).toBeGreaterThan(0)

    });

    it('Verificar si la funcion agregarMedico del servicio es llamada', () => {
        const espiaLlamado = spyOn(servicioMedicos, 'agregarMedico').and.callFake((medico) => {
            return EMPTY;
        })
        componenteMedicos.agregarMedico();

        expect(espiaLlamado).toHaveBeenCalled();

    })

    it('Verificar que retorne un valor para agregar un nuevo medico al arreglo de medicos', () => {
        const medico = { id: 1, nombre: 'Miguel' };
        spyOn(servicioMedicos, 'agregarMedico').and.returnValue(of(medico));
        componenteMedicos.agregarMedico();
        expect(componenteMedicos.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
    })

    it('Probando errores en los observables, si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el medico'
        spyOn(servicioMedicos, 'agregarMedico').and.returnValue(throwError(miError)
        )
        componenteMedicos.agregarMedico();
        expect(componenteMedicos.mensajeError).toBe(miError)

    })

    it('No debe de llamar al servidor para borrar un medico', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicioMedicos, 'borrarMedico').and.returnValue(EMPTY);
        componenteMedicos.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');

    })

});
