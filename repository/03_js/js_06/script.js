// 현재 숫자를 저장할 변수
let count = 0;

// 자주 사용할 요소를 미리 찾기
const countEl = document.getElementById("count");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");

// 화면에 숫자를 반영하는 함수
function render() {
  countEl.textContent = count;
}

// 버튼 클릭 시 count 값을 변경
minusBtn.addEventListener("click", function () {
  count -= 1;
  render();
});

plusBtn.addEventListener("click", function () {
  count += 1;
  render();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  render();
});
