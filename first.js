// left 1st
let filled = document.querySelector(".joinslide");
let join = document.querySelector(".join");

// left 2nd
let docum = document.querySelector(".joi");
let remove = document.querySelector(".joinfill");

// left 3rd
let fill = document.querySelector(".joinsl");
let free = document.querySelector(".free");

let filldd = document.querySelector(".innn");
let Moree = document.querySelector(".moreee");

// left 4th
let left = document.querySelector(".nowsl");
let nowff = document.querySelector(".slfree");

// pic 1st
let image = document.querySelector(".styim");
let mage = document.querySelector(".imsty");

// pic 2nd
let first = document.querySelector(".firim");
let mag = document.querySelector(".fim");

// DOWN JS!!!!

// dowm 1st
let rem = document.querySelector(".jo");
let find = document.querySelector(".find");
let same = document.querySelector(".st");
console.log(same);

// dowm 2nd
let two = document.querySelector(".john");
let focus = document.querySelector(".focus");
let sames = document.querySelector(".two");

// dowm 3rd
let height = document.querySelector(".fin");
let three = document.querySelector(".jon");
let SAME = document.querySelector(".three");

// left 1st
function Join(val) {
  if (val === "start") {
    filled.style.width = "100%";
    // join.style.backgroundColor='transparent'
  } else {
    filled.style.width = "0%";
    // join.style.backgroundColor='red'
  }

  console.log("aaa");
}

// left 2nd
function Log(val) {
  if (val === "fill") {
    remove.style.width = "100%";
  } else {
    remove.style.width = "0%";
  }

  console.log("aaa");
}

// left 3rd
function Start(val) {
  if (val === "sta") {
    fill.style.width = "100%";
  } else {
    fill.style.width = "0%";
  }

  console.log("aaa");
}

// left 4th
function Now(val) {
  if (val === "nooo") {
    left.style.width = "100%";
  } else {
    left.style.width = "0%";
  }

  console.log("aaa");
}

// pic 1st
function Imagee(val) {
  if (val === "imo") {
    image.style.opacity = "100%";
  } else {
    image.style.opacity = "0%";
  }

  console.log("aaa");
}

// pic 2nd
function First(val, ba) {
  let name = `#img` + val;
  let first = document.querySelector(name);
  if (ba === "fir") {
    first.style.opacity = "100%";
  } else {
    first.style.opacity = "0%";
  }

  console.log("aaa");
}

// dowm 1st

let x = [];
function Find(val) {
  if (val === "mor") {
    rem.style.transition = "none";
    rem.style.height = "100%";
    same.style.color = "white";
  }
  if (val === "leave") {
    rem.style.height = "0%";
    same.style.color = "#4a5a9b";
  }
  console.log(x);
  // x=[]
  console.log(x);
}

function Finds(val) {
  if (val === "more") {
    rem.style.transition = "all 0.3s ease-in-out";
    rem.style.height = "100%";
    same.style.color = "white";
  }
  //
  if (val === "leave") {
    rem.style.height = "0%";
    same.style.color = "#4a5a9b";
  }
  console.log(x);
}

let y = [];
function More(val) {
  if (val === "mo") {
    two.style.transition = "none";
    two.style.height = "100%";
    sames.style.color = "white";
  }
  if (val === "lea") {
    two.style.height = "0%";
    sames.style.color = "#4a5a9b";
  }
  console.log(y);
  // x=[]
}

function Mores(val) {
  if (val === "moryy") {
    two.style.transition = "all 0.3s ease-in-out";
    two.style.height = "100%";
    sames.style.color = "white";
  }
  //
  if (val === "lea") {
    two.style.height = "0%";
    sames.style.color = "#4a5a9b";
  }
  console.log(y);
}

// dowm 2nd
// function More(val) {
//   if (val === "more") {
//     two.style.height = "100%";
//     sames.style.color = "white";
//   } else {
//     two.style.height = "0%";
//     sames.style.color = "#4a5a9b";
//   }
//   console.log("aaa");
// }

function Finddd(val) {
  if (val === "outt") {
    filldd.style.height = "100%";
  } else {
    filldd.style.height = "0%";
  }

  console.log("aaa");
}

// dowm 3rd

let z = [];
function Over(val) {
  if (val === "mmm") {
    three.style.transition = "none";
    three.style.height = "100%";
    SAME.style.color = "white";
  }
  if (val === "height") {
    three.style.height = "0%";
    SAME.style.color = "#4a5a9b";
  }
  console.log(z);
}

function Overs(val) {
  if (val === "heig") {
    three.style.transition = "all 0.3s ease-in-out";
    three.style.height = "100%";
    SAME.style.color = "white";
  }
  //
  if (val === "height") {
    three.style.height = "0%";
    SAME.style.color = "#4a5a9b";
  }
  console.log(z);
}
