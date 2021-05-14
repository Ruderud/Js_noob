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

   " word " 처럼 따옴표로 싸여있는것들은 '문자열'이라고 한다.

   ![image-20210511225420231](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511225420231.png)

   이런식으로 사용할 수 있다.

   ![image-20210511225834254](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210511225834254.png)

   데이터 타입을 잘 고려해야한다.

   위는 문자열간 합, 아래는 숫자열간 합. 

 

5. 변수(레이어블; x,y,age 등등) & 대입연산자(=)

   ![image-20210513105728116](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210513105728116.png)

   이런식으로 변수를 var로 선언하고, 문자열내에 "+변수명+"꼴로 입력하면 원할때마다 변수값만 바꾸면 출력물 내에 있는 전체 name변수를 사용한 문자가 바뀐다.

   

6. 웹브라우저 제어

   일단 배경을 검게, 글씨를 밝게하는역할은 body의 style문장이 수행함.

   이는 CSS인데, 이걸 버튼을 누를때마다 색이 바뀌게 하려면 js문장을 통해서 해당 내용을 바뀌게끔 해야함

   ```html
   <body style="background-color:black;color:white;">
     //배경은 검고, 글씨는 백색
   <body style="background-color:black;color:white;">
     //배경은 백색, 글씨는 검음
   ```

   

7. CSS기초

   ```html
   <h2 style="background-color:coral;color:powderblue">Javascript</h2>
   ```

    ![image-20210513111248212](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210513111248212.png)

   이렇게 태그안에 style을 넣으면 해당문장은 css언어로 작동하며, 위와같이 작동된다

   ```html
   <!doctype HTML>
   <html>
   <meta charset="utf-8">
   <head>
     <style>
       .js{
         font-weight: bold;
         color:red;
       }
     </style>
   </head>
   
   <body>
     <h1><a href="index.html">WEB</a></h1>
     <h2 style="background-color:coral;color:powderblue">Javascript</h2>
     <p>
           <div class="js">자바스크립트</div>(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다.
           이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는
           기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고
           있다. <span class="js">자바스크립트</span>는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan
           Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는
           이름으로 개발하였으며, <span class="js">자바스크립트</span>최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의
           자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기
           때문이고, <span class="js">자바스크립트</span>자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나
           스킴과 유사성이 많다. <span class="js">자바스크립트</span>자바스크립트는 ECMAScript의 표준 사양을 가장 잘 구현한 언어로
           인정받고 있으며 ECMAScript 5 (ES5) 까지는 대부분의 브라우저에서 기본적으로
           지원되었으나 ECMAScript 6 이후부터는 브라우저 호환성을 위해 트랜스파일러로
           컴파일된다.[3]
     </p>
   </body>
   
   </html>
   
   ```

   ![image-20210513112106632](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210513112106632.png)

   자바스크립트라는 말을 줄바꿈없이 쓰고싶다면 span태그를 쓴다

   각각에 따로 옵션을 할당하고싶지않다면 style태그를 따로만들고 거기에 ".이름" {내용}을 할당해서 class='이름'; 을 각각 부여한다면 해당 문자열에 대해서 자동으로 적용.

   ```html
   <style>
       .js{
         font-weight: bold;
         color:red;
       }
       #first{	//id를 지정하기위해서는 앞에 #을 넣어야함
         color:green;
       }
     	span{		//span이라는 태그에 적용할 내용
         color:blue
       }
     </style>
   </head>
   
   <body>
     <h1><a href="index.html">WEB</a></h1>
     <h2 style="background-color:coral;color:powderblue">Javascript</h2>
     <p>
           <div id="first" class="js">자바스크립트</div>
   ```

   ![image-20210513112454022](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210513112454022.png)

   class는 grouping, id는 일종의 학번임(중복X)

   id는 class의 위에있기때문에 class의 영향을 받은것 위에 id 옵션을 뒤집어씌우게된다.

   

8. 제어태그 선택

   ```html
   <body>
     <h1><a href="index.html">WEB</a></h1>
     <h2 style="background-color:coral;color:powderblue">Javascript</h2>
     <input type="button" value="night" onclick="
       document.querySelector('body').style.backgroundColor = 'black';
       document.querySelector('body').style.color = 'white';
     ">
     <input type="button" value="day" onclick="
       document.querySelector('body').style.backgroundColor = 'white';
       document.querySelector('body').style.color = 'black';
       ">
   ```

   body 내에 css적 내용인 style을 먹이기위해

   input 태그로 버튼을 만들고, 이것을 눌렀을때, 'body'라는 태그에 style을 먹일 수있는 명령어 

   ```html
   <input type="button" value="night" onclick="
       document.querySelector('body').style.backgroundColor = 'black';
       document.querySelector('body').style.color = 'white';
     ">
   ```

   를 먹인다.

   

9. JS가 html과 다른이유는, 상호작용을 해야하기때문에 순차적으로 명령을 수행해야할 필요가 있음. (html은 보여주는것에 의의가 있기때문에 순서를 고려할 이유가 없다)



10. 조건문

    토글기능 구현(버튼하나만 사용해서 night상태일때는 day가 되게끔, 혹은 그반대라면 night가 되게끔)



???왜 True/False하고 true/false를 구분하는거지? 전자는 변수, 후자는 boolean값으로 인식한다???



11. 리팩토링

    코드를 짜고나서 비효율적인 부분을 제거해서 효율적인 코드로 만드는것.

    this를 쓰면 동일 태그내의 같은위치를 가르키게된다

    Var (변수이름) = (할당할내용) 이렇게 지정해두면

    작동하는 코드내용을 보다 간결하게 줄일수 있다.



12. 객체 쓰기

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <h1>Object</h1>
        <h2>Create</h2>
        <script>
          var coworkers = {
            "programmer" : "egoing",
            "designer" : "leezhe"
          };
          document.write("programmer : "+coworkers.programmer+"<br>")
          document.write("designer : "+coworkers.designer+"<br>")
          coworkers.bookkeeper = "duru";
          document.write("bookkeeper : "+coworkers.bookkeeper+"<br>")
          coworkers["data scientist"] = "taeho";
          document.write("data scientist : "+coworkers["data scientist"]+"<br>")
    
        </script>
      </body>
    </html>
    
    ```

    Data scientist와 같이 빈칸이 있는 key값을 설정하고 불러오기 위해서는 dot(.) 을 쓰지않고, ["(key이름)"]을 사용해서 그 값을 쓰고, 불러온다.

    ```html
    <h2>Iterate</h2>
        <script>
          for (var key in coworkers) {
            document.write(key + ':' + coworkers[key] + '<br>')
          }
        </script>
    ```

    이 for 문은 coworkers의 키값을 하나씩 순차적으로 key라는 변수에 할당하고, 이를 이용해서 본문의 출력함수를 수행한다.

    

13. 반복문

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <h1>Loop & Array</h1>
        <script>
          var coworkers = ['one','two','three','four','add'];
        </script>
        <h2>Coworkers</h2>
        <ul>
          <script>
            var i = 0;
            while (i < coworkers.length) {
              document.write('<li><a href="https://a.com/'+coworkers[i]+'">' + coworkers[i] + '</a></li>');
              i+=1;
            }
          </script>
        </ul>
      </body>
    </html>
    
    ```

    이런식으로 반복문을쓰면, a.com/(coworkers의 각 값)을 링크로하는, 하이퍼링크가 걸린 값을 출력하게된다.

    

14. 함수

    ```html
    
    <script>
      function nightDayHander () {
        var target = document.querySelector('body')
        if(this.value === 'night'){
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          this.value = 'day'
    
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i <alist.length){
            alist[i].style.color = 'powderblue';
            i+=1;
          }
    
        } else {
          target.style.backgroundColor = 'white';
          target.style.color = 'black';
          this.value = 'night'
    
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i <alist.length){
            alist[i].style.color = 'blue';
            i+=1;
          }
        }
      }
    
      </script>
    
    <input id=night_day type="button" value="night" onclick="
      nightDayHander(this)
      ">
    ```

    기존의 버튼을 눌렀을때 동작하는 내용을 함수로써 만들어서 지정한다면, 동일한 버튼이 여러개있을때 버튼들에 대한 유지보수가 매우 간편해진다!

    

    

    

