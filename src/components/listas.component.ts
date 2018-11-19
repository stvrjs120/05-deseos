import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.services';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from '../models/lista.model';


@Component({
    selector: 'app-listas',
    templateUrl: './listas.component.html'
})
export class ListasComponent implements OnInit {

    @Input() terminada: boolean = false;

    constructor(public _deseosService: DeseosService,
                private _navCtrl: NavController,
                private _alertCtrl: AlertController) { }

    ngOnInit(): void { }

    listaSeleccionada(lista: Lista) {
        this._navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this._deseosService.borrarLista(lista);
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {
        slidingItem.close();
        
        const alerta = this._alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                handler: data => {
                    if( data.titulo.length === 0 ) {
                        return;
                    }

                    lista.titulo = data.titulo;
                    this._deseosService.guardarStorage();
                }
            }]
        });

        alerta.present();
    }
}
