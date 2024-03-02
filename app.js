// Récupération des infos stockées dans escape-game.json
fetch("./escape-game.json")
// les retourne en données  json exploitables
.then(ret=>{
    return ret.json();
})
// les utilises dans nos fonctions
.then(data=>{
    utiliseData(data);
})

// fonction qui lance chaque fonctions crées indépendemment
function utiliseData(data){
    infosEntreprise(data.entreprise);
    creationCartesActivites(data.entreprise.activites);
    remplirButton(data.entreprise);
    avantagesClients(data.entreprise.avantagesClients);
    avisClients(data.entreprise.temoignages)
}

// fonction qui alimente les infos de la section entreprise
function infosEntreprise(e){
    // récuprèe la zone à modifier
    let entreprise = document.querySelector(".entreprise-container");
    // y ajoute du code html avec les infos récupéré
    entreprise.innerHTML = `<div class="picto picto-eye"></div>
    <h1 class="bold color-white w100 text-center mt32">${e.nomCommercial}</h1>
    <p class="color-white size-20 text-center mt32">${e.phraseAccroche}</p>
    <div class="flex justify-center w100 mt32">
        <button title="lien vers les activitées" class="btn bold">texte</button>
    </div>
</div>`;
}

// fonction qui crée les cartes activités
function creationCartesActivites(e){
    // récuprèe la zone à modifier
    let activites = document.querySelector(".container-activite");
    // pour chaque carte du tableau
    e.forEach(element=>{    
        // on cré une carte avec les infos
        activites.innerHTML += `<article class="card-activite bg-white">
        <div class="card-image"><img src="./assets/${element.image}"alt="photo: ${element.image}"></div>
            <div class="description-activite w100">
                <h3 class="bold">${element.nom}</h3>
                <p class="size-16 w100">${element.description}</p>
                <button title="Réserver cette activitée" class="btn mt32 bold mt32">texte</button>
            </div>
        </article>`;
    })
}

// fonction remplir les boutons
function remplirButton(e){
    // récupère tout les boutons
    let buttons = document.querySelectorAll("button");
    // pour chaque boutons
    buttons.forEach(button=>{
        // je modifie son texte
        button.innerText = `${e.texteAppelAction}`;
    })
}

// fonction qui crée les cartes avantages
function avantagesClients(e){
    // récuprèe la zone à modifier
    let container = document.querySelector(".container-avantages");
    // pour chaque carte du tableau
    e.forEach(element => {
        // on cré une carte avec les infos
        container.innerHTML += `<div class="card-avantages">
        <div class="picto mlr-auto picto-avantage"><img src="./assets/${element.picto}" alt=""></div>
        <p class="color-jaune size-18 mt32">${element.texte}</p>
    </div>`;
        
    });
}

// fonction qui crée les cartes avis
function avisClients(e){
    // récuprèe la zone à modifier
    let container = document.querySelector(".container-avis")
    // pour chaque carte du tableau
    e.forEach(element=>{
        //appel fonction nbre d'étoile
        let note = noteAvis(element.note)
        // // on cré une carte avec les infos
        container.innerHTML += `<article class="card-avis bg-white mt32">
        <div class="avis-titre flex">
            <div class="img-avis photo-client"><img src="./assets/${element.photo}" alt="photo: ${element.photo}"></div>
            <div>
                <h4 class="bold">${element.prenom}</h4>
                <h3 class="">${element.typeExperience}</h3>
                <p class="size-18 etoiles color-jaune">${note}</p>
            </div>
        </div>
        <p class="size-16 mt16">${element.commentaire}</p>
    </article>`;
    })
}

//fonction qui permet de transformer la note d'un chiffre a un nbre d'étoile
function noteAvis(e){
    // création variable note
    let note = e;
    //si note = 0 alors on retourne 5 étoile vide sinon meme principe pour chaque note
    if(note===0){
        note = "☆☆☆☆☆";
        return note;
    }else if(note===1){
        note = "★☆☆☆☆";
        return note;
    }else if(note===2){
        note = "★★☆☆☆";
        return note;
    }else if(note===3){
        note = "★★★☆☆";
        return note;
    }else if(note===4){
        note = "★★★★☆";
        return note;
    }else if(note===5){
        note = "★★★★★";
        return note;
    }
}