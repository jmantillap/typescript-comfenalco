//tsc app.ts --watch -t es6
(()=>{

    //Decoradores de clases
    const DecoradorParametros =(param1:number,param2:string)=>{
        return function(target: Function) {
            console.log(`decorador de parametros`)
        }
    }

    // @DecoradorParametros(1,'2')
    // class Decorador{
        
    // }

})();