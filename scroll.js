function scrollFunc(){
    if(document.getElementById("hero-section").offsetTop > 0){
        document.getElementById("hero-section").classList.add('sticked');
    }else{
        document.getElementById("hero-section").classList.remove('sticked');
    }
}