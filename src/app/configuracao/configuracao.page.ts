import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
  
})
export class ConfiguracaoPage implements OnInit {
  service: any;

  constructor(public alertController: AlertController,
              private authService: AuthService) {

  }
  
  async AlertaReset() {
    const alert = await this.alertController.create({
      header: 'Resetar a conta',
      message: 'Deseja realmente resetar a conta?',
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
  async Logout() {
    const alert = await this.alertController.create({
      header: 'Sair da conta',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Okay',
          handler: async () => {
            try{
              await this.authService.logout();
              console.log('foi');
            } catch(error){
              console.error(error);
            }
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
   
  
  }

  ngOnInit() {
  }

}
