const counter = document.querySelectorAll('.counter');

counter.forEach((counter) =>{
    // console.log(counter);
    counter.innerHTML = 0;

   const updateCounter = ()=>{
     // to get the value that is placed in the data-target 
    //  const targetCount = counter.getAttribute('data-target');
    //  console.log(targetCount);
     // the data get by method getArtibute() is typeOf string 
     // to perfom the calculations we need to get the typeOf numbers
     /*
    there are several ways to achieve it:
        1-  using the unary plus operator
         var n = +str
        2-  The Number Constructor:
         var n = Number(str);
        3-  The parseFloat function:
         var n = parseFloat(str);
     */
    
       const targetCount = +counter.getAttribute('data-target');
       const startingCount = Number(counter.innerHTML);
        
      const incr = targetCount / 100;

      if(startingCount < targetCount){
        counter.innerHTML =`${Math.round(startingCount + incr)}`;
        // to continue to increment the number from the starting number to the target number 
        setInterval( updateCounter, 100);
      }else{
        counter.innerHTML = targetCount;
      }
           
     
   }

    updateCounter();

})