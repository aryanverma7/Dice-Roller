var randomNumber1;
var randomNumber2;
$('.btn').click(function(){
    $('.btn').addClass('pressed');
    setTimeout(function(){
        $('.btn').removeClass('pressed');
    },200)
    randomNumber1=Math.floor(Math.random()*6)+1;
    randomNumber2=Math.floor(Math.random()*6)+1;
    $('h2').fadeOut(200);
    $('h2').html(randomNumber1+randomNumber2);
    $('img').fadeOut(200);
    document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
    $('img').fadeIn(200);
    $('h2').fadeIn(200);
    // if(randomNumber1>randomNumber2)
    //     document.querySelector("h1").innerHTML="Player 1 Wins!";
    //     else if(randomNumber2>randomNumber1)
    //     document.querySelector("h1").innerHTML="Player 2 Wins!";
    //     else
    //     document.querySelector("h1").innerHTML="Draw!";
});
