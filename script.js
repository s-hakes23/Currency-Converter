let apikey = "a208ecff7208b3f73e582e28";
let baseurl = "https://v6.exchangerate-api.com/v6/"+apikey + "/latest/";
// console.log(baseurl);

async function currencyconvert() {
    let amount =(document.querySelector(".firstinput").value);
    let fc =(document.querySelector(".Fromconverter").value);
    let tc =(document.querySelector(".Toconverter").value);
    let thediv=  document.querySelector(".dispresult");
    let put;
    let response = await fetch(baseurl + fc);
    if (response.status == 200) {
      
        
        // console.log(response.status);
        let data = await response.json();
        
        let rate = data.conversion_rates[tc];
        let conversion = rate * amount;
        let m = document.querySelector(".dispresult");
        m.innerHTML = conversion;
        let put;
        if(amount== "" && fc != "" && tc != ""){
            put="NO INPUT";
            thediv.innerHTML = put;
        }
    }else {
        put = "Failure To convert";
        thediv.innerHTML= put;

    }
 
    // if(response.status != 200){
    //     put = "No way";
    //     thediv.innerHTML= put;
    // }
    
    
}
 