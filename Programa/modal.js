// Get the modal
var modal = document.getElementById("zoom1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalimg1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("zoom2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalimg2");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



// Get the modal
var modal = document.getElementById("zoom3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalimg3");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}