(()=>{

    const miFuncion=function() {
        return '';
    }

    const miFuncionFlecha=()=>{
        return '';
    }

    const sumar=(a:number,b:number)=>a+b;

    const persona={
        nombre:'Javier',
        obtenerNombre:()=>{
            setTimeout(()=>{
                console.log(persona.nombre);
            },3000)
        }
    }

    const persona2={
        nombre:'Javier',
        obtenerNombre:function(){
            setTimeout(function(){
                console.log(persona2.nombre);
            },5000)
        }
    }
    

    persona.obtenerNombre();
    persona2.obtenerNombre();


})()