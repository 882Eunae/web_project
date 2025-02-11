//index.js 
let members=[
  {id:'user01',pw:'1111',name:'홍길동'},
  {id:'user02',pw:'2222',name:'김민석'},
  {id:'user03',pw:'3333',name:'최유진'}
]
//정보가 초기화됨,최초실행 할때만!! 

let members_json=JSON.stringify(members); //json ->String 
//회원정보. 
localStorage.setItem('members',members_json); //localstorage에 

let name='Hongkildong'; 
//반드시 문자열로만 데이터를 담아야함 
localStorage.setItem('name','Hongkildong');
console.log(localStorage.getItem('name')); 
//json문자열 
let json =`{"name":"Holngkildong",
            "age":20}` //문자열로 바꿈 
//문자열 ->객체 
let obj=JSON.parse(json); 
console.log(json,obj); 
//obj.name , obj.age

localStorage.setItem('friend',json); 
let info=localStorage.getItem('friend'); //문자열 
console.log(JSON.parse(info)['age']);//문자열 -> 객체.  

localStorage.setItem('friend2',obj); //객체를 변수에담음 
info=localStorage.getItem('friend2');
console.log(info.name);//바로 객체에 담으면 콘솔에 제대로 안뜸 

//객체 -> 문자열. 
obj={
  name:'Hongkildong', 
  friends:[{name:'김민수',
            phone:'010-1111'
  },{
      name:'박현수',
      phone:'010-2222'  
  }]
}
json=JSON.stringify(obj); //객체 -> 문자열 
console.log(json); 
localStorage.setItem('myfriend',json); 
