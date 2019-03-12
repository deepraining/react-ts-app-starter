import * as React from 'react';
import * as styles from './Hello.less';

export interface HelloProps {
  name: string;
}

export default class Hello extends React.Component<HelloProps> {
  render() {
    const { name } = this.props;

    return <p className={styles.container}>Hello, {name}!</p>;
  }
}
