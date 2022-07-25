

// price validation

$(document).ready(function(){
    let Item;
    let Price;
    $(".inputFoc").on("keyup",function(){
     let item=$("#item").val();
     let prise=$("#rs").val();
     Item=item;
     Price=prise;
      if(item!=="" && prise!==""){
        let rs=+(prise);
       
        if(rs>=0){
        $("#addBtn").removeClass("disabled");
        }
        else{
            alert("Type should be Number")
        }
      }
      else{
       $("#addBtn").addClass("disabled");
      }
    })

 });

 const items=[];

 // Toast 
 document.getElementById("addBtn").onclick=function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) ;
    addItems();
    callArrayData();
   
  }

// table items

function addItems(){
    let ItemName=document.getElementById("item").value;
    let ItemPrise=+document.getElementById("rs").value;

    items.push({
        itemName:ItemName,
        itemPrise:ItemPrise
    });

    SetData();
};

function SetData(){
  localStorage.setItem("localData",JSON.stringify(items));

}

function callArrayData(){
    let total=0;

    clearTable();

    let localData=localStorage.getItem("localData");
    let LocalData=JSON.parse(localData)
    for (let i = 0; i < LocalData.length; i++) {
        const item = LocalData[i];
  
        document.getElementById("tbody").innerHTML+=`
        <tr>
        <th scope="row">${i+1}</th>
        <td class="text-white">${item.itemName}</td>
        <td>${item.itemPrise.toFixed(2)}</td>
        <td><button class=" btn btn-sm btn-danger" type="button" value="${i}" id="item${i}" onclick="DeleteItem(this.value)">Delete</button></td>
        <td><button class=" btn btn-sm btn-warning" type="button">Update</button></td>
      </tr>`;

      total+=item.itemPrise;
    }
    document.getElementById("total").innerHTML+=total.toFixed(2);

}
callArrayData();


function clearTable(){
  document.getElementById("tbody").innerHTML="";
  document.getElementById("total").innerHTML="";
}



function clearLocalData(){
  localStorage.clear();
}



function DeleteItem(n){
 items.splice(n, 1);
 SetData();
 callArrayData();
}
