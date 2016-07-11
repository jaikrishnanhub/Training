$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object

  var context={
      inputs:[
      { type : "text"  ,name : "name",},
      { type : "text"  ,name : "email",},
      { type : "text"  ,name : "course",},
      ]
  };



  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});

$(function(){
	var theTemplateScript1 = $("#table-template").html();

	var theTemplate1 =  Handlebars.compile(theTemplateScript1);

	var context1 = {
		inputs1:[
			{type : "Name"},
			{type : "Email"},
			{type : "Course"}
		]
	};

	var theCompiledHtml1 = theTemplate1(context1);

	$('.table-placeholder').html(theCompiledHtml1);
});
