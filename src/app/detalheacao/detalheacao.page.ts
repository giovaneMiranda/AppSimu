import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../detalheacao/modal/modal.page'


@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})

export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;
  value = 0;

  constructor(private authService: AuthService, 
              private afs: AngularFirestore,
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

  async compra() {
     const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: '.my-custom-modal-css',
      componentProps:{
        costum_id: this.value
      }
    });
    modal.present(); 
  }

}
