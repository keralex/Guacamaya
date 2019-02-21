import { Time } from '@angular/common';

export class ProgramaVuelo {
    id?:number;
    posee_escala:boolean;

    fecha_salida?:Date;
    fecha_llegada?:Date;
    hora_salida?;
    hora_llegada?;
    origen:string;
    destino:string;



}
