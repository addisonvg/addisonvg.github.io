
//Responsive Nav menu
$(window).scroll(function() { 
var scroll = $(window).scrollTop(); 
if (scroll >= 300) { $(document).ready(function(){
$("#navbar").addClass("tiny");$("#menu").addClass("tiny"); })} 
if (scroll <= 299) { $(document).ready(function(){
    $("#navbar").removeClass("tiny"); $("#menu").removeClass("tiny");
})} });


//Mobile Friendly Menu
$(".mobile-menu").click(function(){
    $(".flex-box.menu").toggle(".show-mobile-menu", 2000);
})

//start with some info on me
//TODO - edit welcome message
var bio = {
    "name" : "Addison van Gulden",
    "role" : "Aspiring Front-End Developer",
    "contacts" : {
        "email" : "addisonvangulden@gmail.com",
        "mobile" : "802-989-5568",
        "github" : "addisonvg",
        "location" : "Oakland, CA"
        },
    "biopic" : "images/biopic.jpg",
    "welcome" : "With 3 years of experience working with a web developemnt platform targeted at small busniess owners.  I have an great understanding of consumer website needs, translating consumer insights into product development, application usabiity, and creating appealing easy to navigate websites.  Let me bring my passion and experience to your team!",
    "skills" : ["Responsive Web-Design", "html", "css", "javascript", "Advanced Browser TroubleShooting"]
    };

bio.display = function(){
//Name, Role, Bio pic
$("#header").append(HTMLbioPic.replace("%data%", "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10527276_10101931491831750_8502039349858969673_n.jpg?oh=6568a65b99ddc549dc9c4da938e6e49f&oe=55451EA1&__gda__=1429604144_320365ce95965174010023504c758086"));
$("#title ").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#title").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome));
  
//CONTACTS 
    var formattedMobile = HTMLmobile.replace
    ("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace
    ("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace
    ("%data%", bio.contacts.github);
    var formattedContacts = formattedMobile + formattedEmail + formattedGithub;
    $("#topContacts").append(formattedContacts);
    //Add COntacts to Footer
    $("#footerContacts").append(formattedContacts);
//}

//add skills to header 
if (bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
}
}
bio.display();


//WORK SECTION
// TODO - fill in past work!
var work = {
    "jobs" : [
        {
        "employer" : "Wix.com",
        "title" : "Technical Services",
        "dates" : "August 2012 - Present",
        "location" : "San Francisco, CA",
        "description" : "Serve as technical liaison between developers and customer support staff; investigate and manage bugs, special cases.  Work with response teams in Tel Aviv, Lithuania, and Ukraine on urgent systems issues to ensure product and service integrity for over 55 + million users"  
        },
        {
        "employer" : "BeyondDifferences.org",
        "title" : "Web Producer / Manager",
        "dates" : "November 2012 - Present",
        "location" : "Marin County, CA",
        "description" : "Provide website advising, implementation and upkeep on CMS based site editing for non-profit organization focused on ending social isolation among teenagers.Lead launch of new web initiatives in coordination with marketing and PR campaign deadlinesFocus on creating content and design accessible to teen audiences as well as parents and educators"
        }
    ]
};


//Show Work 
work.display = function(){  
for (job in work.jobs) {
    // create new div for work experience
    $("#work-entry").append(HTMLworkStart);
    //concat employer and title 
    var formattedEmployer = HTMLworkEmployer.replace
    (/%data%/g, work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    }
    
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry").append(formattedDescription);
}
work.display();

//scroll over for work section 
$(".work-entry.col-6").on('mouseenter','div',function () {
    $(this).addClass("work-entry-after");
});

$(".work-entry.col-6").on('mouseleave','div',function () {
    $(this).removeClass("work-entry-after");
});
 

// PROJECTS
var projects = {
    "projects" : [
        {
        "company" : "Udactiy",
        "dates" : "Dec 2014",
        "title" : "Project 1: Website Mock-up",
        "description" : "The focus of this project was to replicate a PDF mock up for a webpage with >%92 accuracery",
        "images" : ["images/udacity-logo.png"],
        },
        {
        "company" : "Beyond DIfferences",
        "dates" : "Nov 2012 - Present",
        "title" : "http://BeyondDifferences.org",
        "description" : "a great website 2",
        "images" : ["images/bd-logo.png"],
        },
        {
        "company" : "Beyond Differences",
        "title" : "http://JoinBeTheOne.com",
        "dates" : "Nov 2013 - Present",
        "description" : "a great website 3",
        "images" : ["betheone-logo.png"],
        },
    ]
};

// lets show projects
projects.display = function() {
for (project in projects.projects) {
    $("#proj-entry").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace
    (/%data%/g, projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace
    ("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace
    ("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
 
    if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace
            ("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }   
}
};
projects.display();


//Jquery for Projects section
$(".project-entry.col-4").on('mouseenter','a',function () {
    $(this).addClass("orange-text-after" ,2000 ,"easeOutBounce");
});

$(".project-entry.col-4").on('mouseleave','a',function () {
    $(this).removeClass("orange-text-after" ,2000 ,"easeOutBounce");
});


//EDUCATION
var education = {
    "schools" : [
        {
        "name" : "University of Vermont",
        "dates" : "2004-2008 ",
        "location" : "Burlington, VT",
        "degree" : "Bachelors of Science",
        "major" : "Business Administration, Marketing Concentration",
        "url" : "http://www.uvm.edu/"
        }
        ],
    "online" : [
        {
        "title" : "Front-End Web Development",
        "school" : "Udacity",
        "dates" : "2014-Present",
        "url" : "https://www.udacity.com/course/nd001",
        }
    ]
}


//lets show EDUCATION
education.display = function (){
for (school in education.schools){
    $("#school").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace(/#/g, education.schools[school].url);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    
}
$("#online").append(HTMLonlineStart);
for (online in education.online) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
    $(".education-entry:last").append(formattedOnlineTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);
    $(".education-entry:last").append(formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL= HTMLonlineURL.replace(/%data%/g, education.online[online].url);
    $(".education-entry:last").append(formattedOnlineURL);
}
};
education.display ();


/*
 Internationalization
  Ensure name takes on the format "Firstname LASTNAME"
*/
function inName() {
  // split the name object into two separate strings
  bio.name = bio.name.trim().split(" ");
  // Convert the second string to Uppercase
  bio.name[1] = bio.name[1].slice(0,1).toLowerCase();  
  bio.name[2] = bio.name[2].toUpperCase();
  
  // Convert the first letter of the first string to uppercase
  // Then concatenate it with the lowercase version of the remaining strings
  bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
  return bio.name[0] + " " + bio.name[1] + ". " + bio.name[2];
}

// This appends the "internationalize" button in the footer
$("#footer").append(internationalizeButton);


$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});


//MAP
$("#mapDiv").append(googleMap);

