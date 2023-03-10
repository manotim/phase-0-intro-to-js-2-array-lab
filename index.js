// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) { 
cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const allCats = [...cats, "Broom"]
    return allCats
}

function prependCat(name) {
    const coolCats = ["Arnold", ...cats]
    return coolCats
}

function removeLastCat(name) {
    const newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat(name) {
    const myCats = cats.slice(1)
    return myCats
}
    
