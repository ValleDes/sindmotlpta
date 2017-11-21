import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  
  public getServicoBarbeiro(usuario:String): String {
      if (usuario == "Fabio Valle") {
        return "ok"
      } else {
        return "nok"
      }
  }

 }
