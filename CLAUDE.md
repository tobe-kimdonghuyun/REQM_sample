# 언어 응답 규칙

- 설명, 피드백, 질문 답변, 진행상황 등 모든 텍스트 응답은 **한글**로 작성한다.
- 코드, 명령어, 프로그래밍 언어 키워드, 배포 설정값(YAML, JSON 키 등)은 원문 그대로 유지한다.
- 코드 주석은 한글로 작성해도 무방하나, 코드 자체는 변경하지 않는다.

---

# Project Overview

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프론트엔드 | nexacroN v21 / nexacroN v24, HTML, JavaScript, TypeScript |
| UI 라이브러리 | framer-motion, lucide-react, tailwind-merge, clsx |
| 백엔드 | Kotlin (Spring Boot), Python (FastAPI) |
| 빌드/배포 | NexacroN_Deploy_JAVA.jar, Apache Tomcat 9, BAT 스크립트 |
| 마이그레이션 | Jakarta 마이그레이션 (PowerShell 스크립트) |

## 프로젝트 주요 디렉토리

```
tools/           — 배포 BAT 스크립트 및 Tomcat 제어 스크립트
scripts/         — PowerShell 유틸리티 (Jakarta 변환, JAR 다운로드)
nexacroK/        — nexacroK UI화면 프로젝트 소스
NTemplate/       — nexacroN 프로젝트 템플릿
SKILLS/          — Claude Code 커스텀 스킬 정의
deploy/          — 배포 설정
DOCS/            — 개발 및 운영 문서, nexacroN, nexacorK 설계문서가 있음 
nexacroK_UI/     — nexacroK UI화면 프로젝트 소스
nexacroN/nexacroN_UI/ — nexacroN UI화면 프로젝트 소스
nexacroN/output/     — nexacroN UI화면 프로젝트 소스를 generate하여 나온 결과물 폴더
nexacroN/deploy/     — nexacroN UI화면 프로젝트 소스를 generate하여 나온 결과물을 deploy한 결과물 폴던
```

---

# 코딩 컨벤션

## 공통 원칙

- 과도한 추상화 금지 — 단일 사용 헬퍼/유틸 함수 생성 지양
- 불필요한 하위 호환 코드, 주석 처리된 코드, 미사용 변수 남기지 않기
- 시스템 경계(사용자 입력, 외부 API)에서만 유효성 검사
- 에러 핸들링은 실제 발생 가능한 케이스에만 추가

## TypeScript / JavaScript

- `any` 타입 사용 최소화, 명시적 타입 선언 우선
- `async/await` 사용, `.then().catch()` 체이닝 지양
- 컴포넌트 파일은 PascalCase, 유틸 파일은 camelCase
- 상수는 `UPPER_SNAKE_CASE`

## Python

- Black formatter 기준 포맷팅
- type hint 필수 (`def foo(x: int) -> str:`)
- `f-string` 사용, `%` 포맷 지양
- 예외는 구체적인 타입으로 (`except ValueError` > `except Exception`)

## Kotlin

- `data class` 활용으로 불변 모델 선호
- null-safety: `!!` 연산자 사용 금지, `?.let {}` 또는 `?: return` 패턴 사용
- `companion object` 내 상수 정의
- 함수명은 camelCase, 클래스명은 PascalCase

## nexacroN / nexacroK

> **필독**: nexacroN 또는 nexacroK 관련 작업 시 **반드시** 아래 메뉴얼을 먼저 참조한다.
>
> 메뉴얼 루트: `D:\git_prj\REQM\nexacroN 메뉴얼\Nexacro N V24 매뉴얼  오프라인 메뉴얼\`
>
> | 파일명 | 용도 |
> |--------|------|
> | `developer_guide_nexacro_n_v24_ko.html` | 컴포넌트, Dataset API, transaction, 이벤트 처리 |
> | `advanced_development_guide_nexacro_n_v24_ko.html` | Grid 고급, 팝업, 탭, 모듈, 에러 처리 |
> | `deployment_guide_nexacro_n_v24_ko.html` | 빌드/배포, 서버 파일 구조 |
> | `development_tools_guide_nexacro_n_v24_ko.html` | Nexacro Studio, 디버거 사용법 |
> | `getting_started_nexacro_n_v24_ko.html` | 프로젝트 구조, 파일 타입(.xprj/.xadl/.xfdl) |
> | `server_setup_guide_nexacro_n_v24_ko.html` | Tomcat 설정, PlatformData, 인코딩 |
> | `module_developer_guide_nexacro_n_v24_ko.html` | 모듈(.xmodule) 개발, TypeDefinition |
> | `product_information_nexacro_n_v24_ko.html` | 지원 플랫폼/브라우저, v24 신규 기능 |
>
> **xapi (서버 서비스 개발 Java API)**
> 메뉴얼 루트: `D:\git_prj\REQM\nexacroN 메뉴얼\xapi\korean\`
>
> | 경로 | 용도 |
> |------|------|
> | `com/nexacro/java/xapi/data/PlatformData.html` | 최상위 데이터 컨테이너 API |
> | `com/nexacro/java/xapi/data/DataSet.html` | 2차원 테이블 데이터 API |
> | `com/nexacro/java/xapi/data/VariableList.html` | 단일 변수 목록 API |
> | `com/nexacro/java/xapi/data/DataTypes.html` | 데이터 타입 상수 목록 |
> | `com/nexacro/java/xapi/data/ColumnHeader.html` | 컬럼 헤더 정의 API |
> | `com/nexacro/java/xapi/tx/HttpPlatformRequest.html` | HTTP 요청 수신 API |
> | `com/nexacro/java/xapi/tx/HttpPlatformResponse.html` | HTTP 응답 송신 API |
> | `com/nexacro/java/xapi/tx/PlatformException.html` | 예외 처리 |

### 기본 규칙

- 이벤트 핸들러명: `컴포넌트명_이벤트명` (예: `btnSave_onclick`)
- 공통 함수는 `gfn_` prefix 사용
- Dataset 컬럼명은 대문자 스네이크케이스 (예: `USER_ID`)
- 화면 스크립트는 기능 단위로 구역 주석 구분
- 화면은 `.xfdl` 확장자 파일 — XML(컴포넌트/레이아웃) + nexacro 스크립트(로직) 혼합
- 스크립트는 `<Script><![CDATA[ ... ]]></Script>` 태그 내부에 function으로 작성
- `nexacrodeploy.exe`를 통해 nexacroK, nexacroN 모두 빌드 → 최종 `.js` 파일 생성 (현재 미설치, 추후 추가 예정)

### 프로젝트 파일 구조

| 확장자 | 역할 |
|--------|------|
| `.xprj` | 프로젝트 파일 (전체 프로젝트 설정) |
| `.xadl` | Application Definition — 앱 진입점, 전역 변수, 글로벌 Dataset 설정 |
| `.xfdl` | Form Definition — 화면 단위 UI + 스크립트 |
| `.xjs` | 외부 스크립트 파일 (공통 함수 모듈) |
| `.xtheme` | 테마/스타일 정의 |

**빌드 실행 흐름**: `launch.html` → `nexacro.js` 로드 → `application.xadl` 초기화 → startup Form 표시

### 주요 컴포넌트 목록

| 분류 | 컴포넌트 |
|------|---------|
| 입력 | `Edit`, `TextArea`, `Combo`, `CheckBox`, `Radio`, `Calendar`, `DateField` |
| 버튼 | `Button`, `ImageButton`, `CheckButton` |
| 표시 | `Static`, `Image`, `Grid`, `ListBox`, `ProgressBar` |
| 컨테이너 | `Div`, `Panel`, `PopupDiv`, `Tab` |
| 기타 | `FileUpload`, `FileDownload`, `WebBrowser`, `Menu`, `PopupMenu` |

**컴포넌트 ID 네이밍 prefix 권장**: `btn_`, `edt_`, `grd_`, `ds_`, `cmb_`, `chk_`, `div_`, `tab_`, `lst_`

### Dataset API

```javascript
// 행 추가
var nRow = this.dsMain.addRow();

// 값 설정/조회
this.dsMain.setColumn(nRow, "USER_ID", "hong");
var val = this.dsMain.getColumn(nRow, "USER_ID");

// 행 삭제
this.dsMain.deleteRow(nRow);

// 행 검색
var foundRow = this.dsMain.findRow("USER_ID", "hong");

// 전체 행 수
var cnt = this.dsMain.rowcount;

// 대량 데이터 처리 시 화면 갱신 비활성화 (성능)
this.dsMain.updatecontrol = false;
// ... 반복 처리 ...
this.dsMain.updatecontrol = true;

// Dataset 필터 적용
this.dsMain.setFilter("STATUS == 'Y'");
this.dsMain.setFilter("");  // 필터 해제

// 행 타입 (ROWTYPE_NORMAL, ROWTYPE_INSERT, ROWTYPE_UPDATE, ROWTYPE_DELETE)
this.dsMain.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
```

### 서비스 통신 (transaction)

```javascript
// 기본 패턴
this.transaction(
    "svcId",             // 서비스 식별자
    "/api/endpoint",     // URL
    "dsSearch:dsSearch", // 입력 Dataset (로컬명:서버명)
    "dsResult:dsResult", // 출력 Dataset
    "",                  // 추가 파라미터
    "fn_callback"        // 콜백 함수명 (문자열)
);

// 콜백 패턴 — errCode 반드시 확인
this.fn_callback = function(svcId, errCode, errMsg) {
    if (errCode < 0) {   // 시스템 오류
        alert("시스템 오류: " + errMsg);
        return;
    }
    if (errCode > 0) {   // 업무 오류
        alert("업무 오류: " + errMsg);
        return;
    }
    // 성공 처리
};
```

### 이벤트 처리 패턴

```javascript
// 버튼 클릭
this.btnSearch_onclick = function(obj, e) { };

// Combo 항목 변경
this.cmbStatus_onitemchanged = function(obj, e) {
    var val = obj.value;
};

// Grid 셀 클릭
this.grdMain_oncellclick = function(obj, e) {
    var rowIdx = e.row;
    var colIdx = e.cell;
};

// Grid 헤더 클릭 (정렬/전체선택)
this.grdMain_onheadclick = function(obj, e) { };

// 키보드 단축키 (Form 레벨)
this.Form_onkeydown = function(obj, e) {
    if (e.ctrlKey && e.keycode == 83) { fn_save(); return false; }  // Ctrl+S
    if (e.keycode == 13) { fn_search(); return false; }              // Enter
    if (e.keycode == 27) { this.close(); return false; }             // Esc
};
```

### Form 생명주기 이벤트

```javascript
// 화면 최초 로드 (1회 실행) — 초기화 로직
this.Form_onload = function(obj, e) {
    fn_initForm();
    fn_loadInitData();
};

// 화면 활성화 시마다 실행 — 데이터 갱신
this.Form_onactivate = function(obj, e) { };

// 화면 비활성화 시
this.Form_ondeactivate = function(obj, e) { };

// 화면 종료 전 — return false 시 종료 취소
this.Form_onclose = function(obj, e) {
    if (!fn_validateBeforeClose()) return false;
};
```

### 팝업(Popup) 패턴

```javascript
// 팝업 열기
this.openPopup("popUser", "xfdl/UserPopup.xfdl",
    { p_userId: this.edtUserId.value, p_mode: "edit" },
    "fn_popupCallback");

// 팝업 내부 — argument로 전달된 데이터 수신
this.Form_onload = function(obj, e) {
    var userId = this.argument.p_userId;
    var mode   = this.argument.p_mode;
};

// 팝업 닫기 + 데이터 반환
this.btnConfirm_onclick = function(obj, e) {
    this.close({ resultCode: "OK", userId: this.edtUserId.value });
};

// 팝업 콜백 처리
this.fn_popupCallback = function(popupObj, returnValue) {
    if (returnValue && returnValue.resultCode == "OK") {
        this.edtUserId.set_value(returnValue.userId);
    }
};
```

### Div 동적 폼 로드

```javascript
// Div에 xfdl 로드
this.divContent.set_url("Form::SubForm.xfdl");

// Div 내부 컴포넌트 접근
var innerValue = this.divContent.form.dsMain.getColumn(0, "USER_ID");
var innerGrid  = this.divContent.form.grdMain;
```

### 공통 함수(gfn_) 필수 패턴

```javascript
// Null/빈값 처리
function gfn_nvl(val, defaultVal) {
    return (val == null || val == undefined || val == "") ? defaultVal : val;
}

// 날짜 조회 — "YYYYMMDD" 형식
function gfn_getToday() { /* 오늘 날짜 반환 */ }

// 문자열 좌우 패딩
function gfn_lpad(str, len, padChar) { /* "1" → "0001" */ }
function gfn_rpad(str, len, padChar) { /* "1" → "1000" */ }

// 숫자 포맷
function gfn_numFormat(num) { return Number(num).toLocaleString(); }

// 유효성 검증 (이메일, 전화번호 등)
function gfn_isEmail(email) { /* regex 검증 */ }
function gfn_isPhone(phone) { /* regex 검증 */ }
```

### Grid 주요 패턴

```javascript
// 그리드 선택 행 배열 가져오기
var aRows = this.grdMain.getSelectRowArray();

// 셀 스타일 동적 변경
this.grdMain_ongetcellstyle = function(obj, e) {
    if (this.dsMain.getColumn(e.row, "STATUS") == "ERROR") {
        e.style.background = "#ffcccc";
    }
};

// 컬럼 표시/숨김
this.grdMain.setColHidden(colIndex, true);

// 전체 선택 체크박스 (헤더 클릭 시)
this.grdMain_onheadclick = function(obj, e) {
    if (e.cell == 0) obj.setAll("select", !obj.getCheckOldValue(0));
};
```

### Application 전역 변수

```javascript
// 전역 변수 저장/조회
application.setGlobal("USER_ID", "hong");
var userId = application.getGlobal("USER_ID");
```

### xapi 서버 서비스 개발 (Java)

transaction() 호출 시 서버에서 처리하는 Java 서비스는 **nexacro xapi** 라이브러리로 구현한다.

#### 패키지 구조 및 import

```java
import com.nexacro.java.xapi.data.*;            // PlatformData, DataSet, VariableList, DataTypes, ColumnHeader
import com.nexacro.java.xapi.data.datatype.*;   // PlatformDataType
import com.nexacro.java.xapi.tx.*;              // HttpPlatformRequest, HttpPlatformResponse, PlatformException, PlatformType
```

#### PlatformData 구조

```
PlatformData (최상위 컨테이너)
  ├─ VariableList  — 단일 파라미터 (ErrorCode, ErrorMsg, 검색조건 등)
  └─ DataSetList   — DataSet 목록 (2차원 테이블 데이터)
       └─ DataSet  — ColumnHeader 목록 + 행 데이터
```

#### DataTypes 상수 (컬럼 타입 지정 시 사용)

| 상수 | Java 타입 | 포맷 |
|------|---------|------|
| `DataTypes.STRING` | `String` | - |
| `DataTypes.INT` | `int` | - |
| `DataTypes.LONG` | `long` | - |
| `DataTypes.DOUBLE` | `double` | - |
| `DataTypes.FLOAT` | `float` | - |
| `DataTypes.BIG_DECIMAL` | `BigDecimal` | - |
| `DataTypes.BOOLEAN` | `boolean` | - |
| `DataTypes.DATE` | `Date` | yyyyMMdd |
| `DataTypes.DATE_TIME` | `Date` | yyyyMMddHHmmssSSS |
| `DataTypes.BLOB` | `byte[]` | - |

#### DataSet API

```java
// 컬럼 정의
DataSet ds = new DataSet("dsResult");
ds.addColumn(new ColumnHeader("USER_ID",   DataTypes.STRING, 20));
ds.addColumn(new ColumnHeader("USER_NM",   DataTypes.STRING, 50));
ds.addColumn(new ColumnHeader("REG_DT",    DataTypes.DATE));
ds.addColumn(new ColumnHeader("AMT",       DataTypes.BIG_DECIMAL));

// 행 추가 및 값 설정
int row = ds.newRow();
ds.setValue(row, "USER_ID", "hong");
ds.setValue(row, "USER_NM", "홍길동");
ds.setValue(row, "AMT",     new BigDecimal("50000.00"));

// 값 읽기 (타입별)
String  userId = ds.getString(i,  "USER_ID");
int     cnt    = ds.getInt(i,     "CNT");
double  amt    = ds.getDouble(i,  "AMT");
Date    dt     = ds.getDateTime(i,"REG_DT");
Object  val    = ds.getObject(i,  "COL");

// 행 상태 확인 — 클라이언트가 변경한 행 처리 시 필수
int rowType = ds.getRowType(i);
// ROW_TYPE_NORMAL=0, ROW_TYPE_INSERT=1, ROW_TYPE_UPDATE=2, ROW_TYPE_DELETE=3
```

#### VariableList API

```java
VariableList varList = resData.getVariableList();
varList.add("ErrorCode", 0);          // int
varList.add("ErrorMsg",  "SUCCESS");  // String
varList.add("TotalCnt",  100);

// 요청 Variable 읽기
VariableList inVar = reqData.getVariableList();
String searchNm = inVar.getString("SEARCH_NM");
int    pageNo   = inVar.getInt("PAGE_NO");
```

#### 완전한 JSP 서비스 패턴

```jsp
<%@ page import="com.nexacro.java.xapi.data.*, com.nexacro.java.xapi.tx.*" %>
<%@ page contentType="text/xml; charset=UTF-8" %>
<%
    out.clearBuffer();  // 필수 — 앞선 출력 제거
    
    // 1. 요청 수신
    HttpPlatformRequest req = new HttpPlatformRequest(request);
    req.receiveData();
    PlatformData reqData = req.getData();
    
    // 2. 입력값 추출
    VariableList inVar = reqData.getVariableList();
    String searchNm = inVar.getString("SEARCH_NM");
    DataSet dsIn = reqData.getDataSet("dsSearch");
    
    // 3. 응답 생성
    PlatformData resData = new PlatformData();
    
    // 4. 결과 Dataset 구성
    DataSet dsOut = new DataSet("dsResult");
    dsOut.addColumn(new ColumnHeader("USER_ID", DataTypes.STRING, 20));
    dsOut.addColumn(new ColumnHeader("USER_NM", DataTypes.STRING, 50));
    // ... DB 조회 후 행 추가 ...
    resData.addDataSet(dsOut);
    
    // 5. 처리 결과 Variable
    resData.getVariableList().add("ErrorCode", 0);
    resData.getVariableList().add("ErrorMsg",  "SUCCESS");
    
    // 6. 응답 송신
    HttpPlatformResponse res = new HttpPlatformResponse(response, req);
    res.setData(resData);
    res.sendData();
%>
```

#### Servlet 패턴 (복잡한 비즈니스 로직 시)

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    try {
        HttpPlatformRequest  req     = new HttpPlatformRequest(request);
        req.receiveData();
        PlatformData         reqData = req.getData();
        PlatformData         resData = processService(reqData);
        HttpPlatformResponse res     = new HttpPlatformResponse(response, req);
        res.setData(resData);
        res.sendData();
    } catch (PlatformException e) {
        sendError(response, -1, e.getMessage());
    } catch (Exception e) {
        sendError(response, -999, "서버 오류: " + e.getMessage());
    }
}
```

#### 행 상태(RowType)별 CRUD 처리 패턴

```java
DataSet dsIn = reqData.getDataSet("dsSave");
for (int i = 0; i < dsIn.getRowCount(); i++) {
    int rowType = dsIn.getRowType(i);
    if (rowType == DataSet.ROW_TYPE_INSERT) {
        // INSERT
    } else if (rowType == DataSet.ROW_TYPE_UPDATE) {
        // UPDATE
    } else if (rowType == DataSet.ROW_TYPE_DELETE) {
        // DELETE
    }
}
```

#### ContentType / 인코딩 설정

| 항목 | 설정값 |
|------|--------|
| JSP contentType | `text/xml; charset=UTF-8` |
| Binary 응답 | `PlatformType.CONTENT_TYPE_BINARY` |
| ZLIB 압축 | `res.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB)` |
| Tomcat JVM 옵션 | `-Dfile.encoding=UTF8` |

**Excel MIME 타입 (web.xml):**
```xml
<mime-mapping>
  <extension>xlsx</extension>
  <mime-type>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</mime-type>
</mime-mapping>
```

#### xapi 서비스 개발 체크리스트

- `out.clearBuffer()` 호출 (JSP에서 필수)
- `receiveData()` / `sendData()` 는 반드시 `try-catch(PlatformException)` 으로 감쌀 것
- 응답에 `ErrorCode` (0=성공, 음수=오류) + `ErrorMsg` 포함 필수
- 저장 서비스는 `getRowType()` 으로 INSERT/UPDATE/DELETE 분기 처리
- 컬럼명은 **대문자** 사용 (클라이언트 Dataset과 일치해야 함)

### 모듈(.xmodule) 개발

모듈은 재사용 가능한 복합 컴포넌트(Composite Component) 단위이다.

**패키지 구성:**
```
MyModule.xmodule
├── module.xml        — 타입 정의 (Property, Method, Event)
├── MyModule.xcdl     — 컴포지트 컴포넌트 UI 레이아웃
├── MyModule.js       — 동작 로직 (prototype 기반)
└── resource/         — 이미지, xcss 스타일
```

**모듈 스크립트 기본 구조:**
```javascript
nexacro.MyModule = function(name, left, top, width, height) {
    nexacro._CompositeComponent.call(this, name, left, top, width, height);
    this._p_myProp = "";
};
nexacro.MyModule.prototype = Object.create(nexacro._CompositeComponent.prototype);

// getter/setter
nexacro.MyModule.prototype.set_myProp = function(v) {
    if (this._p_myProp != v) { this._p_myProp = v; }
};
nexacro.MyModule.prototype.get_myProp = function() {
    return this._p_myProp;
};
```

**모듈 배포/설치:** `Deploy > Module Package` 생성 후 `File > Install Module`로 설치 → 컴포넌트 팔레트에 자동 등록.

### 주의사항

- Dataset 컬럼명은 반드시 **대문자** 사용 (`USER_ID` ○, `user_id` ✕)
- `this` 스코프: 이벤트 핸들러 내부에서는 Form을 가리킴. 일반 함수 내에서 this 사용 시 Form 참조를 전역 변수에 저장하여 사용
- Grid 정렬 후 행 인덱스가 변경되므로 Dataset 직접 접근으로 값 추적
- 대량 데이터 루프 전 `updatecontrol = false` 설정 필수 (성능)
- 팝업 콜백은 함수 참조가 아닌 **함수명 문자열**로 전달
- 지원 브라우저: Chrome, Edge (최신 버전)
- 서버 응답 콘텐츠 타입: `text/xml; charset=UTF-8` (PlatformData 포맷 사용 시)

---

# 개발 워크플로우

## 배포 명령어 (tools/)

```bash
# 빌드 + 배포
tools/run_Build&deploy.bat

# 배포만
tools/run_Deploy.bat

# JSON 빌드 + 배포
tools/run_JSON_Build&deploy.bat

# nexacroK 실행
tools/run_TEXT_nexacroK.bat

# Tomcat 제어
tools/start_tomcat.bat
tools/stop_tomcat.bat

# 유효성 검사
tools/Validate.bat
```

## Git

```bash
tools/git_push.bat   # 프로젝트 전용 git push 스크립트
```

---

# 테스트

- 테스트 스킬: `SKILLS/dev-test-automation` 참조
- TypeScript/JS: Jest (단위), Playwright (E2E)
- Python: pytest (단위/통합)
- Kotlin: JUnit 5 + MockK
- 커버리지 기준: 라인 80% 이상 권장
- AAA 패턴(Arrange / Act / Assert) 준수

---

# 모델 사용 규칙 (opusplan 자동 전환)

현재 모델은 `opusplan`으로 설정되어 있으며 아래 규칙에 따라 자동으로 전환된다.

| 상황 | 모델 | 방법 |
|------|------|------|
| 전체 계획 수립 / 아키텍처 설계 / 복잡한 분석 | **Opus** (고성능) | `/plan` 명령으로 플랜 모드 진입 시 자동 전환 |
| 코딩 / 버그 수정 / 테스트 작성 | **Sonnet** (기본) | 일반 대화 모드에서 자동 사용 |
| 환경 설정 / 샘플 제작 / 일반 질문 | **Sonnet** (기본) | 일반 대화 모드에서 자동 사용 |

> **사용 방법**: 설계·계획 작업 시작 전 `/plan`을 입력하면 Opus로 자동 전환된다.
> 플랜 승인 후에는 자동으로 Sonnet으로 복귀한다.

---

# Claude 행동 지침

## 코드 수정 시

- 요청된 범위만 수정한다. 주변 코드 리팩토링 금지.
- 파일을 먼저 읽고 기존 패턴을 파악한 후 수정한다.
- 새 파일 생성보다 기존 파일 수정을 우선한다.

## 보안

- SQL Injection, XSS, Command Injection 등 OWASP Top 10 취약점 주의
- `.env` 파일에 시크릿 하드코딩 금지
- 사용자 입력값은 반드시 검증 후 사용

## 불확실할 때

- 추측으로 진행하지 않고 사용자에게 확인 요청
- 파괴적 작업(파일 삭제, force push 등) 전 반드시 확인

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
