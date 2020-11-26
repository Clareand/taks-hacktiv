// soal 2
// no4. munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
    nama: "udin",
    tinggi: 170,
    usia: 21,
    bb: 71,
    kendaraan: [
        { merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic' },
        { merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner' }
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    }
}

var ujang = {
    nama: "ujang",
    tinggi: 170,
    usia: 21,
    bb: 71,
    kendaraan: [
        { merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic' },
        { merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya' }
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    }
}

var dadang = {
    nama: "dadang",
    tinggi: 170,
    usia: 21,
    bb: 71,
    kendaraan: [
        { merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic' },
        { merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya' }
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    }
}

listOrang = [udin, ujang, dadang]

// jawaban
let result;
for(let i=0;i<listOrang.length;i++){
    // console.log(listOrang[i].kendaraan.length);
    for(let j=1;j<=listOrang[i].kendaraan.length-1;j++){
        // console.log(j);
        if (listOrang[i].kendaraan[j].price > listOrang[i].kendaraan[j-1].price)
        {
            result = {
                nama : listOrang[i].nama,
                mobil: listOrang[i].kendaraan[j].type
            };
        }
        
    }
}
console.log(result);