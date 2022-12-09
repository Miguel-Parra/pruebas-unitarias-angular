import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routermedico',
  templateUrl: './routermedico.component.html',
  styleUrls: ['./routermedico.component.css']
})
export class RoutermedicoComponent implements OnInit {

  id: string = '';

  constructor(
    public router: Router,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (parametros) => {
        this.id = parametros['id'];
      }
    )

  }

  guardarMedico(){
    this.router.navigate(['medico','123'])
  }

}
