function addEmployee(){
	var f = document.createElement("form");
 f.setAttribute('method',"post");
 f.setAttribute('action',"submit.php");

var linebreak = document.createElement('br');

var nameLable = document.createElement("lable");
var name = document.createElement("input"); //input element, text
name.setAttribute('type',"text");
name.setAttribute('name',"username");
nameLable.innerHTML = "Name :";
f.appendChild(nameLable);
f.appendChild(name);
f.appendChild(linebreak);

document.getElementById('form1').innerHTML = "";	
document.getElementById('form1').appendChild(f);
}