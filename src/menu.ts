interface Boisson {
    price: number,
    name: string
}
class User {
    private name: string

    private meals: Meal[] = []

    constructor(name: string, meals: Meal[]) {
        this.name = name
        this.meals = meals
    }

    totalCalories(): number {
        return this
            .meals
            .reduce((total: number, meal: Meal)=> total + meal.calories, 0)
    }

    getProductPrice<T extends {price: number}>(item: T): number {
        return item.price * 1.2;
    }
}
const salad: Meal = {name: 'salad caesar', price: 6, calories: 0, isVegan: true, categorie: MealCategory.STARTER};
const repas: Meal = {name: 'pasta', price: 12, calories: 0, isVegan: false, categorie: MealCategory.MAIN};
const boisson1: Boisson = { name: 'Evian', price: 1}
const user = new User('Bob', [])

user.getProductPrice(repas)
user.getProductPrice(boisson1)

console.log(repas.categorie) // main
console.log(salad.categorie) // starter

const userMeals: Record<number, Meal[]> = {
    1: [salad],
    2: [repas]
}