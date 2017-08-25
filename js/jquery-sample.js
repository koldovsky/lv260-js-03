$(function(){
    // $('button').click(clickBtn);  
    let $btn = document.getElementsByTagName('button')[0];
    $btn.addEventListener('click', clickBtn);
    
    let $submit = document.querySelector('input[type=submit]');
    $submit.addEventListener('click', submitForm);
});

function clickBtn() {
    $('h2').fadeToggle(1000, function(){
        $(this).toggleClass('selected');
    });
}

function submitForm(e){
    e.preventDefault();
    $('#msg').html('Form submitted');
}

// $('body').html('<h1>Hello jQuery</h1>');
// document.querySelector('body').innerHTML = '<h1>Hello jQuery</h1>';


// $('h2').html('Cool library');

let $h2Arr = document.getElementsByTagName('h2');
for (let i = 0; i < $h2Arr.length; i++) {
    $h2Arr[i].innerHTML = 'Cool library';
}