import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { OrdemVenda } from '../../interfaces/ordem-venda';
import { Acao } from '../../interfaces/acao';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Userbd } from 'src/app/interfaces/userbd';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {
  public venda: OrdemVenda = {};
  @Input() id_emp;
  @Input() fechamento;
  public dataUser: Userbd;
  public carteira: Acao = {};
  public dinheiro: any;
  public quant: number; 
  isDisabled;
  isDisabled2;
  isDisabled3;

  constructor(
    public alertController: AlertController,
    public authService: AuthService,
    public modalControler: ModalController,
    public afs: AngularFirestore) { 


    }

  ngOnInit() {
  }

  closeModal(){
    this.modalControler.dismiss();
  }
  
  async okModal(){

    try {
      this.carteira.id = this.id_emp;
   } catch (error) {
     this.presentAlert("Você não tem ações dessa empresa em sua carteira");
   }

    if(this.venda.tipoOrdem == 'Mercado'){

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
    
    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.afs.collection('User')
        .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id)
          .valueChanges()
          .subscribe(docCart => {
            this.savecarteira(docCart)
          });
      }
    });

    //pegar dinheiro
    this.dinheiro = this.dataUser.dinheiro+(this.carteira.quantidade*this.fechamento);
    console.log(this.dinheiro);

    this.authService.getAuth().onAuthStateChanged(user => {

    this.afs.collection('User')
    .doc(user.uid)
    .valueChanges()
    .subscribe(docUser => {
      this.dataUser = docUser;
      this.dataUser.dinheiro = this.dinheiro;

      this.afs.collection('User')
      .doc(user.uid).set(this.dataUser);

      this.dataUser.dinheiro = this.dinheiro;

      this.afs.collection('User')
      .doc(user.uid).set(this.dataUser);

      this.afs.collection('User')
      .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id).delete();
      this.modalControler.dismiss();
    }); 

  });

  }else{

    
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
    
    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.afs.collection('User')
        .doc(user.uid).collection('CarteiraAcao').doc(this.carteira.id)
          .valueChanges()
          .subscribe(docCart => {
            this.savecarteira(docCart)
          });
      }
    });

    this.venda.nomeAcao = this.id_emp;

   if(this.venda.quantidadeAcao == null){
      this.presentAlert("Indique uma quantidade");
    }else{ 
      if(this.venda.valorStopLoss == null && this.venda.tipoOrdem == 'Stop Loss'){
        this.presentAlert("Indique um valor de Stop Loss");
      }else{
        if((this.venda.valorStopGain == null || this.venda.valorStopLoss == null) && 
        this.venda.tipoOrdem == 'Stop Simultâneo'){
          this.presentAlert("Indique um valor de Stop Loss e de Stop Gain");
        }else{
          this.authService.getAuth().onAuthStateChanged(user => {
                  if (user) {
                    this.afs.collection('User')
                      .doc(user.uid).collection('OrdemVenda').add(this.venda);
              }
          });
          this.modalControler.dismiss();
        }
      }

    }







  }

  }

  change(test: any) {
    console.log(this.venda.tipoOrdem);
    if(this.venda.tipoOrdem == 'Mercado'){
      this.venda.valorStopLoss = null;
      this.venda.valorStopGain = null;
      this.isDisabled = true;
      this.isDisabled2 = true;
      this.isDisabled3 = true;
    }else{
      if(this.venda.tipoOrdem == 'Stop Loss'){
        this.isDisabled = false;
        this.isDisabled3 = false;
        this.venda.valorStopGain = null;
        this.isDisabled2 = true;
      }else{
        this.isDisabled = false;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
      }
    }
  }
  

  savemoney(doc) {
    this.dataUser = doc;
  }

  savecarteira(doc) {
    this.carteira = doc;
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
  