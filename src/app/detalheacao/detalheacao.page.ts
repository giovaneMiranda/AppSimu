import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})
export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;

  constructor() { }

  ngOnInit() {
  }

 compra() {
      if (this.comp == true){
        this.comp = false;
      }else{
        this.comp = true;
        this.vend = false;
      }
  }

  venda() {
    if (this.vend == true){
      this.vend = false;
    }else{
      this.comp = false;
      this.vend = true;
    }
  }

}
