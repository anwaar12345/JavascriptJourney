/*var age = +prompt("enter value","Value");
if(age  > 0){
alert(1);
}else{
//alert(2);
}*/

var arr = ['arr1'];

arr.push('shah','ji');
arr.pop(); //removes laste index
arr.unshift('syed anwar shah');//add at beginning
arr.shift();
arr.splice(0,0,'syed anwar ahmed shah'); //first arguments is where index to start ending ,2nd argument no of element to remove
var copy = arr.slice(0,1);
alert(arr+ ' copy ' + copy);