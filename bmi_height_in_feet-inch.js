while (true) {
    
    var height = parseFloat(prompt("Height??..(feet.inch)"));
    
    var weight = parseFloat(prompt("Weight??..(kg)"));
    
    var feet = parseInt(height);
    
    var inch = Math.floor((height % 1)*10);
    
    var height_in_m = (((feet * 12) + inch) * 2.54)/100;
    
    var bmi = weight / (height_in_m ** 2);
    
    if (bmi <= 18.5){
        alert("UNDER WEIGHT");
    }
        
    else if (bmi <= 25){
        alert("NORMAL");
    }

    else if (bmi <= 30){
        alert("OVER WEIGHT");
    }

    else{
        alert("OBESE");
    }

    var proceed = prompt("Want to Continue??..");

    if ( proceed != "yes"){
        break
    }
         
}