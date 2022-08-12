

// price validation

$(document).ready(function(){
   
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
    });


    $(".inputFoc1").on("keyup",function(){
      let item=$("#itemu").val();
      let prise=$("#rsu").val();
      Item=item;
      Price=prise;
       if(item!=="" && prise!==""){
         let rs=+(prise);
        
         if(rs>=0){
         $("#addBtnu").removeClass("disabled");
         }
         else{
             alert("Type should be Number")
         }
       }
       else{
        $("#addBtnu").addClass("disabled");
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
    if((LocalData?.length)>0){
      for (let i = 0; i < LocalData.length; i++) {
        const item = LocalData[i];
       
        document.getElementById("tbody").innerHTML+=`
        <tr>
        <th scope="row">${i+1}</th>
        <td class="text-white">${item.itemName}</td>
        <td>${item.itemPrise.toFixed(2)}</td>
        <td><button class=" btn btn-sm btn-danger" type="button" value="${i}"  onclick="DeleteItem(this.value)" >Delete</button></td>
        <td><button class=" btn btn-sm btn-warning" type="button" value="${i}"  onclick="indexValueChange(this.value)" data-bs-toggle="modal" data-bs-target="#myModal">Update</button></td>
      </tr>`;

      total+=item.itemPrise;
    }
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
  window.location.reload();
  // callArrayData();
  
}



function DeleteItem(n){
  let currentIndex= parseInt(n);
 
 items.splice(currentIndex, 1);
 SetData();
 callArrayData();  
}

let index=0;
function indexValueChange(num){
  index=num;
}
function UpdateItem(){
  let ItemN=document.getElementById("itemu").value;
  let ItemP=+document.getElementById("rsu").value;

 x=items[index].itemName=ItemN;
 y=items[index].itemPrise=ItemP;

 SetData();
 callArrayData();
 
}
