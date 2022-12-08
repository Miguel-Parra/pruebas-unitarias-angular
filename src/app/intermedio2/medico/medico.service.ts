import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public httpClient: HttpClient) { }

  getMedicos() { // srvicio que me traerá varios médicos
    return this.httpClient.get(".....");
  }
}
