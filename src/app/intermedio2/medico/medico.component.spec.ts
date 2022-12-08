import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component"
import { MedicoService } from "./medico.service";

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MedicoComponent],
      providers: [MedicoService],
      schemas: []
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  })

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  })

  it ('Debe retornar el nombre del medico', () => {
    const nombre = "Miguel"
    let respuesta = component.saludarMedico(nombre);
    expect(respuesta).toContain("Miguel");
  })

})