let productData=JSON.parse(localStorage.getItem('productData')); //로컬에 있는 string을 다시 객체로 변환 

productData.forEach(function(product){
// console.log(product)
let str=`<div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg='${product.image}' style="background-image: url(&quot;${product.image}.jpg&quot;);">
                            <div class="product__label">
                                <span>${product.type}</span>
                            </div>
                        </div>
                        <div class="product__item__text" id='pos${product.num}'>
                            <h6><a href="#">${product.productName}</a></h6>
                            <div class="product__item__price"><a>${product.price}</a></div>
                            <div class="cart_add" id="${product.num}"> 
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
`

let target=document.querySelector('div.row');
target.insertAdjacentHTML('beforeend',str); 

});