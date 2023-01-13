// // 1dz

const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \d{3}-\d{3}-\d{2}-\d{2}$/

phoneCheck.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

//dz2

const miniBox = document.querySelector('.miniBox')

    let posTop = 0;
    let posLeft = 0;


step = () => {
    if (posLeft <= 380 && posTop === 0) {
        posLeft += 20;
        miniBox.style.left = `${posLeft}px`;
        setTimeout(step, 100);
    }
    else if(posLeft >= 380 && posTop <= 380 ){
        posTop += 20;
        miniBox.style.top = `${posTop}px`
        setTimeout(step, 100)

    }
    else if (posTop >= 380 && posLeft != 0) {
        posLeft -= 20;
        miniBox.style.left = `${posLeft}px`;
        setTimeout(step, 100);
    }
    else  if (posLeft == 0 && posTop != 0)
    {
        posTop -=20;
        miniBox.style.top = `${posTop}px`
        setTimeout(step,100)
    }


}
step()





