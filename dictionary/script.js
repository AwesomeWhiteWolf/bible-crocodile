const listElem = document.querySelectorAll('li');
const tooltipText = document.querySelectorAll('span');
for (let i = 0; i < listElem.length; i++) {
  listElem[i].addEventListener('click', function (event) {
    if ( tooltipText[i].style.display == "block") {
      tooltipText[i].style.display = "none";
    }
    else {
      tooltipText[i].style.display = "block";
    }
  })
}

