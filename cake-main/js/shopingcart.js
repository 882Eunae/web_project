let cartData = JSON.parse(localStorage.getItem('cartData'));
let productData = JSON.parse(localStorage.getItem('productData')); //productData
console.log("로컬데이터가격값:"+productData[0].price); 

let cartImage;
let cartPrice;
let cartItem;
let cartqty = 1;
let total = 0;
let qty = 1;
let cartNum = 0;
console.log(cartData); //cart Daata 정상적으로 잘가져옴 
//cartData 정보를 담을 배열을 여기서 그냥 정의하기   
cartData.forEach(function (cart) {
console.log('cart...', cart)
if(cart.id == localStorage.getItem('loginInfo')){
  for (let i = 0; i < productData.length; i++) { //for문 순환하면서 같은 상품코드를 가진 값을 찾음 

    if (cart.product == productData[i].productCode) { //순환하면서 돈다 

      cartImage = productData[i].image;
      console.log(cartImage);
      cartPrice = Number(productData[i].price);
      console.log(cartPrice); // 가격정보 잘가져옴 
      cartItem = productData[i].productName;
      console.log("동일한상품코드를 찾았습니다");
      console.log(cartItem); //여기까지는 정보를 잘가져옴 

    } //end of for 
  }

  let str = `<tr class="tr${cartNum}">
                                    <td class="product__cart__item" id="cartData${cartNum}"> 
                                        <div class="product__cart__item__pic">
                                            <img width="120px" height="120px" src=${cartImage}.jpg>
                                        </div>
                                        <div class="product__cart__item__text">
                                            <h6>${cartItem}</h6>
                                           
                                        </div>
                                    </td>
                                    <td class="quantity__item">
                                        <div class="quantity" >
                                            <div class="pro-qty"><span class="dec qtybtn" id=
                                            "${cartNum}" >-</span>
                                                <input id="input${cartNum}" type="text" value="1">
                                            <span class="inc qtybtn" id="${cartNum}">+</span></div>
                                        </div>
                                    </td>
                                    <td class="cart__price" id="cart__price${cartNum}">${cartPrice}</td>
                                    <td class="cart__close" ><span class="icon_close" id="${cartNum}"></span></td>
                                </tr>`


  let target = document.querySelector('div.shopping__cart__table >table tbody');
  target.insertAdjacentHTML('beforeend', str);

  console.log(target);

  // let total =total+Number(cartPrice); 
  total += Number(cartPrice);

  cartNum++;
  console.log("장바구니에담긴마카롱" + cartNum); //몇개 담겨있는지 
}
});

console.log(total);

let total_pos = document.querySelector('div.cart__total>ul >li');
console.log(total_pos);

let span = `<span id='totalspan'>${total}원</span>`;

total_pos.insertAdjacentHTML('beforeend', span);

let plusPrice=0; //누를때마다 초기화...? + 버튼 누를때마다 초기화됨  
let plus_price=" "; 

//queryselectorAll: 추가할때마다 가져오기  
document.querySelectorAll('span.inc.qtybtn').forEach(
  item => {
   
    
    item.addEventListener('click', function (e) {
      plus_price=""; 
      plusPrice=0; //일단 클릭한번할때마다 추가되는 가격을 초기화 시킴 
      let plus_pos = item.id; //id="${cartNum}"     
      console.log("pluspos의값:" + plus_pos); //위치가어딘지 앎 id:3 이런식으로 뜸 
      let plus_Item = document.querySelector(`#cartData${plus_pos} >div.product__cart__item__text>h6`); //어떤 아이템인지 알아냄 
      console.log("plusItem의값:" + plus_Item.innerHTML); //+함에 따라서 어떤값인지 위치값을 찾아냄        

      //input 위치 찾아서 수량 표시 
      let input_pos = document.querySelector(`#input${plus_pos}`); //input태그에 위치 찾긴한듯? ;; 
      console.log("input의 value값" + input_pos.value);
      let plusNum = Number(input_pos.value);
      plusNum++; //추가된값 총 몇개인지 보고  
      console.log("plusNum의값:"+plusNum);
     
      for(let i=0; i<productData.length; i++){

        if(plus_Item==productData[i].productName){
          console.log("로컬에있는 정보를 찾음"+productData[i].price); 
        }


      }


      plusNum = String(plusNum);
      input_pos.value = plusNum; //위치값을 바꿈 


      console.log("inputpos의값" + input_pos);
      
      console.log(Number(document.querySelector('div.pro-qty>input').value));

      console.log(`itemid의값:${item.id}`); 
      console.log("각각요소에 관한 가격값:"+plusPrice); //plusprice는 숫자값  

      //여기에서 전체값이 출력됨
          


      // let total_element= Number(document.querySelector(`#cart__price${plus_pos}`))+plus_price; //
      console.log("각각 위치값에 관한 가격:"+Number(document.querySelector(`#cart__price${plus_pos}`))); 
      // document.querySelector(`#cart__price${plus_pos}`).innerHTML=String(total_element); 
      plusPrice=Number(document.querySelector(`#cart__price${plus_pos}`).innerHTML) ;
      total+=plusPrice;
      total_pos.value=String(total); 
        //여기서 total가격이 표시됨
      document.querySelector('#totalspan').innerHTML=String(total)+"원"; 

    })
  }) //end of foreach 



console.log(plusPrice);


document.querySelectorAll('span.icon__close').forEach(
  item => {
    item.addEventListener('click', function (e) {
      qty += Number(document.querySelector('div.pro-qty>input').value) //숫자타입 
      console.log(qty);
    })
  })


  //-버튼 누를때 

  document.querySelectorAll('span.dec.qtybtn').forEach(
    item =>{
      item.addEventListener('click',function(e){   
     //마이너스 버튼 눌렀을때 숫자 바꾸게하기 
      let minus_pos=item.id; //minus0dec 
      console.log("minus값의 위치id값:"+minus_pos); //0 숫자값만   
      let input_pos=document.querySelector(`#input${minus_pos}`); //
      let minusNum=Number(input_pos.value);
      minusNum--;
      input_pos.value=String(minusNum); 

      //-버튼을 눌렀을때 전체가격 줄이기 
      minusPrice=Number(document.querySelector(`#cart__price${minus_pos}`).innerHTML); 
      total-=minusPrice; 
      document.querySelector('#totalspan').innerHTML=String(total)+"원"; 


      })
      

    }) 


    document.querySelectorAll('span.icon_close').forEach(
      item =>{

        item.addEventListener('click',function(e){
          //행이 없어지는것 
          let delete_pos=item.id; //0 ,1,2 등 숫자값으로 나옴 
          let delete_target=document.querySelector(`.tr${delete_pos}`); 
          console.log(delete_target);
          delete_target.remove(); 

          //삭제할경우 그 가격 만큼 total 빼기,이렇게 하면
          minusPrice=Number(document.querySelector(`#cart__price${delete_pos}`).innerHTML); 
          console.log(minusPrice); 
         
        })


      }


    )



  
