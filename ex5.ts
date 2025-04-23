abstract class Shape{
    abstract area():any;
    describe():void{
        console.log("This is shape");
    }
}

class Rectangle extends Shape{
    w:number=0;
    h:number=0;
    constructor(w:number,h:number){
        super();
        this.w=w;
        this.h=h;
    }
    area():any {
        return this.w*this.h;
    }
}
let rec=new Rectangle(10,5);
console.log(rec.area());
rec.describe();