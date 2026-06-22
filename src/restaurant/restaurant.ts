class Restaurant {

    menus: Record<MealCategory, Meal>[]

    constructor(menus: Record<MealCategory, Meal>[]) {
        this.menus = menus
    }
}


enum MealCategory {
    STARTER,
    MAIN,
    DESSERT
}

const menuEnfant: Record<MealCategory, Meal> = {
    [MealCategory.STARTER]: {name: 'nuggets', price: 2, isVegan: false, calories: 200},
    [MealCategory.MAIN]: {name: 'cheeseburger', price: 4, isVegan: false, calories: 400},
    [MealCategory.DESSERT]: {name: 'pomme', price: 1, isVegan: true, calories: 30},
}

const menuMidi: Record<MealCategory, Meal> = {
    [MealCategory.STARTER]: {name: 'salade cesar', price: 4, isVegan: false, calories: 200},
    [MealCategory.MAIN]: {name: 'pasta allarabiata', price: 6, isVegan: true, calories: 400},
    [MealCategory.DESSERT]: {name: 'tiramisu', price: 3, isVegan: false, calories: 30},
}

const restaurant = new Restaurant([menuEnfant, menuMidi])


