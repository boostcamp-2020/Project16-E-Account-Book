# ✨ sprint ✨

# sprint 5

## 💻 Day 1
### 📌 [FE] 수입/지출 토글버튼 버그 수정
- Color를 State로 주지 않아 바로 반영되지 않던 문제 해결
- income, expend로 분할된 state를 하나로 통합

### 📌 [FE] SVG를 활용한 PieChart 구현
- 파이차트의 구조
    ```tsx
        <svg>
            <g>
                <path d={toPieChartItemPath(...)}>        # 부채꼴 도형
                <text></text>                             # name : money
                <text></text>                             # percent
            </g>
        </svg>
    ```
    - 위와 같은 구조를 갖도록 설계하였으며 카테고리당 `<g>...</g>` 의 컴포넌트를 만들어 삽입해주었다.
- 파이차트 path 계산
    - `toPieChartItemPath(x, y, radiusIn, radiusOut, startAngle, endAngle)`를 통해 각 path를 그려주었다.
    - **x, y** : 파이차트의 중심점
    - **radiusIn, radiusOut** : 파이차트의 내부 반지름과 외부 반지름 값
    - **startAngle, endAngle** : 시작각도(12시 방향이 0도)와 종료각도(시계방향)
- 초기 svg 의 틀을 잡는 것은 [링크](http://www.gisdeveloper.co.kr/?p=4705&unapproved=30494&moderation-hash=2dd8a7ec9ffc9f43e8261c36f23beced#comment-30494)를 참고하여 진행하였다.

# Sprint 4

## 💻 Day 5
### 📌 [FE] 새로고침시 가계부 초기화 문제 localsotrage로 상태관리 개선
- 소셜 가계부에서 새로고침시 개인 가계부로 store 상태가 변경되는 오류가 있었다. 전체 페이지를 렌더링 할 때 initialize 하는게 문제 였는데, 이를 해결하기 위해 메인페이지에서 각 가계부 페이지로 이동할때 Loaclstorage를 이용해서 가계부의 type, id를 저장하였고 달력, 내역 페이지 진입시 Localsotrage 값을 바탕으로 Store를 관리하도록 로직을 변경했다.
### 📌 [BE] MySQL 일별 합을 묶는 방법
- 꺾은선 그래프에서 사용할 일별 지출/수입 합을 반환하는 API를 구현해야 했다.
- 쿼리문에서 같은 날짜 별로 묶는 것이 문제였는데 아래와 같은 조건으로 해결할 수 있었다.
- 쿼리문 예시: 개인 가계부 지출합
    ```SQL
    SELECT SUM(amount) as money, date_format(date, '%d') as day
    FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NOT NULL
    AND year(date) = ? AND month(date) = ?
    GROUP BY day ORDER BY day
    ```
- `date_format(date, '%d') as day`를 통해 날짜만 뽑았다.
- `GROUP BY day`를 통해 결과를 날짜끼리 묶었다.
- `AND year(date) = ? AND month(date) = ?`를 통해 원하는 년-월의 데이터만 조회할 수 있도록 하였다.
### 📌 [BE] PUT vs PATCH
- PUT은 ROW에 전체 값에 변동이 있을 때
- PATCH는 ROW의 일부분에 변동이 있을 때
- Restful한 API router 주소 체계에 대해서 고민하였다
- [REST API 제대로 알고 사용하기 By TOAST](https://meetup.toast.com/posts/92)

## 💻 Day 4
### 📌 [FE] CSS : Box-sizing 옵션
- Border의 크기를 width에 포함할 것 인가를 정하는 옵션
- width:100% 옵션을 주었던 Content 영역에 border가 삽입되어 페이지에 스크롤이 발생하던 문제가 있었다
- 유의하여 사용하자

### 📌 [FE] 페이지 이동 history
- React-router-dom 의 history는 history.push, history.go, history.goback 등의 함수를 지원하는데, history 는 stack의 형태로 구현되어 있기 때문에 이전정보를 기억할 수 있다.
    1. `history.push('url')` 의경우 현재 location에 뒤에 url 을 추가해주면서 렌더링을 한다. 
    2. `hisotry.go(number)` 의경우 이전의 url 또는 더 이전의 url 로 이동 시키는데 두번째 이전의 경우 `history.go(-2)` 같은 방식으로 렌더링한다.
    3. `history.goback()`의 경우 뒤로가기 버튼처럼 렌더링한다.  


### 📌 [FE] styled-components animation
- styled-components 에서 애니메이션을 추가할때 keyframes 의 속성을 동적으로 변경시키려는 이슈가 있었다. 
- 해결사항으로 keyframes 컴포넌트를 갖는 함수를 만들어 놓고, props 로 넘겨주는 방식을 적용했다.
```typescript
const linear = (w: any) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${w}%;
  }
`;
b
const Bar = styled.div<InProps>`
  ...
  animation: ${(props) => linear(props.percent)} 5s;
`;
```

### 📌 [FE] 상단탭 초기값 설정 버그 해결
- 기존에는 상단탭이 url로 접근할 경우 내역으로 고정되는 버그가 있었다. 이는 각 탭의 상위 페이지인 AccountbookPage에서 해당 값을 내역으로 초기화하기 때문이었다.
- 이를 해결하기 위해 Router에 component가 아닌 render 함수를 연결해주고 render 함수에서 값을 초기화해주었다.
- 변경 전
```tsx
<Switch>
    <Route path="/accountbook/statistics" component={StatisticsPage} />
</Switch>
```
- 변경 후
```tsx
const renderStatistics = () => {
    setValue(Menu.Statistic);
    return <StatisticsPage />;
};
<Switch>
    <Route path="/accountbook/statistics" render={renderStatistics} />
</Switch>
```

### 📌 [Data] DB 시연용 거래내역 데이터 생성 (Python)
- python 코드를 이용하여 mysql에 삽입할 csv 파일을 만드는 코드를 작성하였다.
- 현재는 초기 입력값을 사용자가 직접 입력하는 형식으로 되어있고 관계형 DB가 고려되지 않은 상태이다.
- 추후, DB의 관계까지 고려하여 전체 데이터를 생성하는 코드를 작성한다면 좋을 것 같다.

### 📌 [javascript/typescript] 반목문 안에서의 async/await
- forEach, filter, reduce에서 평소 사용하듯이 async/await을 사용하면 예상과 다르게 동작한다. 각각 다른 구조로 설계되어있기 때문에 async/await을 해당 문법으로 동작시키려면 특별한 조치를 취해주거나 특정 라인을 추가시켜주어야 한다. 특히 forEach에서는 await을 사용할 수가 없다. filter나 reduce에서는 항상 map으로 promise 배열을 반환해주어서 await으로 resolve해준 뒤에 그 값으로 filter나 reduce를 사용해야 한다. 따라서 await을 반복해서 실행시키고 싶다면, for-loop이나 callback이 없는 반목문을 사용해야 한다.

### 📌 [FE] Refactor : utils api 변수에서 함수 형태로 변경
- 기존의 utils/api의 경우 넘겨줘야하는 파라미터가 있는지 확인하려면 API문서를 보거나 백엔드 코드와 비교해야했다.
- 또한 파라미터를 호출부분에서 문자열로 이어주어 사용하고 있었기 때문에 api요청 관리가 어렵다는 문제점이 있었다.
- api의 호출을 변수가 아닌 함수형태로 변경하여 필요한 파라미터를 미리 지정해주어 예측가능하도록 하였다.
- 변경 전
```tsx
export const GET_TRANSACTION_SOCIAL_LIST = `${process.env.REACT_APP_BASE_URL}/api/social/transaction/list`;
```
- 변경 후
```tsx
export const GET_TRANSACTION_SOCIAL_LIST = (bookId: number, year: number, month: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/transaction/list/${bookId}/${year}/${month}`;
```

## 💻 Day 3
### 📌 [FE] 거래 내역 추가 기능 구현
- 거래 내역 추가에 사용되는 `TransactionForm` component를 거래 내역 수정에서 재활용하는 것을 고려해서 개발해야 했기 때문에 시간이 오래걸렸다.
- 구현 방법으로 아래의 세가지 방법을 생각해냈다.
    - Redux를 활용한 값 제어
        - 각 요소별로 reducer를 만들어야한다.
        - reducer와 action을 활용하여 연결할 수 있게 component들을 분리해주어야 한다.
    - state를 props로 넘겨주어 값 제어
        - 하위 컴포넌트로 props를 넘겨줘야 하기 때문에 모든 하위 컴포넌트의 props 설정을 추가해주어야 한다.
    - form 태그를 이용한 값 제어
- 위 세가지 중 아래의 두번째와 세번째 방법을 섞어 개발하는 것이 가장 좋다고 판단하였다.
- `TransactionForm` component에서 useState를 정의하여 사용자의 입력값을 제어하였다.
- page 단에서 form 태그로 `TransactionForm` component를 감싸 submit event를 제어해주었다.
    - form 태그의 모든 하위 컴포넌트가 submit버튼으로 동작하는 문제가 있었고 이는 기존의 버튼에 type을 명시해주지 않아서 임을 알게 되었다. 따라서 기존에 사용되던 버튼에 `type=button` 을 명시해주었다. 등록 기능을 수행하는 버튼에만 props를 통해 `type=submit` 으로 지정해주었다.
- 수정 페이지에서의 동작을 고려하여 page 단에서 initValue를 넘겨주면 form에서 state를 변경할 수 있도록 하였다.


### 📌 [FE] 스큐머 모피즘
- [다시 돌아온 스큐어 모피즘](https://brunch.co.kr/@outlines/41)
- [식어가는 뉴모피즘](https://wormwlrm.github.io/2020/03/10/Neumorphism-the-zombie-trend.html)
- 뉴모피즘의 인기는 점점 식어갈 것이고, 머테리얼과 스큐어 모피즘의 2강 체제가 계속 될 것이다.

### 📌 [BE] 소셜 가계부 생성 
- 소셜 가계부 생성과 동시에 social_accountbook과 social_accountbook_user에 동시에 생성해주어야 한다. 따라서 각각 create에 대한 controller와 service를 구현하고, 가계부 생성 controller에서 social_accountbook_user 생성 service를 함께 추가적으로 호출해주는 구조로 설계하였다.

### 📌 [FE] 가계부 분석
- Axios 로 데이터를 받아 화면에 추가할때 데이터를 전처리 하는 부분에서 비동기 오류가 발생했다.
받아오는 페이지에서 데이터를 바로 사용하지 않기 때문에, 해당 컴포넌트로 넘기는데 완전히 전처리 되지 않은 상태의 데이터가 넘어가는 문제였는데 Redux Store 를 사용하여 갱신하고 해당 컴포넌트에서 데이터를 바로 사용하는것이 해결방안 일 것 같다.

## 💻 Day 2
### 📌 [FE] 뉴모피즘 UI
- [뉴모피즘은 새로운 UI 트렌드가 될 수 있을까](https://brunch.co.kr/@cliche-cliche/32)
- [뉴모피즘 CSS 생성기](https://neumorphism.io/)

### 📌 [FE] 스큐어모피즘 UI
- [IOS 스큐어 모피즘 변천사](https://post.naver.com/viewer/postView.nhn?volumeNo=8264188&memberNo=36237397)

### 📌 [FE] 가계부 생성 페이지
- 배경색과 똑같은 background, 똑같은 글자 색깔을 가진 textarea를 만들기 위해서 textarea를 수정했음. 입력한 내용을 가져올 수 있도록 State를 가지고 있었어야 했는데, 이 부분을 store 없이 하위 컴포넌트에서 useState로 값을 유지하며 상위 컴포넌트에 함수 파라미터로써 전달하도록 구현함.

### 📌 [FE] 내역 페이지
- Calendar 페이지와 마찬가지로 transactionList 를 store에서 관리, 연-월별로 api 요청으로 구현

## 💻 Day 1
### 📌 [FE] 로그인 여부에 따른 화면 랜더링
- 처음에는 token 값을 받아와서 랜더링할 라우터를 결정해주고, 만약 token이 있었다면 유효성 검사를 통해 한 번 더 검증하도록 구현함
- 유효하지 않음 토큰이었다면 즉시 로그아웃 상태로 변경시킴
### 📌 [FE] 404 페이지 제작
- 아래와 같이 모든 경로와 일치하지 않을 경우 NotFoundPage를 랜더링 하도록 처리함
```tsx
<Switch>
    <Route path="/notification" component={NotificationPage} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/accountbook" component={AccountbookPage} />
    <Route exact path="/" component={MainPage} />
    <Route path="/*" component={NotFoundPage} />
</Switch>
```
### 📌 [FE] reducer 값 초기화
- reducer 값을 직접 초기화 할 때 (await) axios 요청을 사용할 수 없는 문제가 있음
- 새롭게 로그인을 하거나 페이지에 처음 접속하였을 때 App.tsx에서 각 reducer 값을 초기화하는 함수를 호출하도록 구현함

### 📌 [FE] 달력 State
- 연-월을 이동할때 API 를 호출하는 방식을 사용
- redux 에서 payload 를 사용할때 템플릿 리터럴로 사용할 수 있음 '`${data}data`'
- react-router-dom 의 LINK 에도 style 적용 가능 
    ```typescript
    const StyledLink = styled(Link)`
      text-decoration: none;
      &:focus,
      &:hover {
        background-color: pink;
      }
      ,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    `;
    
    <StyledLink to='/'> </StyledLink>
    ```

### 📌 [BE] forEach의 비동기적 작동
- forEach 내부에서는 코드가 비동기적으로 동작
- await 를 입력하여도 코드가 동기적으로 작동한다는 보장 X
- for(const item of list) 등의 ES5 대체 문법을 사용 권장
- 만약 forEach를 그대로 사용해야 한다면, Promise.all()을 사용 권장

# Sprint 3

## 💻 Day 4
### 📌 [개발환경] Windows에서 User 폴더 이름이 한글일 경우 설치 경로를 못찾는 프로그램이 있다!
### 📌 [BE] Koa는 await next()를 해야한다.
* day3부터 페어프로그래밍으로 가계부 현황 API를 진행하였으나 koa에서 계속해서 API의 결과로 404 NOT FOUND 를 반환하는 문제가 있었다. async - await을 쓸 때만 결과값이 나오지 않았다. 추후 알고보니 API Token에서 verifyToken middleware에서 next()에 await을 걸어주지 않았기 때문임을 알게 되었다.

- [Koa next 사용 예제](https://devsoyoung.github.io/posts/koa-api-tutorial/)
### 📌 [FE] 컴포넌트.defaultProps 를 자세히 보자
* 특정 component를 화면에 추가하자 전체 UI가 깨지는 문제가 있었다. 원인을 알고보니 `컴포넌트명.defaultProps` 에 atom으로 호출한 컴포넌트명을 연결해주었음을 깨달았다.

### 📌 [FE] Calendar UI 구축
- 달력내에서 날짜정보를 관리하기 위해 1일 마다 객체로 관리해야 하는 어려움이 있었다. 7일씩 고정으로 UI를 맞추기 위해 7의 배수의 월정보를 갖게 하였고, 1일의 요일과 월의 끝 날짜를 구해야 하는 이슈가 있었다.아직 리팩토링할 부분이 많아 보이고, 기능적으로 구현과 개선이 필요하다. 

### 📌 [FE] 일별 가계부 내역 Modal 구현
- 달력에서 특정 날짜를 클릭하면 그날의 내역들을 모두 보여주는 Modal Layout 구현

### 📌 [FE] CreditCardEditModal 구현
- Modal components를 활용하여 결재 수단을 관리하는 Modal Layout 구현


## 💻 Day 3
### 📌 [BE] koa 삽질
- await을 걸어줘도 sql이 동기적으로 작동하지 않았다

### 📌 [FULL] OAuth 리팩토링 
- GitHub OAuth & Naver OAuth 를 하나의 라우터로 받아 공통으로 처리하도록 리팩토링
- Callback 을 Frontend 에서 받아 처리하도록 변경 
- Cookie 저장 방식 -> LocalStorage 저장 방식으로 로직 변경

### 📌 [FE] 로그인 화면 렌더링
- 로그인시 자동 회원가입 연결
- 첫 페이지를 Login 페이지로 ? 결정 필요
- 로컬 스토리지 JWT 값을 꺼내서 인증하는 미들웨어 구현 필요 


## 💻 Day 2
### 📌 [FE] Redux 적용하기
폴더 구조 설계
```bash
/src
  ㄴ/actions               # 
    ㄴ/modal               # 사용할 action 폴더 생성
      ㄴtype.ts            # 액션 타입을 지정
      ㄴaction.ts          # 액션 지정
  ㄴ/reducers              # 
    ㄴmodal.ts             # 액션을 통해 스토어의 상태를 변경
    ㄴrootReducer.ts       # reducer를 모아서 하나의 reducer로 combine 후 export
  ㄴindex.tsx              # store 생성
```

### 📌 [BE] 미들웨어, DB 예시 코드 작성
- 토큰 검증하는 미들웨어 생성
- 토큰이 없거나, 만료된 상태일시 리액트로 redirect 할 link 전송

### 📌 [FE] React-Cookie 적용
- App.tsx 최상위에 React-cookie 모듈 적용

### 📌 [FE] 가계부 생성 페이지 UI 구현

![](https://i.imgur.com/BH2PQSs.png)

## 💻 Day 1

### 📌 [FE] 육각모형 버튼 클릭 영역
* 육각모형 버튼은 css 또는 svg를 이용하여 구현할 수 있다. css로 구현할 경우 svg보다 테두리나 크기를 변경하는 과정이 복잡하다고 판단하였고, svg를 활용하여 버튼을 구현하기로 하였다.



![](https://i.imgur.com/g7sCZyE.png)

* svg를 활용하여 버튼 UI를 구성하긴 하였으나 버튼의 클릭 범위(하늘색으로 표시된 부분)가 육각형을 벗어나는 문제가 있었다. 마이페이지에서 육각버튼을 사용할 때 각 버튼이 겹쳐서 구현될 필요가 있었고, 초기 구현 내용을 그대로 가져가면 버튼의 클릭영역이 서로 겹치는 문제가 발생했다.
* button 태그 안에 svg를 넣지 않고, 하나의 Container를 생성한 후 z-index를 다르게 두어 필요한 태그들을 쌓았다. 맨 위에 button 태그를 주고 너비를 90%로 갖는 원을 만들어 아래와 같은 클릭 영역을 생성하였다.



![](https://i.imgur.com/ZYg3bbW.png)

###  📌 [FE] Transaction 추가 UI 구현

![](https://i.imgur.com/Jtqgnkx.png)
* 컴포넌트가 많아지는 단계에서 Redux 로 상태관리를 구현해야 하는 문제가 발생했다.
* 아직 상태관리를 작성하진 않았고 추후에 적용할 예정이다.

###  📌 [BE] redirect 쿠키 문제
* redirect시 cookie에 토큰을 담아 FE에 전달해주지 못하는 버그 발생
    * 임시방편으로 queryString을 사용하여 jwt를 전달
    * 전달받은 jwt를 쿠키에 저장
    
# Sprint 2

## 💻 Day 4

### 📌 [FE] YellowOverlpaBackground 개발
![](https://i.imgur.com/y3tIsEr.png)
* **YellowBox**와 **LightYellowBox** atom를 이용하여 개발하였다.
* **position**을 `relative`로 설정하고 **overflow**를 `hidden`으로 지정해주어 두 요소를 겹치면서 화면을 벗어나는 삼각형의 부분들을 안보이도록 처리하였다.

### 📌 [FE] CircleGraph 개발
![](https://i.imgur.com/OG7miGW.png)
- `chart.js`, `react-chartjs-2` 사용
- `size`의 경우 `rem`으로 변환되어 적용

### 📌 [FE] TopNavBar 개발
![](https://i.imgur.com/NSucDBI.png)

- `atoms/HomeButton` 사용
- `atoms/NavIconButton` 사용


### 📌 [FE] Toggle button 개발

![](https://i.imgur.com/fN3Ntzd.png)

- `상위 컴포넌트에서의 onClick 이벤트를 하나만 넘겨주기`**vs** `각 버튼에 대한 각각의 onClick 이벤트를 넘겨주기`
    - `onClick` 이벤트는 버튼의 종류에 따라 결과가 달라질것임. 이에 대한 처리를 하나의 onClick 이벤트를 전달하여 상위 component에서 분기로 처리하는 방법이 있고, 각각의 이벤트를 전달하는 방법이 있을 것으로 생각함. 일단은 후자를 골랐지만 어떤게 더 나은 방법인지는 좀 더 학습이 필요! 

### 📌 [FE] Social Image Molecules 개발
![](https://i.imgur.com/mM9wbjd.png)

- map function 이용하여 동적 컴포넌트 생성
    - styled component 를 사용하다보니 동적으로 생성되는 하나의 div에 z-index를 각각 적용하지 못해서 아쉬웠다. 방법을 찾아봐야 할 것 같다.
- width 를 고정으로 주어 겹치게 구현


## 💻 Day 3

### 📌 [FE] SVG에 color를 props로 넘겨주기
[SVG 위키](https://github.com/boostcamp-2020/Project16-E-Account-Book/wiki/%F0%9F%92%A1-SVG#-typescript-component%EC%97%90%EC%84%9C-svg-color-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0)에 예시를 하나 정리해두었다.
* 위키에서의 예시와 같이 tsx 파일을 생성하고 `props: React.SVGProps<SVGSVGElement>` 를 선언하여 props를 넘겨줄 수 있다. fill 외에도 필요한 속성이 있다면 위의 코드를 응용하여 넘겨주면 된다.

### 📌 [FE] 이미지 파일 불러와서 사용하기
storybook에서 png 파일이 불러와지지 않는 문제가 있었고 `main.js`에 png와 jpg 확장자를 추가해주어 해결하였다.
```js
config.module.rules.push({
  test: /\.(svg|png|jpg)$/,
  loader: 'file-loader',
});
```

### 📌 [BE] koa와 DB 연동하기 
`npm install mysql2`
>mysql2 모듈을 설치해 server/model 디렉토리에 db.ts 파일을 만들고 
 커넥션 인스턴스를 불러와 사용한다.

`npm install dotenv`
>dotenv 모듈을 설치하고, 프로젝트 최상단에 .env 파일을 생성하여 관리한다.

```typescript
// server/model/db.ts
import mysql from 'mysql2';
import 'dotenv/config';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

export default db;
```
```bash
# server/.env
    # DB config
    DB_USER = ?
    DB_PASSWORD = ?
    DB_DATABASE = ?
    DB_HOST = ?
    DB_PORT = 3306
    DB_DIALECT = mysql
```

### ⚛ 리액트 빌드 테스트 적용
- GitAction 스크립트 생성
    - `develop` 브랜치에 commit 생성시 (즉, push시) npm run build 오류 여부 확인

- 함수의 반환형 타입을 작성하지 않으면 다음과 같은 오류가 발생합니다
```bash
Failed to compile.

src/App.tsx
  Line 5:1:  Missing return type on function  
  @typescript-eslint/explicit-module-boundary-types

src/reportWebVitals.ts
  Line 3:25:  Missing return type on function  
  @typescript-eslint/explicit-module-boundary-types
```

### 👨‍👨‍👧‍👦 각자 맡은 atomic 요소 개발

## 💻 Day 2

### 📌 Mac, Window 설정 충돌
- `CRLF 문제` -> eslint 설정으로 해결 

### 📌 VS Code Typescirpt 버전 오류 해결
- node_module의 typescript 버전과 vscode에서 지원하는 typescript 버전이 맞지 않아 계속해서 오류가 발생하는 문제가 있었음
- .vscode/setting.json 파일에서 TS상위버전 작업영역 추가 가능하도록 변경
- [참고1](https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided), [참고2](https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it), [참고3](https://code.visualstudio.com/docs/typescript/typescript-compiling)

### 📌 색상 관리 규칙 정의
- Theme 디렉토리 안에 color.ts 파일에서 관리
- object 안 object 구조로 작성하기로 결정함
- 색상의 유지보수의 용이성을 고려하여 작업 단위로 선언하여 관리
```typescript
const myColor: Colors = {
  primary: {
    dark: '#FFB421',
    main: '#F4C239',
    light: '#FFE6A0',
    accent: '#7392FF',
    reject: '#FF7373',
    cancel: '#C4C4C4',
  },
  money: {
    expenditure: '#7392FF',
    income: '#F4C239',
  },
  header: {
    dark: '#7A5A00',
    light: '#FFFFFF',
  },
  background: {
    lightGray: '#EEEEEE',
  },
};

```

### 📌 파일 경로 수정
- [CRA eject](https://create-react-app.dev/docs/alternatives-to-ejecting/)
    - eject를 통해 CRA에서 Webpack과 Babel을 분리
- [Webpack Alias](https://webpack.js.org/configuration/resolve/#resolvealias)
    - 추출된 webpack.config.js에 alias를 통해 @alias 경로 추가
- [~~Craco~~](https://7stocks.tistory.com/127)
    - eject로 해결
    - 
### 📌 Client Alias 설정
- eject 를 사용해서 webpack config 추출후 customize 
```
alias: {
        '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
        '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
        '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
        '@templates': path.resolve(__dirname, '../src/components/templates/'),

        '@theme': path.resolve(__dirname, '../src/theme/'),
        '@utils': path.resolve(__dirname, '../src/utils/'),
        '@views': path.resolve(__dirname, '../src/views/'),
        '@reducers': path.resolve(__dirname, '../src/reducers/'),
        '@store': path.resolve(__dirname, '../src/store/'),
        '@hooks': path.resolve(__dirname, '../src/hooks/'),
        ...
```

### 📌 Storybook 샘플 데이터 생성 및 설정
- .storybook/main.js(preset 파일) 에서 alias 적용 (웹팩 config 설정)
- components/atoms/button/SampleButton 에서 적용할 수 있는 샘플 Atom 컴포넌트 생성
- SampleButton 컴포넌트 생성 
```typescript
//SampleButton.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${myColor.primary.accent}};
`;

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default Example;
```
- 스토리북에 등록하기 
```typescript
//SampleButton.stories.tsx

import React from 'react';
import SampleButton from './SampleButton';

export default {
  title: 'Atoms',
  component: [SampleButton],
};

export const samplebtn = () => {
  return <SampleButton />;
};

samplebtn.story = {
  name: 'MySampleButton',
};
```


## 💻 Day 1

### 📌 BE 프로젝트 생성
* `ts-node` : Typescript 파일을 실행시킬 수 있음
* `@types/node`, `@types/koa` : `TypeScript`에서 인식하도록 `node`와 `koa`의 Type을 가져온다
* prettier 설정
    * `'` 을 사용하기로 결정
    * 최대 width는 `100`으로 결정
    * 탭은 스페이스바 `2`개를 사용하기로 결정
* eslint 설정
    * `eslint:recommended`
    * var 사용금지
    * sourceType : `module`
* 테스트 코드 작성을 위한 `jest` 설치

참고: [TypeScript로 Koa 서버 돌리기](https://code-masterjung.tistory.com/46)

### 📌 BE 폴더 구조 설계
```bash
.
├── app.ts
├── config
├── package-lock.json
├── package.json
├── src # 각 기능별로 폴더를 만들어 controller, router, service를 생성하기로 결정함
│   └── user
│       ├── controller.ts
│       ├── router.ts
│       └── service.ts
└── tsconfig.json
```

### 📌 FE 프로젝트 생성
참고: [CRA with TypeScript](https://create-react-app.dev/docs/adding-typescript/)

### 📌 FE 폴더 구조 설계
```bash
.
├── README.md
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components # atomic design에 근거하여 폴더를 구성함
│   │   ├── atoms
│   │   │   └── button
│   │   │       └── OAuthButton
│   │   │           ├── index.tsx
│   │   │           └── stories.tsx
│   │   ├── molecules
│   │   ├── organisms
│   │   └── templates
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── reducers    # Reducer들을 작성하여 관리
│   ├── store       # Store들을 모아서 관리
│   ├── theme       # 색상 및 테마 관련된 값을 관리
│   ├── utils       # 자주 사용되는 유틸들을 관리
│   ├── views       # Pages 폴더
|   └── hooks       # custom hook들을 관리
└── tsconfig.json

```
### 📌 WEB 아키텍쳐 설계
![](https://i.imgur.com/3izZ7Mf.png)

### 📌 FE NCP 서버 생성 
- 도메인 설정
- 공인 IP 적용
- 인증서기반 SSH 적용

# Sprint 1

## 💻 Day 5

### 📌 아토믹 디자인 UI 컴포넌트 분석

예시) 로그인페이지
![](https://i.imgur.com/XB80Zr4.png)
- 하나의 화면을 템플릿 , 유기체, 분자, 원자 순으로 컴포넌트를 쪼개서 분석 하였다.
- 템플릿은 페이지에 할당되기 직전의 단위, 유기체는 템플릿을 이루기 위한 하나의 단위, 분자는 두개이상의 원자의 결합으로 하나의 기능 또는 UI를 담당하는 단위, 원자는 컴포넌트의 최소단위로 결정하였다. 

### 📌 고찰

- atomic design 단위 기준에 대해 어느정도는 상세하게 정해줄 필요가 있어서 함께 고찰했다.


## 💻 Day 4

### 📌 [기획서 PPT 제작하기](https://docs.google.com/presentation/d/12thfKEWAuGru1yVTi6mcAODbiICVqvVCyn-8CdVm-co/edit#slide=id.ga2bfb3af26_0_54)
* `day3` 에 완벽하게 설계했다고 생각했는데 기획서를 쓰다보니 고려되지 않은 부분들이 발견되어 해당 내용들을 모두 반영하여 기획서를 제작하였다.

### 📌 [DB 설계](https://dbdiagram.io/d/5fb617863a78976d7b7c8a5c)
![](https://i.imgur.com/ugzAQfl.png)
- `notification` 테이블 및 `log` 관리 부분에서 가장 좋은 해결책이 무엇인지 고민되는 부분이 있어 멘토님께 물어보기로 결정하였다.
- `Redis`와 같은 `인메모리 캐싱 DB`를 사용하는것이 적절한지 멘토님께 물어보기

### 📌 고찰
- 현재는 **개발 단계**이기에 DB의 **구조가 변경**되어도 쉽게 적용할 수 있지만, **프로덕션**을 진행한 경우에 DB 테이블의 **변경 소요*가 발생하면 어떻게 작업해야 할까?
- 역정규화, 정규화의 기준을 어떻게 세워야 하는지 고심해보아야 할 것 같다.(성능적, 구조적 측면에서)
- 우리팀은 **아토믹 디자인**을 적용하기로 결정하였다. 백로그에 작성될 테스크들을 위해서는 컴포넌트 UI를 분석하는게 우선인지 고민해봐야겠다.
## 💻 Day 3

### 📌 Figma로 전체 개발할 페이지 완성
- figma를 이용해서 어제 작업사항에 이어서, 추가적인 화면에 대해 디자인을 설계하였다.

#### 완성된 화면 모습
![](https://i.imgur.com/89VlYuH.png)

### 📌 결정 사항
- **메인 화면**
    - 이번 달의 수입과 지출 현황을 `원 그래프`로 표시
        - 수입은 주황색(`#F4C239`), 지출은 파란색(`#7392FF`)으로 표시하기로 하였다.
        - 수입과 지출의 `차액`을 표시한다
        - 수입이 많으면 `+%`, 적으면 `-%`를 표시한다.
    - 가장 많은 소비를 한 카테고리와 금액을 표시
        - 카테고리는 상위 4개를 표시한다.
    - 각 가계부 별로 사용자 프로필을 `최대 3명` 을 표시하고, 더 많아질 경우 `...` 이미지를 넣어주기로 결정하였다.
- **설정 페이지**의 기능 결정
    - 설정 탭이 한 번 더 존재하던 기능 삭제
- **카테고리**는 전체관리 결제수단은 유저별 관리로 결정하였다.
    - 카테고리는 테이블 하나로 관리, 결제수단은 결제수단 테이블 + 유저-결제수단 관계 테이블로 관리하도록 결정하였다.
- **통계 페이지**
    - 통계 페이지 구성 요소
        - 기간별, 카테고리 파이차트 소비 패턴(일단은 월별 기준으로) // 수입따로 지출따로
        - 기간별 수입or지출 추이 그래프 // 수입따로 지출따로
        - 월별 수입과 지출 막대그래프(동시에)
        - 개별 카테고리에 대한 필터링된 리스트 + 시간별 꺽은선 그래프(선택 사항)
    
- **가계부별 마스터(관리자)** 를 두어 편집 할 수 있도록 결정하였다.
    - 마스터는 회원 초대 및 내보내기가 가능하다. (일반 사용자는 조회만 가능)
- **CSV 기능** 은 import는 내역페이지에서 추가 업로드를 하는 것으로 결정하였고, export의 경우 추후 논의할 예정이다.
- **시간 표시** 는 AM,PM 으로 나누지 않고 24시방법을 사용하도록 결정하였다.
    - 시간 표시는 사용자가 접속한 지역을 기준으로 표시한다
    - 서버의 시간은 `Asia/Seoul`의 `UTC+9`를 따른다
- 유저는 OAuth 사이트를 기준으로 결정하였다. (Naver, GitHub 아이디 같아도 다른 유저로 취급)
### 📌 고찰
- 생각보다 화면을 설계하고 내용을 조정하는데 시간이 많이 걸렸다.

### 📌 설계에는 반영하지 않았지만 시간이 남는다면 구현해 볼 기능들
- 사용자 `전화번호` 등록 및 검색
- 사용자 `커스텀 분석` 기능 (일, 월, 주 단위 등 상세하게 지정 가능)
- `csv export` 기능


## 💻 Day 2

### 📌 기술 선정

- `MySQL`  : 데이터베이스로 `MySQL` 과 `monogoDB` 를 선택할 수 있었다. 가계부 서비스 특성상 관계를 갖고있는 데이터가 많고 업데이트 요청이 빈번하게 일어나기 때문에 관계형 데이터베이스인 `MySQL` 을 선택하였다.
- `Koa` : 백엔드 프레임워크로 `Koa` 를 사용하라는 요구사항이 있었고 `Koa` 의 장점에 대해 찾아보았다. 2016년에 만들어졌던 `Koa` 는 ES6 기반으로 제작된 프레임워크이다.
    - `Express` 와 달리 `Koa` 는 `try-catch` 문 없이도 `async/await` 에서 발생하는 오류를 잡아낼 수 있다.
    - `Koa`는 middleware를 정의할 때 `async/await` 개념을 적용할 수 있다.
    - `Koa` 는 뼈대로 설치되는 모듈이 적고, customizing이 자유롭다.
    - `context` 를 지정하여 원하는 변수를 전역 변수처럼  사용할 수 있다. 자주 사용되는(database 등) 것들을 사용하기 편리할 것 같다.
    - `Adobe XD` 를 사용하려고 했으나, 유료 플랜 및 동시 작업의 여건이 되지 않아 `Figma` 로 변경하여 작업했습니다

### 📌 결정 사항

- 프론트엔드 백엔드의 port 번호는 어떤 것을 사용할까?
    - 프론트엔드는 port `8000` 번을 사용하기로 결정함
    - 백엔드는 port `3000` 번을 사용하기로 결정함
- 서비스 명은 어떻게할까?
    - 다양한 아이디어를 내던 중 벌과 꿀 쪽으로 이름을 지으면 좋을 것 같아서 다같이 많은 고민을 하였다.
    - 처음에는 서비스명을 `머니 중 허니` 로 결정하였다. 그러나, 한글보다 영어로 사용하는 것이 좋은 것 같아 `Honey In Money`로 결정하였다.
- Ncloud 서버 생성
    - 인증서 기반의 SSH 접속 기능을 사용했다.
    - locale 설정을 ko_KR로 변경했다.
    - Mysql 서버와 Database 및 외부 접속용 계정을 생성했다.

### 📌 기타

- `Burn down chart` 를 모두 작성하고 화면 기획을 하려고 했으나, 요구사항을 먼저 분석하고 화면을 설계하는 것이 더 좋을 것 같아 화면 설계를 진행하였다. 팀원들이 같은 화면을 공유하며 각 디자인의 편의성과 기능에 대해 토의하여 결정하였다. (화면 설계의 80% 정도를 완료하였다.)
- `Figma` 를 사용하여 UI 프로토타이핑 작업을 진행하였다. 기획서가 없으니 작업 시간이 많이 소요되는 느낌이 들었다. ![](https://i.imgur.com/o5He0uB.png)

- banksalad, 신한카드 앱 UI를 참고하였다.

## 💻 Day 1

### 📌 기술 선정

- `CSS in JS` : 요구사항에는 Sass나 Less를 사용하라고 나와있었으나, 변경이 가능하다는 응답을 받았다. 팀에서 선택한 `atmoic` 방식에서는 CSS-in-JS가 개발에서 더욱 효과적일 것 같아 CSS in JS를 선택하였다
- `Typescript` : Type 검증을 통해 에러를 방지할 수 있고, 그로 인한 생산성 향상을 위해 선택하였다.
- `Material UI` :  CSS가 적용된 컴포넌트를 재사용 하여 작업 효율성을 높이기 위해 선택하였다.
- `Git Action` : 통합 테스트, 배포를 자동화 하여 개발 생산성을 높이기 위해 선택하였다.
- `Naver Cloud Platform` : AWS가 자료가 많지만 NCloud의 경우 제공 받은 크레딧이 많기 때문에 NCloud를 사용하기로 결정하였다.
- DB는 `MySQL`과 `mongoDB` 중 어떤 것이 프로젝트에 더 적합한지 아직 판결이 나지 않아 요구사항을 더욱 분석하고 결정하기로 하였다.
- `Atomic Design` : 컴포넌트의 재사용성을 높여 중복되는 컴포넌트의 생성을 막아 코드 가독성 및 효율성을 높이기 위해 선택하였다
- `Story book` : 아토믹 디자인 개발을 원활히 하고, 프로토타입을 쉽게 확인하기 위해 선택하였다.
- `Redux` : State Management 중 3가지 라이브러리(MobX, Redux, Recoil)를 선택할 수 있었다. 팀원 모두 State Management 경험이 없었다. `Redux` 가 가장 자료를 구하기 쉬워 프로젝트에 적용하기 쉬울 것 같아 선택하였다.
- `OAuth` : Naver, GitHub 로그인을 위한 인증 방식을 선택하였다. 개발 경험있는 GitHub 방식과 대중적인 Naver 방식을 고려했다.
- [`Primer.style`](http://primer.style) : SVG 아이콘 사용을 쉽게 하기 위해 선택하였다.
- `Adobe Xd` : 프로젝트 화면 설계를 직접 해야했다. Adobe Xd는 다수의 사용자가 파일을 공유할 수 있으며 초보자도 쉽게 쓸 수 있고 무료로 다양한 기능을 제공하기 때문에 선택하였다.

### 📌 유저 시나리오 설계

- 페이지 별 설계가 아닌 시나리오별 설계를 진행하기 위해 필요한 기능에 대해 논의하였다.
- 전체 기능을 한번에 뽑아내는 것은 어려울 것 같아 큰 주제를 위주로 선정하였고 추후 구체화하기로 했다.

### 📌 프로젝트 요구사항 분석

**✅ 프로젝트 필수 구현 사항** 

- 계정 인증
- 수입과 지출 입력 / 편집
- 자산 통계 시각화 및 통계화
  - 그래프 형태의 지표 관리
  - 기간별 소비 패턴
  - 일, 주, 월, 년 등
  - 각 수입/지출 별 소분류 및 태그 관리 기능
- 텍스트로부터 파싱하여 내역 추가
  - sms/mms 문자 내용을 기반으로 함

**✅ 프로젝트 선택 구현 사항 - 구현**

- 소셜 기능 강화
  - 화면 공유하기
  - 가계부 함께 쓰기
- 화면을 구성하는 데 필요한 데이터 외의 정보를 재진입 시에도 유지 (쿠키, 세션 등 사용)
- 캘린더 UI
  - 한 주 시작 요일 고르기 (월요일이나 일요일 등)
  - 윤년 고려
  - GMT
- csv 파일 등을 이용한 import / export 구현
  - csv파일로 지출, 수입 내역을 입력하고, 내보낼 수 있게 한다. 실제 앱 서비스에서 최근 문자 내역을 가져와 사용하는 것처럼, 최근 문자 내역을 csv파일로 저장하여 읽도록 적용할 수 있을 것이다.
- 자동화 도입(CI, 배포)
- 브라우저 저장소 보조 활용 (쿠키, 스토리지 등)
- request/response에 대한 표준화
- 시간 관련 기능 강화

❎ **프로젝트 선택요구사항 중 안할 것**

- N-screen 디바이스 지원
  - 디자인적 요소에 많은 시간을 투자하기엔 개발 기간이 짧아 기능 개발에 초점을 맞춰 진행하기로 하였다.
  - 우선적으로, 개발시 모바일 화면을 기준으로 개발을 진행하기로 하였다.
- 개발 기간이 짧아 아래 두가지 사항은 추후 개선해나갈 수 있는 것들이라고 생각하여 시간이 남을 시 진행하기로 하였다.
  - 보안 취약 검토
  - 성능 최적화
