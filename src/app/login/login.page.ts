import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService

  ) { }

  ngOnInit() {
  }

  login() {

  }

  async register() {
    await this.presentLoading();
    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      let message: string;

      switch(error.code){
        case 'auth/weak-password':
          message= 'Senha deve ter no mínimo 6 caracteres.'
          break;

          case 'auth/email-already-in-use':
          message= 'O endereço de e-mail já está sendo usado por outra conta'
          break;

          case 'auth/invalid-email':
          message= 'O endereço de email está mal formatado.'
          break;

          case 'auth/argument-error':
          message= 'O campo de email e senha devem ser preencidos.'
          break;
      }
      
      console.error(error);


      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    return this.loading.present();
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
