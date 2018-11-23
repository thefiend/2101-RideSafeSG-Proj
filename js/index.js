var playerName = "John"; //name of player to be submitted to firebase
var scenario = 1;
var scoreCounter = 0; //tracks the score of the user for this scenario
var scoreSubmitted = 0; //set to 1 if score has been submitted before
function setup() {
  var config = {
    apiKey: "AIzaSyA71-oc_-WGW8JYRPKRdJLuSxp2MSp5NxM",
    authDomain: "ridesafesg-b66f7.firebaseapp.com",
    databaseURL: "https://ridesafesg-b66f7.firebaseio.com",
    projectId: "ridesafesg-b66f7",
    storageBucket: "ridesafesg-b66f7.appspot.com",
    messagingSenderId: "574140119144"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  database = firebase.database();

  // Start loading the data
  loadFirebase();
}

function loadFirebase() {
  //read
  var ref = database.ref("leaderboard");
  //call method to retrieve leaderboard

  ref.on("value", getLeaderboard, errData);

  //insert dummy data
  // var postsRef = ref;
  // var newPostRef = postsRef.push();
  // newPostRef.set({
  //   player: "Player",
  //   score: 2,
  //   scenario : "scenario2"
  // });
}

function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

function getLeaderboard(data) {
  console.log("Retrieving Leaderboard......");
  //retrieve score
  //console.log(data);
  var score_val = data.val();
  var keys = Object.keys(score_val);

  var usernames = document.getElementById("usernames_leaderboard");
  var scores = document.getElementById("scores_leaderboard");
  var scenarios = document.getElementById("scenarios_leaderboard");
  //var display = " ";
  var highestScore = 0;
  var usernameArr = [];
  var scoreArr = [];
  var scenarioArr = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var score = score_val[key];

    if (score.score >= highestScore) {
      console.log(
        "TRUE, " + score.score + " is higher or equals to " + highestScore
      );
      highestScore = score.score;
      usernameArr.unshift(score.player);
      scoreArr.unshift(score.score);
      scenarioArr.unshift(score.scenario);
    } else {
      usernameArr.push(score.player);
      scoreArr.push(score.score);
      scenarioArr.push(score.scenario);
    }
  }
  var display = "";
  var display2 = "";
  var display3 = "";
  for (var i = 0; i < usernameArr.length; i++) {
    display = display + usernameArr[i] + "\n\n";
    display2 = display2 + scoreArr[i] + "\n\n";
    display3 = display3 + scenarioArr[i] + "\n\n";
  }

  //append into leaderboard
  usernames.setAttribute("value", display);
  scores.setAttribute("value", display2);
  scenarios.setAttribute("value", display3);
}

var car_mapping = [
  [
    {
      type: "#Taxi",
      pos: "23.060 1.276 -52.217",
      end_pos: "-34.299 1.276 -52.217",
      rotation: "0 180 0",
      speed: "6000",
      scale: "2 2 2"
    },
    {
      type: "#RedCar",
      pos: "-36.223 -3.862 -58.644",
      end_pos: "168 -3.862 -58.644",
      rotation: "0 270 0",
      speed: "6500",
      scale: "3 3 3"
    },
    {
      type: "#Taxi",
      pos: "4.074 1.200 -45.505",
      end_pos: "4.074 1.200 44.187",
      rotation: "0 270 0",
      speed: "6000",
      scale: "2 2 2"
    },
    {
      type: "#Truck",
      pos: "3.665 -0.013 -49.412",
      end_pos: "3.665 -0.013 44.187",
      rotation: "0 90 0",
      speed: "9000",
      scale: "0.1 0.1 0.1"
    },
    {
      type: "#RedCar",
      pos: "6.678 -3.697 -46.533",
      end_pos: "6.678 -3.697 44.187",
      rotation: "0 180 0",
      speed: "8000",
      scale: "3 3 3"
    }
  ]
];

var people_mapping = [
  [
    {
      type: "#Girl",
      pos: "51.221 -0.213 -44.911",
      end_pos: "-26.149 -0.213 -44.911",
      rotation: "0 280.000 0",
      speed: "15000",
      scale: "1 1 1"
    },
    {
      type: "#Girl2",
      pos: "0.245 -0.018 -61.675",
      end_pos: "0.245 -0.018 -52.540",
      rotation: "0 0 0",
      speed: "15000",
      scale: "1 1 1"
    },
    {
      type: "#OldMen",
      pos: "-4.916 -0.292 -22.000",
      end_pos: "-4.916 -0.292 -41.483",
      rotation: "0 180 0",
      speed: "30000",
      scale: "1 1 1"
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
      scale: "1 1 1"
    }
  ]
];

function loadCars(prev_num_of_cars, num_of_cars) {
  console.log("Number of cars: " + num_of_cars);
  var count;
  for (count = prev_num_of_cars; count < num_of_cars; count++) {
    // create new car object
    var car = document.createElement("a-box");
    car.setAttribute("id", "car" + count);
    car.setAttribute("gltf-model", car_mapping[scenario - 1][count].type);
    car.setAttribute("scale", car_mapping[scenario - 1][count].scale);
    car.setAttribute("rotation", car_mapping[scenario - 1][count].rotation);
    car.setAttribute("position", car_mapping[scenario - 1][count].pos);
    document.getElementById("scene" + scenario).appendChild(car);

    // add animation to new car object
    var new_car = document.getElementById("car" + count);
    var car_animation = document.createElement("a-animation");
    car_animation.setAttribute("attribute", "position");
    car_animation.setAttribute("dur", car_mapping[scenario - 1][count].speed);
    car_animation.setAttribute("repeat", "indefinite");
    car_animation.setAttribute("from", car_mapping[scenario - 1][count].pos);
    car_animation.setAttribute("to", car_mapping[scenario - 1][count].end_pos);
    new_car.appendChild(car_animation);
  }
}

function loadPedestrians(prev_num_of_people, num_of_people) {
  console.log("Number of pedestrians: " + num_of_people);
  var count;
  for (count = 0; count < num_of_people; count++) {
    // create new people object
    var people = document.createElement("a-box");
    people.setAttribute("id", "people" + count);
    people.setAttribute("gltf-model", people_mapping[scenario - 1][count].type);
    people.setAttribute("scale", people_mapping[scenario - 1][count].scale);
    people.setAttribute(
      "rotation",
      people_mapping[scenario - 1][count].rotation
    );
    people.setAttribute("position", people_mapping[scenario - 1][count].pos);
    document.getElementById("scene" + scenario).appendChild(people);

    // add animation to new people object
    var new_people = document.getElementById("people" + count);
    var people_animation = document.createElement("a-animation");
    people_animation.setAttribute("attribute", "position");
    people_animation.setAttribute(
      "dur",
      people_mapping[scenario - 1][count].speed
    );
    people_animation.setAttribute("repeat", "indefinite");
    people_animation.setAttribute(
      "from",
      people_mapping[scenario - 1][count].pos
    );
    people_animation.setAttribute(
      "to",
      people_mapping[scenario - 1][count].end_pos
    );
    new_people.appendChild(people_animation);
  }
}

AFRAME.registerComponent("scenario-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      var prev_num_of_cars = 0;
      var num_of_cars = 2;

      var prev_num_of_people = 0;
      var num_of_people = 2;
      var type_of_car = 0;

      var title = document.title;

      var xpos = -99.60014797922804;
      var ypos = 1;
      var zpos = 16.280552465306243;

      var xrot = 0;
      var yrot = 0;
      var zrot = 0;

      if (x == "scenario1_plane") {
        window.scenario = 1;
        document
          .getElementById("scenario_no_scene")
          .setAttribute(
            "text",
            "color:#333333;value:Scenario Selected: " +
              window.scenario +
              ";wrapCount:20;align:center"
          );
        console.log("Scenario 1 Selected");
      } else if (x == "scenario2_plane") {
        window.scenario = 2;
        document
          .getElementById("scenario_no_scene")
          .setAttribute(
            "text",
            "color:#333333;value:Scenario Selected: " +
              window.scenario +
              ";wrapCount:20;align:center"
          );
        console.log("Scenario 2");
      } else if (x == "scenario3_plane") {
        window.scenario = 3;
        document
          .getElementById("scenario_no_scene")
          .setAttribute(
            "text",
            "color:#333333;value:Scenario Selected: " +
              window.scenario +
              ";wrapCount:20;align:center"
          );
        console.log("Scenario 3");
      } else if (x == "car_setting") {
        console.log("Car Settings"); //-12.700  1 36.403

        document.getElementById("MainMenu").setAttribute("visible", "false");
        document.getElementById("CarMenu").setAttribute("visible", "true");

        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        var xrot = 0;
        var yrot = 180;
        var zrot = 0;
      } else if (x == "pedestrian_setting") {
        console.log("Pedestrian Settings"); //-12.700  1 36.403
        xpos = -90.448;
        ypos = 1;
        zpos = 20.406;

        document.getElementById("MainMenu").setAttribute("visible", "false");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "true");

        var xrot = 0;
        var yrot = 270;
        var zrot = 0;
      } else if (x == "car_val_0") {
        /**
         * Set number of cars in the map
         */
        console.log("car_val_0"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 0;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_1") {
        console.log("car_val_1"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 1;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_2") {
        console.log("car_val_2"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 2;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_3") {
        console.log("car_val_3"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 3;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_4") {
        console.log("car_val_4"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 4;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "car_val_5") {
        console.log("car_val_5"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_cars = num_of_cars;
        num_of_cars = 5;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val1") {
        /**
         * Set number of pedestrians in the map
         */
        console.log("pedestrian_val1"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_people = num_of_people;
        num_of_people = 1;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val2") {
        console.log("pedestrian_val2"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_people = num_of_people;
        num_of_people = 2;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val3") {
        console.log("pedestrian_val3"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_people = num_of_people;
        num_of_people = 3;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val4") {
        console.log("pedestrian_val4"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_people = num_of_people;
        num_of_people = 4;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val5") {
        console.log("pedestrian_val5"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        prev_num_of_people = num_of_people;
        num_of_people = 5;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "return_main") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "return_main2") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("LeaderboardMenu")
          .setAttribute("visible", "false");

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "return_main3") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "leaderboard") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -71.322;
        ypos = 1;
        zpos = 47.062;

        document.getElementById("MainMenu").setAttribute("visible", "false");
        document
          .getElementById("LeaderboardMenu")
          .setAttribute("visible", "true");

        var xrot = 0;
        var yrot = 270;
        var zrot = 0;
      } //window.location.href
      else if (x == "scenario_start") {
        //teleport user to choose vehicle
        if (scenario == 1) {
          xpos = -99.60014797922804;
          ypos = 1;
          zpos = 16.280552465306243;
        } else if (scenario == 2) {
          xpos = -99.60014797922804;
          ypos = 1;
          zpos = 16.280552465306243;
        } else if (scenario == 3) {
          xpos = 3.195;
          ypos = -2.551;
          zpos = 47.06;
        }

        var xrot = 0;
        var yrot = 90;
        var zrot = 0;

        document.getElementById("VehicleMenu").setAttribute("visible", "true");
        document.getElementById("MainMenu").setAttribute("visible", "false");

        console.log("Real scenario value: " + window.scenario);

        //show selected scene and generate vehicles and pedestrians
        document
          .getElementById("scene" + window.scenario)
          .setAttribute("visible", "true");
        loadPedestrians(prev_num_of_people, num_of_people);
        loadCars(prev_num_of_cars, num_of_cars);
      }

      //shift camera pos
      var camera = document.getElementById("player");
      camera.setAttribute("position", { x: xpos, y: ypos, z: zpos }); //43.955 3.302 14.771
      camera.setAttribute("rotation", { x: xrot, y: yrot, z: zrot });
      setup();
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
        pmd.setAttribute("position", "-0.154 -2.728 -1.512");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        //gltf-model="img/Building1/model.gltf" scale="20 30 20"
        pmd.setAttribute("gltf-model", "img/PMD/Scooter_1395.gltf");
        pmd.setAttribute("scale", "0.08 0.08 0.08");
        pmd.setAttribute("rotation", "0 180 0");
        document.querySelector("a-camera").appendChild(pmd);

        var score = document.createElement("a-text");
        score.setAttribute("id", "scoreUI");
        score.setAttribute("position", "3.108 3.223 -4.227");
        score.setAttribute("scale", "2 2 2");
        score.setAttribute("value", "Score: 0");
        score.setAttribute("color", "black");
        document.querySelector("a-camera").appendChild(score);

        //write into temp file and shift camera pos
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: -1.11, y: 3.096, z: -11.86 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else {
        type_of_car = 1;
        console.log("Bike Selected: " + type_of_car);

        var pmd = document.createElement("a-box");
        var camera = document.getElementById("player");
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "0 -1.044 -0.350");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        pmd.setAttribute("gltf-model", "img/Bike/Bike.gltf");
        pmd.setAttribute("scale", "0.002 0.002 0.002");
        pmd.setAttribute("rotation", "0 180 0");
        document.querySelector("a-camera").appendChild(pmd);

        var score = document.createElement("a-text");
        score.setAttribute("id", "scoreUI");
        score.setAttribute("position", "3.108 3.223 -4.227");
        score.setAttribute("scale", "2 2 2");
        score.setAttribute("value", "Score: 0");
        score.setAttribute("color", "black");
        document.querySelector("a-camera").appendChild(score);

        //write into temp file and shift camera pos
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: -0.924, y: 3.096, z: -11.86 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      }
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
      if (x == "s1quesiton1_bound") {
        // enable user to move
        document
          .querySelector("a-camera")
          .setAttribute("wasd-controls-enabled", "false");

        //show question 1
        var question = document.getElementById("s1Question_1");
        var question_desc = document.getElementById("s1Question_1_description");
        var o1 = document.getElementById("s1q1_option1");
        var o2 = document.getElementById("s1q1_option2");
        var o3 = document.getElementById("s1q1_option3");
        var o4 = document.getElementById("s1q1_option4");
        var camera = document.getElementById("player");
        question.setAttribute("visible", true);
        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true);

        o1.setAttribute("select-option-listener", "");
        o2.setAttribute("select-option-listener", "");
        o3.setAttribute("select-option-listener", "");
        o4.setAttribute("select-option-listener", "");

        camera.setAttribute("position", { x: -1.11, y: 3.096, z: -11.86 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "s1quesiton2_bound") {
        //show question 2
        var question = document.getElementById("s1Question_2");
        var question_desc = document.getElementById("s1Question_2_description");
        var o1 = document.getElementById("s1q2_option1");
        var o2 = document.getElementById("s1q2_option2");
        var o3 = document.getElementById("s1q2_option3");
        var o4 = document.getElementById("s1q2_option4");
        var camera = document.getElementById("player");
        question.setAttribute("visible", true);
        question_desc.setAttribute("visible", true); //14.567 1 -10

        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true); //-1.110

        o1.setAttribute("select-option-listener", "");
        o2.setAttribute("select-option-listener", "");
        o3.setAttribute("select-option-listener", "");
        o4.setAttribute("select-option-listener", "");

        camera.setAttribute("position", { x: -1.11, y: 3.096, z: -45.33 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "s1scenario1_end") {
        //score_s1 scoreText_s1 score_submit_s1
        var scoreboard = document.getElementById("score_s1");
        var scoreVal = document.getElementById("scoreText_s1");
        var scoresubmit = document.getElementById("score_submit_s1");
        var scoreValue = document.getElementById("scoreval_s1");

        // remove clickable for options when scenario ends
        document
          .getElementById("s1q1_option1")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q1_option2")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q1_option3")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q1_option4")
          .removeAttribute("select-option-listener");

        document
          .getElementById("s1q2_option1")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q2_option2")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q2_option3")
          .removeAttribute("select-option-listener");
        document
          .getElementById("s1q2_option4")
          .removeAttribute("select-option-listener");

        scoreboard.setAttribute("visible", "true");
        scoreVal.setAttribute("visible", "true");
        scoreValue.setAttribute("value", scoreCounter);
        scoresubmit.setAttribute("visible", "true");
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      } else if (x == "car0") {
        console.log("You got hit by car");
      } else if (x == "car1") {
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
      if (x == "s1q1_option1") {
        var question = document.getElementById("s1Question_1");
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
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } else if (x == "s1q1_option2") {
        var question = document.getElementById("s1Question_1");
        var question_desc = document.getElementById("s1Question_1_description");
        var o1 = document.getElementById("s1q1_option1");
        var o2 = document.getElementById("s1q1_option2");
        var o3 = document.getElementById("s1q1_option3");
        var o4 = document.getElementById("s1q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Correct");
        window.scoreCounter = window.scoreCounter + 1; // Increment the score
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } else if (x == "s1q1_option3") {
        var question = document.getElementById("s1Question_1");
        var question_desc = document.getElementById("s1Question_1_description");
        var o1 = document.getElementById("s1q1_option1");
        var o2 = document.getElementById("s1q1_option2");
        var o3 = document.getElementById("s1q1_option3");
        var o4 = document.getElementById("s1q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } else if (x == "s1q1_option4") {
        var question = document.getElementById("s1Question_1");
        var question_desc = document.getElementById("s1Question_1_description");
        var o1 = document.getElementById("s1q1_option1");
        var o2 = document.getElementById("s1q1_option2");
        var o3 = document.getElementById("s1q1_option3");
        var o4 = document.getElementById("s1q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } else if (x == "s1q2_option1") {
        var question = document.getElementById("s1Question_2");
        var question_desc = document.getElementById("s1Question_2_description");
        var o1 = document.getElementById("s1q2_option1");
        var o2 = document.getElementById("s1q2_option2");
        var o3 = document.getElementById("s1q2_option3");
        var o4 = document.getElementById("s1q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        //answer Wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 97, y: 3.096, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q2");
      } else if (x == "s1q2_option2") {
        var question = document.getElementById("s1Question_2");
        var question_desc = document.getElementById("s1Question_2_description");
        var o1 = document.getElementById("s1q2_option1");
        var o2 = document.getElementById("s1q2_option2");
        var o3 = document.getElementById("s1q2_option3");
        var o4 = document.getElementById("s1q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer Correct
        console.log("Correct"); //93.184
        window.scoreCounter = window.scoreCounter + 1;
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 3.096, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q2");
      } else if (x == "s1q2_option3") {
        var question = document.getElementById("s1Question_2");
        var question_desc = document.getElementById("s1Question_2_description");
        var o1 = document.getElementById("s1q2_option1");
        var o2 = document.getElementById("s1q2_option2");
        var o3 = document.getElementById("s1q2_option3");
        var o4 = document.getElementById("s1q2_option4");

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
        document.querySelector("#player").emit("S1Q2");
      } else if (x == "s1q2_option4") {
        var question = document.getElementById("s1Question_2");
        var question_desc = document.getElementById("s1Question_2_description");
        var o1 = document.getElementById("s1q2_option1");
        var o2 = document.getElementById("s1q2_option2");
        var o3 = document.getElementById("s1q2_option3");
        var o4 = document.getElementById("s1q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 2, z: -63.474 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q2");
      }

      //write into temp file and shift camera pos
    });
  }
});

function uploadScore() {
  if (scoreSubmitted == 0) {
    var ref = database.ref("leaderboard");
    var postsRef = ref;
    var newPostRef = postsRef.push();
    newPostRef.set({
      player: playerName,
      score: scoreCounter,
      scenario: "Scenario " + scenario
    });
    scoreSubmitted = 1;
  } else {
    console.log("Score already submitted for this session.");
  }
}
//Score Listener
AFRAME.registerComponent("score-listener", {
  init: function() {
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      if (x == "score_submit_s1") {
        console.log("UPLOADING SCORE TO FIREBASE....");
        uploadScore();
      } else if (x == "leaderboard_view") {
      }
    });
  }
});
