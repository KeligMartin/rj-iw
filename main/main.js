for (let i = 2; i < 100; i++) {

    let premier = true;

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            premier = false;
            break;
        }
    }
}

function add(a, b = 12) {
    return a + b;
}

const multiply = (a, b) => a * b; // return caché

const substract = (a, b) => {
    return a - b;
}

class Personne {

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}

let p = new Personne("Dupont", "Jean");

let t = [1, 2, 3, 4, 5]

console.table(t)
