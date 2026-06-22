interface Meal {
    name: string,
    price : number,
    calories: number,
    isVegan: boolean,
}

type Category = 'main' | 'starter' | 'dessert'

const PartialMeal: Partial<Meal> = {name: 'Pasta'} // interessant pour la recherche

