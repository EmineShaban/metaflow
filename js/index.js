let click = document.getElementsByClassName("ingr-title");

let text = document.getElementsByClassName("ingr-text");

const onClick = (e) => {
  console.log(e.target.parentElement.children[1]);
  console.log(e.target)
  if ( e.target.parentElement.children[1].textContent == "-") {
    e.target.parentElement.parentElement.children[1].style.display = "none";
    e.target.parentElement.children[1].textContent = "+";
  } else {
    if(e.target.parentElement.children[1].textContent == "+"){
        e.target.parentElement.parentElement.children[1].style.display = "block";
        e.target.parentElement.children[1].textContent = "-";
    }
   
  }
  console.log(text);
};
for (let index = 0; index < click.length; index++) {
  click[index].addEventListener("click", onClick);
}

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i])

// }
