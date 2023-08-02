//console.dir(document);
//console.log(document.images);
//console.log(document.links);
//console.log(document.all[5]);




//get elementbyid


/*console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header =document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerText='Goodbye';
headerTitle.innerHTML='<h3>hello</h3>';
header.style.borderbottom ='solid 3px #000';
*/

//getelementby class name//

//subheading.style.backgroundColor='yellow';

/*var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
items[1].style.fontWeight ='bold';
items[1].style.backgroundColor ='yellow';
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='#f4f4f4';
}*/



//get element by tag name//


/*for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='#f4f4f4';
}*/




//QUERRYSELECTOR//


/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='hello world';
var submit=document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';*/

//QUERRYSELECTORALL//

/*var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor ='#f4f4f4';
      even[i].style.backgroundColor ='yellow';
}*/

//var headerr=document.querySelector('#sub-header')
/*var headerTitle=document.getElementById('header-title');
console.log(headerTitle.value);*/
var subheading = document.getElementById('sub-header');
subheading.style.fontWeight='bold';
subheading.style.color='green';
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';


var items= document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor ='GREEN';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}