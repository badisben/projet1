var image=['im01.jpg','im02.jpg','im03.jpg','im04.jpg',]

var cpt=0

function change(){
    var img=document
    .getElementById('img-slider')
    img.setAttribute('src','../img/'+image[cpt])
}

setInterval(()=> {
    change();
    cpt++;
    if(cpt>4) cpt=0;

}, 20000)

function next(){
    cpt++;if (cpt>4) cpt=0;
    change()
}
function previous(){
    cpt--;if (cpt<0) cpt=4;
    change()
}
