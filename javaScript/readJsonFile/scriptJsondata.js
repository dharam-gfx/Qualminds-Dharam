


fetch("https://dummyjson.com/products")
.then(response=>response.json())
.then(data=>{
    let myData=data['products'];
    
    // console.log(data["products"]);
    sendData(myData);
})
.catch(ex=>{console.log("data is not available")});


// local data 
// import product from './data.json' assert {type :'json'};
// let productData=product;
// console.log(productData);

let select=document.querySelector("#container");



function sendData(data){
    // console.log(data);
    let productData=data;

for(let i=0;i<productData.length;i++){

    select.innerHTML+=`
    <a href="./datashow/index.html"onclick="sendDataShow(${productData[i]})" target="_blank">
    <div class="card m-2" style="width:320px">
    <img class="card-img-top" src=${productData[i].images[0]} alt="Card image" style="width:100%; height: 220px;">
    <div class="card-body">
      <h4 class="card-title text-danger">${productData[i].title}</h4>
      <h5 class="fw-bold m-0 text-success">Price: ${productData[i].price} </h5>
      <p class="fw-bold text-primary m-0">brand:${productData[i].brand} </p>
      <p class="card-text">${productData[i].description}</p>
    </div>
  </div>
  </a>
    `
 }
}

let exportData;
function sendDataShow(GetData){

  exportData=GetData;
  console.log("333---");
  console.log(GetData);
}


export { exportData };