function pirates(arr) {
    let token = arr.shift()
    let obj = {}
    let cityes = []
    while (token != "Sail") {
        let tokenArr = token.split('||')
        let city = tokenArr[0]
        let population = Number(tokenArr[1])
        let gold = Number(tokenArr[2])
        let result = cityes.find(x => x.city === city)
        let index = cityes.indexOf(result)
        if (result) {
            cityes[index].population += population
            cityes[index].gold += gold
        } else {
            obj = {
                city,
                population,
                gold
            }
            cityes.push(obj)
        }

        token = arr.shift()
    }
    token = arr.shift()
    while (token != "End") {
        let tokenArr = token.split('=>')
        let command = tokenArr[0]
        switch (command) {
            case 'Plunder':
                let town = tokenArr[1]
                let people = Number(tokenArr[2])
                let treasure = Number(tokenArr[3])
                console.log(`${town} plundered! ${treasure} gold stolen, ${people} citizens killed.`);
                let result = cityes.find(x => x.city === town)
                let index = cityes.indexOf(result)
                cityes[index].population -= people
                cityes[index].gold -= treasure
                if (cityes[index].population <= 0 || cityes[index].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    cityes.splice(index, 1)
                }
                break;
            case 'Prosper':
                let prosperTown = tokenArr[1]
                let prosperGold = Number(tokenArr[2])
                if (prosperGold < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    let result = cityes.find(x => x.city === prosperTown)
                    let index = cityes.indexOf(result)
                    cityes[index].gold += prosperGold
                    console.log(`${prosperGold} gold added to the city treasury. ${prosperTown} now has ${cityes[index].gold} gold.`);
                }

                break;

        }
        token = arr.shift()
    }
    if (cityes.length == 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${cityes.length} wealthy settlements to go to:`);
        for (el of cityes) {
            console.log(`${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`);
        }
    }
}

pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"])