자바스크립트 (생활코딩)



자바스크립트는 화면을 보기좋게만들기 위해 생긴것.



1. 도입

자바스크립트는 사용자와 상호작용하는 언어다.(동적)

예를 들어 night버튼을 누르면, 스타일의 코드안에 배경색이 흰색->검은색으로 변함

기본적으로 자바스크립트는 HTML위에서 작동하는 언어임

JS는 동적이기때문에 HTML과 달리 1+1를 그냥 문자열로써 출력하는것이 아니라, 계산도해서 2라고 출력해준다.



2. 이벤트

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title></title>
     </head>
     <body>
       <input type="button" value="hi" onclick="alert('hi')">
       <input type="text" onchange="alert('Changed')">
       <input type="text" onkeydown="alert('key down!')">
   
   
     </body>
   </html>
   
   ```

   이 페이지를 실행해서 hi라는 버튼을 누르면 hi라는 알림창이 뜬다.

   이는 웹브라우저 위에서 일어나는 '이벤트'이다

   즉, onclick, onchange, onkeydown등은 모두 '이벤트' 라고 한다

   

3. 콘솔

   크롬에서 F12를 누르면 개발자 도구가 나오는데, 여기서 콘솔이라는 탭에 코드를 입력하면, 해당 페이지를 기반으로 입력한 코드를 수행한다.

   (elements에서 코드를 작동시킬 탭을 클릭하고, esc를 누르면 해당 코드에 대한 콘솔 창이 뜬다)

   ![image-20210511224338018](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511224338018.png)

   ![image-20210511224818181](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511224818181.png)

   

   이런식이다.



4. 데이터타입(자료형)

   기본자료형 6가지 + 객체(Object)로 구성되어있음

   ' + '는 이항(2개의 항을)연산자중 산술연산자에 해당한다. (첫번째 항과 두번째항을 더해서 하나의 값으로 합쳐서 출력한다)

   " word " 라고 되어있다면 이는 '문자열'이라고 한다.

   ![image-20210511225420231](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511225420231.png)

   이런식으로 사용할 수 있다.

   ![image-20210511225834254](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511225834254.png)

   데이터 타입을 잘 고려해야한다.

   위는 문자열간 합, 아래는 숫자열간 합.