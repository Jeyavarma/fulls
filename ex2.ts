interface Car{
    make:string;
    model:string;
    year:number;
    drive():void;
}

class Honda implements Car{
    make:string="";
    model: string="";
    year: number=0;
    drive(): void {
        console.log(`The ${this.make} ${this.model} is driving.`);
    }
}

let h=new Honda();
h.make="German";
h.model="Seadon"
h.year=2025;
h.drive();