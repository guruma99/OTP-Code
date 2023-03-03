# OTP-Code


<img width="417" alt="스크린샷 2023-03-04 01 05 38" src="https://user-images.githubusercontent.com/121204952/222777407-314c7fa2-57bc-4d67-8269-fcc1b619e679.png">
<br>
<h2>⭐️input type = "number" 일 경우, maxlength가 먹지않는다. + 한글도 들어감</h2>
해결방안: 0-9까지의 숫자 정규표현식사용, type을 text로  ~
<input type="text" maxlength="1" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"/>
