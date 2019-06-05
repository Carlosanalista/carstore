import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { EditarPage } from '../editar/editar.page';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss']
})
export class ListarPage implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  carroList: Array<any> = [];

  constructor(
    public dbFire: AngularFireDatabase,
    public toastController: ToastController,
    public modalController: ModalController
  ) {
    this.itemsRef = dbFire.list('carros');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {
    this.items.subscribe(items => {
      this.carroList = items;
    });
  }

  removeItem(carro) {
    this.itemsRef.remove(carro.key);
  }

  async openEdit(carro) {
    const modal = await this.modalController.create({
      component: EditarPage,
      componentProps: {
        carro
      }
    });

    modal.onDidDismiss().then(resp => {
      if (resp) {
        this.toastMsg('Carro salvo com sucesso');
      }
    });

    return await modal.present();
  }

  async toastMsg(msg) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: 'bottom',
      duration: 4000,
      color: 'primary',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
