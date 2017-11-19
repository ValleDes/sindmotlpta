import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
    'Sede Lençois Paulista',
    'Subsede Pederneiras',
    'Subsede Areiopolis',
    'Subsede Macatuba',
    'Diretoria - Pintor',
    'Diretor Financeiro - Jose Luiz Marrega',
    'Boletos / Depto Pessoal - Darlen',
    'Recepção - Ana Paula e Taciana'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController) {

  }

}
