interface Meal {
    name: string,
    price : number,
    calories: number,
    isVegan: boolean,
    categorie: MealCategory
}

enum MealCategory {
    STARTER,
    MAIN,
    DESSERT
}

type Category = 'main' | 'starter' | 'dessert'

const PartialMeal: Partial<Meal> = {name: 'Pasta'} // interessant pour la recherche

