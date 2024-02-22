let click = document.getElementsByClassName("ingr-title");

let text = document.getElementsByClassName("ingr-text");

const onClick = (e) => {
  console.log(e.target.parentElement.children[1]);
  console.log(e.target);
  if (e.target.parentElement.children[1].textContent == "-") {
    e.target.parentElement.parentElement.children[1].style.display = "none";
    e.target.parentElement.children[1].textContent = "+";
  } else {
    if (e.target.parentElement.children[1].textContent == "+") {
      e.target.parentElement.parentElement.children[1].style.display = "block";
      e.target.parentElement.children[1].textContent = "-";
    }
  }
  console.log(text);
};
for (let index = 0; index < click.length; index++) {
  click[index].addEventListener("click", onClick);
}

//pagination

let digit = document.getElementsByClassName("digit");
const onChange = (e) => {
  if (e.target.textContent == "1") {
    console.log(e.target.parentElement.children);
    for (let i = 0; i < e.target.parentElement.parentElement.children.length; i++) {
        if(i>=3 && i< e.target.parentElement.parentElement.children.length - 1){
            e.target.parentElement.parentElement.children[i].style.display = "none";
        }
    }
    e.target.parentElement.parentElement.children[3].style.display = "block";
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList = "digit";
    }
    e.target.classList = "digit active";
  } else if (e.target.textContent == "2") {
    console.log(e.target.parentElement.children);
    for (let i = 0; i < e.target.parentElement.parentElement.children.length; i++) {
        if(i>=3 && i< e.target.parentElement.parentElement.children.length - 1){
            e.target.parentElement.parentElement.children[i].style.display = "none";
        }
    }
    e.target.parentElement.parentElement.children[4].style.display = "block";
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList = "digit";
    }
    e.target.classList = "digit active";
  } else if (e.target.textContent == "3") {
    console.log(e.target.parentElement.children);
    for (let i = 0; i < e.target.parentElement.parentElement.children.length; i++) {
        if(i>=3 && i< e.target.parentElement.parentElement.children.length - 1){
            e.target.parentElement.parentElement.children[i].style.display = "none";
        }
    }
    e.target.parentElement.parentElement.children[5].style.display = "block";
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList = "digit";
    }
    e.target.classList = "digit active";
  }
};

for (let index = 0; index < digit.length; index++) {
  digit[index].addEventListener("click", onChange);
}
