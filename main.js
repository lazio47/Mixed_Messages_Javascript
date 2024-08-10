// To generate random number between 0 and range (not included)
const randomNumber = (range) => Math.floor(Math.random() * range);

const luffysCrew = [
    "Monkey D. Luffy",
    "Roronoa Zoro",
    "Nami",
    "Usopp",
    "Sanji",
    "Tony Tony Chopper",
    "Nico Robin",
    "Franky",
    "Brook",
    "Jinbe"
];

const shouldDo = [
    "train more",
    "rest, you're ready for anything",
    "eat, new adventures are coming",
    "fishing for dinner",
    "organize a party for the crew"
];

const careOf = [
    "arrive on an island",
    "to face Buggy",
    "get on the biggest pirate ship, full of zombies",
    "followed by Luffy's grandfather"
];

const messageComponents = {
    luffysCrew,
    shouldDo,
    careOf
}

// Generates a message
const getMessage = () => {
    let message = '';
    let randomNum;
    for (let component of messageComponents) {
        randomNum = randomNumber(messageComponents[component].length);
        switch (component) {
            case 'luffysCrew':
                message += `On Team Mugiwara no Luffy, you look more like ${messageComponents[component][randomNum]}!\n`;
                break;
            case 'shouldDo':
                message += `Based on your abilities, you should ${messageComponents[component][randomNum]}!\n`;
                break;
            case 'careOf':
                message += `Be careful because you are ${messageComponents[component][randomNum]}!\n`;
                break;
            default:
                message += `Monkey D. Luffy will be the king of pirates!`;
        }
    }
    return message;
}

// Printing zone
const gerenatedMessage = getMessage();
console.log(gerenatedMessage);