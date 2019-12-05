import React from 'react';
import { connect } from 'dva';

const Products = () => {
  return (
    <div style={{ border: `1px solid hsl(${Math.floor(Math.random() * 255)} 100% 50%)` }}>
      <h2 >Products组件</h2>
      <p>我总是被强迫重新渲染，虽然并没有必要.只因为connect了loading</p>
    </div>
  )
}

// loading是用必要用的，此页面简化为只显示写死数据
export default connect(({ products, loading }) => ({
  products, loading
}))(Products);
