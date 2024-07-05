const form = document.querySelector('form')
form.addEventListener ('submit',function(e){
    e.preventDefault();
    let height = parseFloat(document.querySelector('#height').value)
    let weight = parseFloat(document.querySelector('#weight').value)
    let result = document.querySelector('#results')

    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML=`Please give a valid height`;
    } else  if(weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML=`Please give a valid weight`;
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= `your BMI : ${bmi}`;

        if(bmi<14.6){
            result.innerHTML=`Underweight : ${bmi}`
        } else if(bmi>14.6 && bmi<24.9){
            result.innerHTML=`Normal : ${bmi}`
        } else if (bmi>24.9){
            result.innerHTML=`Overweight : ${bmi}`
        }


    }

    

})