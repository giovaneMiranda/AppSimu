import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Acao } from '../interfaces/acao';
import { Subscription } from 'rxjs';
import { CarteiraService } from '../services/carteira.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.page.html',
  styleUrls: ['./carteira.page.scss'],
})
export class CarteiraPage implements OnInit {
  private acao = new Array<Acao>();
  private acaoSub: Subscription
  private userId;

  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private carteiraService: CarteiraService) {

    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;

        this.acaoSub = this.carteiraService.getAcao(user).subscribe(data => {
          this.acao = data;
          console.log(this.acao)
        })
      }
    })



  }
  ngOnInit() {
  }
}