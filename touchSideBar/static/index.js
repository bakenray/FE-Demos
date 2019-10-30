
void function(){
    var isMove = false
    var position = [0,0]
    var asideBar = document.getElementById('asideBar')
    var moveBar = document.getElementById('moveBar')
    var asideBarList = document.querySelectorAll('#asideBarList li')
    stopDocMove()
    pcMove()
    phoneMove()
    function pcMove(){ //pc端拖动
        moveBar.onmousedown = function(e){
            moveBar.style.boxShadow = '0 5px 12px rgba(0,0,0,.12)'
            isMove = true
            position = [e.clientY]
        }
        document.onmousemove = function(e){
            if(isMove === true){
                var deltaY = e.clientY - position[0]
                var top = parseInt(moveBar.style.top) || 0
                if(top<0){
                    moveBar.style.top = '0'
                    position = [0]
                }
                else if(top > asideBar.offsetHeight - moveBar.offsetHeight){
                    moveBar.style.top = asideBar.offsetHeight - moveBar.offsetHeight + 'px'
                    position = [asideBar.offsetHeight - moveBar.offsetHeight]
                }
                else {
                    moveBar.style.top = top + deltaY + 'px'
                    position = [e.clientY]
                    asideBarList.forEach((item)=>{
                        if(Math.abs(top + deltaY - item.offsetTop) < 30 ){
                            item.classList.add('active') 
                        }
                        else{
                            item.classList.remove('active') 
                        }
                    })
                }
            }
        }
        document.onmouseup = function(e){
            moveBar.style.boxShadow = '0 4px 8px rgba(0,0,0,.08)'
            isMove = false
        }
    }
    function phoneMove(){ //移动端拖动
        moveBar.addEventListener('touchstart',function(e){
            moveBar.style.boxShadow = '0 5px 12px rgba(0,0,0,.12)'
            isMove = true      
            position = [e.touches[0].clientY]
        })
        moveBar.addEventListener('touchmove',function(e){
            if(isMove === true){
                var deltaY = e.touches[0].clientY - position[0]
                var top = parseInt(moveBar.style.top) || 0
    
                if(top > asideBar.offsetHeight - moveBar.offsetHeight ){
                    moveBar.style.top = asideBar.offsetHeight - moveBar.offsetHeight + 'px'
                    position = [asideBar.offsetHeight - moveBar.offsetHeight]
                    return 
                }
                else if(top <0 ){
                    moveBar.style.top ='0'
                    position = [0]       
                    return          
                }
                else{
                    moveBar.style.top = top + deltaY + 'px'
                    position = [e.touches[0].clientY]
                    asideBarList.forEach((item)=>{
                        if(Math.abs(top + deltaY - item.offsetTop) < 32 ){
                            item.classList.add('active') 
                        }
                        else{
                            item.classList.remove('active') 
                        }
                    })
                }
            }
        })
        moveBar.addEventListener('touchend',function(e){
            moveBar.style.boxShadow = '0 4px 8px rgba(0,0,0,.08)'
            isMove = false
        })
    }
    function stopDocMove(){ //阻止页面默认可拖动
        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault(); 
            }, {passive: false});
    }


}()