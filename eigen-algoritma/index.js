const reverseString = (value) => {
  const strings = [];
  const numbers = [];

  [...value].map((v) => {
    if (typeof (v * 1) === "number" && !isNaN(v * 1)) {
      numbers.push(v);
    } else {
      strings.push(v);
    }
  });

  return strings.join("") + numbers.join("");
};

const longestWord = (v) => {
  const words = v.split(" ");
  const findLongest = words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );

  return `${findLongest}: ${findLongest.length} character`;
};

const getWordCounts = (input, query) => {
  const counts = query.map((q) => input.filter((item) => item === q).length);

  return query.map((q, i) => {
    if (counts[i] === 0) {
      return `${counts[i]} karena kata '${q}' tidak ada pada INPUT`;
    } else {
      return `${counts[i]} karena kata '${q}' terdapat ${counts[i]} kali pada INPUT`;
    }
  });
};

const subtractDiagonals = (matrix) => {
  let firstDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  matrix.map((m, i) => {
    firstDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
  });

  let diagonalDifference = mainDiagonalSum - secondaryDiagonalSum;

  return diagonalDifference;
};

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const NEGIE1 = "NEGIE1";
console.log(reverseString(NEGIE1));

// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestWord(sentence));

// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(getWordCounts(INPUT, QUERY));

// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(subtractDiagonals(Matrix));
