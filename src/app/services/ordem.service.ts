import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { OrdemVenda } from '../interfaces/ordem-venda';
@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  userid: string

  constructor(private afs: AngularFirestore,
    private authService: AuthService,
    private afa: AngularFireAuth) {



  }


  getOrdemCompra(userid) {

    return this.afs.collection('User')
      .doc(userid.uid).collection<OrdemCompra>('OrdemCompra')
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data }
        });
      }
      ))

  }


  getOrdemVenda(userid) {
    return this.afs.collection('User')
      .doc(userid.uid).collection<OrdemVenda>('OrdemVenda')
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data }
        });
      }
      ))
  }


}











