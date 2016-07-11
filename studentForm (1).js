var updateIndex = 0;
var globalId = -1;
window.st = [];
function newId(){
    globalId++;
    return globalId;
}

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};


var Base = function(rowid,name, email, course){
    this.rowid = rowid;
    this.name=name;
    this.email=email;
    this.course=course;
}

Base.prototype.validate=function(){

    if (this.name == null || this.name == "") {
        alert("Name must be filled out");
        return false;
    }
    
    var mail = this.email;
    var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
        alert("Not a valid e-mail address");
        return false;
    }  

    if (this.course == null || this.course == "") {
        alert("course must be filled out");
        return false;
    }
    return true;
}
var Student = function(rowid,name, email, course, branch){
    this.rowid = rowid;
    this.name=name;
    this.email=email;
    this.course=course;
    this.branch = branch;
}
inheritsFrom(Student, Base);

Student.prototype.validate = function() {
    if(Base.prototype.validate.call(this)){
        if (this.branch == null || this.branch == "") {
            alert("branch must be filled out");
            return false;
        }
        return true;
    }
    return false;
    
}

var Employee = function(rowid,name, email, course, salary){
    this.rowid = rowid;
    this.name=name;
    this.email=email;
    this.course = course;
    this.salary=salary;
}
inheritsFrom(Employee, Base);

Employee.prototype.validate = function() {
    if(Base.prototype.validate.call(this)){
        if (isNaN(this.salary) || this.salary =="" || this.salary== null) {
            alert("Salary must be filled out with Numbers");
            return false;
        }
        return true;
    }
    return false;
}

$(document).ready(function(){

	$('#studentForm').hide();
	$("#employeeForm").hide();


    $("#student").click(function(){
        $("#hiding").hide();
        $("#employeeForm").hide();
        $("#studentForm").show();
        $("#addbtn1").click(function(){
            var rowid = newId();
            var name = $("#studentForm").find('input')[0].value;
            var email = $("#studentForm").find('input')[1].value;
            var course = $("#studentForm").find('input')[2].value;
            var branch = $("#studentForm").find('input')[3].value;
            var btn = document.createElement('input');        // Create a <button> element
            btn.type = "button";
            btn.value = "Edit";
            
            
            var del = document.createElement('input');        // Create a <button> element
            del.type = "button";
            del.value = "Delete";
            var stud = new Student(rowid,name,email,course,branch);
            if(stud.validate()){
                window.st.push(stud);
                $('#studentTable tr:eq(-1)').after('<tr><td>'+name+'</td><td>'+email+'</td><td>'+course+'</td><td>'+branch+'</td></tr>');
                btn.id = rowid;
                del.id = btn.id;
                
                $('#studentTable tr:eq(-1)').append(btn);
                $('#studentTable tr:eq(-1)').append(del);
                console.log(window.st[rowid]);
                //console.log(del.id);
                //console.log(btn.id);
                //console.log(stud.rowid);

                btn.onclick = function(){
                    window.temp = [];
                    temp = search(btn.id);
                    editing(temp);
                    console.log(temp);
                }

                del.onclick = function(){
                    deleting(del.id);
                }

            }else{
                globalId--;
            }            
         });

        function editing(temp){

            $("#studentForm").find('input')[0].value = temp.name;
            $("#studentForm").find('input')[1].value = temp.email;
            $("#studentForm").find('input')[2].value = temp.course;
            $("#studentForm").find('input')[3].value = temp.branch;

           

            $('#updatebtn1').click(function(){
                    
                    window.alert(x);
            });
        }

        function search(id){
            console.log(id);
            var result = $.grep(window.st,function(check){ return check.rowid == id; });
            return result[0];

        }

        


    });
});

$(document).ready(function(){
    $("#employee").click(function(){
        $("#studentForm").hide();
        $("#employeeForm").show();
    });
});
    