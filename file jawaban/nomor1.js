// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array
var list = [[5, 3, 2, 4, 1, 6], [1, 2, 2, 3, 4], [1, 3, 5, 7, 9], [1, 3, 5, 7, 9], [1, 3, 5, 7, 9], [1, 3, 5, 7, 2]]

// Jawaban
let a = 0;
for (let i=0;i<list.length;i++){
    for(let j=0;j<list[i].length;j++){
        if(list[i][j]%2==0){
            a += list[i][j];
        }
    }
}
console.log(a);