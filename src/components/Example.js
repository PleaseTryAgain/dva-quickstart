import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

class Example extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetch'
    })
  }

  changeName = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetch'
    })
  }

  render() {
    const { loading, example } = this.props;
    const { number } = example;

    const isloading = loading.effects['example/fetch'];
    return (
      <div style={{ color: ' #000', margin: '50px 0', border: '1px solid red' }}>
        {isloading ?
          'loading' :
          (
            <div>
              <h1>Example组件</h1>
              <p>我一更新就会导致Products也重新渲染，虽然他并没有任何必要刷新{number}</p>
              <Button onClick={this.changeName}>click me</Button>
            </div>)
        }
      </div>
    );
  }
};

Example.propTypes = {
};

export default connect(({ example, loading }) => ({ example, loading }))(Example);
