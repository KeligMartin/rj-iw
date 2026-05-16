import { tasks, sortedByPriority } from "./tasks/task.controller.js"

const monTableau = document.getElementById('task-table')
const priorityColonne = document.getElementById('priority')

function afficherTasks(data) {
    monTableau.innerHTML = ''

    data.forEach((task) => {
        monTableau.innerHTML += `
            <tr>
                <td>${task.titre}</td>
                <td>${task.description}</td>
                <td>${task.priority}</td>
            </tr>
        `
    })
}

afficherTasks(tasks)

priorityColonne.addEventListener('click', () => {
    console.log('test')
    afficherTasks(sortedByPriority)
})