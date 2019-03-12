import * as React from 'react';
import * as styles from './Welcome.less';

export interface WelcomeProps {
  name: string;
}

export default class Welcome extends React.Component<WelcomeProps> {
  render() {
    const { name } = this.props;

    return <p className={styles.container}>Welcome, {name}!</p>;
  }
}
