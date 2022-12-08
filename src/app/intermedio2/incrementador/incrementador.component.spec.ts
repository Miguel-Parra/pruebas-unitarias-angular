import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('Should create', () => {
        expect(component).toBeTruthy()
    });

    it('Debe mostrar la leyenda', () => {
        component.leyenda = "Progreso de carga";
        fixture.detectChanges(); //dispara la deteccion de cambios
        const element = fixture.debugElement.query(By.css('h3')).nativeElement //REFERENCIA HTML EN EL CUAL QUIERO MOSTRAR LA LEYENDA
        expect(element.innerHTML).toContain("Progreso de carga")
    });

    it('Debe presentar en el input el valor del progreso', async () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        await fixture.whenStable()
        const input = fixture.debugElement.query(By.css('input'));
        const element = input.nativeElement;
        expect(element.value).toBe('55');
    })

    it('Debe incrementar/decrementar en 5, con un click en el boton, verificando en el componente TS', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null)
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null)
        expect(component.progreso).toBe(50);

    })

    it('El titulo del componente HTML, debe mostrar el progreso',  () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();
        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement //REFERENCIA HTML EN EL CUAL QUIERO MOSTRAR LA LEYENDA
        expect(element.innerHTML).toContain("45");
    })
});
