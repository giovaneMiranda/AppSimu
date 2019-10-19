import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdemService } from '../services/ordem.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/auth';


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
  private userid
  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private OrdemService: OrdemService,private afa: AngularFireAuth) {


   
      if (user) this.afs.collection('User')
        .doc(user.uid)
        .valueChanges()
        .subscribe(docUser => {
          this.savemoney(docUser)

        });
   
  
    this.ionViewDidLoad()
    
  }

  ionViewDidLoad() {
    this.authService.getAuth().onAuthStateChanged(user => {
       this.saveId(user)
    }
    )

    
  }
  ngOnInit() {


  }


  savemoney(doc) {
    this.dataUser = doc
  }

  saveId(user){
     this.userid=user.uid
     console.log(user.uid)
     return this.userid
    
  }

}

