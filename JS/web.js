console.log("Error");
//..........................................................................Shadow      
function ScrollingF(){
	document.getElementById("demo") ;
}//Allows the user to scroll through the screen.


$(window).scroll(function(){
	var pos = $(this).scrollTop();
	console.log(pos);
	if(pos>10){
		$(".container").css("box-shadow", "1px 1px 15px black");
	}
	if(pos<10){
		$(".container").css("box-shadow", "none");
	}
});





$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>10){
    $(".navbar-header").css("box-shadow", "1px 1px 15px black");
  }
  if(pos<10){
    $(".navbar-header").css("box-shadow", "none");
  }
});


$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>10){
    $(".navbar-collapse").css("box-shadow", "1px 1px 15px black");
  }
  if(pos<10){
    $(".navbar-collapse").css("box-shadow", "none");
  }
});


$(document).ready(function(){
	$("#par").hide();                         //FUNCTION FOR THE BUTTON WHICH I DID NOT USE
    $("#appear").click(function(){
        $("#par").show();
        $("#appear").hide();
    });
});


//..........................................................................MODAL                        
console.log();                                                    

$(document).ready(function() {
        
   
                                                                                      //I have taken this code from w3chools and changed and removes some classes
   /* when clicking a thumbnail */
   $(".thumbnail").click(function(){
    var content = $(".modal");
    var title = $(".modal-title");
  
    content.empty();  
    title.empty();
  
  	var id = this.id;  
     var alive = $("#alive .item");
     var aliveCopy = alive.filter("#" + id).clone();    
     var active = aliveCopy.first();
  
    active.addClass("active");
    title.html(active.find("img").attr("title"));
  	content.append(aliveCopy);

    // show the modal
  	$("#modal-gallery").modal("show");
  });

});


//........................................................................About me effect

$(window).scroll(function() {


var pos = $(this).scrollTop();
  console.log(pos);



if (pos < 150){
  $('#text1').addClass('hidden1');
  $('#text1').addClass('fadeIn animated');
}
if (pos > 150 && pos < 700){

  $('#text1').removeClass('hidden1');
}
if (pos > 700){
  $('#text1').addClass('hidden1');
}



});


$(window).scroll(function() {


var pos1 = $(this).scrollTop();
  console.log(pos1);



if (pos1 < 1000){
  $('#text2').addClass('hidden2');
  $('#text2').addClass('fadeIn animated');
}
if (pos1 > 1000 && pos1 < 1200){

  $('#text2').removeClass('hidden2');
}
if (pos1 > 1000){
  $('#text2').addClass('hidden2');
}



});


$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>5){
    $(".who1").css("visibility", "hidden");
    $('#hid1').addClass('fadeInOut animated');
  }
  if(pos<5){
    $(".who1").css("visibility", "visible");
    $('.who1').addClass('fadeIn animated');
  }
});

$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>5){
    $(".who2").css("visibility", "hidden");
    $('#hid1').addClass('fadeInOut animated');
  }
  if(pos<5){
    $(".who2").css("visibility", "visible");
  }
});

$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>5){
    $(".who3").css("visibility", "hidden");
    $('#hid1').addClass('fadeIn animated');

  }
  if(pos<5){
    $(".who3").css("visibility", "visible");
  }
});


$(window).scroll(function(){
  var pos = $(this).scrollTop();
  console.log(pos);
  if(pos>900){
    $(".int1").css("visibility", "visible");
    $("#hid2").addClass("fadeInUp animated");
    $(".int2").css("visibility", "visible");
    $(".int3").css("visibility", "visible");
    $(".int4").css("visibility", "visible");

    

  }
  if(pos< 900){
    $(".int1").css("visibility", "hidden");
    $(".int2").css("visibility", "hidden");
    $(".int3").css("visibility", "hidden");
    $(".int4").css("visibility", "hidden");
    }
});



 function myProject(){
$(".About3").css("visibility", "visible");
 }


 //this is the project that i have included 