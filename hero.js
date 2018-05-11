var hero = [{ id: 1 ,lele: "puto" },{id: 2 , marciana: ""},{id:3 , mayus: ""}]

var newHero = {};

var onload = () =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET',"data.json",true),

    xhr.onload = ()=>{
            if(this.status == 200){
                console.log(JSON.parse(this.responseText))
        }

    };

    xhr.send();

};

onload();


const borrarHeroe = ()=>{
    for (let i = 0; i < hero.length; i++) {
        const element = hero[i];

        element.forEach((nombre) => {
            
        });
        
    }
    
};

const cargando = ()=>{
    var nombre = document.getElementById('nombre').value;
    var id = document.getElementById('id').value;
    var alias = document.getElementById('alias').value;
    var bio = document.getElementById('bio').value;
    var enemigos = document.getElementById('enemigos').value;
    var universe = document.getElementById('universe').value;

    const agregar = (id, nombre, alias, bio, enemigos , universe)=>{
        newHero.id = id;
        newHero.nombre = nombre;   
        newHero.alias=alias;
        newHero.bio=bio;
        newHero.enemigos=enemigos; 
        newHero.universe=universe;
        if(id === "" || nombre === "" || alias === "" || bio === "" || enemigos === "" || universe === ""){
            alert('Tu Heroe no esta completo!!')
            return false;
        }

         
    };    
    return agregar(id,nombre,alias,bio,enemigos,universe);
    
};

const masHeroes = (hero , newH)=>{
        if(hero.indexOf(newH) === -1){
            hero.push(newH);
        } else{
            alert('Ese heroe ya existe!')
        }
    
    };

//masHeroes(hero, newHero);
/*const masHeroes = (hero , newHero)=>{
    if(hero.indexOf(newHero) === -1){
        hero.push(newHero);
    } else{
        alert('Ese heroe ya existe!')
    }

};

masHeroes(hero , "arg");


const menosHeroes = (hero , badHero)=>{
    if(hero.indexOf(badHero) === -1){
        console.log('you sucks!');

    } else{
        
        hero.splice(hero.indexOf(badHero),1);
    }
}


menosHeroes(hero , );*/


