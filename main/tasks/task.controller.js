import {Owner} from "../owner/owner.model.js";
import {Task } from './task.model.js'

const owner = new Owner('Bob', 'Razowski')


const task1 = new Task('Login', 'bouton login', 2, 1, owner)
const task2 = new Task('Login', 'code login', 5, 1, owner)
const task3 = new Task('Logout', 'bouton logout', 3, 1, owner)
const task4 = new Task('Logout', 'code logout', 8, 1, owner)


export const tasks = [task1, task2, task3, task4]

export const sortedByPriority = [...tasks].sort((t1, t2) => t1.priority - t2.priority)