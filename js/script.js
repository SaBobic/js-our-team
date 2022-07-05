//* TRACCIA:
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

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

// Stampare su console le informazioni di nome, ruolo e la stringa della foto. //* (MILESTONE 1)

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(`
    ----------TEAM MEMBER----------
    `);
    console.log("Name: " + team[i].name);
    console.log("Role: " + team[i].role);
    console.log("Tag img: " + team[i].img);
}
