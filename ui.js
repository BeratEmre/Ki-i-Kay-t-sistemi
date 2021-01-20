let kayitOl=document.getElementById("kayıtOl");
let giris=document.getElementById("giris");
let container=document.getElementById("container");

giris.addEventListener("click",Giris);
kayitOl.addEventListener("click",Kayıt);

function Giris(e) {
    girisHTML=`
    <div style="margin-left: 38px; font-size:25px">
        Üyelik Giriş Sayfası
    </div>
    <div style="margin-top: 10px; font-size:20px">
        Kullanıcı Adı<br>
        <input type="text" id="isim" class="input"><br><br>
        Şifre<br>
        <input type="text" id="sifre" class="input">
    </div>
    <div>
        <button class="btn" id="girisBtn">Giriş</button>
    </div>
    <div id="div5"> 
    </div>
    
    `;
    container.innerHTML=girisHTML;

    let girisBtn=document.getElementById("girisBtn");
    girisBtn.addEventListener("click",GirisBtn);   

    function GirisBtn(e) {
        console.log("girişss")
        let storage=new Storage();
        let persons=storage.GetPersonStorage();
        let inputIsim=document.getElementById("isim").value;
        let inputSifre=document.getElementById("sifre").value;
       for(let i=0;i<persons.length;i++){
        if (inputIsim==persons[i].isim&&inputSifre==persons[i].numara) {
            ileri(inputIsim,inputSifre)            
         }
       }
        
       function ileri(inputIsim,inputSifre) {
            storage.loadPerson(inputIsim,inputSifre);
       }
    }
    
    e.preventDefault()
}

function Kayıt(e) {
    
    kayitHTML=`
    <div style="margin-left: 38px; font-size:25px">
        Kişi Kayıt Sistemi
    </div>
    <div style="margin-top: 10px; font-size:20px; ">
        Kullanıcı Adınızı Oluşturunuz<br>
        <input type="text" id="isim" class="input"><br><br>
        Şifre Oluşturunuz<br>
        <input type="tel" id="number" class="input">
    </div>
    <div>
        <button class="btn" id="kaydet">Kaydet</button>
        
    </div>
    <div id="div5"> 
    </div>
    
    
    `;
    container.innerHTML=kayitHTML;

    let kaydetBtn =document.querySelector("#kaydet");
    kaydetBtn.addEventListener("click",Kaydet);



    let isimInput = document.getElementById("isim");
    let numaraInput = document.getElementById("number");

    let id=0;
 
    let storage=new Storage()
    

    /*function eventListeners() {
        document.addEventListener("DOMContentLoaded",function(){
        let persons=storage.GetPersonStorage();
        storage.loadAllpersons(persons);
    });*/
    

    function Persons(id,isim,numara) {
    this.id=id,
    this.numara=numara,
    this.isim=isim
    }

    function Kaydet(e) {
        let btnEkle=document.getElementById("div5");
        let btn='<button class="btnAnasayfa" id="btnGiris"> Giriş</button>'
        btnEkle.innerHTML=btn;
        let girisBtn=document.getElementById("btnGiris");
        girisBtn.addEventListener("click",Giris);

        let isim=isimInput.value;
        let numara=numaraInput.value;
        id++;
        const newperson=new Persons(id,isim,numara);
        alert("Kişi Kaydedildi");
        storage.addKisiToStorage(newperson);
        e.preventDefault();
    }

    e.preventDefault();
}