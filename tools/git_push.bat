@echo off
chcp 65001 >nul
setlocal

:: 인자값 확인
if "%~1"=="" (
    echo [오류] 커밋 메시지를 입력해주세요.
    echo 사용법: git_push.bat "커밋 메시지"
    exit /b 1
)

:: 프로젝트 루트로 이동
cd /d "%~dp0.."

echo [1/3] git add . 실행 중...
call git add .
if %ERRORLEVEL% neq 0 (
    echo [오류] git add 실패
    exit /b %ERRORLEVEL%
)

echo [2/3] git commit -m "%~1" 실행 중...
call git commit -m "%~1"
set COMMIT_ERROR=%ERRORLEVEL%
if %COMMIT_ERROR% neq 0 (
    REM 에러 코드 1은 보통 '변경 사항 없음'을 의미할 수 있으므로 체크
    call git diff --quiet --cached
    if %ERRORLEVEL% EQU 0 (
        echo [알림] 커밋할 변경 사항이 없습니다. 다음 단계로 진행합니다.
    ) else (
        echo [오류] git commit 실패 (에러 코드: %COMMIT_ERROR%)
        exit /b %COMMIT_ERROR%
    )
)

echo [3/3] git push origin main 실행 중...
call git push origin main
if %ERRORLEVEL% neq 0 (
    echo [오류] git push 실패
    exit /b %ERRORLEVEL%
)

echo [완료] Git 작업이 성공적으로 마무리되었습니다.
