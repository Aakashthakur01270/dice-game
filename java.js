// window.location.reload();

  if(sessionStorage.getItem("hasCodeRunBefore")===null){
    sessionStorage.setItem("hasCodeRunBefore","hello");
  }
  else{
    var randomNumber1 =Math.floor(Math.random()*6+1);
    var randomNumber2 =Math.floor(Math.random()*6+1);

    var randomImage1="dice"+randomNumber1+".png";
    var randomImage2="dice"+randomNumber2+".png";

    var randomImageSource1="images/"+randomImage1;
    var randomImageSource2="images/"+randomImage2;

    var image1Source=document.querySelectorAll("img")[0];
    var image2Source=document.querySelectorAll("img")[1];
    image1Source.setAttribute("src",randomImageSource1);
    image2Source.setAttribute("src",randomImageSource2);


    if(randomNumber1>randomNumber2){
      var winner=document.querySelectorAll("p")[0].textContent;
      document.querySelector("h1").textContent="🏆 "+winner+" win";
    }
    else if(randomNumber2>randomNumber1){
      var winner=document.querySelectorAll("p")[1].textContent;
      document.querySelector("h1").textContent="🏆 "+winner+" win";
    }
    else{
      document.querySelector("h1").textContent="Match Draw";

    }

  }
