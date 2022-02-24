/**
Letter Value
A, E, I, O, U, L, N, R, S, T 1
D, G 2
B, C, M, P 3
F, H, V, W, Y 4
K 5
J, X 8
Q, Z 10 

"cabbage" should be scored as worth 14 points:
3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E 

input: 
- string -> "cabbage"
- letterValue object
output: number -> 14

 */

const letterValue = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

function getPoints(word, value) {
  const letters = getLettersFromWord(word); // O(n)
  let points = 0;

  // O(n)
  letters.forEach((letter) => {
    // value.hasOwnProperty() => O(1)
    if (value.hasOwnProperty(letter)) {
      points += value[letter];
    }
  });
  return points;
}

function getLettersFromWord(str) {
  const letters = str.toUpperCase().split(""); // O(n) + O(n) = O(2n) => O(n)

  return letters;
}

console.log(getPoints("caBbage", letterValue));
