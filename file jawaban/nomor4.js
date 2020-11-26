// soal 4
let ucok = {
    money: 1000000000,
    carPreference: {
        buildBy: 'jpn',
        needed: 2,
        rangePrice: { from: 200000000, to: 450000000 },
        type: ['SUV', 'Hatchback']
    },
    carport: [],
}

let showRoom = [
    { buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car' },
    { buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'honda city', type: 'Hatchback' }, // v
    { buildBy: 'jpn', brand : 'toyota', price: 305000000, model: 'honda city', type: 'sedan' },
    { buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV' },
    { buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV' },
    { buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV' }, /// v
]

for(let i = 0;i<showRoom.length;i++){
    if(showRoom[i].buildBy==ucok.carPreference.buildBy){
        if (showRoom[i].type == ucok.carPreference.type[0] || showRoom[i].type == ucok.carPreference.type[1]) {
            if (showRoom[i].price > 200000000 && showRoom[i].price < 450000000) {
                ucok.money = ucok.money - showRoom[i].price;
                ucok.carport.push(showRoom[i].model);
            }
        }
    }

}

console.log(ucok)