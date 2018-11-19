import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarPage implements OnInit {
    
    constructor(public _deseosService: DeseosService) { }

    ngOnInit(): void { }

}
