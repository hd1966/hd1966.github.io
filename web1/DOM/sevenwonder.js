function showPic(whichpic)
{

var source = whichpic.getAttribute("href");
//hämta attribut ,där whichpic är länk vilket attribut hämtas
  var placeholder = document.getElementById("placeholder");
//lägg detta som attribut src i  placeholder (img taggen)
  placeholder.setAttribute("src",source);
  var description = document.getElementById("description");
  //lägg detta som attribut src i  placeholder (img taggen)
    var text = whichpic.getAttribute("title");
//upprepa densamma med title attribute
   description.innerHTML = text;
}
