class Task {
    constructor(titre, description, priority) {
        this.titre = titre
        this.description = description
        this.priority = priority
    }
}

let task1 = new Task("Login", "bouton login", 5)
let task2 = new Task("Login", "bouton logout", 343)
let task3 = new Task("Login", "login mail", 24)
let task4 = new Task("Login", "login google", 76)
let task5 = new Task("Login", "login microsoft", 328)

const filterByPriority = (t) => t.priority < 100 // mémoire allouée une seule fois

const tasks = [task1, task2, task3, task4, task5]
// spread operator
const orderedTasks = [...tasks]
    .sort((t1, t2) => t1.priority - t2.priority)

const filteredTasks = tasks             // tableau de tache
    .filter(filterByPriority)                  // tableau de tache filtré
    .map( (t) => {
        return t.priority
    }) // tableau de number
 // traitement pour libérer la mémoire

// créer un tableau de tache en lien avec des boutons
// trier par priorité décroissante
// qui renvoie uniquement la description

const decroissantOrder = (t1, t2) => t2.priority - t1.priority
const includesBouton = t => t.description.includes('bouton')
const toDescription = t => t.description

// 1. SQL
// 2. backend
// 3. (dégueu) front-end

const newTasks = tasks
    .sort(decroissantOrder)
    .filter(includesBouton)
    .reduce((acc, cur) => acc.priority + cur.priority )

console.log(newTasks)

