class MyAjax{
    constructor() {
        
    }
adatBetolt(apivegpont, tomb, myCallback){
    tomb.splice(0,tomb.length);
    $.ajax({ 
        url: apivegpont,
        type: "GET",
        success: function (result) {
            result.forEach(element => {
                //console.log(element);
                tomb.push(element);
               
                
            });
            myCallback(tomb); 
        }
      });
}

postBetolt(apivegpont, adat){
    $.ajax({ 
        url: apivegpont,
        type: "POST",
        data: adat,
        success: function (result) {
                console.log(result);
               
                
        }
      });
}

deleteBetolt(apivegpont, id){
    $.ajax({ 
        url: apivegpont+"/"+id,
        type: "DELETE",
        success: function (result) {
                console.log(result);
               
                
        }
      });
}
putBetolt(apivegpont, adat, id){
    $.ajax({ 
        url: apivegpont+"/"+id,
        type: "PUT",
        data:adat,
        success: function (result) {
                console.log(result);
               
                
        }
      });
}
}