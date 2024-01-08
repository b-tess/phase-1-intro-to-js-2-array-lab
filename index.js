// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = function (name) {
    cats.push(name)
}

const destructivelyPrependCat = (name) => {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCat = [...cats, name]
    return newCat
}

function prependCat(name) {
    const newCat = [name, ...cats]
    return newCat
}

const removeLastCat = () => cats.slice(0, -1)

const removeFirstCat = () => cats.slice(1)
