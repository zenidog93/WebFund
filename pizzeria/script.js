
    
function randomPizza() {
    let crustType = ["thin", "hand-tossed", "deep dish"];
    let sauceType = ["traditional", "Pesto Sauce", "Creamy Alfredo"];
    let cheeseType = ["Mozzarella", "Parmesan", "Ricotta"];
    let toppingType= ["bell peppers", "ham", "mushrooms", "spicy chicken", "pepperoni"];

    crustIndex = Math.floor(Math.random() * crustType.length);
    sauceIndex = Math.floor(Math.random() * sauceType.length);
    cheeseIndex = Math.floor(Math.random() * cheeseType.length);

    // let randomToppings= []; tried to randomize the toppings
    // for (i = 0; i < (Math.floor(Math.random()*toppingType.length))-1 ; i++){
    //     randomToppings.push(( Math.floor(Math.random() * sauceType.length)));
    // }
    toppingIndex = Math.floor(Math.random() * toppingType.length);

    let pizza = {};
    pizza.crustType = crustType[crustIndex];
    pizza.sauceType = sauceType[sauceIndex];
    pizza.cheeseType = cheeseType[cheeseIndex];
    pizza.toppingType = toppingType[toppingIndex];
    return pizza;
}

let rp = randomPizza();
console.log(rp);
// function pizzaOven( crustType, sauceType, cheeses, toppings){

//     let pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheese = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }

//     let p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
//     console.log(p1);
    
//     let p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
//     console.log(p2);

//     let p3 = pizzaOven("thin", "traditional", "mozzarella", ["ham, pinnaple"]);
//     console.log(p3);

//     let p4 = pizzaOven("deep dish", "traditional", ["mozzarella", "parm"], ["mushrooms", "spicy chicken", "pepperoni"])
//     console.log(p4);
// let crustType = ["thing", "hand-tossed", "deep dish"];
// arrIndex = Math.floor(Math.random()*crustType.length);
// console.log(crustType[arrIndex]);

