const nama = "richiro";
let usia = 25;
let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {    
    let generasi;

    if(usia > 13 & usia < 17) {
        generasi = " generasi remaja";
       
    } 
    
    else if(usia > 17 & usia <50) {
        generasi = "generasi dewasa"
    } 
    
    else if(usia > 50 & usia < 100){
        generasi = "generasi tua"
    } 
    
    else {
       generasi =" generasi bayi"
    }
   
    return biodata.innerHTML = generasi;

}

console.log(nama)
console.log(usia)
generateBiodata();