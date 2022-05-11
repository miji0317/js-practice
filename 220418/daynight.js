// 야간모드 함수
function night(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length; i=i+1){
        as[i].style.color='white';
    }
}

function day() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length; i++){
        as[i].style.color='black';
    }
}

// dayNight 함수는 index.html에서 사용하므로 외부로 보냄
// dayNight 함수는 public 함수, day와 night 함수는 private 함수가 됨
export function dayNight(mode) {
    if (mode === 'night') {
        night();
    } else {
        day();
    }
}