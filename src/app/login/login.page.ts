import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
private userId:String 
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
    private afs: AngularFirestore

  ) { 
    
  }

  ngOnInit() {
  }

  async login() {
    await this.presentLoading();

    try {
      await  this.authService.login(this.userLogin);

    } catch (error) {
      let message: string;
      console.error(error);


      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }

  }

  async register() {
    await this.presentLoading();
    try {
     const newUSer = await this.authService.register(this.userRegister);

     const newUserObject= Object.assign({},this.userRegister);

     newUserObject.dinheiro=10000; 
     delete newUserObject.email;
     delete newUserObject.password;
     await this.afs.collection('User').doc(newUSer.user.uid).set(newUserObject);
    } catch (error) {
      let message: string;

      switch (error.code) {
        case 'auth/weak-password':
          message = 'Senha deve ter no mínimo 6 caracteres.'
          break;

        case 'auth/email-already-in-use':
          message = 'O endereço de e-mail já está sendo usado por outra conta'
          break;

        case 'auth/invalid-email':
          message = 'O endereço de email está mal formatado.'
          break;

        case 'auth/argument-error':
          message = 'O campo de email e senha devem ser preencidos.'
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
