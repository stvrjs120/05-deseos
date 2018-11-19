import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    item: ListaItem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        
        this.terminada = false;
        this.creadaEn = new Date();
        this.item = [];

        this.id = new Date().getTime();
    }
}