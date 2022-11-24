import { FormularioRegister } from "./formulario"
import { FormBuilder } from "@angular/forms";

describe('FORMULARIOS', () => {
    let componenteFormulario: FormularioRegister;

    beforeEach(() => {
        componenteFormulario = new FormularioRegister(new FormBuilder);
    })

    it('Debe de crear un formulario con dos campos, email oy password', () => {

        expect(componenteFormulario.form.contains('email')).toBeTruthy();
        expect(componenteFormulario.form.contains('password')).toBeTruthy();
    })

    it('Email obligatorio', () => {
        const control = componenteFormulario.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy()
    })

    it('Email valido', () => {
        const control = componenteFormulario.form.get('email');
        control?.setValue('mike@ec.com');
        expect(control?.valid).toBeTruthy()
    })


})