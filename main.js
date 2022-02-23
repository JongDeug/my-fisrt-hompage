let target = document.querySelector("#dynamic");
let num;

// 2. 호출만 하는
function numResult(){
    let number = setNum();
    let str = ["Do you wanna see crypto chart?", "Let's check it at this hompage!", "Check the button below."];
    let strArr = str[number];
    let selectorStrArr = strArr.split("");
    return selectorStrArr;
}

// 1. 동작 함수
dynamic(numResult());
function dynamic(str){
    if(str.length > 0){
        target.textContent += str.shift();

        // 재귀함수가 포인트
        setTimeout(() => {
            dynamic(str);
        }, 70);
    }
    else{
        setTimeout(reset, 800);
    }
}

// 4. 리셋 함수 -> 반복
function reset(){
    target.textContent = "";
    dynamic(numResult());
}

// 3. 배열 안 index 설정 함수
function setNum(){
    let setNum;
    if (num < 2 && num >= 0){
        num += 1;
        setNum = num;
    }
    else{
        num = 0;
        setNum = num;
    }
    return setNum;
}


// 커서 블링크 함수
function blink(){
    target.classList.toggle("active");
    // toggle은 스위치 개념 on/off
}
setInterval(blink, 500);