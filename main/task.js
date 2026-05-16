class Task {
    constructor(titre, description, priority, timeSpent, owner) {
        this.titre = titre
        this.description = description
        this.priority = priority
        this.timeSpent = timeSpent
        this.owner = `${owner.name} ${owner.firstname}`
    }
}

class Owner {
    constructor(name, firstname) {
        this.name = name
        this.firstname = firstname
    }
}

let bob = new Owner('Razowski', 'Bob')
let patrick = new Owner('Star', 'Patrick')

let task1 = new Task("Login", "bouton login", 5, 2, bob)
let task2 = new Task("Login", "bouton logout", 343, 3, patrick)
let task3 = new Task("Login", "login mail", 24, 1, bob)
let task4 = new Task("Login", "login google", 76, 2, patrick)
let task5 = new Task("Login", "login microsoft", 328, 5, bob)

const filterByPriority = (t) => t.priority < 100 // mémoire allouée une seule fois

const tasks =
    [task1, task2, task3, task4, task5]
        .map((t, i) => {
            if(i % 2 !== 0) {
                t = new Task(t.titre.toUpperCase(), t.description, t.priority, t.timeSpent, t.owner)
            }
            return t
        })

const total = [task1, task2, task3, task4, task5]
    .reduce((acc, cur) => acc + cur.timeSpent, 0)

const totalTask = new Task('Total', '', null, total, '')
console.table([...tasks, totalTask])