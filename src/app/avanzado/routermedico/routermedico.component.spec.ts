import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, of, Subject } from 'rxjs';

import { RoutermedicoComponent } from './routermedico.component';

class FakeRouter {
  navigate(params: any) { }
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY
  // private subject = new Subject();
 

  // get params() {
  //   return this.subject.asObservable();
  // }

  // push(valor: any) {
  //   this.subject.next(valor)
  // }

  params: Observable<any> = of({id: 'nuevo'})
}

describe('RoutermedicoComponent', () => {
  let component: RoutermedicoComponent;
  let fixture: ComponentFixture<RoutermedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutermedicoComponent],
      providers: [

        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ],
      // imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutermedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redirecionar a medico cuando se guarde', () => {

    const router = TestBed.inject(Router) //creo una instancia, esto porque necesito hacer un reemplazo en el servicio, es decir para hacer un Espia
    const spy = spyOn(router, 'navigate'); //quiero que espies el 'router' y busca el 'navigate' , no vamos a confirmar que navegue o haga todo el funcionamiento del router porque eso ya lo hace angular

    component.guardarMedico(); //disparo la funcion que tiene el router.navigate el cual es espiado por el 'spy'

    expect(spy).toHaveBeenCalledWith(['medico', '123']) //debemos esperar que el espia haya sido llamado como era la forma en la que se llamaria la otra pagina

  })

  it('Debe de colocar el id con valor nuevo', () => {
    // component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute) //crear una instancia de la clase FakeActivatedRoute para poder insertar manualmente un parametro que yo quiero insertarle al Observable Subject 
    
    expect(component.id).toBe('nuevo')
  })

});
