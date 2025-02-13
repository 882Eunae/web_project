//cartadd.js 
// let getcartData=[];  //
// getcartData=JSON.parse(localStorage.getItem('cartData'));  //json 문자열을 객체 
// console.log("cartdata가져오기"+getcartData[0].product);  //undefined 


// document.querySelectorAll('div.cart_add').forEach(item => {
// item.addEventListener('click', function (e) {

// console.log("로컬가져오기 테스트2:"+localStorage.getItem('productData')); //문자열형태 
// console.log("로컬가져오기 테스트3:"+localStorage.getItem('cartData'));  //object 로컬에서 가져온건데 ..?  

// getproductData=JSON.parse(localStorage.getItem('productData')); 
// getcartData=JSON.parse(localStorage.getItem('cartData')); //일단... cartData를 객체형태로 만들기로함  
// console.log("로컬에서 문자열->객체!!:"+getproductData[getproductData.length-1].productName); //객체형태로 만들었을때 원하는 요소 접근 
// console.log("로컬에서 cartData 문자열->객체!!:"+getcartData[getcartData.length-1].id); //객체형태로 만들었을때 원하는 요소 접근 


   
    // console.log(this.id()); 
//     let num = item.id;
//     console.log("찾은위치값:"+num);
//     let pos=`pos${num}`;
//    let cartItem= document.querySelector(`#${pos} h6 a`).innerText; 
//    let cartPrice= document.querySelector(`#${pos} div.product__item__price a`); 
//     //로컬에 들어있는거 
// for(let i=0; i<productData.length; i++){

//   // console.log("로컬가져오기 테스트5:"+localStorage.getItem(`productData[${i}]`)); 
// if(cartItem==getproductData[i].productName){

//   console.log('이름이 동일한 값을 찾았습니다');
//   let id='user01'; 
//   let product=productData[i].productCode; 
//   let qty=1;
// cartData.push({id:id,product:product,qty:qty});

// let add={id:id,
//   product:product,
//   qty:qty
// } // getcart 데이터에 추가해야하는 배열 선언

//  console.log(add); //이거 까진 잘함 
// getcartData.push(add); //여기까진 가능 
// localStorage.setItem('cartData',JSON.stringify(getcartData)); //getcartData를 로컬에 문자열반환후 저장  


// }
//   //카트데이터를 다시 로컬에 저저ㅏㅇ  
// }//end of for 
// // console.log("테스트중.... 나와야하는값:PO15"+localStorage.getItem('cartData')); 
// // console.log("테스트!!"+getcartData[0].id); 
// console.log(getcartData); //로컬이 아닌곳에서 추가가 되는거 까진함 
// localStorage.setItem('cartData',JSON.stringify(getcartData)); //일단 로컬에서 추가하는것 까지함, 
// //  let show=JSON.parse.localStorage.getItem('cartData'); //맞는지 아닌지 확인을 해야되는데 object형태로만나오고 출력이 안나옴;; 
// console.log(localStorage.getItem('cartData')); //cartData를 로컬에 담는것 까지 성공!! 
// //커밋....


// }//end of function 
// )//end of addevent
// }//end of foreach
// )//end of queryselectorAll


//cartadd.js 
// let getcartData=[];  //
// getcartData=JSON.parse(localStorage.getItem('cartData'));  //json 문자열을 객체 
// console.log("cartdata가져오기"+getcartData[0].product);  //undefined 


document.querySelectorAll('div.cart_add').forEach(item => {
  item.addEventListener('click', function (e) {
  
  console.log("로컬가져오기 테스트2:"+localStorage.getItem('productData')); //문자열형태 
  console.log("로컬가져오기 테스트3:"+localStorage.getItem('cartData'));  //object 로컬에서 가져온건데 ..?  
  
  getproductData=JSON.parse(localStorage.getItem('productData')); 
  getcartData=JSON.parse(localStorage.getItem('cartData')); //일단... cartData를 객체형태로 만들기로함  
  console.log("로컬에서 문자열->객체!!:"+getproductData[getproductData.length-1].productName); //객체형태로 만들었을때 원하는 요소 접근 
  console.log("로컬에서 cartData 문자열->객체!!:"+getcartData[getcartData.length-1].id); //객체형태로 만들었을때 원하는 요소 접근 
  
  
     
      // console.log(this.id()); 
      let num = item.id;
      console.log("찾은위치값:"+num);
      let pos=`pos${num}`;
     let cartItem= document.querySelector(`#${pos} h6 a`).innerText; 
     let cartPrice= document.querySelector(`#${pos} div.product__item__price a`); 
      //로컬에 들어있는거 
  for(let i=0; i<productData.length; i++){
  
    // console.log("로컬가져오기 테스트5:"+localStorage.getItem(`productData[${i}]`)); 
  if(cartItem==getproductData[i].productName){
  
    console.log('이름이 동일한 값을 찾았습니다');
    let id='user01'; 
    let product=productData[i].productCode; 
    let qty=1;
  // cartData.push({id:id,product:product,qty:qty});
  
  let add={id:id,
    product:product,
    qty:qty
  } // getcart 데이터에 추가해야하는 배열 선언
  
   console.log(add); //이거 까진 잘함 
  getcartData.push(add); //여기까진 가능 
  localStorage.setItem('cartData',JSON.stringify(getcartData)); //getcartData를 로컬에 문자열반환후 저장  
  
  
  }
    //카트데이터를 다시 로컬에 저저ㅏㅇ  
  }//end of for 
  // console.log("테스트중.... 나와야하는값:PO15"+localStorage.getItem('cartData')); 
  // console.log("테스트!!"+getcartData[0].id); 
  console.log(getcartData); //로컬이 아닌곳에서 추가가 되는거 까진함 
  localStorage.setItem('cartData',JSON.stringify(getcartData)); //일단 로컬에서 추가하는것 까지함, 
  //  let show=JSON.parse.localStorage.getItem('cartData'); //맞는지 아닌지 확인을 해야되는데 object형태로만나오고 출력이 안나옴;; 
  console.log(localStorage.getItem('cartData')); //cartData를 로컬에 담는것 까지 성공!! 
  //커밋....
  }//end of function 
  )//end of addevent
  }//end of foreach
  )//end of queryselectorAll
  
  
  


