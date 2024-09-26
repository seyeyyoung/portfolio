$(function(){
    $('#fullpage').fullpage({
        anchors : ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation : false,
        keyboardScrolling : false,
        slidesNavigation : false,
        responsiveWidth: 1000,
    })
})

$(function(){
    const spanEl = document.querySelector('.contact h2 span')
    const txt = ['Thank you ✧٩ʕ•ω•ʔو✧','Contact me ◟(◍•ᴗ•◍)◞','다시보려면 상단의 메뉴창을 이용해주세요 ʕ•ﻌ•ʔ◞']
    let index = 0;
    let currentTxt = txt[index].split('')

    function writeTxt(){
        spanEl.textContent += currentTxt.shift()

        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }else{
            currentTxt = spanEl.textContent.split()

            setTimeout(deleteTxt, 3000)
        }
    }
    writeTxt()

    function deleteTxt(){
        currentTxt.pop()

        spanEl.textContent = currentTxt.join('')

        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }else {
            index = (index+1) % txt.length
            currentTxt = txt[index].split('')
            writeTxt()
        }
    }
})()