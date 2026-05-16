export class Task {
    constructor(titre, description, priority, timeSpent, owner) {
        this.titre = titre
        this.description = description
        this.priority = priority
        this.timeSpent = timeSpent
        this.owner = `${owner.name} ${owner.firstname}`
    }
}
