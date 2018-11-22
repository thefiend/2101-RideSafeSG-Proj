var scenario = 0;

AFRAME.registerComponent("scenario-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      var num_of_cars = 0;
      var num_of_people = 0;
      var type_of_car = 0;
      
      var title = document.title;
    
      var car_mapping = [
        {
            type: "#Taxi",
            pos: "23.060 1.890 -55.446",
            end_pos: "-34.299 1.890 -55.446",
            rotation: "0 180 0",
            speed: "6000",
            scale: "2 2 2"
        },
        {
            type: "#RedCar",
            pos: "-24.422 -3.171 -62.222",
            end_pos: "168 -3.171 -62.222",
            rotation: "0 270 0",
            speed: "6500",
            scale: "3 3 3"
        },
        {
            type: "#Taxi",
            pos: "8.519 2.328 -45.505",
            end_pos: "8.519 2.328 44.187",
            rotation: "0 270 0",
            speed: "6000",
            scale: "2 2 2"
        },
        {
            type: "#Truck",
            pos: "7.348 0.881 -49.412",
            end_pos: "7.348 0.881 44.187",
            rotation: "0 90 0",
            speed: "9000",
            scale: "0.1 0.1 0.1"
        },
        {
            type: "#RedCar",
            pos: "11.120 -2.987 -49.412",
            end_pos: "11.120 -2.987 44.187",
            rotation: "0 180 0",
            speed: "8000",
            scale: "3 3 3"
        },
      ];
	  
	  var people_mapping = [
        {
            type: "#Girl",
            pos: "17.832 -0.357 -50.016",
            end_pos: "-18.000 -0.357 -50.016",
            rotation: "0 280.000 0",
            speed: "15000",
            scale: "2 2 2"
        },
        {
            type: "#Girl2",
            pos: "3.850 -0.308 -61.675",
            end_pos: "3.850 -0.628 -52.540",
            rotation: "0 0 0",
            speed: "15000",
            scale: "2 2 2"
        },
        {
            type: "#OldMen",
            pos: "-3.980 -0.713 -22.000",
            end_pos: "-3.980 -0.713 -41.483",
            rotation: "0 180 0",
            speed: "30000",
            scale: "2 2 2"
        },
        {
            type: "#Boy",
            pos: "7.206 -0.192 0.000",
            end_pos: "7.206 -0.192 -29.990",
            rotation: "0 360.000 0",
            speed: "20000",
            scale: "1.000 1.000 1.000"
        },
        {
            type: "#Girl3",
            pos: "16.298 -0.627 -43.395",
            end_pos: "16.298 -0.627 20.000",
            rotation: "0.050 0 0",
            speed: "15000",
            scale: "2 2 2"
        },
      ];

      var xpos = 0;
      var ypos = 0;
      var zpos = 0;

      var xrot = 0;
      var yrot = 0;
      var zrot = 0;

      if (x == "scenario1_plane") {
        //var change = document.querySelector('a-link').navigate('index.html');
        //change to scenario 1 url
        window.location.replace("index.html");
        console.log("Scenario 1 Selected");        
      } 
      else if (x == "scenario2_plane") {//-99.60014797922804 1 16.280552465306243
        console.log("Scenario 2");
        window.location.replace("ParkScenario.html");        
      } 
      else if (x == "scenario3_plane") {
        console.log("Scenario 3");
        window.location.replace("index.html");
      } 
      else if (x == "car_setting") {
        console.log("Car Settings"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        var xrot = 0;
        var yrot = 180;
        var zrot = 0;
      }

      else if (x == "pedestrian_setting") {
        console.log("Pedestrian Settings"); //-12.700  1 36.403
        xpos = -90.448;
        ypos = 1;
        zpos = 20.406;

        var xrot = 0;
        var yrot = 270;
        var zrot = 0;
      }
      //car_val onwards generate number of cars
      else if (x == "car_val_0") {
        console.log("car_val_0"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 0;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_1") {
        console.log("car_val_1"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 1;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_2") {
        console.log("car_val_2"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 2;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;

      } else if (x == "car_val_3") {
        console.log("car_val_3"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 3;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_4") {
        console.log("car_val_4"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 4;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_5") {
        console.log("car_val_5"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_cars = 5;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      }
      else if (x == "pedestrian_val1") {
        console.log("pedestrian_val1"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_people = 1;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val2") {
        console.log("pedestrian_val2"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_people = 2;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;

      } else if (x == "pedestrian_val3") {
        console.log("pedestrian_val3"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_people = 3;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val4") {
        console.log("pedestrian_val4"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_people = 4;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val5") {
        console.log("pedestrian_val5"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        num_of_people = 5;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      }
       else if (x == "return_main") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.890;
        ypos = 1;
        zpos = 13.554;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      }

      else if (x == "return_main2") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.890;
        ypos = 1;
        zpos = 13.554;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      }
      else if(x == "return_main3"){
         console.log("return_main"); //-12.7 1 14.962
        xpos = -99.890;
        ypos = 1;
        zpos = 13.554;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      }
      else if (x == "leaderboard") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -71.322;
        ypos = 1;
        zpos = 47.062;

        var xrot = 0;
        var yrot = 270;
        var zrot = 0;
      }//window.location.href 

      else if(x == "scenario_start"){

        if(title == "Scenario 1"){
            scenario = 1;

            xpos = -99.60014797922804;
            ypos = 1;
            zpos = 16.280552465306243;

            var xrot = 0;
            var yrot = 90;
            var zrot = 0;
        }
        else if(title == "Scenario 2"){
            scenario = 2;
           
            xpos = -99.60014797922804;
            ypos = 1;
            zpos = 16.280552465306243;

            var xrot = 0;
            var yrot = 90;
            var zrot = 0;
        }
        else if(title == "Scenario 3"){
            scenario = 2;
            xpos = -99.60014797922804;
            ypos = 1;
            zpos = 16.280552465306243;

            var xrot = 0;
            var yrot = 90;
            var zrot = 0;
        }
      }

    console.log("Number of cars: " + num_of_cars);
    console.log("Position of Car: " + car_mapping[0]);
        var count;
        for(count = 0; count < num_of_cars; count++){
            // create new car object
           var car = document.createElement("a-box");
            car.setAttribute("id", "car" + count);
            car.setAttribute("gltf-model", car_mapping[count].type);
            car.setAttribute("scale", car_mapping[count].scale);
            car.setAttribute("rotation", car_mapping[count].rotation);
            car.setAttribute("position", car_mapping[count].pos);
            document.querySelector("a-scene").appendChild(car);

            // add animation to new car object
            var new_car = document.getElementById("car" + count);
            var car_animation = document.createElement("a-animation");
            car_animation.setAttribute("attribute","position");
            car_animation.setAttribute("dur",car_mapping[count].speed);
            car_animation.setAttribute("repeat","indefinite");
            car_animation.setAttribute("from", car_mapping[count].pos);
            car_animation.setAttribute("to", car_mapping[count].end_pos);
            new_car.appendChild(car_animation);
        }
		
	console.log("Number of people: " + num_of_people);
    console.log("Position of people: " + people_mapping[0]);
        var count;
        for(count = 0; count < num_of_people; count++){
            // create new people object
           var people = document.createElement("a-box");
            people.setAttribute("id", "people" + count);
            people.setAttribute("gltf-model", people_mapping[count].type);
            people.setAttribute("scale", people_mapping[count].scale);
            people.setAttribute("rotation", people_mapping[count].rotation);
            people.setAttribute("position", people_mapping[count].pos);
            document.querySelector("a-scene").appendChild(people);

            // add animation to new people object
            var new_people = document.getElementById("people" + count);
            var people_animation = document.createElement("a-animation");
            people_animation.setAttribute("attribute","position");
            people_animation.setAttribute("dur",people_mapping[count].speed);
            people_animation.setAttribute("repeat","indefinite");
            people_animation.setAttribute("from", people_mapping[count].pos);
            people_animation.setAttribute("to", people_mapping[count].end_pos);
            new_people.appendChild(people_animation);
        }

      //shift camera pos
      var camera = document.getElementById("player");
      camera.setAttribute("position", { x: xpos, y: ypos, z: zpos }); //43.955 3.302 14.771
      camera.setAttribute("rotation", { x: xrot, y: yrot, z: zrot });
    });
  }
});

AFRAME.registerComponent("select-vehicle-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      if (x == "PMD_select") {
        type_of_car = 0;
        console.log("PMD Selected " + type_of_car);

        var pmd = document.createElement("a-box");
        var camera = document.getElementById("player");
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "0 -0.8 -1");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        pmd.setAttribute("material", "color: gray; opacity: 1");
        camera.setAttribute("rotation", "0 0 0");
        document.querySelector("a-camera").appendChild(pmd);
      } else {
        type_of_car = 1;
        console.log("Bike Selected: " + type_of_car);

        var pmd = document.createElement("a-box");
        var camera = document.getElementById("player");
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "0 -0.8 -1");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        pmd.setAttribute("material", "color: red; opacity: 1");
        camera.setAttribute("rotation", "0 0 0");
        document.querySelector("a-camera").appendChild(pmd);
      }

      // enable user to move
      document
        .querySelector("a-camera")
        .setAttribute("wasd-controls-enabled", "true");

      //write into temp file and shift camera pos
      var camera = document.getElementById("player");
      camera.setAttribute("position", { x: -0.924, y: 1, z: -11.860 }); //0.732 3.312 14.771
      camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
    });
  }
});

AFRAME.registerComponent("bound-collider", {
  init: function() {
    var x = this.el.getAttribute("id");

    this.el.addEventListener("hitstart", e => {
      // Collision ! increment the scoreboard
      var camera = document.getElementById("player");
      console.log(x + " has collided");
      if (x == "quesiton1_bound") {
        // enable user to move
        document
          .querySelector("a-camera")
          .setAttribute("wasd-controls-enabled", "false");

        //show question 1
        var question = document.getElementById("Question_1");
        var question_desc = document.getElementById("Question_1_description");
        var o1 = document.getElementById("q1_option1");
        var o2 = document.getElementById("q1_option2");
        var o3 = document.getElementById("q1_option3");
        var o4 = document.getElementById("q1_option4");
        var camera = document.getElementById("player");
        question.setAttribute("visible", true);
        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true);
        camera.setAttribute("position", { x: -1.110, y: 1, z: -11.860}); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "quesiton2_bound") {
        //show question 1
        var question = document.getElementById("Question_2");
        var question_desc = document.getElementById("Question_2_description");
        var o1 = document.getElementById("q2_option1");
        var o2 = document.getElementById("q2_option2");
        var o3 = document.getElementById("q2_option3");
        var o4 = document.getElementById("q2_option4");
        var camera = document.getElementById("player");
        question.setAttribute("visible", true);
        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true);//-1.110
         camera.setAttribute("position", { x:  -1.110, y: 1, z: -45.330}); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      }

      else if(x == "scenario1_end"){
        //score_s1 scoreText_s1 score_submit_s1
        var scoreboard = document.getElementById("score_s1");
        var scoreVal = document.getElementById("scoreText_s1");
        var scoresubmit = document.getElementById("score_submit_s1");

        scoreboard.setAttribute("visible","true");
        scoreVal.setAttribute("visible","true");
        scoresubmit.setAttribute("visible","true");
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      }
      else if(x == "car0"){
        console.log("You got hit by car");
      }
      else if(x == "car1"){
        console.log("You got hit by car");
      }
    });
  }
});

AFRAME.registerComponent("select-option-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      console.log(x + " has been selected");
      if (x == "q1_option1") {
       
        var question = document.getElementById("Question_1");
        var question_desc = document.getElementById("Question_1_description");
        var o1 = document.getElementById("q1_option1");
        var o2 = document.getElementById("q1_option2");
        var o3 = document.getElementById("q1_option3");
        var o4 = document.getElementById("q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
       
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q1');
      } 
      else if (x == "q1_option2") {
        
        var question = document.getElementById("Question_1");
        var question_desc = document.getElementById("Question_1_description");
        var o1 = document.getElementById("q1_option1");
        var o2 = document.getElementById("q1_option2");
        var o3 = document.getElementById("q1_option3");
        var o4 = document.getElementById("q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
    
        console.log("Correct");
       var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q1');
      } else if (x == "q1_option3") {
       
        var question = document.getElementById("Question_1");
        var question_desc = document.getElementById("Question_1_description");
        var o1 = document.getElementById("q1_option1");
        var o2 = document.getElementById("q1_option2");
        var o3 = document.getElementById("q1_option3");
        var o4 = document.getElementById("q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        
        console.log("Wrong");
       var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q1');
      } else if (x == "q1_option4") {
       
        var question = document.getElementById("Question_1");
        var question_desc = document.getElementById("Question_1_description");
        var o1 = document.getElementById("q1_option1");
        var o2 = document.getElementById("q1_option2");
        var o3 = document.getElementById("q1_option3");
        var o4 = document.getElementById("q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q1');
      } else if (x == "q2_option1") {
        
        var question = document.getElementById("Question_2");
        var question_desc = document.getElementById("Question_2_description");
        var o1 = document.getElementById("q2_option1");
        var o2 = document.getElementById("q2_option2");
        var o3 = document.getElementById("q2_option3");
        var o4 = document.getElementById("q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        //answer Wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 1, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q2');
      } else if (x == "q2_option2") {
       
        var question = document.getElementById("Question_2");
        var question_desc = document.getElementById("Question_2_description");
        var o1 = document.getElementById("q2_option1");
        var o2 = document.getElementById("q2_option2");
        var o3 = document.getElementById("q2_option3");
        var o4 = document.getElementById("q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer Correct
        console.log("Correct"); //93.184

        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 1, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q2');
      } else if (x == "q2_option3") {
        
        var question = document.getElementById("Question_2");
        var question_desc = document.getElementById("Question_2_description");
        var o1 = document.getElementById("q2_option1");
        var o2 = document.getElementById("q2_option2");
        var o3 = document.getElementById("q2_option3");
        var o4 = document.getElementById("q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 1, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q2');
      } else if (x == "q2_option4") {
        
        var question = document.getElementById("Question_2");
        var question_desc = document.getElementById("Question_2_description");
        var o1 = document.getElementById("q2_option1");
        var o2 = document.getElementById("q2_option2");
        var o3 = document.getElementById("q2_option3");
        var o4 = document.getElementById("q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 1, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector('#player').emit('S1Q2');
      }

      //write into temp file and shift camera pos
    });
  }
});
