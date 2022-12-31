console.log("external JS Added");

const byClass = document.getElementsByClassName("btn-chng-text")[0];
const textId = document.getElementById("text");
let isBool = true;
const handleClick = () => {
  console.log("clicked");
  if (isBool) {
    textId.style.color = "orange";
    isBool = false;
  } else {
    textId.style.color = "red";
    isBool = true;
  }
};
