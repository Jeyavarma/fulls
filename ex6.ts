interface Readable{
    read():void;
}
interface Writable{
    write():void;
}

class Book implements Readable,Writable{
    book:string;
    readable:boolean;
    writable:boolean;
    constructor(book:string,read:boolean,write:boolean){
        this.book=book;
        this.readable=read;
        this.writable=write;
    }
    read() {
        console.log(`The book is ${this.readable?"Readable":"Not Readable"}`);
    }
    write() {
        console.log(`The book is ${this.writable?"Writable":"Not Writable"}`);
    }
}

let book=new Book("Full Stack",true,false);
book.read();
book.write();