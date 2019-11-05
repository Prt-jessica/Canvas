const canvas = document.getElementById("canvas");
const contex = canvas.getContext("2d"); // récupère le contexte

const draw = () => {
  contex.font = "20px sans serif";
  contex.fillText("Bonjour Mon choubidou d'amour", 5, 20);

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
