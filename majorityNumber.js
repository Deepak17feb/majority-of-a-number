var arNums = [1,1,5,5,1,3,5,6,3,4,4,6,6,6,6,6,6,6,6,6,6,6];
var occurences = {};
var curNumber;
var maxNumber = arNums[0];

for(let i =0; i < arNums.length; i++) {
  curNumber = arNums[i];

  if(occurences[curNumber] !== undefined) {
    occurences[curNumber]++;
  } else {
    occurences[curNumber] = 1;
  }

  if(occurences[curNumber] > occurences[maxNumber]) {
    maxNumber = curNumber;
  }
}

if(occurences[maxNumber] > arNums.length / 2) {
  console.log("Found majority element: " + maxNumber)
} else {
  console.log("No majority element found")
}
