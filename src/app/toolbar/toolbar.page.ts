import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarPage implements OnInit {
  public dataUser: Userbd

  constructor(private authService: AuthService,
    private afs: AngularFirestore, ) {
    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {

        this.afs.collection('User')
          .doc(user.uid)
          .valueChanges()
          .subscribe(docUser => {
            this.dataUser = docUser;

          });
      }
    }
    )
  }

  ngOnInit() {
  }

}
