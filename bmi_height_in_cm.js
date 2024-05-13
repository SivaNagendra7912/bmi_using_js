while(true){
    
    var height = parseFloat(prompt("Height??.."))
    
    var weight = parseFloat(prompt("Weight??.."))
    
    var bmi = weight/(height/100)**2
    
    if(bmi <= 18.5){
        alert("UNDER WEIGHT")   
    }
        
    else if(bmi <= 25){   
        alert("NORMAL")  
    }
        
    else if(bmi <= 30){
        alert("OVER WEIGHT")
    }
        
    else{
        alert("OBESE")
    }
    
    var input = prompt("want to continue??...")
    
    if(input != 'yes') 
    {
        break
    }
}