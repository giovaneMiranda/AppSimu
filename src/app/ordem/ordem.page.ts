import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit {
  //userData: AngularFireObject<any>
  public dataUser: Userbd
  constructor(private authService: AuthService,
    private afDataBase: AngularFireDatabase,
    private afs: AngularFirestore
  ) {

  }


  ngOnInit() {
    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) this.afs.collection('User')
        .doc(user.uid)
        .valueChanges()
        .subscribe(docUser => {
          this.savemoney(docUser)

        });


    }
    )
  }


  savemoney(doc) {
    this.dataUser = doc
  }

}

