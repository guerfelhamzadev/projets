// javascript.js
//le fichier contient la fonction transfert pour ajouter les element , la fonction s pour selectionner tout les document dans la 2eme zone text et pour finir la fonction d pour supprimer tout les elements


function transfert() {
    // Récupérer les valeurs des textarea
    var text1 = document.getElementById('objet').value;
    var text2 = document.getElementById('zone');

    // Vérifier si le textarea n'est pas vide
    if (text1.trim() !== '') {
        // Ajouter la nouvelle tâche à la liste
        text2.value += text1 + '\n';

        // Effacer le contenu du textarea d'entrée
        document.getElementById('objet').value = '';
    }
}


function s(){
    var ss=document.getElementById('zone')
    ss.select()



}

function d (){

document.getElementById('zone').value=''



}
