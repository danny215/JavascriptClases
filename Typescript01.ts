console.log("hola mundo");
let hola='Hola';
const adios='adios';
hola='adios';
//adios='asdf'; no permite reasignar nuevos valores si es constante

let nombre:string='Danny';
let edad:number=28.23;
let casado:boolean = false;
let fechaNacimiento:Date = new Date();

class Usuario{
    nombre: string; //por defecto es un public
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean, edad: number){
        this.nombre=nombre;
        this.casado=casado;
        this.edad=edad;

    }
}

let danny: Usuario = new Usuario(nombre, casado, edad);

console.log(Usuario);

class UsuarioDos{
    constructor(public nombre:string,
                private _casado: boolean,
                protected _edad: number){

    }

    get casado(){
        return this._casado;
    }

    set casado(casado:boolean){
        this._casado=casado;
    }
    imprimirUsuario(saludo:string):string{
        return  ${saludo}. Mi nombre es ${this.nombre}, estoy
        casado
    }
}


let danny2 = new UsuarioDos