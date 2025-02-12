document.querySelector('.site-btn').addEventListener('click',function(e){

  console.log('로그인 버튼을 눌렀습니다'); 
//버튼을 누르면 
  let id=document.querySelector('input[name="user_id"]').value; 
  let pw=document.querySelector('input[name="user_pw"]').value; 
  let members= JSON.parse(localStorage.getItem('members'));
  console.log(members);
  for(let i=0; i<members.length; i++){
    if(members[i].id ==id && members[i].pw==pw){

      alert('환영합니다!!');
       return; 
    }
  }
  alert('아이디와 비밀번호를 확인하세요'); 

})