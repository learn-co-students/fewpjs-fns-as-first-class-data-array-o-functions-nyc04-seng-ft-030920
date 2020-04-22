function wakeDog(dogName, dogBreed) {
    let fnStr = `Wake ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

function leashDog(dogName, dogBreed) {
    let fnStr = `Leash ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

function walkToPark(dogName, dogBreed) {
    let fnStr = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

function throwFrisbee(dogName, dogBreed) {
    let fnStr = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

function walkHome(dogName, dogBreed) {
    let fnStr = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

function unleashDog(dogName, dogBreed) {
    let fnStr = `Unleash ${dogName} the ${dogBreed}`;
    console.log(fnStr);
    return fnStr;
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed));
}