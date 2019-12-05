npm i  
npm start启动项目  访问http://localhost:8001/#/pro
用到的页面：src/routes/IndexPage
关联页面：
 src/routes/Products.js
 src/components/Example.js

更新Example导致Products重新渲染，只因为Products页面connect了laoding。
Products页面简化处理了，只显示固定数据。
