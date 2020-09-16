sap.ui.define(["sap/ui/core/mvc/Controller",
			   "tortoise/model/model",
			   "sap/m/Button"],
	  function(Controller, models, Btn){
	  	"use strict";
	  	return Controller.extend("tortoise.controller.Main",{
	  		//like constructor of a class, its called hook method
	  		//it is a built in method, when the controller object is created by SAPUI5
	  		//Right after that, the UI5 will call this method - once in lifetime of a controller
	  		//All the initilization code can be kept in this method
	  		onInit: function(){
	  			//debugger;	
	  			var oModel = models.createJSONModel("model/mockData/mydata.json");
	  			//Step 3: Make the model aware to the application
	  			//This is our DEFAULT model - no name
	  			sap.ui.getCore().setModel(oModel);
	  			//Step 4 : BINDING <DO IT IN VIEW>
	  			var oModel2 = models.createJSONModel("model/mockData/avengers.json");
	  			//NAMED Model
	  			sap.ui.getCore().setModel(oModel2, "avg");
	 
	  		},
	  		onBeforeRendering: function(){
	  			//debugger;	
	  		
	  		},
	  		onAfterRendering: function(){
	  			//debugger;	
  				$("#idMax--zkas").fadeOut(5000, function(){
	  				$("#idMax--zkas").fadeIn(5000)	;
	  			});
	  		},
	  		onExit: function(){
	  		//	debugger;	
	  		},
	  		pacman: function(){
	  			//alert("welcome to new world");
	  			sap.ui.require(["sap/m/MessageBox"], function(Tirian){
	  				Tirian.show("Welcome to Game of thrones");	
	  			});

	  		},
	  		mario: function(){
	  			//alert("this was called in controller");
	  			//TODO: check the value user entered in input field
	  			//methods / function / api
	  			var oPass = sap.ui.getCore().byId("idPwd"); 
	  			var userName = sap.ui.getCore().byId("idUser").getValue();
	  			var password = oPass.getValue();
	  			
	  			if(userName === "Anubhav" && password === "Demo@121"){
	  				debugger;
	  				this.pacman();
	  			}else{
	  				alert("bad credentials");
	  			}
	  			
	  		}
	  		
	  	});
	  }
);