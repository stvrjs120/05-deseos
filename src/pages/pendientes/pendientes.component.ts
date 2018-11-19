import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesPage implements OnInit {
    
    constructor(public _deseosService: DeseosService, 
        private navCtrl: NavController) { }

    ngOnInit(): void { }

    listaSeleccionada(lista: Lista) {
        console.log(lista);
    }

    agregarLista() {
        this.navCtrl.push(AgregarPage);
    }
}
