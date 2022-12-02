function adAstra(input) {
    let text = input[0]
    const pattern = /([\|]|[#])(?<name>[A-Za-z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g

    let foodInfo = text.matchAll(pattern)
    let totalCalories = 0
    let resultArr = []
    for (el of foodInfo) {
        totalCalories += Number(el.groups.calories)
        resultArr.push(`Item: ${el.groups.name}, Best before: ${el.groups.date}, Nutrition: ${el.groups.calories}`);
    }
    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    resultArr.map(x => console.log(x))
}
adAstra([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|'

])