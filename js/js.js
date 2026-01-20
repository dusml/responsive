//모바일 시 슬라이드 메뉴
const btnTrigger = document.querySelector('.btn_trigger')
const nav = document.querySelector('nav')
const btnClose = document.querySelector('.btn_close')

btnTrigger.onclick = function(){
  nav.style.left = '0'
}

// btnClose.onclick = function(){
//   nav.style.left = '-100%'
// }

btnClose.addEventListener('click',function(){
  nav.style.left = '-100%'
})//앞에는 이벤트, 실행구(function을 안적으면 바로 실행을 해준다.)
//너비가 resize 시 nav에 남아있는 style을 삭제

window.addEventListener('resize',function(){
  if(this.window.innerWidth > 767 && nav.hasAttribute('style')){
    nav.removeAttribute('style')
  }
  // console.log(window.innerWidth > 767);
})