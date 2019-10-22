import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdemService } from '../services/ordem.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { map } from 'rxjs/operators';
import { OrdemVenda } from '../interfaces/ordem-venda';


@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit {
  //userData: AngularFireObject<any>
  public dataUser: Userbd

  private ordensCompra = new Array<OrdemCompra>();
  private ordensCompraSub: Subscription

  private ordensVenda = new Array<OrdemVenda>();
  private ordensVendaSub: Subscription
  private userId;

  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private OrdemService: OrdemService, private afa: AngularFireAuth) {



    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;

        this.ordensCompraSub = this.OrdemService.getOrdemCompra(user).subscribe(data => {
          this.ordensCompra = data;
        })


        this.ordensVendaSub = this.OrdemService.getOrdemVenda(user).subscribe(data => {
          this.ordensVenda = data;

        })


      }

    });


  }

  ngOnInit() {

  }

  ionViewDidLeave() {
    this.ordensCompraSub.unsubscribe();
    this.ordensVendaSub.unsubscribe();
  }
  async savemoney(doc) {
    this.dataUser = doc
  }

  async deleteOrdemVenda(id: string, userid) {
    this.OrdemService.deleteOrdemVenda(id, userid);
  }


  async deleteOrdemCompra(id: string, userid) {
    this.OrdemService.deleteOrdemCompra(id, userid);
  }
}

