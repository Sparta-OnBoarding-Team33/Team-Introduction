# <SPARTA On-Boarding *33*조>

> ## 📌 프로젝트 개요
스파르타 Spring 6기의 첫 팀 프로젝트.
프론트엔드 개발은 어떤 식으로 진행되는지 파악하기 위해 간단한 
팀원 소개 웹페이지를 제작을 했습니다.

***
> ## 프로젝트 목표
- 웹개발이란 무엇인지 이해하기~
- HTML, CSS, JavaScript를 이용해 프론트엔드 흐름을 이해하기~
- 브라우저 동작 원리 이해하기~
- Git & GitHub 사용 친숙해지기~

***
> ## <팀원 구성>
- 조장 : 석창훈 - ppt 대본 제작, 디테일 페이지 기본 구조 제작
- 팀원 : 이용환 - 기능 개발, 애니메이션 구현, 깃 & 깃헙 관리, 리드미 파일 작성
- 팀원 : 김현정 - PPT 발표, 디테일 페이지 전체적인 CSS 구현
- 팀원 : 김희준 - PPT 제작, 이미지 제공, 메인 페이지 기본 구조 제작

***
> ## 주요 기능
- 애니메이션:
  - 버튼 호버 시 글자 또는 아이콘이 살짝 올라가도록 구현하여 웹페이지에 생동감을 더함.
  - 하단 화살표 버튼 클릭 시, 위에서 아래로 카드가 나오며 자동스크롤 기능 적용.
- 파라미터 활용
  - JSON 데이터를 fetch하여 id와 일치하는 항목을 detail 페이지에서 표시.
- 스위치 버튼:
  - detail 페이지 카드에 스위치 버튼을 적용하여 클릭 시 다음 리스트를 불러오도록 구현.
  
***
> ## 🚀 배포 주소
만든 페이지: [33조 인원을 소개합니다.](https://sparta-onboarding33.vercel.app/)

> ## 🚀 프로젝트의 더 자세한 내용
[33조 노션](https://teamsparta.notion.site/33-19d2dc3ef51480e9844ae3d17332e684)

***
> ## 🛠 기술 스택
- IDE: VS Code
- 사용된 언어: HTML, CSS, JavaScript 
- 배포: Vercel
- 기타: Bootstrap, FontAwesome

## 📂 폴더 구조
```plaintext
📦 프로젝트 루트
 ┣ 📂 data
 ┃ ┣ data.json
 ┣ 📂 detail
 ┃ ┣ index.html
 ┣ 📂 images
 ┣ 📂 scripts
 ┃ ┣ details.js
 ┃ ┣ switchCard.js
 ┃ ┣ toggle.js
 ┣ 📂 styles
 ┃ ┣ detail.css
 ┃ ┣ index.css
 ┃ ┣ main-page.css
 ┣ 📜 index.html
 ┗ 📜 README.md

