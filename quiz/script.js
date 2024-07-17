let div = document.createElement("div");
let form = document.createElement("form");
let a = document.createElement("div");
a.innerHTML = `<span>1.</span>`;
let c = document.createElement("div");
let optionOne = document.createElement("div");
let optionTwo = document.createElement("div");
let optionThree = document.createElement("div");
let optionFour = document.createElement("div");

// input

let newInputElement = function (type, name, id, value) {
  let input = document.createElement("input");
  input.setAttribute("type", `${type}`);
  input.setAttribute("name", `${name}`);
  input.setAttribute("id", `${id}`);
  input.setAttribute("value", `${value}`);
  return input;
};

// label

let newLabelElement = function (aman, text) {
  let label = document.createElement("label");
  label.setAttribute("for", `${aman}`);
  label.innerText = `${text}`;
  return label;
};

// div

let myFormElement5 = function (a, b, c, d, e) {
  let myInputElements = document.createElement("div");
  let elem1 = newInputElement(a, b, c, d);
  let elem2 = newLabelElement(c, e);
  myInputElements.append(elem1, elem2);

  return myInputElements;
};

//  ques

let myFormElement1 = function (text) {
  let myFormQues = document.createElement("div");
  myFormQues.innerHTML = `${text}`;
  return myFormQues;
};

let ques1 = myFormElement1(`<h1>What is the select tag used for?</h1>`);
let ques2 = myFormElement1(
  `<h1>What is the correct syntax to write an HTML comment?</h1>`
);
let ques3 = myFormElement1(`<h1>What is the effect of the &ltb&gt tag?</h1>`);
let ques4 = myFormElement1(
  `<h1>What is the function of the HTML style attribute?</h1>`
);

// button

let button1 = document.createElement("button");
button1.innerText = "Next";
button1.setAttribute("type", "button");
button1.setAttribute("onclick", "next()");

let button2 = document.createElement("button");
button2.innerText = "Submit";
button2.setAttribute("type", "button");
// button2.setAttribute("onclick", "submit()");

let q1o1 = myFormElement5(
  "radio",
  "answer",
  "q1o1",
  "Create a combo box.",
  "Create a combo box."
);
let q1o2 = myFormElement5(
  "radio",
  "answer",
  "q1o2",
  "Select some attributes and change their style",
  "Select some attributes and change their style"
);
let q1o3 = myFormElement5(
  "radio",
  "answer",
  "q1o3",
  "Change text font",
  "Change text font"
);
let q1o4 = myFormElement5(
  "radio",
  "answer",
  "q1o4",
  "None of the above",
  "None of the above"
);
let q2o1 = myFormElement5(
  "radio",
  "answer",
  "q2o1",
  "&lt!--comment--&gt",
  "&lt!--comment--&gt"
);
let q2o2 = myFormElement5("radio", "answer", "q2o2", `//comment`, `//comment`);
let q2o3 = myFormElement5("radio", "answer", "q2o3", "#comment", "#comment");
let q2o4 = myFormElement5(
  "radio",
  "answer",
  "q2o4",
  "/*comment*/",
  "/*comment*/"
);
let q3o1 = myFormElement5(
  "radio",
  "answer",
  "q3o1",
  "it convert the text within it to bold font",
  "it convert the text within it to bold font"
);
let q3o2 = myFormElement5(
  "radio",
  "answer",
  "q3o2",
  "it used to write black-colored font",
  "it used to write black-colored font"
);
let q3o3 = myFormElement5(
  "radio",
  "answer",
  "q3o3",
  "it is used to change font size",
  "it is used to change font size"
);
let q3o4 = myFormElement5(
  "radio",
  "answer",
  "q3o4",
  "none of the above",
  "none of the above"
);
let q4o1 = myFormElement5(
  "radio",
  "answer",
  "q4o1",
  "it is used to add styles to an HTMl element",
  "it is used to add styles to an HTMl element"
);
let q4o2 = myFormElement5(
  "radio",
  "answer",
  "q4o2",
  "it is used to uniquely identify some specific styles of some element.",
  "it is used to uniquely identify some specific styles of some element."
);
let q4o3 = myFormElement5(
  "radio",
  "answer",
  "q4o3",
  "both a and b",
  "both a and b"
);
let q4o4 = myFormElement5(
  "radio",
  "answer",
  "q4o4",
  "none of the above",
  "none of the above"
);

document.body.append(div);  

div.prepend(a);
a.classList.add("num");

div.append(form);
div.append(c);

c.append(button1);
c.append(button2);
c.classList.add("btn-one");
c.classList.add("btn-two");

button1.classList.add("button-one");
button2.classList.add("button-two");

div.classList.add("container");

form.prepend(ques1);
form.append(ques2);
form.append(ques3);
form.append(ques4);

ques1.append(optionOne);
ques2.append(optionTwo);
ques3.append(optionThree);
ques4.append(optionFour);

ques1.classList.add("question-one");
ques2.classList.add("question-two");
ques3.classList.add("question-three");
ques4.classList.add("question-four");

optionOne.append(q1o1, q1o2, q1o3, q1o4);
optionTwo.append(q2o1, q2o2, q2o3, q2o4);
optionThree.append(q3o1, q3o2, q3o3, q3o4);
optionFour.append(q4o1, q4o2, q4o3, q4o4);

optionOne.classList.add("opt");
optionTwo.classList.add("opt");
optionThree.classList.add("opt");
optionFour.classList.add("opt");

// ---- BUTTON -----

let num = document.getElementsByClassName("num")[0];
let questionOne = document.getElementsByClassName("question-one")[0];
let questionTwo = document.getElementsByClassName("question-two")[0];
let questionThree = document.getElementsByClassName("question-three")[0];
let questionfour = document.getElementsByClassName("question-four")[0];
let btnOne = document.getElementsByClassName("button-one")[0];
let btnTwo = document.getElementsByClassName("button-two")[0];

function next() {
  if (questionOne.style.display != "none") {
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    num.innerHTML = "<span>2.</span>";
  } else if (questionTwo.style.display != "none") {
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
    num.innerHTML = "<span>3.</span>";
  } else if (questionThree.style.display != "none") {
    questionThree.style.display = "none";
    questionfour.style.display = "block";
    btnOne.style.display = "none";
    btnTwo.style.display = "block";
    num.innerHTML = "<span>4.</span>";
  }else{
    
  }
  
}

let score = 0;
function submit() {
  if(document.getElementById("q1o1").checked){score++}
  if(document.getElementById("q2o1").checked){score++}
  if(document.getElementById("q3o1").checked){score++}
  if(document.getElementById("q4o1").checked){score++}
  // alert(`your score is ${score} /4 `);
  // form.textContent = `Quiz finished! Your score is ${score} out of ${ques.length}.`;

  // document.write("your score is"+score)
}