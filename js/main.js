
    // header
    function toggleClass(id, id2){
      document.querySelector(id).classList.toggle(id2);
        }
        
     

    // typed
    new Typed('#typed',{
      strings : ['Apps Developer','Web Designer','Apps Designer','Web Developer','Front End Developer'],
      typeSpeed : 90,
      delaySpeed : 90,
      loop : true
    });

    var bars = document.querySelectorAll('.meter > span');
    console.clear();
    
    // process bar
    setInterval(function(){
      bars.forEach(function(bar){
        var getWidth = parseFloat(bar.dataset.progress);
        
        for(var i = 0; i < getWidth; i++) {
          bar.style.width = i + '%';
        }
      });
    }, 500);
    
     // active class
     let exp = document.querySelector('#experience');
     let edu = document.querySelector('#education');
 
     exp.addEventListener('click',(e) => {
       exp.classList.add('active');
       edu.classList.remove('active');
     });
     edu.addEventListener('click',(e) => {
       edu.classList.add('active');
       exp.classList.remove('active');
     });
    