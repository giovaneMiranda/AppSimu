import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Acao } from '../interfaces/acao';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private afs: AngularFirestore,
    private authService: AuthService,
    private afa: AngularFireAuth) { }


  getAcao(userid) {
    return this.afs.collection('User')
      .doc(userid.uid).collection<Acao>('CarteiraAcao')
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
