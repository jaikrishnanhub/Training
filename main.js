function loading(){
	var select = document.getElementById("option").value;

	if(select=="student"){
			addStudent();
			window.alert("student");
	}
	if (select=="employee") {
		addEmployee();
		window.alert("Employee");	
	}	
}

 function addStudent(){
 	//window.alert("Student Details");
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

var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');
var emailLable = document.createElement("lable");
var email = document.createElement("input"); //input element, text
email.setAttribute('type',"text");
email.setAttribute('name',"email");
emailLable.innerHTML = "Email :";
f.appendChild(emailLable);
f.appendChild(email);
f.appendChild(linebreak);

var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');
var ageLable = document.createElement("lable");
var age = document.createElement("input"); //input element, text
age.setAttribute('type',"text");
age.setAttribute('name',"age");
ageLable.innerHTML = "Age :";
f.appendChild(ageLable);
f.appendChild(age);
f.appendChild(linebreak);

var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');
var courseLable  = document.createElement("lable");
var course = document.createElement("input"); //input element, text
course.setAttribute('type',"text");
course.setAttribute('name',"course");
courseLable.innerHTML = "Course:";
f.appendChild(courseLable);
f.appendChild(course);

var linebreak = document.createElement('br');
f.appendChild(linebreak);

document.getElementById('form1').innerHTML = "";
document.getElementById('form1').appendChild(f);
 //document.getElementsByTagName('body')[0].appendChild(f);
}

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


var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');

var emailLable = document.createElement("lable");
var email = document.createElement("input"); //input element, text
email.setAttribute('type',"text");
email.setAttribute('name',"email");
emailLable.innerHTML = "Email :";
f.appendChild(emailLable);
f.appendChild(email);
f.appendChild(linebreak);

var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');

var ageLable = document.createElement("lable");
var age = document.createElement("input"); //input element, text
age.setAttribute('type',"text");
age.setAttribute('name',"age");
ageLable.innerHTML = "Age :";
f.appendChild(ageLable);
f.appendChild(age);
f.appendChild(linebreak);


var linebreak = document.createElement('br');
f.appendChild(linebreak);

var linebreak = document.createElement('br');

var salaryLable = document.createElement("lable");
var salary = document.createElement("input"); //input element, text
salary.setAttribute('type',"text");
salary.setAttribute('name',"salary");
salaryLable.innerHTML = "salary :";
f.appendChild(salaryLable);
f.appendChild(salary);
f.appendChild(linebreak);


document.getElementById('form1').innerHTML = "";	
document.getElementById('form1').appendChild(f);
}






















