function showMessage() {
    alert("Thanks for the information provided)");
}


function showMessage2() {
    alert("At the moment, we can't give you more information due to the fact that the designer of this layout didn't provide a page for this(");
}

/*header add background*/
let headerBackground = document.querySelector(".header__top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerBackground.style.backgroundColor = "rgb(1%, 1%, 1%, 0.5)";
    } else {
        headerBackground.style.backgroundColor = "rgb(1%, 1%, 1%, 0.0)";
    }
  };

/*slider*/
const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

// forms
function contact() {
  let userName = document.querySelector('.form1').value;
  let userEmail = document.querySelector('.form2').value;
  let userText = document.querySelector('.form3').value;

  if(userName && userEmail && userText) {
    alert('Thanks for the information provided)');
    document.querySelector('.form1').value = '';
    document.querySelector('.form2').value = '';
    document.querySelector('.form3').value = '';
  } else {
    alert('Some forms were left blank(');
  }
}