
function Storage() {
    
}
Storage.prototype.addKisiToStorage=function(newperson){
    let persons=this.GetPersonStorage();
    persons.push(newperson);

    localStorage.setItem("persons",JSON.stringify(persons));

}
Storage.prototype.GetPersonStorage=function(){
    let persons;
    if (localStorage.getItem("persons")===null) {
        persons=[];
    }else{
        persons=JSON.parse(localStorage.getItem("persons"));
    }
    return persons;
}
Storage.prototype.loadAllpersons=function(persons){
    let personList=document.getElementById("div1");
    let sil=document.getElementById("container");
    sil.innerHTML="";
    persons.forEach(function(person) {
        personList.innerHTML+=`<div class="div2" id="${person.id}"> 
        <p class="yazi"> 
        ID = ${person.id}<br>İSİM = ${person.isim}<br>NUMARA = ${person.numara}
        </p>
        </div>`;
    });
}
Storage.prototype.loadPerson=function(inputIsim,inputSifre) {
    
    if (inputIsim=="Nezihe") {
        let div0=document.getElementById("div0");
        div0.innerHTML=`<div class="nezihe" id="nez">
        <img src="" alt="" class="foto">

        </div>`; 
    }
    else {
        let personList=document.getElementById("div1");
        let sil=document.getElementById("container");
        sil.innerHTML="";
        personList.innerHTML+=`<div>Kişi Bilgileri<div class="div2" > 
        <p class="yazi"> 
        İSİM = ${inputIsim}<br>NUMARA = ${inputSifre}
        </p>
        </div>
        </div>`;
    }
    
    
    
}