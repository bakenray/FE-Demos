(function(){
    init() 

    function sleep(duration){
       return new Promise((resolve,reject)=>{
           setTimeout(resolve,duration)
       })
     }

    async function changeColor(color,duration){
      var light = document.getElementById('trafficLight')
      light.style.background = color
      await sleep(duration)
    }

    async function init(){
        while(true){
          await changeColor('green',3000)
          await changeColor('yellow',1000)
          await changeColor('red',2000) 
        }
    }  
})()  