const calculateTemp = ()=>{
    // to get the number selected by the user
    const tempnumber = document.querySelector('#temp').value;
    console.log(tempnumber);
    const tempSelected = document.querySelector('#temp_diff');
     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
     console.log(valueTemp);
      
    // calculation for conversion of cel to fah and feh to cel


    const celToFah =(cel) =>{
           let fah = Math.round((cel * 9/5) + 32);
           return fah;
    }

    const fehToCel =(fah) =>{
           let cel = Math.round((fah-32)*5/9);
           return cel;
    }


     let result;
     if(valueTemp == 'cel'){

        result = celToFah(tempnumber);
        document.getElementById('resultContainer').innerHTML = `= ${result}° Fahrenheit`;
     }else{
        result = fehToCel(tempnumber);
        document.getElementById('resultContainer').innerHTML= `= ${result}° Celsius`;
     }

}