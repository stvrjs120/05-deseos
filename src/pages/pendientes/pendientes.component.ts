import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesPage implements OnInit {
    
    constructor(public _deseosService: DeseosService, 
        private _navCtrl: NavController,
        private _alertCtrl: AlertController) { }

    ngOnInit(): void { }

    

    agregarLista() {

        const alerta = this._alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                    if( data.titulo.length === 0 ) {
                        return;
                    }

                    this._navCtrl.push(AgregarPage, {
                        titulo: data.titulo
                    });
                }
            }]
        });

        alerta.present();
    }
}
