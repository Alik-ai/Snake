const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); //Ce context sert a code en 2d

ctx.fillStyle = "white";  //fillStyle remplie le background de la variable ctx (fill = remplissage)
ctx.strokeStyle = "black";  //Le contour de notre canvas
ctx.fillRect(0,0,canvas.width, canvas.height); //on remplie le remplissage 
ctx.strokeRect(0,0,canvas.width, canvas.height); //on remplie le contour

//Variable

    //Vitesse sur x
vx = 10;


//Dans ce tableau on met des objets qui vont representer un carre du serpent
//le 1er objet est la tete du serpent
let snake = [ {x:140, y:150}, {x:130, y:150}, {x:120,y:150},{x:110,y:150} ]; 


//On dessine le modele du serpent 
function dessineLesMorceaux(morceau){
    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = 'black';
    ctx.fillRect(morceau.x, morceau.y, 10,10); //fillrect sert à remplir un rectangle
    ctx.strokeRect(morceau.x, morceau.y, 10,10); //strokerect sert a faire les contours
};

//on appele snake foreach pour que sa les dessines
function dessineLeSerpent(){
    snake.forEach(morceau => {
        dessineLesMorceaux(morceau);
    })

}
dessineLeSerpent();

//On ajoute uncarre au debut et on enleve le dernier
function faireAvancerSerpent(){

    const head = {x: snake[0].x + vx, y: snake[0].y};
    snake.unshift(head);

};
