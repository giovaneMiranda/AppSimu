
import { Component, NgZone } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Userbd } from '../interfaces/userbd';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToolbarPage } from '../toolbar/toolbar.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;

  toolbar: ToolbarPage


  constructor(private menu: MenuController,
    private authService: AuthService,
    private afs: AngularFirestore,
    private modalController: ModalController,
    private zone: NgZone,
    private router: Router) {
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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  savemoney(doc) {
    this.dataUser = doc;
  }

  jogarButton() {
    this.zone.runOutsideAngular(() => {
      this.router.navigate(['/toolbar']);
    });
  }
  aprenderButton(){
    this.zone.runOutsideAngular(() => {
      this.router.navigate(['/aprender']);
    });

  }
  configuracaoButton(){
    this.zone.runOutsideAngular(() => {
      this.router.navigate(['/configuracao']);
    });
  }
}

