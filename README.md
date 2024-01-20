# 기본 요구 사항
-[x] 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
-[x] 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
-[x] 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
-[x] 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
-[x] 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
-[x] input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.
-[x] 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.

# 심화 요구 사항
-[x] 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
-[ ] 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.

# 멘토님 피드백
-[x] 폴더를 추가해 css 파일을 옮기거나 페이지별 폴더를 만들고, 그 안에 해당하는 css 를 두는 등 프로젝트 구조를 잡는다.
-[ ] 배포한 사이트 링크를 첨부한다.
-[ ] 3주차 기본사항 부분은 여백을 상대적인 단위로 설정하고, 심화 부분은 flex 로 설정된 엘리먼트 내에 순서를 변경하는 속성이 있다. 이를 반영한다.
-[ ] body 태그 엘리먼트들도 큰 단위로 주석을 남긴다.
-[ ] 리소스 관리와 html 구조 파악을 위해 svg 는 별도 파일로 저장해서 import 해서 사용한다.
-[x] 픽셀 값으로는 정수를 사용한다.
-[ ] label 태그에 for 속성을 사용해 폼을 만든다.
-[ ] 멀티 클래스를 점검한다.
  -[ ] 공통되는 디자인을 추출한 클래스 하나
  -[ ] 몇가지 정의된 색상값을 부여하는 클래스들
  -[ ] 특정한 곳에서만 사용하는 커스텀 클래스
  -[ ] 버튼 사이즈는 width 100% 를 설정해둬서 버튼마다 지정하지 않고도 부모 요소에 맞게 적용되도록 한다.