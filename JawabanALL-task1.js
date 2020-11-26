// soal 1
var list = [[5, 3, 2, 4, 1, 6], [1, 2, 2, 3, 4], [1, 3, 5, 7, 9], [1, 3, 5, 7, 9], [1, 3, 5, 7, 9], [1, 3, 5, 7, 2]]

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array

// Jawaban nomor 1
let a = 0;
for (let i=0;i<list.length;i++){
    for(let j=0;j<list[i].length;j++){
        if(list[i][j]%2==0){
            a += list[i][j];
        }
    }
}
console.log("---jawaban nomor 1 ---");
console.log(a);

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

// Jawaban nomor 2

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
console.log("---jawaban nomor 2 ---");
console.log("Pemilik Mobil:"+result.nama);
console.log("Mobil:"+result.mobil);


// soal 3
// ambil nilai dari number1 yang tidak ada di number2
const number1 = [1, 5, 7, 8, 2, 3, 6, 4, 3]
const number2 = [9, 2, 1, 6, 4, 2, 5, 7, 1]
const number3 = [] // [8,3,3]

// Jawaban nomor 3
for (let i = 0; i < number1.length; i++) {
  if (number2.includes(number1[i]) == false) {
    number3.push(number1[i]);
  }
}
console.log("---jawaban nomor 3 ---");
console.log(number3);

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
    { buildBy: 'jpn', brand: 'toyota', price: 305000000, model: 'honda city', type: 'sedan' },
    { buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV' },
    { buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV' },
    { buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV' }, /// v
]

// Jawaban nomor 4
for (let i = 0; i < showRoom.length; i++) {
  if (showRoom[i].buildBy == ucok.carPreference.buildBy) {
    if (
      showRoom[i].type == ucok.carPreference.type[0] ||
      showRoom[i].type == ucok.carPreference.type[1]
    ) {
      if (showRoom[i].price > 200000000 && showRoom[i].price < 450000000) {
        ucok.money = ucok.money - showRoom[i].price;
        ucok.carport.push(showRoom[i].model);
      }
    }
  }
}
console.log("---jawaban nomor 4 ---")
console.log(ucok);

// outputnya
/*
{
  money: 350000000,
  carPreference: {
    type: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    mandatoryType: ['SUV', 'Hatchback']
  },
  carport: [
    honda city,
    HRV
  ],
}
*/

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

let presentTrue = videoData.filter((presented) => presented.present === true);
console.log("---Jawaban Homework--- ");
console.log(presentTrue.length)

// practice I
let table = [
  ["Kode Absen", "Name", "No Hp", "Github"],
  [
    "RCTN043ONL004",
    "Andika Wijaya",
    "82316747626",
    "https://github.com/andikawij",
  ],
  [
    "RCTN043ONL005",
    "Ken Grisya",
    "081223123428",
    "https://github.com/kengirisya",
  ],
  [
    "RCTN043ONL002",
    "Bagus Panghegar",
    "082299304615",
    "https://github.com/baguspanghegar",
  ],
  [
    "RCTN043ONL001",
    "M Genta Ari Shandi",
    "085155476774",
    "https://github.com/geardy47",
  ],
  [
    "RCTN043ONL003",
    "Nadya Sylviani",
    "'081219101996",
    "https://gitlab.com/nadyaslvn",
  ],
  [
    "RCTN043ONL006",
    "Mars Theolando",
    "81511239138",
    "https://github.com/Clareand",
  ],
  ["RCTN043ONL007", "Hapri Mariga", "082113958883", ""],
  ["RCTN043ONL008", "Novia", "08980084400", ""],
];

let message = `Halo nama: ${table[6][1]}, kode absen: ${table[6][0]}, no hp: ${table[6][2]}, github link: ${table[6][3]} `;
console.log('---Practice I---')
console.log(message);