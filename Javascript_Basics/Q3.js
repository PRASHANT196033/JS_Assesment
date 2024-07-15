
function getCurrentDate() {
 
    let currentDate = new Date();

    
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1; 
    let yyyy = currentDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }


    let formattedDate1 = mm + '-' + dd + '-' + yyyy; 
    let formattedDate2 = mm + '/' + dd + '/' + yyyy; 
    let formattedDate3 = dd + '-' + mm + '-' + yyyy; 
    let formattedDate4 = dd + '/' + mm + '/' + yyyy; 
    function getCurrentDate() {
        
        let currentDate = new Date();
    
      
        let dd = currentDate.getDate();
        let mm = currentDate.getMonth() + 1;
        let yyyy = currentDate.getFullYear();
    
        
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
    
        let formattedDate1 = mm + '-' + dd + '-' + yyyy; 
        let formattedDate2 = mm + '/' + dd + '/' + yyyy; 
        let formattedDate3 = dd + '-' + mm + '-' + yyyy; 
        let formattedDate4 = dd + '/' + mm + '/' + yyyy; 
    
     
        console.log("mm-dd-yyyy:", formattedDate1);
        console.log("mm/dd/yyyy:", formattedDate2);
        console.log("dd-mm-yyyy:", formattedDate3);
        console.log("dd/mm/yyyy:", formattedDate4);
    }
    
    
    getCurrentDate();
    

    
    console.log("mm-dd-yyyy:", formattedDate1);
    console.log("mm/dd/yyyy:", formattedDate2);
    console.log("dd-mm-yyyy:", formattedDate3);
    console.log("dd/mm/yyyy:", formattedDate4);
}


getCurrentDate();
