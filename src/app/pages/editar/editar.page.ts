import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss']
})
export class EditarPage implements OnInit {
  editarForm: any;
  itemsRef: AngularFireList<any>;

  @Input() carro;
  constructor(
    public dbFire: AngularFireDatabase,
    public fb: FormBuilder,
    public modalController: ModalController
  ) {
    this.itemsRef = dbFire.list('carros');
  }

  ngOnInit() {
    this.editarForm = this.fb.group({
      nome: new FormControl(this.carro.nome, Validators.required),
      marca: new FormControl(this.carro.marca, Validators.required),
      datafabricacao: new FormControl(this.carro.datafabricacao, Validators.required),
      preco: new FormControl(this.carro.preco, Validators.required)
    });
  }

  save() {
    let resp = {
      nome: this.editarForm.controls.nome.value,
      marca: this.editarForm.controls.marca.value,
      datafabricacao: this.editarForm.controls.datafabricacao.value,
      preco: this.editarForm.controls.preco.value
    };

    this.itemsRef.update(this.carro.key, resp);

    this.modalController.dismiss({ resp });
  }
}
