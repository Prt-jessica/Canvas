

const canvas = document.getElementById("canvas");
const contex = canvas.getContext("2d"); // récupère le contexte

const border= () =>{
  contex.strokeStyle = "black";
  contex.strokeRect(0,0, 800,700 ); // stroke = déssiner sans remplir

}
const drawImg =() =>{
  const width = canvas.getAttribute("width");
  const height = canvas.getAttribute("height");
  const img = new Image();
  img.src = "chaton_licorne.jpg";
 
 
  img.onload = () =>{
 contex.drawImage(
   img,
    width/2 - 320/2,
   height /2 - 400/2,
   320,
   400,
   
 

 )
  }

}

const draw = () => {
  contex.font = "20px sans serif";
  contex.fillText("Licorne Chat-chat", 5, 20);

  contex.fillStyle = "pink"; //colorier
  contex.fillRect(5, 85, 80, 80); // créer la forme
  contex.fillStyle = "purple";
  contex.fillRect(87, 85, 80, 80);

  contex.fillStyle = "blue";
  contex.fillRect(169, 85, 80, 80);

  contex.fillStyle = "red";
  contex.fillRect(251, 85, 80, 80);
};
draw();
drawImg();
border();
