class Animal{
    name: string="Dog";
    sound: string="Bark";
    makeSound ():void{
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
class  Dog extends Animal{
    makeSound(): void {
        console.log("Woof!");
    }
}

let dog=new Dog();
dog.makeSound();