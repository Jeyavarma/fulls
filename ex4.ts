interface PersonDetails{
    firstName: string;
    lastName: string;
    getFullName():string;
}
class User implements PersonDetails{
    firstName: string="Ravi";
    lastName: string="Varman";
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

class Role extends User{
    roleName:string="Developer"
    getRole():string{
        return this.roleName;
    }
}

let r=new Role();
console.log(r.getFullName());
console.log(r.getRole());

