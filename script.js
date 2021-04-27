var separate,
  word,
  flag1 = 0,
  notAvail = [];
const disp1 = document.getElementById("disp1");
const disp2 = document.getElementById("disp2");

function splitMagazine(str) {
  if (!str) {
    alert("Invalid!!! Don't leave the boxes empty!");
    disp1.style.display = "none";
    disp2.style.display = "none";
    exit;
  }
  separate = str.split(" ");
}

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
  // console.log(str.replace(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\\\/\,\?]/g, ' '));
  str = str.replace(
    /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\\\/\,\?]/g,
    " "
  );
  splitMagazine(str);
}

function containsValue() {
  takeIn();
  notAvail.splice(0, notAvail.length);
  var str = document.getElementById("words").value;
  str = str.replace("  ", " ");
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
  for (i = 0; i < separate.length; i++) {
    if (separate[i].localeCompare(wrd) == 0) {
      flag = 1;
      break;
    }
  }
  if (flag != 1) {
    notAvail.push(wrd);
  }
  disp1.style.display = "none";
  disp2.style.display = "none";
  if (notAvail.length == 0) {
    disp1.style.display = "block";
    document.getElementById("demopos1").innerHTML =
      "Yes. All the words are available in this Magazine.";
    document.getElementById("demopos2").innerHTML =
      "The Kidnapper has taken all the ransom words from this Magazine only.";
  } else {
    disp2.style.display = "block";
    if (notAvail.length == 1) {
      document.getElementById("demoneg1").innerHTML =
        'No. The word "' + notAvail + '" is not taken from the Magazine.';
    } else {
      document.getElementById("demoneg1").innerHTML =
        'No. The words "' + notAvail + '" are not taken from the Magazine.';
    }
    document.getElementById("demoneg2").innerHTML =
      "The Kidnapper has not taken the words from this Magazine.";
  }
}
