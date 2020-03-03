//var headContainerBackground=document.getElementById("head_container");

var baseBackground="orange";
var statusbarbackground="black";
//document.style.backgroundColor=headContainerBackground.style.backgroundColor;
//-----------------alert(headContainerBackground.style.backgroundColor);-----------------------//
//COMMAND TO GENERATE AN ARRAY OF 6 RANDOM COLORS
//A NUMBER IS PASSED AS ARGUMENT TO SPECIFY THE NUMBER OF ITEMS IN THE ARRAY
var colors=generateRandomColors(6);

//COMMAND TO PICK A RANDO COLOR FROM THE ARRAY
var pickedColor=pickColor();

//LOGIC TO ASK THE QUESTION BY CHANGING THE TEXT IN A <span>

	//GETTING SPAN BOX BY ID
	var colorDisplay=document.getElementById("colorQues");
	
	//PICKED COLOR IS ASKED AS THE QUESTION IN THE SPAN(ID--colorQues)  
	colorDisplay.textContent=pickedColor;

//ASSIGNING A VARIABLE TO A SPAN BOX WHICH WILL SHOW THE RESULT(CORRCT/INCORRECT)	
var messageDisplay=document.getElementById("message");

//ASSINGNING A VARIABLE TO THE RESET BUTTON (USING querySelector)
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");

//ASSIGNING AN ARRAY TO ALL THE COLOR SQUARES (USING querySelectorAll(.id)) 
var squares=document.querySelectorAll(".square");

//LOOP TO ASSIGN THE COLORS FOR COLOR ARRAY TO OUR SQUARES AND TO WRITE LOGIC FOR EVENT OF CLICKING THE SQUARES
for(var i=0;i<squares.length;i++){
	
	//ASSIGNING EACH SQUARE A RANDOM BACKGROUND COLOR 
	squares[i].style.backgroundColor = colors[i];
	
	//LOGIC FOR EVENT OF SQUARE CLICKING
	squares[i].addEventListener("click",function(){
		
		//ASSIGNING A VARIABLE TO THE COLOR OF CLICKED SQUARE
		var clickedColor=this.style.backgroundColor;

		//CHECKING IF THE CLICKED COLOR IS SAME AS QUESTION COLOR/PICKED COLOR
		//USING === SO THAT TYPE OF DATATYPE IS SAME MOREOVER IT IS MORE SAFE
		//IF CONDITION IS TRUE:-
		if(clickedColor === pickedColor){
			if(	document.getElementById("easy").style.background!=baseBackground)
					document.getElementById("easy").style.background="none";

			document.getElementById("statusbar").style.background="green";

			//MESSAGE TO THE SPAN BOX WHICH SHOWS THE RESULT 	
			messageDisplay.textContent="right answer!!";

			//CHANGING THE TEXT CONTENT OF RESET BUTTON TO PLAY AGAIN
			resetButton.textContent="PLAY AGAIN?";

			//FUNCTION CALL TO CHANGE COLOR OF ALL SIX SQUARES TO THE RIGHT ANSWER
			//ARGUMENT GIVEN--THE CORRECT COLOR 
			changeColor(clickedColor);
			
			document.getElementById("head_container").style.backgroundColor=clickedColor;
		}
		//IF  CONDITION IS FALSE:-
		else{
			if(	document.getElementById("easy").style.background != baseBackground)
				document.getElementById("easy").style.background="none";
			document.getElementById("statusbar").style.background="red";

			//MESSAGE TO THE SPAN BOX WHICH SHOWS THE RESULT -- TO TRY AGAIN
			messageDisplay.textContent="TRY AGAIN";

			//ASSIGNING THE CLICKED(INCORRECT) SQUARE THE COLOR THE COLOR OF BACKGROUND
			this.style.background="grey";
			//this.style.background-image="E:\WEB-PROJECTS\color-game\background.jpg";

		}
	})

}

//LOGIC OF WHAT THE PROGRAM WILL DO WHEN RESET BUTTON IS CLICKED ie WHEN EVENT OF RESET OCCURS
resetButton.addEventListener("click",function(){
	hardEasyToggle();
	resettingHard();	
})

hardButton.addEventListener("click",function(){
	if(document.getElementById("hard").style.background===baseBackground){
		alert("ALREADY IN HARD MODE!!");
	}
	else{
		hardEasyToggle();
		resettingHard();
	}			
})


easyButton.addEventListener("click",function(){

	
	if(document.getElementById("easy").style.background===baseBackground){
		alert("ALREADY IN EASY MODE!!");
	}
	else{
		easyHardToggle();
		
		//NEW RANDOM COLORS ARE GENERATED USING generateRandomColors FUNCTION 
		colors=generateRandomColors(3);
		
		//RANDOM COLOR IS PICKED AGAIN
		pickedColor=pickColor();
		
		//PICKED COLOR IS ASKED AS THE QUESTION
		colorDisplay.textContent=pickedColor;

		for(var i=0;i<3;i++){
			//ASSIGNING EACH SQUARE A RANDOM BACKGROUND COLOR 
			squares[i].style.backgroundColor = colors[i];
			squares[5-i].style.backgroundColor ="grey"; 
		}
	}	
})

function resettingHard(){
	messageDisplay.textContent="WELCOME";
	document.getElementById("head_container").style.backgroundColor=baseBackground;

	//NEW RANDOM COLORS ARE GENERATED USING generateRandomColors FUNCTION 
	colors=generateRandomColors(6);
	
	//RANDOM COLOR IS PICKED AGAIN 
	pickedColor=pickColor();
	
	//PICKED COLOR IS ASKED AS THE QUESTION
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		//ASSIGNING EACH SQUARE A RANDOM BACKGROUND COLOR 
		squares[i].style.backgroundColor = colors[i];
	}
}


//FUNCTION BODY OF THE FUNCTION TO CHANGE THE COLOR OF ALL SIX COLORS TO THE RIGHT COLOR
function changeColor(color){

	//ASSIGNING EACH SQUARE THE CORRECT COLOR USING FOR LOOP
	for(var i=0;i<squares.length;i++){
		//COLOR WAS GIVEN AS ARRGUMENT TO THE FUNCTION 
		squares[i].style.backgroundColor=color;
	}

}

//FUNCTION TO PICK A RANDOM COLOR
function pickColor(){
	//ASSIGNING A VARIABLE TO THE RANDOM NUMBER CALCULATED
	//IT IS DONE USING Math.random() which gives a random decimal value between 0 and 1 
	//THIS VALUE IS THEN MULTIPLIED BY THE MAX POSSIBLE RANDOM NUMBER ACCORDING TO CONDITION
	//BUT WE CAN'T USE A DECIMAL NO. IN ARRAY ITERATION
	//THUS WE USE Math.floor() WHICH CHOPS OF THE NUMBERS AFTER DECIMAL  AND GIVE A WHOLE NUMBER 
	var ran= Math.floor(Math.random()* colors.length);
	
	//RETURNING THE SELECTED RANDOM COLOR 
	return colors[ran];
}

//FUNCTION BODY TO GENERATE RANDOM COLORS ARRAY
function generateRandomColors(num){
	//ARGUMENT IS THE NUMBER OF ITEMS IN THE ARRAY 	
	//INTIALIZING AN EMPTY ARRAY
	var arr=[];

	//LOOP TO PUSH A NEW COLOR TO EVERY CELL OF THE ARRAY
	for(var i=0;i<num;i++){
		//arraynName.push() IS USED TO ADD NEW ELEMENTS TO THE ARRAY
		//ARRGUMENT TAKEN BY push() IS THE CONTENT IN THE ARRAY CELL
		//HERE THE CONTENT IS COLOR NAME
		//THIS COLOR NAME IS RETURNED BY A FUNCTION randoColor()
		arr.push(randomColor());
	}

	//RETURNING THE BUILT ARRAY TO THE VAR COLORS
	return arr;
}

//FUNCTION TO GENERATE ONE RANDOM COLOR IN THE FORM OF RGB
function randomColor(){

	//GETTING A VALUE FOR R AND STORING IT IN VARIABLE USING Math.random()
	var r=Math.floor(Math.random()*256);
	//GETTING A VALUE FOR R AND STORING IT IN VARIABLE USING Math.random()
	var g=Math.floor(Math.random()*256);
	//GETTING A VALUE FOR R AND STORING IT IN VARIABLE USING Math.random()
	var b=Math.floor(Math.random()*256);		

	//RETURNING THE RGB COMBINED STRING TO THE generateRandonColors() FUNCTION
	//CAREFULLYOBSERVE THE SPACING
	//THE SPACING SHOULD BE ACCURATE AS COMPUTER GENERATED RGB IS IN THIS FORM ONLY
	return "rgb("+r+", "+g+", "+b+")";
}
function easyHardToggle(){
	//alert("easyHard toggle");
	document.getElementById("statusbar").style.background=statusbarbackground;
	document.getElementById("hard").style.background="none";
	document.getElementById("easy").style.background=baseBackground;
}


function hardEasyToggle(){
	//alert("hard easy toggle toggle");
	document.getElementById("statusbar").style.background=statusbarbackground;
	document.getElementById("easy").style.background="none";
	document.getElementById("hard").style.background=baseBackground;
}