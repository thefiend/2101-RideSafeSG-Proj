AFRAME.registerComponent('scenario-listener', {
    init: function () {
			var x = this.el.getAttribute("id");
            this.el.addEventListener('click', function (evt) {
            var xpos = 0;
            var ypos = 0;
            var zpos = 0;

            var xrot = 0;
            var yrot = 0;
            var zrot = 0;
	        if (x == "scenario1_plane"){
	    	console.log("Scenario 1");
		    	xpos = 43.955;
		    	ypos = 1;
		    	zpos = 14.771;
	 
	    	}
	    	else if (x == "scenario2_plane"){
	    		console.log("Scenario 2");
	    		xpos = 43.955;
		    	ypos = 1;
		    	zpos = 14.771;
	    	}
	    	else if (x == "scenario3_plane"){
	    		console.log("Scenario 3");
	    		xpos = 43.955;
		    	ypos = 1;
		    	zpos = 14.771;
	    	}
	    	
	    	else if (x == "scenario4_plane"){
	    		console.log("Scenario 4");
	    		xpos = 43.955;
		    	ypos = 1;
		    	zpos = 14.771;
	    	}
	    	else if (x == "scenario5_plane"){
	    		console.log("Scenario 5");
	    		xpos = 43.955;
		    	ypos = 1;
		    	zpos = 14.771;
	    	}
	    	else if(x == "setting"){
	    		console.log("Settings");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 36.403;

		    	var xrot = 0;
	            var yrot = 90;
	            var zrot = 0;
	    	}
	    	//car_val onwards generate number of cars
	    	else if(x == "car_val_0"){
	    		console.log("car_val_0");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}

	    	else if(x == "car_val_1"){
	    		console.log("car_val_1");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}

	    	else if(x == "car_val_2"){
	    		console.log("car_val_2");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;

	            //Creating new car
	            var el = document.createElement('a-box');
				document.querySelector('a-scene').appendChild(el);
				el.setAttribute("id","car_model2");
				el.setAttribute("position", "-49.96469777180934 3.251 -71.13");
				//position="-49.96469777180934 3.251 -71.13" radius="0.5" height="0.5"
				//color="#FFC65D" material="color:#808080" text__test="align:right;anchor:right;baseline:top;color:#000000" geometry="depth:10;height:5;width:6"
				//id="car_model1" rotation="0 90 0"
				
	    	}

	    	else if(x == "car_val_3"){
	    		console.log("car_val_3");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}

	    	else if(x == "car_val_4"){
	    		console.log("car_val_4");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}

	    	else if(x == "car_val_5"){
	    		console.log("car_val_5");//-12.700  1 36.403
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}
	    	else if(x == "return_main"){
	    		console.log("return_main");//-12.7 1 14.962
	    		xpos = -12.700;
		    	ypos = 1;
		    	zpos = 14.962;

		    	var xrot = 0;
	            var yrot = 0;
	            var zrot = 0;
	    	}

	    	//shift camera pos
	    	var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: xpos, y:ypos, z: zpos });//43.955 3.302 14.771
	    	camera.setAttribute('rotation', { x: xrot, y:yrot, z: zrot });
        });
  }
});


AFRAME.registerComponent('select-vehicle-listener', {
    init: function () {
			var x = this.el.getAttribute("id");
            this.el.addEventListener('click', function (evt) {

	        if (x == "PMD_select"){
	    	console.log("PMD Selected");
	 
	    	}
	    	else{
	    		console.log("Bike Selected");
	    	}
	    	//write into temp file and shift camera pos
	    	var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: 0.732, y:1, z: 14.771 });//0.732 3.312 14.771
	    	camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
        });
  }
});

AFRAME.registerComponent('bound-collider', {
  init: function() {
  	var x = this.el.getAttribute("id")
  	
     this.el.addEventListener("hitstart", (e)=>{
         // Collision ! increment the score
        
		console.log(x + " has collided");
		if(x == "quesiton1_bound"){
			//show question 1
			var question = document.getElementById("Question_1");
			var question_desc = document.getElementById("Question_1_description");
			var o1 = document.getElementById("q1_option1");
			var o2 = document.getElementById("q1_option2");
			var o3 = document.getElementById("q1_option3");
			var o4 = document.getElementById("q1_option4");
			var camera = document.getElementById("player");
			question.setAttribute('visible', true);
			question_desc.setAttribute('visible', true);//14.567 1 -10
			o1.setAttribute('visible', true);
			o2.setAttribute('visible', true);
			o3.setAttribute('visible', true);
			o4.setAttribute('visible', true);
			camera.setAttribute('position', { x: 0.732, y:1, z: -10 });//0.732 3.312 14.771
			camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
		}
		else if(x == "quesiton2_bound"){
			//show question 1
			var question = document.getElementById("Question_2");
			var question_desc = document.getElementById("Question_2_description");
			var o1 = document.getElementById("q2_option1");
			var o2 = document.getElementById("q2_option2");
			var o3 = document.getElementById("q2_option3");
			var o4 = document.getElementById("q2_option4");
			var camera = document.getElementById("player");
			question.setAttribute('visible', true);
			question_desc.setAttribute('visible', true);//14.567 1 -10
			o1.setAttribute('visible', true);
			o2.setAttribute('visible', true);
			o3.setAttribute('visible', true);
			o4.setAttribute('visible', true);
			
		}
     })
  }
})

AFRAME.registerComponent('select-option-listener', {
    init: function () {
			var x = this.el.getAttribute("id")
            this.el.addEventListener('click', function (evt) {
			
		console.log(x + " has been selected");
	        if (x == "q1_option1"){
	        	var result = document.getElementById("Question_1_Result_Wrong");
	        	var question = document.getElementById("Question_1");
				var question_desc = document.getElementById("Question_1_description");
				var o1 = document.getElementById("q1_option1");
				var o2 = document.getElementById("q1_option2");
				var o3 = document.getElementById("q1_option3");
				var o4 = document.getElementById("q1_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
	    		console.log("Wrong");
	    		var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: 0.732, y:1, z: -26 });//0.732 3.312 14.771
	    	camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
	    	}
	    	else if(x == "q1_option2"){
	    		var result = document.getElementById("Question_1_Result_Wrong");
	        	var question = document.getElementById("Question_1");
				var question_desc = document.getElementById("Question_1_description");
				var o1 = document.getElementById("q1_option1");
				var o2 = document.getElementById("q1_option2");
				var o3 = document.getElementById("q1_option3");
				var o4 = document.getElementById("q1_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
				console.log("Wrong");
				var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: 0.732, y:1, z: -26 });//0.732 3.312 14.771
	    	camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
	    	}
	    	else if(x == "q1_option3"){
	    		var result = document.getElementById("Question_1_Result_Wrong");
	        	var question = document.getElementById("Question_1");
				var question_desc = document.getElementById("Question_1_description");
				var o1 = document.getElementById("q1_option1");
				var o2 = document.getElementById("q1_option2");
				var o3 = document.getElementById("q1_option3");
				var o4 = document.getElementById("q1_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
	    		console.log("Wrong");
	    		var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: 0.732, y:1, z: -26 });//0.732 3.312 14.771
	    	camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
	    	}
	    	else if(x == "q1_option4"){
	    		var result = document.getElementById("Question_1_Result_Correct");
	        	var question = document.getElementById("Question_1");
				var question_desc = document.getElementById("Question_1_description");
				var o1 = document.getElementById("q1_option1");
				var o2 = document.getElementById("q1_option2");
				var o3 = document.getElementById("q1_option3");
				var o4 = document.getElementById("q1_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","green");
	    		console.log("Correct");
	    		var camera = document.getElementById("player");
	    	camera.setAttribute('position', { x: 0.732, y:1, z: -26 });//0.732 3.312 14.771
	    	camera.setAttribute('rotation', { x: 0, y:0, z: 0 });
	    	}

	    	else if (x == "q2_option1"){
	        	var result = document.getElementById("Question2_Result_Wrong");
	        	var question = document.getElementById("Question_2");
				var question_desc = document.getElementById("Question_2_description");
				var o1 = document.getElementById("q2_option1");
				var o2 = document.getElementById("q2_option2");
				var o3 = document.getElementById("q2_option3");
				var o4 = document.getElementById("q2_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
	    		console.log("Wrong");
	    		var camera = document.getElementById("player");
			    	camera.setAttribute('position', { x:97, y:1, z: -63.474 });//0.732 3.312 14.771
			    	camera.setAttribute('rotation', { x: 90, y:0, z: 0 });
	    	}
	    	else if(x == "q2_option2"){
	    		var result = document.getElementById("Question_2_Result_Wrong");
	        	var question = document.getElementById("Question_2");
				var question_desc = document.getElementById("Question_2_description");
				var o1 = document.getElementById("q2_option1");
				var o2 = document.getElementById("q2_option2");
				var o3 = document.getElementById("q2_option3");
				var o4 = document.getElementById("q2_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
				console.log("Wrong");//93.184

				var camera = document.getElementById("player");
			    	camera.setAttribute('position', { x:97, y:1, z: -63.474 });//0.732 3.312 14.771
			    	camera.setAttribute('rotation', { x: 90, y:0, z: 0 });

	    	}
	    	else if(x == "q2_option3"){
	    		var result = document.getElementById("Question_2_Result_Wrong");
	        	var question = document.getElementById("Question_2");
				var question_desc = document.getElementById("Question_2_description");
				var o1 = document.getElementById("q2_option1");
				var o2 = document.getElementById("q2_option2");
				var o3 = document.getElementById("q2_option3");
				var o4 = document.getElementById("q2_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","red");
	    		console.log("Wrong");
	    		var camera = document.getElementById("player");
			    	camera.setAttribute('position', { x:97, y:1, z: -63.474 });//0.732 3.312 14.771
			    	camera.setAttribute('rotation', { x: 90, y:0, z: 0 });
	    	}
	    	else if(x == "q2_option4"){
	    		var result = document.getElementById("Question_2_Result_Correct");
	        	var question = document.getElementById("Question_2");
				var question_desc = document.getElementById("Question_2_description");
				var o1 = document.getElementById("q2_option1");
				var o2 = document.getElementById("q2_option2");
				var o3 = document.getElementById("q2_option3");
				var o4 = document.getElementById("q2_option4");

				question.setAttribute("visible",false);
				question_desc.setAttribute("visible",false);
				o1.setAttribute("visible",false);
				o2.setAttribute("visible",false);
				o3.setAttribute("visible",false);
				o4.setAttribute("visible",false);
				result.setAttribute("visible",true);
				result.setAttribute("color","green");
	    		console.log("Correct");
	    		var camera = document.getElementById("player");
			    	camera.setAttribute('position', { x:97, y:1, z: -63.474 });//0.732 3.312 14.771
			    	camera.setAttribute('rotation', { x: 0, y:90, z: 0 });
	    	}
	    	
	    	//write into temp file and shift camera pos
	    	
        });
  }
});