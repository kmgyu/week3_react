여기서 Babel을 쓰는 이유는 간단히 말하면 **Jest가 React JSX와 최신 자바스크립트 문법을 이해할 수 있도록 변환하기 위해서**입니다.

---

### 1. Jest는 Node 환경에서 실행됨

* Jest는 **Node.js** 위에서 돌아갑니다.
* Node.js는 기본적으로 **JSX 문법**이나 일부 최신 ECMAScript(ES2020+) 문법을 바로 이해하지 못합니다.
* 예를 들어 이 코드는 Babel 없이 Jest에서 실행하면 SyntaxError가 납니다:

```jsx
export default function Hello() {
  return <h1>Hello</h1>; // ❌ Node는 JSX를 모름
}
```

---

### 2. Babel의 역할

Babel은 \*\*트랜스파일러(transpiler)\*\*로서

* JSX → 일반 JS 함수 호출 코드(`React.createElement`)
* 최신 JS 문법 → Node.js가 이해할 수 있는 구버전 문법

으로 변환합니다.

예시 변환:

```jsx
// Before
const el = <h1>Hello</h1>;

// After (Babel 변환 결과)
const el = React.createElement('h1', null, 'Hello');
```

---

### 3. Jest와 Babel의 연결

* `babel-jest` 패키지를 쓰면 Jest가 `.js`, `.jsx` 파일을 읽을 때 **Babel로 먼저 변환**한 뒤 테스트를 실행합니다.
* `@babel/preset-env` → 최신 JS 문법 변환
* `@babel/preset-react` → JSX 변환

---

### 4. Vite나 CRA에서는 왜 자동이었나?

* Vite, CRA(Create React App) 같은 툴은 \*\*개발 서버와 빌드 과정에 Babel(또는 SWC, esbuild)\*\*이 이미 포함돼 있어서 테스트 시 자동 변환이 가능했습니다.
* 하지만 Jest는 독립 실행되므로, 변환기가 없으면 JSX/최신 문법을 이해 못합니다.
  → 그래서 `babel-jest`와 프리셋 설정이 필요합니다.

---

**정리**

> Babel은 Jest 환경에서 React 코드(JSX)와 최신 JavaScript 문법을 Node.js가 실행 가능한 형태로 변환해 주기 위해 사용됩니다.
> 이걸 안 쓰면 JSX나 import/export 같은 최신 문법 때문에 테스트가 아예 시작도 못 합니다.

