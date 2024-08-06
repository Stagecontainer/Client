# React + Vite
이 프로젝트는 Vite, React, JavascriptSWC를 사용하여 구축되었습니다

## 요구사항
- Node.js (v21.5.0)
- Yarn (v1.22.19)

## 로컬 실행
- yarn install
- yarn dev(http://localhost:5173/)

## src 구조
─ src</br>
 ├─ components</br>
 ├─ assets </br>
 ├─ hooks (= hoc)</br>
 ├─ pages</br>
 ├─ constants</br>
 ├─ config</br>
 ├─ styles</br>
 ├─ services (= api)</br>
 ├─ utils</br>
 ├─ contexts</br>
 ├─ App.jsx</br>
 └─ main.jsx</br>

## 기능 구현 플로우
로그인 이전에는 검색을 하면 나오는 게시글 리스트와 메인 홈(공연 준비, 공연 찾기 두 버전) 확인 가능 / 게시글이나 제작자 등록을 원하는 경우, 로그인 필요 팝업 출력
로그인 이후, 제작자 등록 및 공연 준비 의뢰 상담(메신저), 의뢰신청 가능
