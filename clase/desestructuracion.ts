//tsc app.ts --watch -t es6
(()=>{

    //desestructuracion
    
    interface Avenger{
        nombre: string,
        mision: string
    }
    
    const extraer= ({nombre,mision}:Avenger)=>{
        console.log(nombre,mision);
    }
    
    const extraer1= ({nombre}:Avenger)=>{
        console.log(nombre);
    }
    
    const avenger:Avenger={
        nombre:'batman',
        mision:'mision1'
    }
    
    extraer(avenger);
    extraer1(avenger);
    
    const avengers:string[] =['thor','ironman','spiderman']
    
    const [,iroman,spiderman]= avengers;
    
    console.log(iroman,spiderman);
    
    const extraer2=([thor,iroman,spiderman]:string[])=>{
        console.log(thor,iroman,spiderman);
    }
    
    extraer2(avengers);
    
    
    
        
    })();