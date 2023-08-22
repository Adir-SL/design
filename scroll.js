function scrollFunc(){
    if(document.getElementById("name-div").offsetTop > 0){
        document.getElementById("name-div").classList.add('sticked');
    }else{
        document.getElementById("name-div").classList.remove('sticked');
    }
}