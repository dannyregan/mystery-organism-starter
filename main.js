// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Function returns an object with specimem number, its corresponding DNA strand, mutate function
const pAequorFactory = (number, array) => {
  return organism = {
    specimenNum: number,
    dna: array,
    mutate() {
      const chooseIndex = Math.floor(Math.random() * array.length)
      let newBase = '';
      do {
        newBase = returnRandBase();
      } while (newBase === array[chooseIndex])
        array[chooseIndex] = newBase;
        return organism.dna;
    },
    compareDNA: (pAequor) => {
      // Select the dna value from the pAequor object input. Compare each element in the DNA array to the corresponding element in the current object's dna. If they're the same, add +1 to a variable. Divide the variable by 15 and multiply it by 100 to get the percent similarity, save that number as a variable. Return that value in a sentence using ``
      let percent = 0
      for (let i = 0; i < pAequor.length; i++) {
          if (pAequor[i] === organism.dna[i]) {
            percent +=1;
          }
      }
      percent = percent / (pAequor.length) * 100;
      return `These specimens share ${percent}% of their DNA in common.`;
    },
    willLikelySurvive: (dna) => {
      let survive = 0;
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'C' || dna[i] === 'G') {
          survive += 1;
        }
      }
      survive = survive / dna.length;
      if (survive >= .6) {
        return true;
      } else {
        return false;
      }
    },
      createBatchOfSurvivableDNA(num) {
        let batch = [];
        for (let i = 0; i < num; i++) {
          let strandOfDNA = mockUpStrand()
          if (organism.willLikelySurvive(strandOfDNA)) {
          batch.push(strandOfDNA);
          } else {
            i--;
          }
        }
        return batch;
      }
    
//     createBatchOfSurvivableDNA: () => {
//       let thirty = [];
//       do {
//         let strandOfDNA = mockUpStrand()
//         if (organism.willLikelySurvive(strandOfDNA)) {
//           thirty.push(strandOfDNA);
//         }
//       } while (thirty.length < 30)
//       return thirty;
//     }
  }
}

console.log(pAequorFactory(1, mockUpStrand()));
console.log(organism.createBatchOfSurvivableDNA(2));



