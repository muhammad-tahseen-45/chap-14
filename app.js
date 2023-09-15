// array

// var vclass = ["shair", "tahseen", "rizwan", true,896];

// vclass.splice(2,1)

// console.log(vclass);

// vclass.pop();
//  vclass.pop();
// console.log(vclass);

// vclass.push("smandar khan")
// console.log(vclass);

// vclass.shift();
// console.log(vclass)
// vclass.unshift("indi win the match");
// console.log(vclass);

// 1

// var vsahir=[];

// vsahir[0]=prompt("enter value")
// vsahir[1]=prompt("enter value")
// vsahir[2]=prompt("enter value")

// console.log(vsahir)

// 5

// var edq =  ["e.g.", "SSC", "HSC", "BCS",
//     "BS", "BCOM, MS", "M. Phil.", "PhD"];

//  document.write(edq);

// 8

var sname = ["sahir", "tahseen", "sharjeel"];
var score = [320, 230, 480];

var pcent = (score[0] / 500) * 100;
var pcent1 = (score[1] / 500) * 100;
var pcent2 = (score[2] / 500) * 100;
alert("score of " + sname[0] + " is " + score[0] + " and persontage " + pcent);

alert("score of " + sname[1] + " is " + score[1] + " and persontage " + pcent1);

alert("score of " + sname[2] + " is " + score[2] + " and persontage " + pcent2);

// 9

var colourname = ["black", "geen", "blue", "white"];
var vans = prompt("what colour you want begning");

colourname.unshift(vans);

console.log(colourname);

var vans = prompt("what colour you want end");

colourname.push(vans);

console.log(colourname);

//c

var vans = prompt("what colour you want begning is color");
var vans1 = prompt("what colour you want begning 2nd color");

colourname.unshift(vans, vans1);

console.log(colourname);

// d

colourname.shift();

console.log(colourname);

// e
