import React, { Component } from 'react';
import styles from './SquareStyles';

class Square extends Component {
	render() {
		return <div style={styles.square}>{this.props.children}</div>;
	}
}

export default Square;
