//tsc app.ts --watch -t es6
(()=>{

    class Xmen {
        constructor(public nombre:string,public edad:number,public nombreReal?:string) {
            
        }
    }

    const antMan=new Xmen('nombre',10);
    //antMan.edad;

    class Persona {
        nombre:string;
        constructor(nombre:string) {
            this.nombre=nombre;
        }
        
        decirNombre(){
            console.log(this.nombre.toUpperCase());
        }
    }

    class Hijo extends Persona{
        saludar() {
            console.log("Hola Mundo");
        }
    }

    const persona=new Persona('Javier mantilla');
    persona.decirNombre();

    const hijo=new Hijo('JAVIER MANTILLA');
    hijo.decirNombre();
    hijo.saludar();
   

    class Operaciones {
        x:number;
        y:number;
        private resultado:number;

        constructor(x:number,y:number) {
            this.x=x; this.y=y
        }

        sumar(){
            //const resultado=this.x+this.y;
            this.resultado=this.x+this.y;
            console.log(this.x+this.y);
        }

        resta(){
            this.resultado=this.x-this.y;
            console.log(this.x-this.y);
        }

        dividir(){
            this.resultado=this.x/this.y;
            console.log(this.x/this.y);
        }

        multiplicar(){
            this.resultado=this.x*this.y;
            console.log(this.x*this.y);
        }

        getResult(){
            console.log(`El valor de la variable resultado es ${this.resultado}`)
        }
    }

    let operacion=new Operaciones(10,5);    
    operacion.sumar();
    operacion.resta();
    operacion.dividir();
    operacion.multiplicar();
    operacion.getResult();

    operacion.x=100;
    operacion.y=30;
    operacion.sumar();
    operacion.resta();
    operacion.dividir();
    operacion.multiplicar();
    operacion.getResult();


    class Numero{
        static tipo:string="HOLA_MUNDO";
        static mayor(n1:number,n2:number){
            if(n1>n2){
                return n1;
            }else{
                return n1;
            }
        }
    }

    let mayor=Numero.mayor(20,30);
    console.log(mayor);
    console.log(Numero.tipo);

    //Acceso,           public ,private, protected 
    //Instancia Clase,  si          no      no
    //clases            si          si      si
    //clase hija        si          no      si

    class Foobase{
        public x:number;
        private y:number;
        protected z:number;
    }

    var foo =new Foobase();
    foo.x;
    //foo.y;  error
    //foo.z;  error

    class FooChild extends Foobase{
        constructor(){
            super();
            this.x;
            //this.y; //error
            //this.z; //error
        }
    }

    //herencia.
    class Animal{
        name:string;
        constructor(name:string){
            this.name=name;
        }
        move(distanciaMetros:number=0){
            console.log(`${this.name} se mueve ${distanciaMetros}`)
        }
    }

    class Serpiente extends Animal {

        constructor(name:string){
            super(name);
        }
        move(distanciaMetros:number=5){
            super.move(distanciaMetros)
        }
    }
    class Perro extends Animal {

        constructor(name:string){
            super(name);
        }
        move(distanciaMetros:number=8){
            super.move(distanciaMetros)
        }
    }

    let array:Animal[]=[new Serpiente('Cascabel'),new Perro('pastor'), new Animal('Animal padre')];
    console.log(array);

    interface a{
        a:number;
    }
    interface b extends a,c{
        b:number;
    }
    interface c{
        c:number;
    }

    class Test implements b {
        b:number;
        a:number;
        c:number;
        constructor(b:number,a:number,c:number){
            this.b=b;
            this.a=a;
            this.c=c;            
        }
    }
    console.log('------------EJERCICIO---------------------')

    interface Forma{
        calcularArea():void;        
    }
    class Figura {
        protected resultado:number=0;  
        private nombreFigura:string='';      
        constructor(figura:string){
            this.nombreFigura=figura;
        }
        verResultado():void{
            console.log(`El area de ${this.nombreFigura} es ${this.resultado}`)
        }        
        // calcularArea(){         //     console.log('no hace nada');        // }
    }
    class Cuadrado extends Figura implements Forma {
        private l1:number;        
        constructor(l1:number){
            super('Cuadrado');     this.l1=l1
        }
        calcularArea():void{
            this.resultado=this.l1*this.l1;
            super.verResultado();
        }
    }
    class Triangulo extends Figura implements Forma {
        private base:number = 0;        
        private altura:number = 0;        
        constructor(base:number, altura:number){
            super('triangulo');            
            this.altura=altura;    this.base=base
        }
        calcularArea():void{
            this.resultado=(this.base*this.altura)/2;
            super.verResultado()
        }
    }

    let cuadrado:Cuadrado =new Cuadrado(5);    
    cuadrado.calcularArea();

    let triangulo:Triangulo = new Triangulo(5,6);
    triangulo.calcularArea();


    //IIFE inmediately-invoked Function Expression
    


})();