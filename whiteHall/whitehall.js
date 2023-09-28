const count = document.querySelectorAll('.count')
const speed = 97
count.forEach((counter)=>{
    function upDate(){
       const target = Number(counter.getAttribute('data-target'))
        const count = Number (counter.innerText)
        const inc = target / speed
        if(count<target){
             counter.innerText = Math.floor( inc + count )
             setTimeout(upDate, 1)
        } else{
            counter.innerText = target
        }
    }
    upDate()
})