const filter_button = document.querySelectorAll('.btn');

Array.from(filter_button).forEach(function(button){      
    button.addEventListener('click',function(event){

        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');
    })
})