var saludo:string="Bienvenidos a Argentina Programa";
console.log(saludo);

function cambiarAcercaDe()
{
    let acercaDeInput:string=prompt("Ingrese el nuevo valor de AcercaDe") as string;
    (document.getElementById("acercaDe") as HTMLParagraphElement).innerHTML=acercaDeInput;
}

/*var persona={fullName:"Manuel Sadosky", 
position:"Desarrollador Frontend", ubication:"CABA"};*/

class  Persona{
    private fullName:string;
    position:string;
    ubication:string;

    constructor(name:string, position:string, ubication:string)
    {
        this.fullName=name;
        this.position=position;
        this.ubication=ubication;
    }

    saludar()
    {
        console.log("Bienvenido " + this.fullName);
    }

    get FullName():string{
        return this.fullName;
    }

    set FullName(name:string){
        this.fullName=name;
    }
}

var persona:Persona=new Persona("Manuel Andrés Sadosky","Desarrollador Full Stack", "CABA");
persona.FullName="Andrés";
persona.saludar();

(document.getElementById("nombre") as HTMLParagraphElement).innerHTML=persona.FullName;
(document.getElementById("perfil") as HTMLParagraphElement).innerHTML=persona.position;
(document.getElementById("residencia") as HTMLParagraphElement).innerHTML=persona.ubication;