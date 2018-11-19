import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';


@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosPage implements OnInit {
    constructor(public _deseosService: DeseosService) { }

    ngOnInit(): void { }

    listaSeleccionada(lista: Lista) {
        console.log(lista);
    }
}
