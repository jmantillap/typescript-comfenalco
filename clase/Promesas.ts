//tsc app.ts --watch -t es6
(()=>{

    const promesa=new Promise((resolve, reject)=>{        
        try {            
            resolve(1);
        } catch (error) {
            reject(error);
        }
    });    

    promesa
        .then(numero=>console.log(numero))
        .catch(error=>console.warn(error));    
    
    let dineroActual=3000;
    
    const retirarDinero=(montoRetirar:number): Promise<number> =>{
        return new Promise<number>((resolve, reject) =>{
            if(montoRetirar>dineroActual){
                reject('No hay fondos');
            }else{
                dineroActual-=montoRetirar;
                resolve(dineroActual);
            }
        })
    }

     retirarDinero(2500)
         .then(montoActual=>console.log(`Me queda ${montoActual}`))
         .catch(mensaje=>console.warn(mensaje));

    /////
    let item1, item2;

    const loadItem=(id:number): Promise<{id:number}> =>{
        return new Promise((resolve, reject) =>{
            console.log('item:',id);
            setTimeout(()=>{
                resolve({id:id})
            },2000);
        });
    }

    //promesas anidadas
    loadItem(1)
        .then((res)=>{
            item1= res;
            return loadItem(2);
        })
        .then((res)=>{
            item2= res;
            console.log('done');
        });

    //promesas en paralelo    
     Promise.all([loadItem(1),loadItem(2)])    
        .then((res)=>{
            [item1,item2]= res;            
            console.log('done');
        });


    //async y await
    
    const functionPromesa= (x:any) => {
        return new Promise(resolve=>{
            setTimeout(() => {
                resolve(x);
            }, 2000);
        });
    };

    const funcionAsyn= async() => {
        var x= await functionPromesa(10);
        var y= await functionPromesa(10);
        var z= await functionPromesa(10);
        console.log(x)
    };

    funcionAsyn();
    console.log('Ambiente ejecucion');

    //callback

    const asincrona =(lista,callback)=>{
        if(lista instanceof Array && lista.length>0){
            let suma= lista.map(valor=>Math.pow(valor,2));
            return callback(null,suma);
        }else{
            let error= new Error("Error en ejecucion 1 .....");
            return callback(error,null);
        }
    }

    asincrona([2,3,4,5],(error,result)=>(error) ? console.log(error): console.log(result));
    asincrona([],(error,result)=>(error) ? console.log(error): console.log(result));
    

    const functionPromesa1= (lista:any) => {
        return new Promise((resolve, reject)=>{            
            if(lista instanceof Array && lista.length > 0){
                let suma= lista.map(valor=>Math.pow(valor,2));
                return resolve(suma);
            }else{
                let error= new Error("Error en ejecucion promesa 1 .....");
                return reject(error);                
                //return reject('error promesa 1');
            }            
        });
    };
    const funcionAsyn1= async() => {
        var x= await functionPromesa1([2,3,4,5]);
        var y= await functionPromesa1(null);        
        console.log(x)
        console.log(y)
    };
    funcionAsyn1();
    console.log('Ambiente ejecucion 1');
    

    const asincrona1 = (lista: number[], callback: Function): Promise<Function> => {

        return new Promise((resolve, reject) => {
           if (lista instanceof Array && lista.length > 0) {
              let suma = lista.map(valor => Math.pow(valor, 2))
              resolve(callback(null, suma));
           } else {
              let error = new Error("Error de ejecución");
              resolve(callback(error, null));
           }
        }); 
     }
              
    
})();