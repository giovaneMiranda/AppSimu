import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {

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
  
}
  