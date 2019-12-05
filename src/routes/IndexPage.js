import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>header</h1>
      <div className={styles.welcome1} />
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
