var mongoose = require("mongoose");
var Project = require("./models/project");
var Task = require("./models/task");

var data = [
  {
    title: "Cloud's Rest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    title: "Desert Mesa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];

function seedDB() {
  //Remove all campgrounds
  Project.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed projects!");
    Task.deleteMany({}, function(err) {
      if (err) {
        console.log(err);
      }
      console.log("removed tasks!");
      //add a few campgrounds
      data.forEach(function(seed) {
        Project.create(seed, function(err, project) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a project");
            //create a comment
            Task.create(
              {
                title: "My first task!",
                description: "Please rewrite Readme.md file already!"
              },
              function(err, task) {
                if (err) {
                  console.log(err);
                } else {
                  project.tasks.push(task);
                  project.save();
                  console.log("Created new task");
                }
              }
            );
          }
        });
      });
    });
  });
  //add a few comments
}

module.exports = seedDB;
