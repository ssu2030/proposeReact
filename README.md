# propose react

: 프로포즈를 하려고 하는데 그냥 사람들 모바일 청첩장 하는것 처럼 나도 뭔가 만들어보려고 한다. 마크업 언어와 css로 대충 만들기 보단, swiper나 여러가지 모듈을 이용하고 나도 요즘 TypeScript를 사용하기 때문에 TypeScript를 곁들인 프로포즈 웹을 만들어 보려고한다. npm creat-react-app 쓰는건 함정임

### 01. [github.io](http://github.io) + my ts app

첫번째로 궁금한것은 나는 github.io를 이용하려고하는데 github.io에서도 리액트를 사용할 수 있고,

```bash
npx create-react-app my-app --template typescript
```

해서 만들고 간단하게 관리해보려고 하는데, 될 수 있는 방법을 먼저 찾아보려고 한다.

git을 사용해서 프로젝트를 관리 해보려고 했는데 초장부터 에러에 맞닥뜨림

<aside>
💡 The authenticity of host '[github.com](http://github.com/) (xx.xxx.xx.167)' can't be established.

</aside>

: 해당에러는 당연히 내가 현재 사용하고 있는 맥북의 키를 깃헙에 등록한 적이 없어서 그런것같다. 맥북사고 pp 안한거 티 엄청나네

키를 등록한 후 clone 성공

[How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

이것을 참고하면 github-page와 npx create react app을 가지고 github page를 만드는게 뭔가 가능해 보인다. 내가 이해하는거보니 원숭이도 따라할 수 있는 아주 심플한것. 

- `npx create-react-app` 으로 `my-app` 으로 만들던 만들고싶은 이름으로 프로젝트를 생성한다.
- dev-dependancy 가 있으니 github Pages를 설치한다.
    - 만들어진 `my-app`에 들어가서 아래 명령어를 입력하여 필요 모듈을 설치한다.
    - `npm install gh-pages --save-dev`
- package.json에 몇가지 세팅을 해준다.
    - 탑레벨에 표시될 페이지 주소를 세팅해준다.
        - `http://{username}.github.io/{repo-name}`
    - deploy및 여타 설정을 해준다.
        
        ```json
        "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }
        ```
        
- 만든 프로젝트 경로에서 git init 해주고 `git remote add origin [git@github.com](mailto:git@github.com):{깃헙 아이디}/{깃에다 만든 프로젝트 이름}.git`
- 깃헙페이지에 디플로이 해준다. `npm run deploy`

잘됬는지 확인하고 싶으면 http://{본인 github id}.github.io/{본인프로젝트명} 해보면 기본페이지 뜰것

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6427c24d-2250-411f-ac6f-80d0b7c5e9d4/Untitled.png)

혹시 이거 설정하기전에 본인 프로젝트에 [github.io](http://github.io) 이름변경안한사람있나 내가 그래서 바꿨더니 됨

### 02. 자 어떤기능을 넣고싶은가

1. 멋진거 이쁜거 대단해보이는거
2. 모바일 first지만 웹도 조금은 고려해주기
3. 뭔가 react hook 많이 쓸거같은거 (면접에서 떠들수도있으니깐)
4. 뭔가 스크롤 내릴때 위에 이미지들 사라지거나 fade out 되는거
5. gallery 무조건이고,
6. 뭔가 사인할 수 있게 하는게 있었음 좋겠음

### 03. 일정

| 시작일  | 종료일 | 기능 명세 | 문제 | 진행도 |
| --- | --- | --- | --- | --- |
| 2022.03.15 | 2022.03.15 | MainPage render |  | 100% |
| 2022.03.15 |  | Lottie 연결 | 못하고있음 ㅠ_ㅠ |  |
|  |  |  |  |  |
|  |  |  |  |  |

### 04. 구현 리스트

- Lottie
    - Lottie Player로 원하는 animated svg load 하고 싶음
