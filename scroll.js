function scrollFunc(){
    if(document.getElementById("name-div").getBoundingClientRect().top < 0){
        document.getElementById("name-div").classList.add('sticked');
    }else{
        document.getElementById("name-div").classList.remove('sticked');
    }
}