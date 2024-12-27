var xhr = new XMLHttpRequest();
xhr.open("GET", "people.json");
xhr.send();
xhr.onreadystatechange = function () {
   if(xhr.readyState ===4 ){
    var regOk = new RegExp(/^2\d{2}/);
    if (String(xhr.status).match(regOk)) {
        data = JSON.parse(xhr.responseText);

        var dropdownlist= document.getElementById("dropdown");
        for(let i = 0 ; i <data.length ; i++){
            var option = document.createElement('option');
            option.value=data[i].name;
            option.textContent=data[i].name;
            dropdownlist.appendChild(option);
        }
        
        dropdownlist.addEventListener('change', function(e){
            var selectedname= this.value;  
            var details = document.getElementById("details");
            details.innerHTML=''; //clear existing details
            var selectedperson = null ;

            for (let i = 0; i < data.length; i++) {
                if(data[i].name===selectedname){
                    selectedperson=data[i];
                    break;
                } 
            }
             
            if(selectedperson){
                details.innerHTML=`
                 <table border="1" cellpadding="10">
                          <tr>
                              <th>Name</th>
                              <td>${selectedperson.name}</td>
                          </tr>
                          <tr>
                              <th>Age</th>
                              <td>${selectedperson.age}</td>
                          </tr>
                          <tr>
                              <th>Email</th>
                              <td>${selectedperson.email}</td>
                          </tr>
                      </table>`
            }else{
                details.innerHTML = `<p>Person not found</p>`;
            }
        });
    }
   }
}