import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { AlertController, ModalController } from '@ionic/angular';
import { CompraComponent } from '../compra/compra.component';


@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})

export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;
  dataFromModal;

  constructor(private authService: AuthService, 
              private afs: AngularFirestore,
              private alertController: AlertController,
              private  modalController: ModalController) { 
                
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
  }

  ngOnInit() {
  }

  savemoney(doc) {
    this.dataUser = doc;
  }

  async PopUpCompra() {
    const alert = await this.alertController.create({
      header: 'Compra',
      inputs: [
        {
          type: 'radio',
          label: 'Mercado',
          value: '0'
        },
        {
          type: 'radio',
          label: 'Limitado',
          value: '1'
        },
        {
          name: 'quantidade',
          placeholder: 'Quantidade',
          type: 'number'
        },
        {
          name: 'valor',
          placeholder: 'Valor',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, 
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async compra() {
    const modal = await this.modalController.create({
      component: CompraComponent,
    });
    return await modal.present();
  }

}
