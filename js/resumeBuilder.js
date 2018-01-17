/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Zayed Alabbad",
    role: "Student",
    contacts: {
        mobile: "966555555555",
        email: "zayed@me.me",
        github: "zayedd_",
        twitter: "@zayedd_",
        location: "Riyadh"
    },
    welcomeMessage: "Hello, Welcome to my site",
    skills: ["HTML", "CSS", "JavaScript"],
    biopic: "https://pbs.twimg.com/profile_images/947181296429813762/xlTR7M6o_400x400.jpg",
    display: function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for (var index = 0; index < this.skills.length; index++) {
            $("#skills").append(HTMLskills.replace("%data%", this.skills[index]));
        }
    }
};
bio.display();

var education = {
    schools: [
        {
            name: "Ziyad ibn saad",
            location: "Riyadh",
            degree: "High School",
            majors: ["no"],
            dates: "2009"
        },
        {
            name: "IMAMU",
            location: "Riyadh",
            degree: "BA",
            majors: ["CS", "IS"],
            dates: "2013"
        }
    ],
    onlineCourses: [
        {
            title: "FrontEnd nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    display: function(){
        //Show Schools
        this.schools.forEach(function(element) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", element.name) + HTMLschoolDegree.replace("%data%", element.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", element.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", element.location));
            element.majors.forEach(function(e){
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", e));
            })
        });
        //Show Online Courses
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(element){
            $("#education").append(HTMLonlineTitle.replace("%data%", element.title) + HTMLonlineSchool.replace("%data%", element.school));
            $("#education").append(HTMLonlineDates.replace("%data%", element.dates));
            $("#education").append(HTMLonlineURL.replace("%data", element.url));
        });
    }
};
education.display();

var work = {
    jobs: [
        {
            employer: "Test co",
            title: "web Developer",
            location: "Riyadh",
            dates: "2017-2018",
            description: "lorem ipsom"
        },
        {
            employer: "Test2 co",
            title: "web Designer",
            location: "Dhahran",
            dates: "2003-2018",
            description: "lorem ipsom"
        }
    ],
    display: function(){
        for (var i = 0; i < this.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[0].employer) + HTMLworkTitle.replace("%data%", this.jobs[i].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[0].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[0].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[0].description));
        }
    }
};
work.display();

var projects = {
    projects: [
        {
            title: "mojadwel",
            dates: "2017-2018",
            description: "Create timetables",
            images: ["http://via.placeholder.com/350x150", "http://via.placeholder.com/200x100"]
        }
    ],
    display: function(){
        this.projects.forEach(function(element) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", element.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", element.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", element.description));
            element.images.forEach(function(e){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", e));
            });
        });
    }
};
projects.display();

function showFooterData() {
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
showFooterData();

$("#mapDiv").append(googleMap);