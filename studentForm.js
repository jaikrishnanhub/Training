var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};


var Base = function(name, email, course){
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
var Student = function(name, email, course, branch){
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

var Employee = function(name, email, course, salary){
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
var btn,del;
$(document).ready(function(){

	$('#studentForm').hide();
	$("#employeeForm").hide();

    $("#student").click(function(){
        $("#employeeForm").hide();
        $("#studentForm").show();
        $("#addbtn1").click(function(){
            var name = $("#studentForm").find('input')[0].value;
            var email = $("#studentForm").find('input')[1].value;
            var course = $("#studentForm").find('input')[2].value;
            var branch = $("#studentForm").find('input')[3].value;
            btn = document.createElement('input');        // Create a <button> element
            btn.type = "button";
            btn.value = "Edit";
            
            
            del = document.createElement('input');        // Create a <button> element
            del.type = "button";
            del.value = "Delete";
            var stud = new Student(name,email,course,branch);
            if(stud.validate()){
                    $('#studentTable tr:eq(-1)').after('<tr><td>'+name+'</td><td>'+email+'</td><td>'+course+'</td><td>'+branch+'</td></tr>');
                $('#studentTable tr:eq(-1)').append(btn);
                $('#studentTable tr:eq(-1)').append(del);
           }
       });
               // $("#studentForm").find('input')[0].value = "";
                //$("#studentForm").find('input')[1].value = "";
            //$("#studentForm").find('input')[2].value = "";
              //  $("#studentForm").find('input')[3].value = "";

              var updateIndex = 0;


            //$("updatebtn1").click(function(updateIndex){
              //  console.log(updateIndex);
               // $('#addbtn1').show();
               // $('#studentTable tr:eq('+updateIndex+')').find('td:eq(0)').innerHTML = $("#studentForm").find('input')[0].value;
                //$('#studentTable tr:eq('+updateIndex+')').find('td:eq(1)').innerHTML = $("#studentForm").find('input')[1].value;
                //$('#studentTable tr:eq('+updateIndex+')').find('td:eq(2)').innerHTML = $("#studentForm").find('input')[2].value;
                //$('#studentTable tr:eq('+updateIndex+')').find('td:eq(3)').innerHTML = $("#studentForm").find('input')[3].value;

              //  $('#studentForm').find('input').each(function(idx,val){
                //    var row = $('#studentTable').find('tr')[updateIndex]     
                 //   $(row).find('td')[idx].innerHTML = val.value;
                //});

            btn.onclick = function(){
                $('#addbtn1').hide();
                var index = btn.parentNode.rowIndex;
                $("#studentForm").find('input')[0].value = $('#studentTable tr:eq('+index+')').find('td:eq(0)').html();
                $("#studentForm").find('input')[1].value =  $('#studentTable tr:eq('+index+')').find('td:eq(1)').html();
                $("#studentForm").find('input')[2].value =  $('#studentTable tr:eq('+index+')').find('td:eq(2)').html();
                $("#studentForm").find('input')[3].value =  $('#studentTable tr:eq('+index+')').find('td:eq(3)').html();
                updateIndex = index;
                console.log(index);
            }
                
            del.onclick=function(){
                var index1 = del.parentNode.rowIndex;
                console.log("Row"+index1+" Deleted");
                $('#studentTable tr:eq('+index1+')').remove();
            }

});
});
$(document).ready(function(){
    $("#employee").click(function(){
        $("#studentForm").hide();
        $("#employeeForm").show();
    });
});
    