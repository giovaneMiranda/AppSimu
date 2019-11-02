import { Component, OnInit } from '@angular/core';
import { Acao } from '../interfaces/acao';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { CarteiraService } from '../services/carteira.service';
import { LoadingController, ToastController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultaacao',
  templateUrl: './consultaacao.page.html',
  styleUrls: ['./consultaacao.page.scss'],
})
export class ConsultaacaoPage implements OnInit {
  private acaoList = new Array<Acao>();
  private acaoSub: Subscription
  private userId;
  private loading: any;

  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private carteiraService: CarteiraService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router) {

    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;



        this.acaoSub = this.carteiraService.getAcao(user).subscribe(data => {
          this.acaoList = data;

        })
      }
    })



  }

  ngOnInit() {
  }

  async getDetalheAcao(acao) {
    await this.presentLoading();
    try {
      this.router.navigate(['/detalheacao', acao]);
    }
    finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    return this.loading.present();
  }

}
