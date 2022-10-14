function conversorTemperatura(){
    let Ntemp=document.getElementById("Ntemp").value
    Ntemp = parseInt(Ntemp)

    let cgraus = document.getElementById("cgraus").value
    
    let Tcelsius
    let Tfahrenheit
    let Tkelvin
    let Trankine

    if (cgraus === "C") {

        Tcelsius = Ntemp;
        Tfahrenheit = (Tcelsius * 1.8) + 32
        Tkelvin = Tcelsius + 273.15
        Trankine = Tkelvin * 1.8
    } 
    if(cgraus === "F") {
        Tfahrenheit = Ntemp;
        Tcelsius = (Tfahrenheit - 32) / 1.8;
        Tkelvin = Tcelsius + 273.15;
        Trankine = Tkelvin * 1.8;
    }
    if(cgraus === "K") {

        Tkelvin = Ntemp;
        Tcelsius = Tkelvin - 273.15
        Tfahrenheit = (Tcelsius * 1.8) + 32
        Trankine = Tkelvin * 1.8
    }
    if(cgraus === "R"){

        Trankine = Ntemp;
        Tkelvin = Trankine / 1.8
        Tcelsius = Tkelvin - 273.15
        Tfahrenheit = (Tcelsius * 1.8) + 32
    }
    document.getElementById('celsius').innerText=Tcelsius;
    document.getElementById('fahrenheit').innerText=Tfahrenheit;
    document.getElementById('kelvin').innerText=Tkelvin;
    document.getElementById('rankine').innerText=Trankine;
}
