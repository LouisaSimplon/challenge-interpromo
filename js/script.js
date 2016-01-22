/*récuperer mon élément dans challenge*/

var c = document.getElementById("challenge");
console.log(c);

/*demander à ma variable "c" de faire des changements dans son html en lui donnant un style*/
function change() {
 c.innerHTML = prompt("Bonjour");
   console.log("bou!");
   c.style.backgroundColor = "turquoise";
}
