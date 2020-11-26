// soal 3
// ambil nilai dari number1 yang tidak ada di number2
const number1 = [1, 5, 7, 8, 2, 3, 6, 4, 3]
const number2 = [9, 2, 1, 6, 4, 2, 5, 7, 1]
const number3 = [] // [8,3,3]

for(let i=0;i<number1.length;i++){
    if(number2.includes(number1[i])==false){
        number3.push(number1[i]);
    }
}

console.log(number3)