 let memberData= JSON.parse(localStorage.getItem('memberData'));
 let user=document.querySelector('div.cart__price'); 
let span; 
console.log(user);
console.log(memberData);  //local에서 memberData 잘 가져옴 
document.querySelector('#loginbutton').addEventListener('click',function(e){

  console.log('로그인 버튼을 눌렀습니다'); 
//버튼을 누르면 
  let id=document.querySelector('input[name="user_id"]').value; 
  let pw=document.querySelector('input[name="user_pw"]').value; 
 
  console.log(memberData);
  for(let i=0; i<memberData.length; i++){
    if(memberData[i].id ==id && memberData[i].pw==pw){
      console.log(id);
      alert('환영합니다!!');
      span=`<span>${id}</span>`; 
      
       return; 
    }
  }
  alert('아이디와 비밀번호를 확인하세요'); 

})//로그인 정보 까지 다담음 


let show=user.insertAdjacentHTML('beforeend',span);  
console.log(show);