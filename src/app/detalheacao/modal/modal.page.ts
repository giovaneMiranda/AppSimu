import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, IonDatetime, AlertController } from '@ionic/angular';
import { OrdemCompra } from '../../interfaces/ordem-compra';
import { Acao } from '../../interfaces/acao';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Userbd } from 'src/app/interfaces/userbd';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {
  @Input() id_emp;
  @Input() fechamento;
  public dataUser: Userbd;
  public carteira: Acao = {};
  public compra: OrdemCompra = {};
  public dinheiro: any; 
  private loading: any;
  date = Date();
  isDisabled;


  constructor(
    public alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthService,
    private modalControler: ModalController,
    private afs: AngularFirestore) { 


    }

  ngOnInit() {
    
  }

closeModal(){
  this.modalControler.dismiss();
}

 async okModal(){

// await this.presentLoading();
  
//try {

  console.log(this.compra.tipoOrdem);
  if(this.compra.tipoOrdem == 'Limitado'){

    if(this.compra.quantidadeAcao == null){
      this.presentAlert("Indique uma quantidade");
    }else{ 
      if(this.compra.valorOrdem == null){
        this.presentAlert("Indique um valor");
      }else{
    this.compra.nomeAcao = this.id_emp;
     this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('OrdemCompra').add(this.compra);
    }
  });
  this.modalControler.dismiss();
      }
    }
  }else{
    
    if(this.compra.quantidadeAcao == null){
      this.presentAlert("Indique uma quantidade");
    }else{ 



    this.carteira.id = this.id_emp;
    this.carteira.quantidade = this.compra.quantidadeAcao;
    this.carteira.valorCompra = this.fechamento; //valor na hora
    this.carteira.dataCompra = Date.now();
    //this.carteira.dataCompra = this.date.seconds;
   

     this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.afs.collection('User')
          .doc(user.uid)
          .valueChanges()
          .subscribe(docUser => {
            this.savemoney(docUser)
          });
      }
    });

    this.dinheiro = this.dataUser.dinheiro-(this.compra.quantidadeAcao*this.fechamento);

     this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.afs.collection('User')
            .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id).set(this.carteira);
    }

    this.afs.collection('User')
    .doc(user.uid)
    .valueChanges()
    .subscribe(docUser => {
      this.savemoney(docUser);
      
      this.dataUser.dinheiro = this.dinheiro;

      this.afs.collection('User')
      .doc(user.uid).set(this.dataUser);

      this.modalControler.dismiss();
    }); 

  });

    }
}
//}catch{

//} finally {
 // this.loading.dismiss();

//}
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

async presentLoading() {
  this.loading = await this.loadingController.create({
    message: 'Carregando...',
  });
  return this.loading.present();
}

async presentAlert(message) {
  const alert = await this.alertController.create({
    header: 'Erro',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}



}
