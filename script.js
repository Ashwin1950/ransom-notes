var magazineWords,
  word,
  flag1 = 0,
  notAvail = [];
const disp1 = document.getElementById("disp1");
const disp2 = document.getElementById("disp2");

//splitting the magazine text into separate words
function splitMagazine(str) {
  if (!str) {
    alert("Invalid!!! Don't leave the boxes empty!");
    disp1.style.display = "none";
    disp2.style.display = "none";
    exit;
  }
  magazineWords = str.split(" ");
}

//splitting the input text into separate words
function splitWords(str) {
  if (!str) {
    alert("Invalid!!! Don't leave the boxes empty!");
    disp1.style.display = "none";
    disp2.style.display = "none";
    exit;
  }
  word = str.split(" ");
}

function takeIn() {
  var str = document.getElementById("magazine").value;
  //replacing all the special characters with space
  str = str.replace(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\\\/\,\?]/g," "); 
  splitMagazine(str);
}

function callFunction() {
  takeIn();
  notAvail.splice(0, notAvail.length);
  var str = document.getElementById("words").value;
  str = str.replace("  ", " ");
  str = str.replace("   ", " ");
  //   console.log(str);
  splitWords(str);
  var i;
  for (i = 0; i < word.length; i++) {
    compareBoth(word[i]);  
  }
}

function compareBoth(wrd) {
  var i,
    flag = 0;
  //comparing each word left by kidnapper with that in the magazine
  for (i = 0; i < magazineWords.length; i++) {
    if (magazineWords[i].localeCompare(wrd) == 0) { 
      flag = 1;
      break;
    }
  }
  if (flag != 1) {
    notAvail.push(wrd);  //pushing the unexisting words into notAvail
  }
  disp1.style.display = "none";
  disp2.style.display = "none";

  //displaying the final result
  if (notAvail.length == 0) {
    disp1.style.display = "block";
    document.getElementById("demopos1").innerHTML =
      "All the words exist in this Magazine.";
    document.getElementById("demopos2").innerHTML =
      "Yes. The Kidnapper has taken all the ransom words from this Magazine only.";
  } else {
    disp2.style.display = "block";
    if (notAvail.length == 1) {
      document.getElementById("demoneg1").innerHTML =
        (notAvail.length)+' word "' + notAvail + '" does not exist in this Magazine.';
    } else {
      document.getElementById("demoneg1").innerHTML =
        (notAvail.length)+' words "' + notAvail + '" do not exist in this Magazine.';
    }
    document.getElementById("demoneg2").innerHTML =
      "No. The Kidnapper has not taken the words from this Magazine.";
  }
}
