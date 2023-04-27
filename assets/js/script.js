var url = "https://digimon-api.vercel.app/api/digimon" 
var contenido = document.querySelector("#contenido");
var searchbar = document.getElementById("search");
var dataStore = [];


fetch(url).then((response)=>{
  return response.json();
}).then((item)=>{
  console.log(item[0].title);
  let datos="";
  item.map((values)=>{
    datos+=` 
    <tr>
      <td>${values.name}</td>
      <td>${values.level}</td>
      <td><img src="${values.img}"/></td>
    </tr>`;
  });
  document.getElementById("table-body").innerHTML=datos;
})


function mostrarHistoria(){
  document.getElementById('historia').style.display = "block"
}

function ocultarHistoria(){
  document.getElementById('historia').style.display = "none";
}


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}