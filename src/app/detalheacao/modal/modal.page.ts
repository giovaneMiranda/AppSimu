import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { OrdemCompra } from '../../interfaces/ordem-compra';
import { Acao } from '../../interfaces/acao';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { app } from 'firebase';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public carteira: Acao = {};
  public compra: OrdemCompra = {};
  private loading: any;

  constructor(
    private loadingController: LoadingController,
    private authService: AuthService,
    private navParams: NavParams, 
    private modalControler: ModalController,
    private afs: AngularFirestore) { }

  ngOnInit() {
  }

closeModal(){
  this.modalControler.dismiss();
}

 okModal(){
  //salvar infos no banco

  if(this.compra.tipoOrdem == 'Limitado'){

    this.compra.nomeAcao = 'test';

    this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('OrdemCompra').add(this.compra);
    }
  });

  }else{
    
    this.carteira.id = "test";
    this.carteira.quantidade = this.compra.quantidadeAcao;
    this.carteira.valorCompra = this.compra.valorOrdem;
    this.carteira.dataCompra = 12122019
/*     var sessionsRef = this.afs.firestore.app.database();
    sessionsRef.push({
      startedAt: firebase.database.ServerValue.TIMESTAMP
    }); 

    this.carteira.dataCompra = this.afs.firestore.database(app).ServerValue.TIMESTAMP
*/
    
    this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id).set(this.carteira);
    }
  });

  }


  this.modalControler.dismiss();
}


async presentLoading() {
  this.loading = await this.loadingController.create({
    message: 'Carregando...',
  });
  return this.loading.present();
}




}
