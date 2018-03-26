//*************************************
//Prep
//*************************************

//Declare number of students per page
const numberPerPage = 10;

//Create a global list of ALL students
let $allStudents = $(".student-list li").length;

//*************************************
//Build Initial List and Show on Page
//*************************************

//Hide all students on the initial page
$(".student-list").children().hide();

//Generate an array showing only 10 students max
$(".student-list").children().slice(0, numberPerPage).show();

//*************************************
//Create and append page links to page
//*************************************

//Append empty pagination class divs
$(".page").append("<div class='pagination'><ul></ul></div>");

//For each group of 10 students...
for (var i = 1; i <= $allStudents / numberPerPage + 1; i++) {
  //Add this page link into the empty pagination class div at bottom of page
  $(".pagination ul").append("<li><a href='#'>" + i + "</a></li>");
  //checking for success
  console.log("function working!")
}

//******PROGRESS REPORT: At this point, 10 students are displayed, and page links appear at bottom, but are not linked to corresponding Students

//*************************************
//Show active pages and page links
//*************************************

//Sets first group of 10 students to active on page load
$(".pagination ul li a:eq( 0 )").addClass("active");

//Creates click function. When clicked,
$(".pagination ul li a").on("click", function () {
  //previous link becomes inactive
  $(".pagination ul li a").removeClass();
  //and current link becomes active
  $(this).addClass("active");
});

//Creates another click function: Page link displays correct array of Students
$(".pagination ul li").on('click', function () {
  //upon click, all students are hidden again
  $(".student-list").children().hide();
  //Then, only correct students are displayed.
  $(".student-list").children().slice($(this).index() * 10, $(this).index() * 10 + 10).show().fadeIn();
});
