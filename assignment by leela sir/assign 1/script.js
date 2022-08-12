function myFunction() {
    var x = document.getElementById( "myLinks");
    if ( x.style.display === "block" ) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let f_nameKeyUp=document.querySelector("#fname");
let l_nameKeyUp=document.querySelector("#lname");
let _emailKeyUp=document.querySelector("#email");
let Valid1=document.querySelector("#Valid1");
let Valid2=document.querySelector("#Valid2");
let Valid3=document.querySelector("#Valid3");
let addFriend=document.querySelector("#addFriend");
let inputUpdate=document.querySelector("#inputUpdate");


f_nameKeyUp.addEventListener("keyup",valid_f);
l_nameKeyUp.addEventListener("keyup",valid_l);
_emailKeyUp.addEventListener("keyup",valid_em);

function valid_f(){
        let value_f=f_nameKeyUp.value;
        let len=value_f.length;
    if(len>=3){
        Valid1.textContent="Valid Input";
        Valid1.style.color="#52ff52";
    }
    else{
        Valid1.innerHTML="First Name should be 3 character";
        Valid1.style.color="white"
    }
}
function valid_l(){
        let value_l=l_nameKeyUp.value;
        let len=value_l.length;
    if(len>=3){
        Valid2.textContent="Valid Input";
        Valid2.style.color="#52ff52";
    }
    else{
        Valid2.innerHTML="First Name should be 3 character";
        Valid2.style.color="white"
    }
}
function valid_em(){
        let value_em=_emailKeyUp.value;
        let value_emal="";
    for(let i=0;i<value_em.length;i++){
        if(value_em[i]==" "){
        }
        else{
            value_emal+= value_em[i]; 
        }
    }
    _emailKeyUp.value=value_emal;
    let check=value_emal.endsWith("@qualminds.com");  
    if(check){
        Valid3.textContent="Valid Input";
        Valid3.style.color="#52ff52";

    }
    else{
        Valid3.innerHTML="end with @qualminds.com";
        Valid3.style.color="white"
    }
}

addFriend.addEventListener("click",addFriendCall);
let flagValid =false;


dataList=[];

function addFriendCall(){
    let value_f=f_nameKeyUp.value;
    let value_l=l_nameKeyUp.value;
    let value_em=_emailKeyUp.value;
    
    let check=value_em.endsWith("@qualminds.com"); 
    if(value_f.length>=3 && value_l.length>=3 && check){
        flagValid=true;
    }
    if(flagValid){
        let item={
            name_f:value_f,
            name_l:value_l,
            email:value_em
        }
        dataList.push(item);
        // console.log(dataList); 
        setData();
        // console.log("hello world");
    }
    else{
        alert("check input field")
    }

}

function setData(){
    localStorage.setItem("localSetData",JSON.stringify(dataList));
    dataListPrint();
    // let getData=JSON.parse(localStorage.getItem("localSetData"));
    // dataList=getData;
}

function dataListPrint(){
    let getData=JSON.parse(localStorage.getItem("localSetData"));
    // console.log(getData);

    // setInArr(getData);

    document.getElementById("tbody").innerHTML=null;
    
    if(getData!=null){
        document.getElementById("tbl").style.visibility="visible";
        // document.getElementById("tbl").style.width="100%";
        for(let i=0;i<getData.length;i++){
            document.getElementById("tbody").innerHTML+=`
            <tr>
                            <td>${i+1}</td>
                            <td>${getData[i].name_f}</td>
                            <td>${getData[i].name_l}</td>
                            <td>${getData[i].email} </td>
                            <td>
                                <button type="button" id="delete" value="${i}" onclick="deleteItem(this.value)"><i class="fa fa-trash"></i></button>
                                <button type="button" id="update" value="${i}" onclick="updateItem(this.value)"><i class="fa fa-edit"></i></button>
                            </td>
                        </tr>
            `
        }
        if(getData.length==0){
        document.getElementById("tbl").style.visibility="hidden";

        }
    }
    else{
        document.getElementById("tbl").style.visibility="hidden";
        
    }
    
    
}
dataListPrint();
// function setInArr(getData){
//     dataList=getData;
// }
function deleteItem(itemIndex){
    let currentIndex= parseInt(itemIndex);
    // console.log("xxssss"+ currentIndex);

    dataList.splice(currentIndex,1)  
    
        setData();
    // dataListPrint(); 
}
let updateItemIndex=null;
function updateItem(itemIndex){
    updateItemIndex=itemIndex;
    console.log(dataList[itemIndex]);
    f_nameKeyUp.value=dataList[itemIndex].name_f;
    l_nameKeyUp.value=dataList[itemIndex].name_l;
    _emailKeyUp.value=dataList[itemIndex].email;
}
inputUpdate.addEventListener("click",updateDataList);

function updateDataList(){
console.log(updateItemIndex);
// dataList[updateDataList].name_f= f_nameKeyUp.value;
// dataList[updateDataList].name_l= l_nameKeyUp.value;
// dataList[updateDataList].email= _emailKeyUp.value;
console.log(dataList[updateItemIndex].name_f);
console.log(dataList);

dataList[updateDataList].name_f = "ffffffff";
// dataList[updateDataList].name_l= l_nameKeyUp.value;
// dataList[updateDataList].email= _emailKeyUp.value;
}