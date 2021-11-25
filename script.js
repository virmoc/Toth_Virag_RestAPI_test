$(function () {
    const myAjax = new MyAjax;
    const konyvekTomb=[];
    const szuloElem = $(".megjelenit");
    let apivegpont="http://localhost:3000/konyvek";
    let szuro="?tipus=regény";
    
    //apivegpont += szuro;
    //apivegpont += rendezes;
    console.log(apivegpont);
    myAjax.adatBetolt(apivegpont, konyvekTomb, kiir);

    $("#rendezesar").on("click", () =>{
        let rendezes="?_sort=ar&_order=desc";
        apivegpont += rendezes;
        myAjax.adatBetolt(apivegpont,konyvekTomb,kiir)
    });

   


    let keresomezo= $("#kereso");
    keresomezo.on("keyup", () =>{
        let apivegpont="http://localhost:3000/konyvek";
        apivegpont += "?q=" + keresomezo.val();
        console.log(apivegpont);
        myAjax.adatBetolt(apivegpont,konyvekTomb,kiir)
    })

    /*Adatok beillesztése */
    $("#ujAdat").on("click", () =>{
        let ujAdat= {
            "szerzo":$("#szerzo").val(),
            "cim": $("#cim").val(),
            "ar": $("#ar").val(),
            "tipus": $("#tipus").val()
        }
    
        myAjax.postBetolt(apivegpont, ujAdat);
    });

    $("#torol").on("click", () =>{
        myAjax.deleteBetolt(apivegpont,1)
    });

    $("#modosit").on("click", () =>{
        let modosit= {
            "szerzo":$("#szerzo").val(),
            "cim": $("#cim").val(),
            "ar": $("#ar").val(),
            "tipus": $("#tipus").val()
        }
        myAjax.putBetolt(apivegpont,modosit, 2)
    });


    function kiir(tomb){
        console.log(tomb);
        let sablon = "";
        tomb.forEach((element) => {
            sablon += 
            `
            <div >
            <h3 >${element.szerzo}</h3>
            <h4 class="cim">
            ${element.cim}
            </h4>
            <p>${element.tipus}</p>
            <span class="ar">${element.ar}</span>
            </div>
            `
        });
        szuloElem.html(sablon);
    }


});