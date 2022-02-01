// message on load ---------------------------------------
function opening(){
  alert("1.Javascript used in nav bar mobile view"+"\n"+"2.Click on VENOM 2.0 and VENOM 3.0 to see different properties used."+"\n"+"3.Java script used on animation on mouse click one time.")
}

// "+"\n"+"4.Click on Login button to go to login page which is under process using php."

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // slider
  var i=0;
  function slider(){
    
      if(i==0){
          i1.style.opacity="0";
          i2.style.opacity="1";
      }
      if(i==1){
          i2.style.opacity="0";
          i3.style.opacity="1";
      }
      if(i==2){
          i3.style.opacity="0";
          i1.style.opacity="1";
        }
        i++;
      if(i==3)
        i=0;
        
        setTimeout("slider()",2000);
  }
  
