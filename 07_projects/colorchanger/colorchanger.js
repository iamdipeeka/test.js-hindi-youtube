// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(event){
//         console.log(event);
//      console.log(event.Target);
//      if(EventTarget.id==="grey"){
//         body.style.backgroundColor=event.Target.id;
//      }
//      if(EventTarget.id==="red"){
//         body.style.backgroundColor=event.Target.id;
//      }
//      if(EventTarget.id==="purple"){
//         body.style.backgroundColor=event.Target.id;
//      }
//      if(EventTarget.id==="yellow"){
//         body.style.backgroundColor=event.Target.id;
//      }
//      if(EventTarget.id==="green"){
//         body.style.backgroundColor=event.Target.id;
//      }
//     })
// })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
