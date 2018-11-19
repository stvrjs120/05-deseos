import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarPage implements OnInit {
    
    lista: Lista;
    nombreItem: string = '';

    constructor(public _deseosService: DeseosService,
                private _navParams: NavParams) { 
        const titulo = this._navParams.get('titulo');

        if (this._navParams.get('lista')) {
            this.lista = this._navParams.get('lista');
        }
        else {
            this.lista = new Lista(titulo);
            this._deseosService.agregarLista(this.lista);
        }
    }

    ngOnInit(): void { }

    agregaItem() {
        if (this.nombreItem.length === 0 ) {
            return;
        }

        const nuevoItem = new ListaItem(this.nombreItem);
        
        this.lista.items.push(nuevoItem);
        this._deseosService.guardarStorage();
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;

        const pendientes = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length;

        if ( pendientes === 0 ) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }
        else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this._deseosService.guardarStorage();
    }

    borrar(idx: number) {
        this.lista.items.splice(idx, 1);
        this._deseosService.guardarStorage();
    }
}
