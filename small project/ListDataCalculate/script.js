

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
        // console.log(rs.toFixed(2));
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
    $("#addBtn").click(function () { 
        // console.log(Item);
        // console.log(Price);
       
        
    });

 });


 // Toast 
 document.getElementById("addBtn").onclick=function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) ;
    addItems();
  }

// table items

const items=[];

function addItems(){
    let ItemName=document.getElementById("item").value;
    let ItemPrise=+document.getElementById("rs").value;

    // console.log(ItemName);
    // console.log(ItemPrise);
    // console.log(typeof ItemPrise);

    const item={
        "itemName":ItemName,
        "itemPrise":ItemPrise
    }
    items.push(item);
};

function arrcall(){
    console.log(items.length);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        console.log(item.ItemName);
        console.log(item.ItemPrise);
    //     document.getElementById("tbody").innerHTML+=`
    //     <tr>
    //     <th scope="row">${i+1}</th>
    //     <td class="text-white">${item.ItemName}</td>
    //     <td>${item.ItemPrise}</td>
    //     <td><button class=" btn btn-sm btn-danger" type="button">Delete</button></td>
    //     <td><button class=" btn btn-sm btn-warning" type="button">Update</button></td>
    //   </tr>`
    }

}
arrcall();