import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class OrdemService {

   userid: string

  constructor(private afs: AngularFirestore,
    private authService: AuthService,
    private afa: AngularFireAuth) {
      this.afa.authState.subscribe(user=>{
        this.userid=user.uid
      })


  }


  getOrdem() {
/* console.log(this.userid)
    return this.afs.collection('User')
      .doc(this.userid).collection<OrdemCompra>('OrdemCompra')
      .snapshotChanges().pipe(map(actions => {
       return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

return {id, ...data}
        });
      }
      )) */

  }


}











