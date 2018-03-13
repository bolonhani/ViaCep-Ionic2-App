import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViacepProvider } from '../../providers/viaCepProvider/viaCep';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private cep;
  private endereco: any = {};

  constructor(public navCtrl: NavController, public viaCep: ViacepProvider) {

  }

  getEndereco() {
    this.viaCep.callService(this.cep)
      .subscribe(
      data => {
        this.endereco = data;
        console.log(data);
      }
      );
  }

}
