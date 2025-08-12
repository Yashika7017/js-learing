const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')
   

    if(Height === ' ' || Height < 0 || isNaN(Height)){
        result.innerHTML = `please give me a valid height ${Height}`;
    }
    if(Weight === ' ' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `please give me a valid Weight ${Weight}`;
    }
    
    const bmi = (Weight / ((Height*Height)/ 10000)).toFixed(2)
        // show result 
    result.innerHTML = `<span>${bmi}</span>`;
    

    if (bmi < 18.6 ){
        result.innerHTML = `under weight : ${bmi}, Please increase your weight.`
        
    }
    else if (bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `Normal Weight : ${bmi}, Congratulations you are fit and fine.`
        
    }
    else if (bmi > 24.9){
        result.innerHTML = `Over weight : ${bmi}, Please reduce your weight otherwise your body will become home to diseases. `
        
    }
});


