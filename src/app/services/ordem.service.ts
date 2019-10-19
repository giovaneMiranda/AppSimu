import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  private userid: string

  constructor(private afs: AngularFirestore,
    private authService: AuthService) {



  }
  getUser() {
    this.authService.getAuth().onAuthStateChanged(user => {
      return user.uid
    })
  }

  getOrdem() {

    

  }


}











