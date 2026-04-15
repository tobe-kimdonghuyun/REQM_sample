- 요청 사항
  Summary Cell의 텍스트를 선택(드래그)하여 복사하고 싶으나 현재 edittype, displaytype에서는 해당 기능이 제공되지 않음
  - 진행 방향
    해당 건은 신규 기능 요청으로 분리 등록하여 진행 (RP_105134)
    가이드 및 샘플은 해당RP에 첨부파일로 등록

  - 현재 제공 가능한 대안 (유사 기능 구현)
    Summary Cell 자체에서 드래그 선택은 지원되지 않으므로 클릭+clipboard 기반 복사 기능으로 대체 구현

         - 구현 방식
            1.  Grid onsummaryclick 이벤트 활용
                 Summary Cell 클릭 시 해당 텍스트를 getCellText 가져온 후 클립보드로 복사
            2. 실행 환경별 분리 처리
                 NRE / WRE 각각 별도 구현
            3. WRE 환경 처리 방식
                - HTTP / HTTPS 분리 대응 필요
                     A. HTTP 환경:
                         Chrome 정책상 클립보드 접근 제한 존재
                         특히 개발자 도구가 열린 상태에서IP 형태로(예: http://172.10.12.45 ) 접근 시 clipboard 기능 동작 불가
                     B. HTTPS 환경:
                          정상적으로 클립보드 API 사용 가능

  - 추가 고려 사항
    현재 방식은 전체 텍스트 복사만 가능
    사용자가 텍스트 일부만 드래그하여 복사를 원하는 경우:
    → Grid Summary Cell에 대한 신규 기능 개발이 필요

  - 가이드 실행방법
    1.  샘플파일을 NRE, WRE각각 실행한다
    2.  임의의 summary cell을 클릭한다
    3.  오른쪽 textaarea에 붙여 넣기 한다
        -> 클릭한 summary cell의 text가 붙여넣기 된다
