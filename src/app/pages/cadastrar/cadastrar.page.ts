import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  cadastroForm: any;
  items: Observable<any[]>;

  constructor(
    public fb: FormBuilder,
    public dbFire: AngularFireDatabase, ) {
    this.items = dbFire.list('carros').valueChanges();
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      datafabricacao: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required)
    });
  }

  save() {
    var attrs = {
      nome: this.cadastroForm.controls.nome.value,
      marca: this.cadastroForm.controls.marca.value,
      datafabricacao: this.cadastroForm.controls.datafabricacao.value,
      preco: this.cadastroForm.controls.preco.value,
    }
    const itemsRef = this.dbFire.list('carros/');
    itemsRef.push(attrs);
  }

}
