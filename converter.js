let err = document.getElementById("res");
let Out = document.getElementById("result");
let result;
let final;


function TemperatureCon() {
        const inputTemperature = parseFloat(
          document.getElementById("temperatureInput").value
        );


        if (isNaN(inputTemperature)) {
          err.textContent =
            "Enter a valid number";
          return;
        }

        const Toscale = document.getElementById("ToTemperatureScale").value;
        const Fromscale = document.getElementById("FromTemperatureScale").value;

    /*handling same units*/

        if (Fromscale === "celsius" && Toscale === "celsius") {
           err.textContent = "data of same units will be same";
           alert('from and to cannot be same(C)');
           return;
        } 

        
        else if (Fromscale === "fahrenheit" && Toscale === "fahrenheit") {
            err.textContent = "data of same units will be same";
           alert('from and to cannot be same(F)');
           return;
        } 

        else if (Fromscale === "kelvin" && Toscale === "kelvin") {
            err.textContent = "data of same units will be same";
            alert('from and to cannot be same(K)');
            return;
        } 
        
        else if(Fromscale === "from" || Toscale === "to"){
            err.textContent = "choose the from and to unit";
        }
setTimeout(()=>{
    err.textContent = " ";
},500)


/* variable handlers */
let FtoC= ((inputTemperature - 32) * 5/9).toFixed(2);
let CtoF= ((inputTemperature * 9/5) + 32).toFixed(2);
let CtoK= ((inputTemperature) + 273.15).toFixed(2);
let KtoC= ((inputTemperature) - 273.15).toFixed(2);
let KtoF= ((inputTemperature - 273.15) * 9/5 + 32).toFixed(2);
let FtoK= ((inputTemperature - 32) * 5/9 + 273.15).toFixed(2);
        
    /*conversion from fahrenheit to cellsius and vice-ver-sa*/
        if (Fromscale === "fahrenheit"  && Toscale === "celsius") {
           final =`${inputTemperature}` +" "+ "F" + " "+ "is" +" "+`${FtoC}`  +"*C" ;
        } 
        
        else if (Fromscale === "celsius" && Toscale === "fahrenheit") {
           final =`${inputTemperature}` +" "+ "*C" + " "+ "is" +" "+`${CtoF}`+"F";
        }

    /*conversion from celsius to kelvin and vice-ver-sa*/
       if (Fromscale === "calsius"  && Toscale === "kelvin") {
           final =`${inputTemperature}` +" "+ "*C" + " "+ "is" +" "+ `${CtoK}`+"K";
        } 
        
        else if (Fromscale === "kelvin" && Toscale === "celsius") {
            final =`${inputTemperature}` +" "+ "K" + " "+ "is" +" "+ `${KtoC}` +"*C";
        }

    /*conversion from kelvin to farhrenheit and vice-cer-sa*/
    if (Fromscale === "kelvin"  && Toscale === "fahrenheit") {
        final = `${inputTemperature}` +" "+ "K" + " "+ "is" +" "+`${KtoF}`+"F";
        } 
        
        else if (Fromscale === "fahrenheit" && Toscale === "kelvin") {
           final = `${inputTemperature}` +" "+ "F" + " "+ "is" +" "+`${FtoK}`+"K";
        }

 Out.textContent = final;

 setTimeout(()=>{
    Out.textContent =" ";
 },5000)
};
