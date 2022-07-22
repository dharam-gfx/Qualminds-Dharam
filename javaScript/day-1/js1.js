
function clickMe(){
    var inputValue=document.getElementById("nameFeild").value;
    document.getElementById("demo").innerHTML=inputValue;
    console.log(inputValue);
}


function focusin(){
    document.getElementById("nameFeild").style.backgroundColor="red";
}
function blurein(){
    document.getElementById("nameFeild").style.backgroundColor="blue";
}
function mouseoverin(){
    document.getElementById("demo").style.backgroundColor="blue";
}

function muchange(){
    var inputValue=document.getElementById("nameFeild").value;
    document.getElementById("demo1").innerHTML=inputValue;

    if(inputValue==="")
    {
    document.getElementById("demo1").innerHTML="Name here";

    }

}


function TimeShow(){
    let tt=new Date();
    let TimeHere=`${tt.getHours()}:${tt.getMinutes()}:${tt.getSeconds()}`
    document.getElementById("TimeShow").innerHTML=TimeHere;
}

setInterval(TimeShow,1000);

// setInterval(() => {
//     let tt=new Date();
//     let TimeHere=`${tt.getHours()}:${tt.getMinutes()}:${tt.getSeconds()}`
//     document.getElementById("TimeShow").innerHTML=TimeHere;
    
// }, 1000);



var colorList=["lightgreen","dodgerblue","red","blueviolet","blue","orange","aqua",'brown',"forestgreen"];

function changeTiemcol(){
    col=Math.floor(Math.random()*(colorList.length));
    let RandCol=colorList[col];
    document.getElementById("time").style.backgroundColor=RandCol;

}


function changeTimeColorAuto(){
    col=Math.floor(Math.random()*(colorList.length));
    console.log(colorList[col]);
    let RandCol=colorList[col];
    document.getElementById("TimeShow").style.color=RandCol;

}
setInterval(changeTimeColorAuto,1000);




