import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-materias-profe',
  templateUrl: './materias-profe.component.html',
  styleUrls: ['./materias-profe.component.css']
})
export class MateriasProfeComponent implements OnInit {

  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  listaMaterias:Observable<any[]>;
  lista: Array<any> = [];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { 
    let email = sessionStorage.getItem("email");
    this.coleccionTipadaFirebase= this.db.collection<any>('materiasAdmin', ref => ref.where("emailProfesor", "==", email)); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.listaMaterias=this.coleccionTipadaFirebase.valueChanges();
    this.listaMaterias.subscribe(x => {
        this.lista = x
        
    })


  }

  ngOnInit() {
  }

}
