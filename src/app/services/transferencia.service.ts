import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: Array<Transferencia>;
  private urlApiRest = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  public adicionar(transferencia: Transferencia): void {
    this.listaTransferencia.push({...transferencia, data: new Date()});
  }

  public get transferencias(): Array<Transferencia> {
    return this.listaTransferencia;
  }

  public todas() {
    return this.httpClient.get<Transferencia[]>(this.urlApiRest);
  }

}
