let perso, persoX, persoY, dir, arrow, n = 0
arrow = document.querySelector(".arrow")

let map1 = {
    background: 'sprites/village.png',
    entryX: 48,
    entryY: 24,
    exitX: 660,
    exitY: 468
},
    map2 = 

init()
function init(){
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "sprites/face_sprite0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = map1.entryX //placement de départ
    persoY = map1.entryY
    document.querySelector('body').appendChild(perso) //on le fait apparaîttre
    placePerso()
}
// Déplacement du personnage
window.addEventListener('keydown', 
    function(e){
    switch (e.keyCode) {
        // Vers le haut
        case 90 :
            persoY -= 12
            console.log(persoY)
            if (persoY < 0 || persoY > window.innerHeight) {  //si le perso est contre le mur, on ajoute les 12pixels et seulement après on effectue le déplacement
                persoY += 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/back_sprite" + n + ".png"
            break;
            // À droite
        case 68 :
            persoX += 12
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX -= 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/right_sprite" + n + ".png"
            break;
            // Vers le bas
        case 83 :
            persoY += 12
            console.log(persoY)
            srcImgPerso = "sprites/face_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 12
            }
            else{
                placePerso()
            }

            break;
            // À gauche
        case 81 :
            persoX -= 12
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX += 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/left_sprite" + n + ".png"
            break;
        default:
    }
    n++
    if (n == 4) {
        n = 0
    }
    perso.setAttribute('src', srcImgPerso)
    if (persoX == 660 && persoY == 468) {
        arrow.setAttribute('src','sprites/arrow.png')
        enterNewMap()
    }
    if (persoX == 600 && persoY == 180) {
    document.querySelector('.popup').style.display = "flex"
} else {
    document.querySelector('.popup').style.display = "none"
}
})




function enterNewMap(){
    window.location.href="https://minecraft.net/en-us/"
}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
    console.log(parseInt(perso.style.left))
    console.log(parseInt(perso.style.top))
}
