// let els = document.getElementsByClassName('bar');
// console.log(els);

// for (let i = 0; i < els.length; i++) {
//     console.log(els[i]);
// }

// els.forEach(function(el){
//   console.log(el); 
// });

// Array.prototype.forEach.call(els, function(el){
//   console.log(el); 
// });

let $par = document.getElementById('$foo');
$par.innerHTML = 'Hello there!'




let tableCode  = '<table>';
for (let i = 0; i < 1000; i++) {
    tableCode += `<tr>
      <td>${i+1}</td>
    </tr>`;
}
tableCode += '</table>';
let $tbl = document.getElementById('tbl');
$tbl.innerHTML = tableCode;
$tbl.style.borderStyle = 'solid';
$tbl.style.borderWidth = '1px';
// $tbl.style.borderColor = 'green';


let $h1 = document.querySelector('h1');
$h1.hidden = true;

{
    let $clock = document.getElementById('clock');
    setInterval(function(){
        $clock.innerHTML = (new Date()).toLocaleTimeString();    
    }, 1000);
}
