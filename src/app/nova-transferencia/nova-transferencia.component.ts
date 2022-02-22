import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  public transferir(): void {
    console.log('Nova tranferencia realizada');

    this.service.adicionar(
      {
        valor: this.valor,
        destino: this.destino
      }).subscribe((transferencia: Transferencia) => {
        console.log(transferencia);
        this.router.navigateByUrl('extrato');
      });
  }
}
