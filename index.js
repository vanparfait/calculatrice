const calculatrice = document.querySelector(".calculatrice");
const ecran = document.getElementById("ecran");
const touches = [...document.querySelectorAll(".bouton")]; //spread pour transformer en tableau

const listeKeyCode = touches.map((touche) => touche.dataset.key);

calculatrice.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

calculatrice.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeyCode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "187":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeyCode = listeKeyCode.indexOf(valeur);
        const touche = touches[indexKeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};
window.addEventListener("error", (e) => {
  alert("une erreur s'est produite dans votre calcul :" + e.message);
});
