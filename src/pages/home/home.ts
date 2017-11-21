import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nomeUsu:String = this.getUsuario();

  constructor(public navCtrl: NavController) {

  }
  
  public getUsuario(): String {
      return "Fábio Valle"
  }
}
