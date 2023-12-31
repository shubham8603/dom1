/*//console.dir(document);
//console.log(document.images);
//console.log(document.links);
//console.log(document.all[5]);




//get elementbyid


console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header =document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerText='Goodbye';
headerTitle.innerHTML='<h3>hello</h3>';
header.style.borderbottom ='solid 3px #000';


//getelementby class name//

//subheading.style.backgroundColor='yellow';

var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
items[1].style.fontWeight ='bold';
items[1].style.backgroundColor ='yellow';
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='#f4f4f4';
}



//get element by tag name//


for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='#f4f4f4';
}



//QUERRYSELECTOR//


var header=document.querySelector('#main-header');
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
secondItem.style.color='green';

//QUERRYSELECTORALL//

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor ='#f4f4f4';
      even[i].style.backgroundColor ='yellow';
}

//var headerr=document.querySelector('#sub-header')
var headerTitle=document.getElementById('header-title');
console.log(headerTitle.value);
var subheading = document.getElementById('sub-header');
subheading.style.fontWeight='bold';
subheading.style.color='green';
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

//trying to access by classname
var items= document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor ='GREEN';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}

//trying to access by tagname

var Items2= document.getElementsByTagName('li');

for(var i=0;i<Items2.length;i++)
{
    Items2[i].style.fontWeight ='bold';
}


//trying to access by querySelector



var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.remove(thirdItem);


//trying to access by querySelectorAll


var odd=document.querySelectorAll('li:nth-child(odd)');
var secondItem=document.querySelectorAll('li:nth-child(even)');

secondItem[0].style.color='green';
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor ='green';
      
}





//traversing the DOM//


var itemList=document.querySelector('#items');
//parentnode
console.log(itemList.parentNode);

//parentelement

itemList.parentElement.style.backgroundColor='pink';

//lastelementchild

itemList.lastElementChild.textContent='4th item';

//lastchild

console.log(itemList.lastChild);


//createchild

//firstelementchild
itemList.firstElementChild.style.backgroundColor='skyblue';


//firstchild

console.log(itemList.firstChild);


//nextsibling

console.log(itemList.nextSibling);


//nextelementsibling


console.log(itemList.nextElementSibling);
//previoussibling

itemList.previousSibling.textContent='hello word';

//previouselementsibling

itemList.previousElementSibling.style.color='blue';


//createelement

var newDiv=document.createElement('div');




//addclass
newDiv.className='hello';
//add id
newDiv.id='hello';

//setattribute
newDiv.setAttribute('title','hello Div');


//create a text node
var newDivText=document.createTextNode('hellow word');

//addtext to div
//append child

newDiv.appendChild(newDivText);
var container = document.querySelector('Header .container');
var h1=document.querySelector('header h1');



container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';
newDiv.style.fontFamily='bold';


*/
//4th video dom

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event


form.addEventListener('submit', addItem);


// delete event

itemList.addEventListener('click',removeItem);

//filter event

filter.addEventListener('keyup', filterItems);

//add item


function addItem(e){
e.preventDefault();

//get input value
var newItem = document.getElementById('item').value;
var newItem2 = document.getElementById('item2').value;



//create new li element
var li = document.createElement('li');

//add class
li.className='list-group-item';

//addtextnode with input value


li.appendChild(document.createTextNode(newItem+" "+newItem2));


//create delete button element

var deleteBtn = document.createElement('button');
var editBtn = document.createElement('button');

//add class to delete button
editBtn.className='btn btn-primary btn-sm float-right editbtn';
deleteBtn.className='btn btn-danger btn-sm float-right delete';


//append text node
editBtn.appendChild (document.createTextNode('edit'));
deleteBtn.appendChild (document.createTextNode('X'));


//append to li
li.appendChild(editBtn);
li.appendChild(deleteBtn);

//append li to list

itemList.appendChild(li);
saveItemsToLocalStorage();

}

//function to remove item

function removeItem(e){

if(e.target.classList.contains('delete')){

    if(confirm('are you sure?')){

        var li=e.target.parentElement;
        itemList.removeChild(li);
        saveItemsToLocalStorage();
    }
}

}

//function to filter items

function filterItems(e){

    //convert text to lowercase

    var text = e.target.value.toLowerCase();
    

   var items = itemList.getElementsByTagName('li');

    //convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){

            item.style.display = 'block';
        }
        else {
            item.style.display ='none';
        }

    });
}

// Function to save items to local storage
function saveItemsToLocalStorage() {
    var items = itemList.innerHTML;
    localStorage.setItem('items', items);
  }
  
  // Load items from local storage when the page loads
  function loadItemsFromLocalStorage() {
    var items = localStorage.getItem('items');
    if (items) {
      itemList.innerHTML = items;
    }
  }
  
  // Load items from local storage when the page loads
  loadItemsFromLocalStorage();
  

