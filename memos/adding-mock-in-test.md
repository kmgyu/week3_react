Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

By default "node_modules" folder is ignored by transformers.

Details:
``` bash
    D:\goorm workspace\week3_react\src\styles\style.css:2
    .card figure img {
    ^

    SyntaxError: Unexpected token '.'

      1 | import React from 'react';
    > 2 | import '@/styles/style.css';
        | ^
      3 |
      4 | function ProductCard({ product, checked, onChange }) {
      5 |   const { name, price, imageUrl } = product;
      4 | function ProductCard({ product, checked, onChange }) {
      5 |   const { name, price, imageUrl } = product;

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1316:40)
      at Object.require (src/components/ProductCard.jsx:2:1)
      at Object.require (src/tests/ProductCard.test.js:3:1)
```

style.css를 끌어와서 생기는 에러이다.
이걸 생기지 않게 하려면 jest에서 테스트 시 스타일용 목업을 끌어다 써야 한다.
