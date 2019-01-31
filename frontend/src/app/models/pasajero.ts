export class Pasajero {
    constructor(customer_id=0, first_name=''){
        this.customer_id =customer_id;
        this.first_name=first_name;
    }
    customer_id?:number;
    first_name?:string;
}
