# p5.js boilerplate

Boilerplate for writing p5.js sketches in es6 with babel, webpack and sass.<br />

## 설치 방법
Node.js와 NPM이 필요합니다. 다운로드는 http://www.nodejs.org 에서 하실 수 있습니다. LTS Version을 추천드립니다.<br />
기본적인 dos 명령어 혹은 bash 명령어를 아시는 게 좋습니다. `cd` 명령어를 이용해서 본 소스코드 폴더로 이동할 수 있습니다.<br />
아래는 예시입니다. bash에서 `~`는 홈 디렉토리를 나타냅니다. (Windows는 `%userprofile%` 입니다.)
```bash
cd ~/Desktop/p5js-boilerplate
```
```bash
cd %userprofile%
cd Desktop\p5js-boilerplate
```
터미널 (혹은 명령 프롬프트) 에서 소스코드 디렉토리로 왔다면 아래는 PC/Mac 상관없이 동일합니다.
- Dependency를 설치합니다.
```bash
npm install
```
- Web Server를 실행합니다.
```bash
npm run dev
```
- Use the following command when done to build the bundled minified result under the `/dist` folder:
```bash
npm run build
```
