let cartData = JSON.parse(localStorage.getItem('cartData'));
let productData = JSON.parse(localStorage.getItem('productData'));
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

  let str = `<tr>
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
                                            <div class="pro-qty"><span class="dec qtybtn">-</span>
                                                <input id="input${cartNum}" type="text" value="1">
                                            <span class="inc qtybtn" id="${cartNum}">+</span></div>
                                        </div>
                                    </td>
                                    <td class="cart__price" id="cart__price${cartNum}">${cartPrice}</td>
                                    <td class="cart__close"><span class="icon_close"></span></td>
                                </tr>`


  let target = document.querySelector('div.shopping__cart__table >table tbody');
  target.insertAdjacentHTML('beforeend', str);

  console.log(target);

  // let total =total+Number(cartPrice); 
  total += Number(cartPrice);

  cartNum++;
  console.log("장바구니에담긴마카롱" + cartNum); //몇개 담겨있는지 

});

console.log(total);

let total_pos = document.querySelector('div.cart__total>ul >li');
console.log(total_pos);

let span = `<span id='totalspan'>${total}원</span>`;

total_pos.insertAdjacentHTML('beforeend', span);

let plusPrice=0; //누를때마다 초기화...? + 버튼 누를때마다 초기화됨  
//queryselectorAll:  
document.querySelectorAll('span.inc.qtybtn').forEach(
  item => {
   
    
    item.addEventListener('click', function (e) {
      plusPrice=0; //일단 클릭한번할때마다 추가되는 가격을 초기화 시킴 
      let plus_pos = item.id; //id="${cartNum}"     
      console.log("pluspos의값:" + plus_pos); //위치가어딘지 앎 id:3 이런식으로 뜸 
      let plus_Item = document.querySelector(`#cartData${plus_pos} >div.product__cart__item__text>h6`);
      console.log("plusItem의값:" + plus_Item); //+함에 따라서 어떤값인지 위치값을 찾아냄  
      let input_pos = document.querySelector(`#input${plus_pos}`); //input태그에 위치 찾긴한듯? ;; 
      console.log("input의 value값" + input_pos.value);
      let plusNum = Number(input_pos.value);
      plusNum++; //추가된값 총 몇개인지 보고  
      console.log("plusNum의값:"+plusNum);
      //total값을 바꾸어야함 
      // let total_plus = Number(document.querySelector('div.cart__total span').innerHTML); //total에 들어있는값을 숫자형태로 바꿈
      plusNum = String(plusNum);
      input_pos.value = plusNum; //위치값을 바꿈 
      console.log("inputpos의값" + input_pos);
      console.log("cartNum" + cartNum);
      //수량을 화면위에 표시해줘야함
      // cartqty += Number(document.querySelector('div.pro-qty>input').value)
      // console.log(qty);
      // Number(document.querySelector('div.pro-qty>input').value)=cartqty; //
      console.log(Number(document.querySelector('div.pro-qty>input').value));

      //버튼을 누르면 item의 위치값을 id값에 저장 
      //각각 요소 한줄한줄추가 버튼 누를때 가격값 커지는거 
    //  let total_element= Number(document.querySelector(`#cart__price${plus_pos}`).innerHTML) *Number(plusNum); 
      // document.querySelector(`#cart__price${plus_pos}`).innerHTML=total_element;


      console.log(`itemid의값:${item.id}`);
      console.log("total의위치" + document.querySelector('div.cart__total span'));
      
      plusPrice=Number(document.querySelector(`#cart__price${plus_pos}`).innerHTML) ; //한번추가할때마다 그냥 1개가격만큼만 커지키로함
      // total=total+plusPrice;  
      console.log("각각요소에 관한 가격값:"+plusPrice); //
      total_pos.value=String(total);     

      let total_element= Number(document.querySelector(`#cart__price${plus_pos}`))+plusPrice;
      
      // console.log("각요소 합계:"+total_element);
      // document.querySelector(`#cart_price${plus_pos}`).innerHTML=total_element; 


       console.log("total의값:"+total)
       ;
       total=total+plusPrice; //값이 누적되서 가격이 더커져버림 
      console.log("최종가격:"+total); 

        document.querySelector('#totalspan').innerHTML=String(total)+"원"; 
//커밋...9시56분....??
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