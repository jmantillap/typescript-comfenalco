(()=>{
    //parametros  (? opcional) 
    const miFuncion = (nombre:string, momento?: string, objeto:string="batiseñal"):string => {
         if(momento){
             console.log(`${nombre} activo la ${objeto} en el ${momento} ` )
         }else{
             console.log(`${nombre} activo la ${objeto} ` )
         }
         return "";
    }
 
    miFuncion("Javier","prueba",'alarma');
    miFuncion("Javier 1","prueba");
    miFuncion("Javier 4");
 
 })();