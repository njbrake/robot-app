import React from 'react';
import styles from './SquareStyles';

const Square = props => {
	return <div style={styles.square}>{props.children}</div>;
};

export default Square;
