class Persion{
    firstName:string="";
    lastName:string="";
    age:number=0;
    intro(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`); 
    }
}

let p=new Persion();
p.firstName="Ayas";
p.lastName="Nouman"
p.age=25;
p.intro()