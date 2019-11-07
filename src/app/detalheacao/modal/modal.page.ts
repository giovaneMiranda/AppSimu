import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, IonDatetime } from '@ionic/angular';
import { OrdemCompra } from '../../interfaces/ordem-compra';
import { Acao } from '../../interfaces/acao';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Userbd } from 'src/app/interfaces/userbd';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {
  @Input() id_emp;
  public dataUser: Userbd;
  public carteira: Acao = {};
  public compra: OrdemCompra = {};
  private loading: any;
  date = Date();
  isDisabled;

  constructor(
    private authService: AuthService,
    private modalControler: ModalController,
    private afs: AngularFirestore) { 


    }

  ngOnInit() {
    
  }

closeModal(){
  this.modalControler.dismiss();
}

 okModal(){
  //salvar infos no banco
  console.log(this.compra.tipoOrdem);
  if(this.compra.tipoOrdem == 'Limitado'){

    this.compra.nomeAcao = this.id_emp;

    this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('OrdemCompra').add(this.compra);
    }
  });

  }else{
    
    this.carteira.id = this.id_emp;
    this.carteira.quantidade = this.compra.quantidadeAcao;
    this.carteira.valorCompra = this.compra.valorOrdem; //valor na hora
    this.carteira.dataCompra = Date.now();
    //this.carteira.dataCompra = this.date.seconds;
    
    this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id).set(this.carteira);
    }

/*     this.afs.collection('User')
    .doc(user.uid)
    .valueChanges()
    .subscribe(docUser => {
      this.savemoney(docUser);

      this.dataUser.dinheiro = this.dataUser.dinheiro-(this.compra.quantidadeAcao*this.compra.valorOrdem);

      this.afs.collection('User')
      .doc(user.uid).set(this.dataUser);

    }); */




  });

  }


  this.modalControler.dismiss();
}

change(test: any) {
  console.log(this.compra.tipoOrdem);
  if(this.compra.tipoOrdem == 'Limitado'){
    this.isDisabled = false;
  }else{
    this.compra.valorOrdem = null;
    this.isDisabled = true;
  }
}

savemoney(doc) {
  this.dataUser = doc;
}

}
