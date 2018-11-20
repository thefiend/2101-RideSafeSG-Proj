AFRAME.registerComponent("scenario-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      var num_of_cars = 0;
      var num_of_people = 0;
      var type_of_car = 0;
      var scenario = 0;

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
            speed: "5000",
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

      var xpos = 0;
      var ypos = 0;
      var zpos = 0;

      var xrot = 0;
      var yrot = 0;
      var zrot = 0;

      if (x == "scenario1_plane") {
        console.log("Scenario 1");
        scenario = 1;

        xpos = 43.955;
        ypos = 1;
        zpos = 14.771;
      } else if (x == "scenario2_plane") {
        console.log("Scenario 2");
        scenario = 2;

        xpos = 43.955;
        ypos = 1;
        zpos = 14.771;
      } else if (x == "scenario3_plane") {
        console.log("Scenario 3");
        xpos = 43.955;
        ypos = 1;
        zpos = 14.771;
      } else if (x == "scenario4_plane") {
        console.log("Scenario 4");
        xpos = 43.955;
        ypos = 1;
        zpos = 14.771;
      } else if (x == "scenario5_plane") {
        console.log("Scenario 5");
        xpos = 43.955;
        ypos = 1;
        zpos = 14.771;
      } else if (x == "setting") {
        console.log("Settings"); //-12.700  1 36.403
        xpos = -16.469;
        ypos = 1;
        zpos = 36.403;

        var xrot = 0;
        var yrot = 90;
        var zrot = 0;
      }
      //car_val onwards generate number of cars
      else if (x == "car_val_0") {
        console.log("car_val_0"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 0;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_1") {
        console.log("car_val_1"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 1;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_2") {
        console.log("car_val_2"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 2;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;

      } else if (x == "car_val_3") {
        console.log("car_val_3"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 3;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_4") {
        console.log("car_val_4"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 4;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_5") {
        console.log("car_val_5"); //-12.700  1 36.403
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        num_of_cars = 5;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "return_main") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -12.7;
        ypos = 1;
        zpos = 14.962;

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
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
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "0 -0.8 -1");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        pmd.setAttribute("material", "color: gray; opacity: 1");
        document.querySelector("a-camera").appendChild(pmd);
      } else {
        type_of_car = 1;
        console.log("Bike Selected: " + type_of_car);

        var pmd = document.createElement("a-box");
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "0 -0.8 -1");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        pmd.setAttribute("material", "color: red; opacity: 1");
        document.querySelector("a-camera").appendChild(pmd);
      }

      // enable user to move
      document
        .querySelector("a-camera")
        .setAttribute("wasd-controls-enabled", "true");

      //write into temp file and shift camera pos
      var camera = document.getElementById("player");
      camera.setAttribute("position", { x: 0.732, y: 2, z: 14.771 }); //0.732 3.312 14.771
      // camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
    });
  }
});

AFRAME.registerComponent("bound-collider", {
  init: function() {
    var x = this.el.getAttribute("id");

    this.el.addEventListener("hitstart", e => {
      // Collision ! increment the score

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
        camera.setAttribute("position", { x: 0.732, y: 2, z: -10 }); //0.732 3.312 14.771
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
        o4.setAttribute("visible", true);
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
        var result = document.getElementById("Question_1_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "q1_option2") {
        var result = document.getElementById("Question_1_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "q1_option3") {
        var result = document.getElementById("Question_1_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "q1_option4") {
        var result = document.getElementById("Question_1_Result_Correct");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "green");
        console.log("Correct");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 2, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "q2_option1") {
        var result = document.getElementById("Question2_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 97, y: 2, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 90, y: 0, z: 0 });
      } else if (x == "q2_option2") {
        var result = document.getElementById("Question_2_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong"); //93.184

        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 97, y: 2, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 90, y: 0, z: 0 });
      } else if (x == "q2_option3") {
        var result = document.getElementById("Question_2_Result_Wrong");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "red");
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 97, y: 2, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 90, y: 0, z: 0 });
      } else if (x == "q2_option4") {
        var result = document.getElementById("Question_2_Result_Correct");
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
        result.setAttribute("visible", true);
        result.setAttribute("color", "green");
        console.log("Correct");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 97, y: 2, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      }

      //write into temp file and shift camera pos
    });
  }
});
