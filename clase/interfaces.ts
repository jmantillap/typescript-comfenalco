(()=>{
    
    interface Amigos{
        nombre:string;        
    }


    //Interfaces
    interface Xmen{
        nombre:string;
        edad:number;
        poder: string;
        otro?: string,
        amigos?:Amigos[],
    }

    let objeto={
        nombre:'',
        edad:15,
        poder: 'Rayos',
        otro: 'Rayos 1',
    }

    const miFuncion=(xmen:Xmen) =>{
        console.log(xmen.poder);
    }

    let guepardo:Xmen={
        nombre: 'javier',
        edad:20,
        poder:'titanio'
    }

    miFuncion(guepardo);

    // ejercicio
    interface Avenger{
        nombre:string,
        mision:string,
    };

    let avenger1:Avenger={  
        nombre:'avenger 1',
        mision:'mision 1'
    };

    let avenger2:Avenger={
        nombre:'avenger 2',
        mision:'mision 2'
    };

    let vengadores1:Avenger[] =[avenger1,avenger2];

    let vengadores:Avenger[] =[
        { 
            nombre:'avenger 3',
            mision:'mision 3'
        },
        {
            nombre:'avenger 4',
            mision:'mision 4'
        },   
    ]


    const miFuncion2=(avengers:Avenger[])=>{
        for (let av of avengers){
            console.log(`nombre es ${av.nombre} y la mision es ${av.mision}`);
        }
        avengers.forEach(element => {
            console.log(`nombre es ${element.nombre} y la mision es ${element.mision}`);
        });

        console.log(`map`);
        
        avengers.map((element,i)=>{
            console.log(`nombre es ${element.nombre} y la mision es ${element.mision}`);
        })

        avengers.filter((x,i)=>{x.nombre=='avenger 3'})

        //avengers.find((x,i)=>x.nombre=='avenger 3');

        //avengers.find(x=> x.nombre =='avenger 3');


    }

    miFuncion2(vengadores1);
    console.log(`-------------`);
    miFuncion2(vengadores);

})();