let btnAdd = document.getElementById("btn-add");

const addHandler = (e) => {
  e.preventDefault();

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let ouput = document.getElementById("text");
  if (!isNaN(input1) && !isNaN(input2) && input1 !== "" && input2 !== "") {
    let sum = parseInt(input1) + parseInt(input2);
    ouput.innerText = sum;
    console.log(input1, input2, sum);
    console.log("Clicked", e);
  } else {
    alert("Please enter valid input");
  }
};

// btnAdd.addEventListener("click", addHandler);

btnAdd.onclick = addHandler;
