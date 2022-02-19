import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: Array<any>;

  constructor() {
    this.listaTransferencia = [];
  }

  public adicionar(transferencia: any): void {
    this.listaTransferencia.push({...transferencia, data: new Date()});
  }

  public get transferencias(): Array<any> {
    return this.listaTransferencia;
  }

}
