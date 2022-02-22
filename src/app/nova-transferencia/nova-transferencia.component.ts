import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  public transferir(): void {
    console.log('Nova tranferencia realizada');

    this.service.adicionar(
      {
        valor: this.valor,
        destino: this.destino
      }).subscribe((transferencia: Transferencia) => {
        console.log(transferencia);
        this.limparCampos();
      });
  }

  private limparCampos(): void {
    this.valor = null;
    this.destino = null;
  }
}
