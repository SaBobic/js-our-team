//* TRACCIA:
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

//* VARIABILI GLOBALI

const teamElement = document.getElementById("team");

// Creare l’array di oggetti con le informazioni fornite. //* (MILESTONE 0)

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg ",
    },
];

//* BONUS
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato.

for (let i = 0; i < team.length; i++) {
    // Creo il div con la classe della colonna di bootstrap
    const memberCol = document.createElement("div");
    memberCol.classList.add("col-4");
    // Creo il tag figure
    const memberFigure = document.createElement("figure");
    // Creo il tag img con src e alt tag rifacendomi ai valori delle chiavi degli object
    const memberImg = document.createElement("img");
    memberImg.src = `img/${team[i].img}`;
    memberImg.alt = `${team[i].name}, ${team[i].role}`;
    // Creo il tag figcaption
    const memberCaption = document.createElement("figcaption");
    // Creo il tag h2 con innerText nome del membro
    const memberName = document.createElement("h2");
    memberName.innerText = `${team[i].name}`;
    // Creo il tag h3 con innerText ruolo del membro
    const memberRole = document.createElement("h3");
    memberRole.innerText = `${team[i].role}`;
    // Inserisco h2 e h3 nel tag figcaption
    memberCaption.appendChild(memberName);
    memberCaption.appendChild(memberRole);
    // Inserisco immagine e caption nel tag figure
    memberFigure.appendChild(memberImg);
    memberFigure.appendChild(memberCaption);
    // Inserisco il tag figure nella colonna
    memberCol.appendChild(memberFigure);
    // Mostro la colonna su schermo
    teamElement.appendChild(memberCol);
}
