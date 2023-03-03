const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

//함수선언: attribute가 disable이 풀어지게 event.keyCode === 8
//함수선언: submit하면 실행시킬함수

// 0: 48

// 1: 49

// 2: 50

// 3: 51

// 4: 52

// 5: 53

// 6: 54

// 7: 55

// 8: 56

// 9: 57

// 🟡 함수선언: 포커스이동
// function moveFocus(num) {
//   inputs[num].focus();
// }

// let num = 0;

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (nextInput &&
      currentInput.value !== ""){
      //현재 인풋창 값이 비어있지않으면
      nextInput.removeAttribute("disabled");
      nextInput.focus();
      // num++;
      // moveFocus(num);
      console.log(currentInput.value);
      // if(num == 3) {
      //   alert("완료")
      // }
    }
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2) {
          input.setAttribute("disabled", true);
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        if (index1 === 0) {
          inputs[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});
    // else if(prevInput)
    console.log(num);

window.addEventListener("load", moveFocus(0));