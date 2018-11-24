var playerName = "Player"; //name of player to be submitted to firebase
var scenario = 1;
var scoreCounter = 0; //tracks the score of the user for this scenario
var scoreSubmitted = 0; //set to 1 if score has been submitted before

var prev_num_of_cars = 0;
var num_of_cars = 2;

var prev_num_of_people = 0;
var num_of_people = 2;

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
}

function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

function setScenario(sceneNo) {
  window.scenario = sceneNo;
  document
    .getElementById("scenario_no_scene")
    .setAttribute(
      "text",
      "color:#333333;value:Scenario Selected: " +
        window.scenario +
        ";wrapCount:20;align:center"
    );
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
  usernames.setAttribute("value", display + "baseline:top");
  scores.setAttribute("value", display2 + "baseline:top");
  scenarios.setAttribute("value", display3 + "baseline:top");
}

var car_mapping = [
  [
    {
      type: "#Taxi",
      pos: "56.020 1.276 -52.217",
      end_pos: "-34.299 1.276 -52.217",
      rotation: "0 180 0",
      speed: "10000",
      scale: "2 2 2"
    },
    {
      type: "#RedCar",
      pos: "-36.223 -3.862 -58.644",
      end_pos: "168 -3.862 -58.644",
      rotation: "0 270 0",
      speed: "7000",
      scale: "3 3 3"
    },
    {
      type: "#Taxi",
      pos: "4.074 1.200 -43.096",
      end_pos: "4.074 1.200 44.187",
      rotation: "0 270 0",
      speed: "6000",
      scale: "2 2 2"
    },
    {
      type: "#Truck",
      pos: "3.665 -0.013 -43.096",
      end_pos: "3.665 -0.013 44.187",
      rotation: "0 90 0",
      speed: "9000",
      scale: "0.1 0.1 0.1"
    },
    {
      type: "#RedCar",
      pos: "6.678 -3.697 -43.096",
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
      speed: "10000",
      scale: "1 1 1"
    },
    {
      type: "#Girl2",
      pos: "0.245 -0.018 -65",
      end_pos: "0.245 -0.018 -52.540",
      rotation: "0 0 0",
      speed: "20000",
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
  ],
  [
    {
      type: "#Girl3",
      speed: "10000",
      scale: "3 3 3",
      rotation: "0.140 -60.040 -0.100",
      pos: "347.000 -3.226 -25.34, 1",
      end_pos: "28.000 -3.376 -25.341"
    },
    {
      type: "#Girl5",
      speed: "10000",
      scale: "3 3 3",
      rotation: "-0.490 120.200 1.170",
      pos: "-2.730 -2.976 -36.690",
      end_pos: "-2.730 -2.976 -43.910"
    },
    {
      type: "#Boy",
      scale: "1.500 1.500 1.500",
      rotation: "-0.010 145.000 0.000",
      pos: "2.340 -1.546 -31.010",
      end_pos: "-1.360 -1.546 -16.300",
      speed: "10000"
    },
    {
      type: "#OldMen",
      scale: "3.500 3.500 3.500",
      rotation: "0.000 190.000 0.000",
      pos: "56.910 -2.871 30.000",
      end_pos: "44.820 -2.871 -10.000",
      speed: "10000"
    },
    {
      type: "#Boy",
      scale: "1.500 1.500 1.500",
      rotation: "0.000 0.000 0.000",
      pos: "41.434 -1.869 -1.430",
      end_pos: "39.864 -1.869 -15.000",
      speed: "10000"
    }
  ]
];

function loadCars(prev_num_of_cars, num_of_cars) {
  console.log("Number of cars: " + num_of_cars);
  console.log("Number of prevcars: " + prev_num_of_cars);
  var count;
  for (count = prev_num_of_cars; count < num_of_cars; count++) {
    // create new car object
    var car = document.createElement("a-box");
    car.setAttribute("id", "car" + count);
    car.setAttribute("gltf-model", car_mapping[scenario - 1][count].type);
    car.setAttribute("scale", car_mapping[scenario - 1][count].scale);
    car.setAttribute("rotation", car_mapping[scenario - 1][count].rotation);
    car.setAttribute("position", car_mapping[scenario - 1][count].pos);
    document.getElementById("scene" + window.scenario).appendChild(car);

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
    document.getElementById("scene" + window.scenario).appendChild(people);

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
      var type_of_car = 0;

      var title = document.title;

      var xpos = -99.60014797922804;
      var ypos = 1;
      var zpos = 16.280552465306243;

      var xrot = 0;
      var yrot = 0;
      var zrot = 0;

      if (x == "scenario1_plane") {
        setScenario(1);
        console.log("Scenario 1 Selected");
        document.getElementById("scene2").setAttribute("visible", "false");
        document.getElementById("scene3").setAttribute("visible", "false");
      } else if (x == "scenario2_plane") {
        setScenario(2);
        console.log("Scenario 2");
        document.getElementById("scene1").setAttribute("visible", "false");
        document.getElementById("scene3").setAttribute("visible", "false");
      } else if (x == "scenario3_plane") {
        setScenario(3);
        console.log("Scenario 3");
        document.getElementById("scene1").setAttribute("visible", "false");
        document.getElementById("scene2").setAttribute("visible", "false");
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
      } else if (x == "sky_setting") {
        console.log("Sky Settings"); //-12.700  1 36.403

        document.getElementById("MainMenu").setAttribute("visible", "false");
        document.getElementById("SkyMenu").setAttribute("visible", "true");

        xpos = -73.33;
        ypos = 0.947;
        zpos = 47.062;

        var xrot = 0;
        var yrot = 180;
        var zrot = 0;
      } else if (x == "car_val_0") {
        /**
         * Set number of cars in the map
         */
        console.log("car_val_0"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 0;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
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

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 1;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
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

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 2;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
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

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 3;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
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

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 4;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
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

        window.prev_num_of_cars = window.num_of_cars;
        window.num_of_cars = 5;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        document
          .getElementById("scenario_no_cars")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Cars: " +
              window.num_of_cars +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
      } else if (x == "pedestrian_val1") {
        console.log("pedestrian_val1"); //-12.700  1 36.403
        xpos = -99.60014797922804;
        ypos = 1;
        zpos = 16.280552465306243;

        window.prev_num_of_people = window.num_of_people;
        window.num_of_people = 1;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              window.num_of_people +
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
              window.num_of_people +
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
              window.num_of_people +
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

        window.prev_num_of_people = window.num_of_people;
        window.num_of_people = 4;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              window.num_of_people +
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

        window.prev_num_of_people = window.num_of_people;
        window.num_of_people = 5;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        document
          .getElementById("scenario_no_pedestrians")
          .setAttribute(
            "text",
            "color:#333333;value:No. of Pedestrians: " +
              window.num_of_people +
              ";wrapCount:20;align:center"
          );

        var xrot = 0;
        var yrot = 0;
        var zrot = 0;
        console.log("car_val_5");
      } else if (x == "sky_val_1") {
        var sky = document
          .getElementById("sky")
          .setAttribute("color", "#F0A272");

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("SkyMenu").setAttribute("visible", "false");
      } else if (x == "sky_val_2") {
        var sky = document
          .getElementById("sky")
          .setAttribute("color", "#23334C");

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("SkyMenu").setAttribute("visible", "false");
      } else if (x == "sky_val_3") {
        var sky = document
          .getElementById("sky")
          .setAttribute("color", "#aaf4f9");

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("SkyMenu").setAttribute("visible", "false");
      } else if (x == "return_main") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document.getElementById("CarMenu").setAttribute("visible", "false");

        xrot = 0;
        yrot = 0;
        zrot = 0;
      } else if (x == "return_main2") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("LeaderboardMenu")
          .setAttribute("visible", "false");

        xrot = 0;
        yrot = 0;
        zrot = 0;
      } else if (x == "return_main3") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -99.89;
        ypos = 1;
        zpos = 13.554;

        document.getElementById("MainMenu").setAttribute("visible", "true");
        document
          .getElementById("PedestrianMenu")
          .setAttribute("visible", "false");

        xrot = 0;
        yrot = 0;
        zrot = 0;
      } else if (x == "leaderboard") {
        console.log("return_main"); //-12.7 1 14.962
        xpos = -71.322;
        ypos = 1;
        zpos = 47.062;

        document.getElementById("MainMenu").setAttribute("visible", "false");
        document
          .getElementById("LeaderboardMenu")
          .setAttribute("visible", "true");

        xrot = 0;
        yrot = 270;
        zrot = 0;
      } //window.location.href
      else if (x == "scenario_start") {
        //teleport user to choose vehicle
        if (scenario == 1 || 2) {
          xpos = -99.60014797922804;
          ypos = 1;
          zpos = 16.280552465306243;
        } else if (scenario == 3) {
          xpos = 3.195;
          ypos = -2.551;
          zpos = 47.06;
        }

        xrot = 0;
        yrot = 90;
        zrot = 0;

        document.getElementById("VehicleMenu").setAttribute("visible", "true");
        document.getElementById("MainMenu").setAttribute("visible", "false");

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
        var v = document.getElementById("user_vehicle");
        var pmd = document.createElement("a-box");
        var camera = document.getElementById("player");
        if (v != null) {
        }
        pmd.setAttribute("id", "user_vehicle");
        pmd.setAttribute("position", "-0.154 -2.728 -1.512");
        pmd.setAttribute("radius", "0.5");
        pmd.setAttribute("height", "0.5");
        //gltf-model="img/Building1/model.gltf" scale="20 30 20"
        pmd.setAttribute("gltf-model", "img/PMD/Scooter_1395.gltf");
        pmd.setAttribute("scale", "0.08 0.08 0.08");
        pmd.setAttribute("rotation", "0 180 0");
        document.querySelector("a-camera").appendChild(pmd);

        document.getElementById("scoreUI").setAttribute("visible", "true");
        document.getElementById("q1Selected").setAttribute("visible", "true");
        document.getElementById("q2Selected").setAttribute("visible", "true");

        //write into temp file and shift camera pos
        var camera = document.getElementById("player");
        if (window.scenario == 1) {
          camera.setAttribute("position", { x: -0.924, y: 3.096, z: -11.86 }); //-0.924, y: 3.096, z: -11.86
          camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        } else if (window.scenario == 2) {
          //5.271
          camera.setAttribute("position", { x: 1.661, y: 3.096, z: -12.982}); //0.732 3.312 14.771
          camera.setAttribute("rotation", { x: -9.626, y: -19.481, z: 0.0 });
        } else if (window.scenario == 3) {
          camera.setAttribute("position", { x: 4.058, y: 3.096, z: 25.09 }); //3.29 3.06 25.09
          camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
          document.querySelector("#player").emit("S3Start"); //S3Start
        }
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

        document.getElementById("scoreUI").setAttribute("visible", "true");
        document.getElementById("q1Selected").setAttribute("visible", "true");
      document.getElementById("q2Selected").setAttribute("visible", "true");

        //write into temp file and shift camera pos
        var camera = document.getElementById("player");
        if (window.scenario == 1) {
          camera.setAttribute("position", { x: -0.924, y: 3.096, z: -11.86 }); //-0.924, y: 3.096, z: -11.86
          camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        } else if (window.scenario == 2) {
          //5.271
          camera.setAttribute("position", { x: 1.661, y: 3.096, z: -12.982 }); //0.732 3.312 14.771
          camera.setAttribute("rotation", { x: -9.626, y: -19.481, z: 0.0 });
        } else if (window.scenario == 3) {
          camera.setAttribute("position", { x: 4.058, y: 3.096, z: 25.09 }); //3.29 3.06 25.09
          camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
          document.querySelector("#player").emit("S3Start"); //S3Start
        }
        // camera.setAttribute("position", { x: -0.924, y: 3.096, z: -11.86 }); //0.732 3.312 14.771
        // camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
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
      if (x == "s1quesiton1_bound" && window.scenario == 1) {
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
      } else if (x == "s1quesiton2_bound" && window.scenario == 1) {
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
      } else if (x == "s1scenario1_end" && window.scenario == 1) {
        //score_s1 scoreText_s1 score_submit_s1
        var scoreboard = document.getElementById("score_s1");
        var scoreVal = document.getElementById("scoreText_s1");
        var scoresubmit = document.getElementById("score_submit_s1");
        var scoreValue = document.getElementById("scoreval_s1");
        var summaryQ1 = document.getElementById("s1SummaryQ1_text");
        var summaryQ2 = document.getElementById("s1SummaryQ2_text");

        var getOptionQ1 = document.getElementById("q1Selected").getAttribute("value");
        var getOptionQ2 = document.getElementById("q2Selected").getAttribute("value");

        var summaryDesc1;
        var summaryDesc2;
        if(getOptionQ1 == "SmartPhone"){
          summaryDesc1 = "Option 1: You selected smartphone. While a smartphone is great, wearing a helmet is the most important item to have before riding on the road.";
        }
        else if(getOptionQ1 == "Helmet"){
          summaryDesc1 = "Option 2: That's right! Wearing a helmet is the most important item to have before riding on the road.";
        }
        else if(getOptionQ1 == "Snack"){
          summaryDesc1 = "Option 3: You selected snack. While a snacks are great, wearing a helmet is the most important item to have before riding on the road.";
        }
        else if(getOptionQ1 == "Money"){
          summaryDesc1 = "Option 4: You selected money. While a having money is great, wearing a helmet is the most important item to have before riding on the road.";
        }

        if(getOptionQ2 == "Speed Through!"){
          summaryDesc2 = "Option 1: No, speeding through is dangerous! Wait for all vehicles to pass or stop before crossing.";
        }
        else if(getOptionQ2 == "Let it pass then move"){
          summaryDesc2 = "Option 2: Correct! Wait for all vehicles to pass or stop before crossing.";
        }
        else if(getOptionQ2 == "Turn Back"){
          summaryDesc2 = "Option 3: You don't have to turn back. Wait for all vehicles to pass or stop before crossing.";
        }
        else if(getOptionQ2 == "ABANDON SHIP"){
          summaryDesc2 = "Option 4: You don't have to abandon ship. Wait for all vehicles to pass or stop before crossing.";
        }
        document.getElementById("s1SummaryQ1").setAttribute("visible", true);
        document.getElementById("s1SummaryQ2").setAttribute("visible", true);
        summaryQ1.setAttribute("value",summaryDesc1);
        summaryQ2.setAttribute("value",summaryDesc2);

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
      } else if (x == "s2quesiton1_bound" && window.scenario == 2) {
        // enable user to move
        document
          .querySelector("a-camera")
          .setAttribute("wasd-controls-enabled", "true");
        console.log("s2bound1 activated");
        //show question 1
        var question = document.getElementById("s2Question_1");
        var question_desc = document.getElementById("s2Question_1_description");
        var o1 = document.getElementById("s2q1_option1");
        var o2 = document.getElementById("s2q1_option2");
        var o3 = document.getElementById("s2q1_option3");
        var o4 = document.getElementById("s2q1_option4");
        var camera = document.getElementById("player");
        question.setAttribute("visible", true);
        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true);
        camera.setAttribute("position", { x: 5.109, y: 3.096, z: -12.982}); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: -3.094, y: -2.063, z: 0 });
      } else if (x == "s2quesiton2_bound" && window.scenario == 2) {
        //show question 2
        var question = document.getElementById("s2Question_2");
        var question_desc = document.getElementById("s2Question_2_description");
        var o1 = document.getElementById("s2q2_option1");
        var o2 = document.getElementById("s2q2_option2");
        var o3 = document.getElementById("s2q2_option3");
        var o4 = document.getElementById("s2q2_option4");
        var camera = document.getElementById("player"); //-158.770
        question.setAttribute("visible", true);
        camera.setAttribute("rotation", { x:-2.521, y: -166.960, z: 0 });

        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true); //-1.110
        camera.setAttribute("position", { x: 40.922, y: 3.05, z: -9.739 });
        //camera.setAttribute("rotation", { x: 0, y: -150, z: 0 });
      } else if (x == "s2quesiton1_bound-2" && window.scenario == 2) {
        var camera = document.getElementById("player");
        camera.setAttribute("rotation", { x: 0, y: -65.0, z: 0 });
        if (scoreCounter == 1) {
          document.querySelector("#player").emit("S2Q1_1");
        } else {
          document.querySelector("#player").emit("S2Q1_1_w");
        }
      } else if (x == "s2quesiton1_bound-3" && window.scenario == 2) {
        var camera = document.getElementById("player");
        camera.setAttribute("rotation", { x: 0, y: -150, z: 0 });
        if (scoreCounter == 1) {
          document.querySelector("#player").emit("S2Q1_2");
        } else {
          document.querySelector("#player").emit("S2Q1_2_w");
        }
      } else if (x == "s2scenario1_end" && window.scenario == 2) {
        var scoreboard = document.getElementById("score_s2");
        var scoreVal = document.getElementById("scoreval_s2");
        var scoresubmit = document.getElementById("score_submit_s2");
        var scoreText = document.getElementById("scoreText_s2");

        scoreText.setAttribute("visible", "true");
        scoreboard.setAttribute("visible", "true");
        scoreVal.setAttribute("visible", "true");
        scoresubmit.setAttribute("visible", "true");

        var scoreValue = document.getElementById("scoreval_s2");
        scoreValue.setAttribute("value", scoreCounter);
        var summaryQ1 = document.getElementById("s2SummaryQ1_text");
        var summaryQ2 = document.getElementById("s2SummaryQ2_text");

        var getOptionQ1 = document.getElementById("q1Selected").getAttribute("value");
        var getOptionQ2 = document.getElementById("q2Selected").getAttribute("value");

        var summaryDesc1;
        var summaryDesc2;
        if(getOptionQ1 == "Increase Speed"){
          summaryDesc1 = "Option 1: Do not increase speed. There may be people around the corner.";
        }
        else if(getOptionQ1 == "Go at a steady Speed"){
          summaryDesc1 = "Option 2: That's right! You have to be careful as there may be people around the corner.";
        }
        else if(getOptionQ1 == "Swerve around. You have the whole path to yourself"){
          summaryDesc1 = "Option 3: Do not increase swerve around. There may be people around the corner.";
        }
        else if(getOptionQ1 == "Stop in the middle of the path"){
          summaryDesc1 = "Option 4: Do not increase stop in the middle of the path. You will be an obstacle to somebody turning the corner.";
        }

        if(getOptionQ2 == "Speed Through!"){
          summaryDesc2 = "Option 1: Speeding through is dangerous. You should decrease your speed and ring the bell to alert people.";
        }
        else if(getOptionQ2 == "Decrease speed and ring bell to alert people"){
          summaryDesc2 = "Option 2: Good! You should decrease your speed and ring the bell to alert people.";
        }
        else if(getOptionQ2 == "Ignore them"){
          summaryDesc2 = "Option 3: Do not ignore them! You should decrease your speed and ring the bell to alert people.";
        }
        else if(getOptionQ2 == "Swerve around them"){
          summaryDesc2 = "Option 4: Swerving around them could be dangerous. You should decrease your speed and ring the bell to alert people.";
        }
        document.getElementById("s2SummaryQ1").setAttribute("visible", true);
        document.getElementById("s2SummaryQ2").setAttribute("visible", true);
        summaryQ1.setAttribute("value",summaryDesc1);
        summaryQ2.setAttribute("value",summaryDesc2);


        camera.setAttribute("rotation", { x: 0, y: -150, z: 0 });
        scoreVal.setAttribute("value", scoreCounter);
      } else if (x == "s3quesiton1_bound" && window.scenario == 3) {
        //show question 2
        var question = document.getElementById("s3Question_1");
        var question_desc = document.getElementById("s3Question_1_description");
        var o1 = document.getElementById("s3q1_option1");
        var o2 = document.getElementById("s3q1_option2");
        var o3 = document.getElementById("s3q1_option3");
        var o4 = document.getElementById("s3q1_option4");
        var camera = document.getElementById("player"); //-158.770
        question.setAttribute("visible", true);
        //camera.setAttribute("rotation", { x: 0, y:-158.770, z: 0 });

        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true); //-1.110
        //camera.setAttribute("position",{ x: 3.239,y:3.060,z:4.000});
        //camera.setAttribute("rotation", { x: 0, y:-150, z: 0 });
      } else if (x == "s3quesiton2_bound" && window.scenario == 3) {
        //show question 2
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");
        var camera = document.getElementById("  player"); //-158.770
        question.setAttribute("visible", true);
        //camera.setAttribute("rotation", { x: 0, y:-158.770, z: 0 });

        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true); //-1.110
        //amera.setAttribute("position",{ x: 3.239,y:3.060,z:4.000});
        //camera.setAttribute("rotation", { x: 0, y:-150, z: 0 });
      } else if (x == "s3quesiton2_bound" && window.scenario == 3) {
        //show question 2
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");
        var camera = document.getElementById("  player"); //-158.770
        question.setAttribute("visible", true);
        //camera.setAttribute("rotation", { x: 0, y:-158.770, z: 0 });

        question_desc.setAttribute("visible", true); //14.567 1 -10
        o1.setAttribute("visible", true);
        o2.setAttribute("visible", true);
        o3.setAttribute("visible", true);
        o4.setAttribute("visible", true); //-1.110
        //camera.setAttribute("position",{ x: 3.239,y:3.060,z:4.000});
        //camera.setAttribute("rotation", { x: 0, y:-150, z: 0 });
      } else if (x == "s3scenario1_end" && window.scenario == 3) {
        document.querySelector("#player").emit("S3end");
      } else if (x == "s3scenario1_end-3" && window.scenario == 3) {
        var scoreboard = document.getElementById("score_s3");
        scoreboard.setAttribute("visible", "true");
        //camera.setAttribute("rotation", { x: 0, y:-150, z: 0 });
        var scoreValue = document.getElementById("scoreval_s3");
        scoreValue.setAttribute("value", scoreCounter);

        var summaryQ1 = document.getElementById("s3SummaryQ1_text");
        var summaryQ2 = document.getElementById("s3SummaryQ2_text");

        var getOptionQ1 = document.getElementById("q1Selected").getAttribute("value");
        var getOptionQ2 = document.getElementById("q2Selected").getAttribute("value");

        var summaryDesc1;
        var summaryDesc2;
        if(getOptionQ1 == "Speed up and ring your bell"){
          summaryDesc1 = "Option 1: Speeding through a crowd is dangerous! Dismount and walk past the bus stop.";
        }
        else if(getOptionQ1 == "Dismount and walk past the bus stop"){
          summaryDesc1 = "Option 2: Right on! You should dismount and walk past the bus stop.";
        }
        else if(getOptionQ1 == "Carefully swerve past the pedestrians"){ 
      summaryDesc1 = "Option 3: Swerving through a crowd is dangerous! Dismount and walk past the bus stop.";
        }
        else if(getOptionQ1 == "Ride on the grass behind the bus stop"){
      summaryDesc1 = "Option 4: Riding on the grass can be hazardous. Dismount and walk past the bus stop.";
        }

        if(getOptionQ2 == "I have the right of way. Continue to cross"){
          summaryDesc2 = "Option 1: Although you have the right of way, you still have to look both ways before crossing.";
        }
        else if(getOptionQ2 == "Look both ways before crossing"){
          summaryDesc2 = "Option 2: That's right! Always look both ways before crossing.";
        }
        else if(getOptionQ2 == "Maintain speed while crossing"){
          summaryDesc2 = "Option 3: That's risky! Always look both ways before crossing.";
        }
        else if(getOptionQ2 == "Speed up to cross quicker"){
          summaryDesc2 = "Option 4: That's risky! Always look both ways before crossing.";
        }
        document.getElementById("s3SummaryQ1").setAttribute("visible", true);
        document.getElementById("s3SummaryQ2").setAttribute("visible", true);
        document.getElementById("score_submit_s3").setAttribute("visible", true);
        summaryQ1.setAttribute("value",summaryDesc1);
        summaryQ2.setAttribute("value",summaryDesc2);




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

      //Scenario 1 Question 1 Option
      if (x == "s1q1_option1") {
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

        var o = "SmartPhone"
        document
          .getElementById("q1Selected")
          .setAttribute("value", o);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } 
      else if (x == "s1q1_option2") {        
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
        var o = "Helmet";
        document
          .getElementById("q1Selected")
          .setAttribute("value",o);
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } 
      else if (x == "s1q1_option3") {
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

        var o = "Snacks";
        document
          .getElementById("q1Selected")
          .setAttribute("value",o);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      } 
      else if (x == "s1q1_option4") {
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

        var o = "Money";
        document
          .getElementById("q1Selected")
          .setAttribute("value", o);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S1Q1");
      }
      //Scenario 1 Question 2 Options
      else if (x == "s1q2_option1") {
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

        var o = "Speed Through!";
        document
          .getElementById("q2Selected")
          .setAttribute("value", o);

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

       var o = "Let it pass then move";
        document
          .getElementById("q2Selected")
          .setAttribute("value", o);

        //answer Correct
        console.log("Correct"); //93.184
        scoreCounter = scoreCounter + 1;
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

        var o = "Turn Back";
        document
          .getElementById("q2Selected")
          .setAttribute("value", o);

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

        var o = "Abandon Ship";
        document
          .getElementById("q2Selected")
          .setAttribute("value", o);

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

      //Scenario 2 Question 1 Options
      if (x == "s2q1_option1" && window.scenario == 2) {
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_1");
        var question_desc = document.getElementById("s2Question_1_description");
        var o1 = document.getElementById("s2q1_option1");
        var o2 = document.getElementById("s2q1_option2");
        var o3 = document.getElementById("s2q1_option3");
        var o4 = document.getElementById("s2q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        
        document
          .getElementById("q1Selected")
          .setAttribute("value","Increase Speed");


        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q1_w");
        console.log("s2q1_w");
      } else if (x == "s2q1_option2" && window.scenario == 2) {
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_1");
        var question_desc = document.getElementById("s2Question_1_description");
        var o1 = document.getElementById("s2q1_option1");
        var o2 = document.getElementById("s2q1_option2");
        var o3 = document.getElementById("s2q1_option3");
        var o4 = document.getElementById("s2q1_option4");

        document
          .getElementById("q1Selected")
          .setAttribute("value","Go at a steady Speed");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        window.scoreCounter = window.scoreCounter + 1;
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        console.log("Correct");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q1");
        console.log("s2q1");
      } else if (x == "s2q1_option3" && window.scenario == 2) {
        document
          .getElementById("q1Selected")
          .setAttribute("value","Swerve around. You have the whole path to yourself");
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_1");
        var question_desc = document.getElementById("s2Question_1_description");
        var o1 = document.getElementById("s2q1_option1");
        var o2 = document.getElementById("s2q1_option2");
        var o3 = document.getElementById("s2q1_option3");
        var o4 = document.getElementById("s2q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q1_w");
        console.log("s2q1_w");
      } else if (x == "s2q1_option4" && window.scenario == 2) {
        document
          .getElementById("q1Selected")
          .setAttribute("value","Stop in the middle of the path");
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_1");
        var question_desc = document.getElementById("s2Question_1_description");
        var o1 = document.getElementById("s2q1_option1");
        var o2 = document.getElementById("s2q1_option2");
        var o3 = document.getElementById("s2q1_option3");
        var o4 = document.getElementById("s2q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q1_w");
        console.log("s2q1_w");
      }

      //Scenario 2 Question 2 Options
      else if (x == "s2q2_option1" && window.scenario == 2) {
        console.log(x + " submitted");
        document
          .getElementById("q2Selected")
          .setAttribute("value","Speed Through!");
        var question = document.getElementById("s2Question_2");
        var question_desc = document.getElementById("s2Question_2_description");
        var o1 = document.getElementById("s2q2_option1");
        var o2 = document.getElementById("s2q2_option2");
        var o3 = document.getElementById("s2q2_option3");
        var o4 = document.getElementById("s2q2_option4");

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
        // camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q2");
      } else if (x == "s2q2_option2" && window.scenario == 2) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Decrease speed and ring bell to alert people");
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_2");
        var question_desc = document.getElementById("s2Question_2_description");
        var o1 = document.getElementById("s2q2_option1");
        var o2 = document.getElementById("s2q2_option2");
        var o3 = document.getElementById("s2q2_option3");
        var o4 = document.getElementById("s2q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer Correct
        scoreCounter = scoreCounter + 1;
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        console.log("Correct"); //93.184

        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 3.096, z: -63.474 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q2");
      } else if (x == "s2q2_option3" && window.scenario == 2) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Ignore them");
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_2");
        var question_desc = document.getElementById("s2Question_2_description");
        var o1 = document.getElementById("s2q2_option1");
        var o2 = document.getElementById("s2q2_option2");
        var o3 = document.getElementById("s2q2_option3");
        var o4 = document.getElementById("s2q2_option4");

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
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q2");
      } else if (x == "s2q2_option4" && window.scenario == 2) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Swerve around them");
        console.log(x + " submitted");
        var question = document.getElementById("s2Question_2");
        var question_desc = document.getElementById("s2Question_2_description");
        var o1 = document.getElementById("s2q2_option1");
        var o2 = document.getElementById("s2q2_option2");
        var o3 = document.getElementById("s2q2_option3");
        var o4 = document.getElementById("s2q2_option4");

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
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S2Q2");
      }
      //Scenario 3 Question 1 Options
      if (x == "s3q1_option1" && window.scenario == 3) {

         document
          .getElementById("q1Selected")
          .setAttribute("value","Speed up and ring your bell");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_1");
        var question_desc = document.getElementById("s3Question_1_description");
        var o1 = document.getElementById("s3q1_option1");
        var o2 = document.getElementById("s3q1_option2");
        var o3 = document.getElementById("s3q1_option3");
        var o4 = document.getElementById("s3q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        //camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q1");
      } else if (x == "s3q1_option2" && window.scenario == 3) {
        document
          .getElementById("q1Selected")
          .setAttribute("value","Dismount and walk past the bus stop");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_1");
        var question_desc = document.getElementById("s3Question_1_description");
        var o1 = document.getElementById("s3q1_option1");
        var o2 = document.getElementById("s3q1_option2");
        var o3 = document.getElementById("s3q1_option3");
        var o4 = document.getElementById("s3q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        scoreCounter = scoreCounter + 1;
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        console.log("Correct");
        var camera = document.getElementById("player");
        //camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q1");
      } else if (x == "s3q1_option3" && window.scenario == 3) {

        document
          .getElementById("q1Selected")
          .setAttribute("value","Carefully swerve past the pedestrians");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_1");
        var question_desc = document.getElementById("s3Question_1_description");
        var o1 = document.getElementById("s3q1_option1");
        var o2 = document.getElementById("s3q1_option2");
        var o3 = document.getElementById("s3q1_option3");
        var o4 = document.getElementById("s3q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        //camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q1");
      } else if (x == "s3q1_option4" && window.scenario == 3) {
        document
          .getElementById("q1Selected")
          .setAttribute("value","Ride on the grass behind the bus stop");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_1");
        var question_desc = document.getElementById("s3Question_1_description");
        var o1 = document.getElementById("s3q1_option1");
        var o2 = document.getElementById("s3q1_option2");
        var o3 = document.getElementById("s3q1_option3");
        var o4 = document.getElementById("s3q1_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        console.log("Wrong");
        var camera = document.getElementById("player");
        //camera.setAttribute("position", { x: 0.732, y: 3.096, z: -26 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q1");
      }

      //Scenario 3 Question 2 Options
      else if (x == "s3q2_option1" && window.scenario == 3) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","I have the right of way. Continue to cross");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);

        //answer Wrong
        console.log("Wrong");
        var camera = document.getElementById("player");
        //camera.setAttribute("position", { x: 97, y: 3.096, z: -63.474 }); //0.732 3.312 14.771
        // camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q2");
      } else if (x == "s3q2_option2" && window.scenario == 3) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Look both ways before crossing");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");

        question.setAttribute("visible", false);
        question_desc.setAttribute("visible", false);
        o1.setAttribute("visible", false);
        o2.setAttribute("visible", false);
        o3.setAttribute("visible", false);
        o4.setAttribute("visible", false);
        //answer Correct
        scoreCounter = scoreCounter + 1;
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: " + window.scoreCounter);
        console.log("Correct"); //93.184

        var camera = document.getElementById("player");
        // camera.setAttribute("position", { x: 97, y: 3.096, z: -63.474 }); //0.732 3.312 14.771
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q2");
      } else if (x == "s3q2_option3" && window.scenario == 3) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Maintain speed while crossing");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");

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
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q2");
      } else if (x == "s3q2_option4" && window.scenario == 3) {
        document
          .getElementById("q2Selected")
          .setAttribute("value","Speed up to cross quicker");
        console.log(x + " submitted");
        var question = document.getElementById("s3Question_2");
        var question_desc = document.getElementById("s3Question_2_description");
        var o1 = document.getElementById("s3q2_option1");
        var o2 = document.getElementById("s3q2_option2");
        var o3 = document.getElementById("s3q2_option3");
        var o4 = document.getElementById("s3q2_option4");

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
        //camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        document.querySelector("#player").emit("S3Q2");
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
    var camera = document.getElementById("player");
    var x = this.el.getAttribute("id");
    this.el.addEventListener("click", function(evt) {
      if (x == "score_submit_s1") {
        console.log("UPLOADING SCORE TO FIREBASE....");
        uploadScore(); //-99.89 1 13.554
        removeVehicle();
        camera.setAttribute("position", { x: -99.89, y: 1, z: 13.554 });
        hideScoreBoard();
        window.scoreCounter = 0; //reset score
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: 0");
          document.getElementById("q1Selected").setAttribute("value", "Q1)");
          document.getElementById("q2Selected").setAttribute("value", "Q2)");
      }
       else if (x == "score_submit_s2") {
        console.log("UPLOADING SCORE TO FIREBASE....");
        uploadScore(); //-99.89 1 13.554
        removeVehicle();
        camera.setAttribute("position", { x: -99.89, y: 1, z: 13.554 });
        hideScoreBoard();
        window.scoreCounter = 0; //reset score
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: 0");
        document.getElementById("q1Selected").setAttribute("value", "Q1)");
        document.getElementById("q2Selected").setAttribute("value", "Q2)");
      }
       else if (x == "score_submit_s3") {
        console.log("UPLOADING SCORE TO FIREBASE....");
        uploadScore(); //-99.89 1 13.554
        removeVehicle();
        camera.setAttribute("position", { x: -99.89, y: 1, z: 13.554 });
        hideScoreBoard();
        window.scoreCounter = 0; //reset score
        document
          .getElementById("scoreUI")
          .setAttribute("value", "Score: 0");
          document.getElementById("q1Selected").setAttribute("value", "Q1)");
          document.getElementById("q2Selected").setAttribute("value", "Q2)");
      }
      document.getElementById("VehicleMenu").setAttribute("visible", "false");
      document.getElementById("MainMenu").setAttribute("visible", "true");
      document
        .getElementById("scene" + window.scenario)
        .setAttribute("visible", "false");
      document
        .getElementById("score_s" + window.scenario)
        .setAttribute("visible", "false");

      if (window.scenario < 3) {
        window.scenario = window.scenario + 1;
      }
      setScenario(window.scenario);
      
      document.getElementById("MainMenu").setAttribute("visible", "true");
      document.getElementById("scoreUI").setAttribute("visible", "false");
      document.getElementById("q1Selected").setAttribute("visible", "false");
      document.getElementById("q2Selected").setAttribute("visible", "false");
    });
  }
});

function removeVehicle(){
  var v = document.getElementById("user_vehicle");
  v.parentNode.removeChild(v);
}

function hideScoreBoard(){
  var s1board = document.getElementById("score_s1");
  var s1ScoreVal = document.getElementById("scoreText_s1");
  var s1ScoreSubmit = document.getElementById("score_submit_s1");
  var s1ScoreValue = document.getElementById("scoreval_s1");

  //setattribute visible = false
  s1board.setAttribute("visible", "false");
  s1ScoreVal.setAttribute("visible", "false");
  s1ScoreSubmit.setAttribute("visible", "false");
  s1ScoreValue.setAttribute("visible", "false");

  var s2board = document.getElementById("score_s2");
  var s2ScoreVal = document.getElementById("scoreText_s2");
  var s2ScoreSubmit = document.getElementById("score_submit_s2");
  var s2ScoreValue = document.getElementById("scoreval_s2");
  s2board.setAttribute("visible", "false");
  s2ScoreVal.setAttribute("visible", "false");
  s2ScoreSubmit.setAttribute("visible", "false");
  s2ScoreValue.setAttribute("visible", "false");

  var s3board = document.getElementById("score_s3");
  var s3ScoreVal = document.getElementById("scoreText_s3");
  var s3ScoreSubmit = document.getElementById("score_submit_s3");
  var s3ScoreValue = document.getElementById("scoreval_s3");
  s3board.setAttribute("visible", "false");
  s3ScoreVal.setAttribute("visible", "false");
  s3ScoreSubmit.setAttribute("visible", "false");
  s3ScoreValue.setAttribute("visible", "false");
}