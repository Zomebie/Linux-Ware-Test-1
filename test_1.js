const sampleArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
const resultArray = []; // 결과 배열
const oneDimensionalLength = sampleArray.length; // sampleArray배열을 반복적으로 접근하는 비용 절감
const twoDimensionalLength = sampleArray[0].length;

for (let i = 0; i < oneDimensionalLength; i++) {

  resultArray.push([]);
}



processingForOuter()

processingForInner()

showData() // 결과 출력

function showData() {

  for (let i = 0; i < resultArray.length; i++) {

    console.log(resultArray[i]);


  }
  console.log();
}

function processingForOuter() {



  for (let i = 0; i < oneDimensionalLength; i++) {


    for (let j = 0; j < twoDimensionalLength; j++) {

      if ((j === 0 || j === twoDimensionalLength - 1) && i !== j) { // 위 아래로 움직이는 요소

        if (j > i) {

          resultArray[i][j] = sampleArray[i + 1][j];

        } else {


          resultArray[i][j] = sampleArray[i - 1][j];
        }


      } else { //  좌우로 움직이는 요소

        if (j >= i && j + 1 < twoDimensionalLength) {
          resultArray[i][j] = sampleArray[i][j + 1];


        } else {

          resultArray[i][j] = sampleArray[i][j - 1];
        }




      }



    }


  }


}

function processingForInner() {

  for (let i = 0; i < oneDimensionalLength; i++) {

    for (let j = 0; j < twoDimensionalLength; j++) {

      if ((i < oneDimensionalLength - 1 && i > 0) && (j < twoDimensionalLength - 1 && j > 0)) {
        const abs = Math.abs(i - j);

        if (abs > 0) {
          if (j === 1) {
            resultArray[i][j] = sampleArray[i][j + 1]

          } else {
            resultArray[i][j] = sampleArray[i][j - 1]
          }

        } else {
          if (j === 1) {

            resultArray[i][j] = sampleArray[i + 1][j];
          } else {
            resultArray[i][j] = sampleArray[i - 1][j];
          }


        }

      }

    }
  }
}
