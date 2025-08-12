@echo off

set REPOSITORY_PATH="C:\Files\Projects\wanlok2025-component-react"
set DEPLOY_PATH="C:\Files\Projects\wanlok2025.github.io"

set BUILD_PATH=%REPOSITORY_PATH%"\dist"

cd %DEPLOY_PATH%

git pull

for /f "delims=" %%D in ('dir %DEPLOY_PATH% /a /b') do (
  if not %%D==.git (
    setlocal enabledelayedexpansion

    set FILE_PATH=%DEPLOY_PATH%\%%D

    if exist !FILE_PATH!\* (
      rmdir !FILE_PATH! /s /q
    ) else (
      del !FILE_PATH!
    )

    endlocal
  )
)

cd %REPOSITORY_PATH%

rmdir %BUILD_PATH% /s /q

npm run build && (
  xcopy %BUILD_PATH%\* %DEPLOY_PATH% /e

  cd %DEPLOY_PATH%
  
  git add .
  git commit -m "commit"
  git push

  cd %REPOSITORY_PATH%

  rmdir %BUILD_PATH% /s /q
)
