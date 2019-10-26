import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})
export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;

  constructor(private authService: AuthService, 
              private afs: AngularFirestore,
              private alertController: AlertController) { 
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

  savemoney(doc) {
    this.dataUser = doc;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
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
        }, {
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

}
