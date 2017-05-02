 var slider = document.getElementsByClassName('accordion-title');

  for (var i=0; i< slider.length; i++){

    slider[i].addEventListener('click', function(){
        
        if (!(this.classList.contains('active'))){
          //открыть div по клику, закрыть остальные
          for (var i=0; i< slider.length; i++){
            slider[i].classList.remove('active');
            slider[i].firstChild.classList.remove('color-change');
            slider[i].lastChild.classList.remove('new');
          }

            this.classList.add('active');
            this.firstChild.classList.toggle('color-change');
            this.lastChild.classList.toggle('new');
        } else if(this.classList.contains('active')){
          //скрыть div  по клику

            this.classList.remove('active');
            this.firstChild.classList.remove('color-change');
            this.lastChild.classList.remove('new');
        }
    })
  };

