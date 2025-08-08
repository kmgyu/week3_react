bable.config.js, vite.config.js 형식이 다른 이유?

1. Vite와 Jest는 실행 맥락이 다름
Vite: 개발 서버/빌드 툴 → ESM(ES Modules) 기반 (import/export 사용)

Jest: Node.js에서 동작하는 테스트 러너 → 기본은 CommonJS(require/module.exports)

즉, Vite는 ESM 규격으로 설정을 읽지만, Jest는 여전히 CommonJS 방식의 설정 파일을 읽는 게 기본입니다.

2. 그래서 module.exports를 쓰는 이유
Jest는 **기본적으로 CJS(CommonJS)**를 기대합니다.


```    js        
// jest.config.js (기본)
module.exports = {
testEnvironment: 'jsdom',
};
```

만약 Jest 설정 파일을 ES Module(export default)로 작성하고 싶다면,

파일명을 jest.config.mjs로 하거나

package.json에 "type": "module"을 명시해야 합니다.

예:

```js
// jest.config.mjs
export default {
  testEnvironment: 'jsdom',
};
```

3. Vite 프로젝트에서의 일반 패턴
Vite + Jest를 같이 쓸 때는 다음 3가지 중 하나를 선택합니다.

jest.config.js + module.exports (가장 호환성 높음)

jest.config.mjs + export default

package.json "type": "module" + jest.config.js에서 export default

4. 정리
Vite의 ESM 환경과 Jest의 설정 방식은 독립적이다.

Jest는 CJS 형식이 기본이라 module.exports를 많이 사용한다.

원하면 ESM으로도 작성 가능하지만, 파일 확장자나 package.json 설정이 필요하다.