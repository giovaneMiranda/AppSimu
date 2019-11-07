import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdemVenda } from '../../interfaces/ordem-venda';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {
  public venda: OrdemVenda = {};

  isDisabled;
  isDisabled2;

  constructor(private modalControler: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalControler.dismiss();
  }
  
  okModal(){
    //salvar infos no banco
    this.modalControler.dismiss();
  }

  change(test: any) {
    console.log(this.venda.tipoOrdem);
    if(this.venda.tipoOrdem == 'Mercado'){
      this.venda.valorStopLoss = null;
      this.venda.valorStopGain = null;
      this.isDisabled = true;
      this.isDisabled2 = true;
    }else{
      if(this.venda.tipoOrdem == 'Stop Loss'){
        this.isDisabled = false;
        this.venda.valorStopGain = null;
        this.isDisabled2 = true;
      }else{
        this.isDisabled = false;
        this.isDisabled2 = false
      }
    }
  }
  
}
  