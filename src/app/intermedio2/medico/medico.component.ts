import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];
  constructor(
    private _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`

  }

  obtenerMedico() {
    this._medicoService.getMedicos()
      .subscribe({
        next: (medicos: any) => {
          this.medicos = medicos;
        },
        error: error => {
          console.log(console.log(error))
        }
      })
  }

}
