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
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function getPoints(word, value) {
  console.log(word);
  const lowercasedWord = word.toLowerCase();
  let points = 0;

  const letters = lowercasedWord.split("");
  letters.forEach((letter) => {
    // O(n)
    for (const key in value) {
      // O(m) => O(m*n)
      const values = value[key];
      values.forEach((value) => {
        // O(m^2)
        const lowercasedValue = value.toLowerCase();
        if (letter === lowercasedValue) {
          points += Number(key);
        }
      });
    }
  });
  console.log(points);
  return points;
}

getPoints("caBbage", letterValue);
