import React, { Component } from 'react';

import styles from './ControlStyles';

class Controls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: '0',
			y: '0',
			direction: 'SOUTH',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.handlePlace(
			parseInt(this.state.x, 10),
			parseInt(this.state.y, 10),
			this.state.direction,
		);
		this.setState({
			x: '0',
			y: '0',
			direction: 'SOUTH',
		});
	}

	render() {
		const {
			handleChangeLeft,
			handleChangeRight,
			handleMove,
			handlePlace,
			handleReport,
		} = this.props;
		const { x, y, direction } = this.state;
		return (
			<div style={styles.root}>
				<form onSubmit={e => this.handleSubmit(e, handlePlace)}>
					<input
						type="number"
						name="x"
						placeholder="Enter an X Coordinate"
						value={x}
						onChange={this.handleChange}
						style={styles.input}
					/>
					<input
						type="number"
						name="y"
						placeholder="Enter a Y Coordinate"
						value={y}
						onChange={this.handleChange}
						style={styles.input}
					/>
					<select
						name="direction"
						value={direction}
						onChange={this.handleChange}
					>
						<option value="SOUTH">SOUTH</option>
						<option value="NORTH">NORTH</option>

						<option value="EAST">EAST</option>
						<option value="WEST">WEST</option>
					</select>

					<input
						type="submit"
						value="Submit"
						onSubmit={e => this.handleSubmit(e, handlePlace)}
					/>
				</form>
				<button style={styles.button} onClick={handleChangeLeft}>
					Turn Left
				</button>
				<button style={styles.button} onClick={handleChangeRight}>
					Turn Right
				</button>
				<button style={styles.button} onClick={handleMove}>
					Move Forward
				</button>
				<button style={styles.button} onClick={handleReport}>
					Report
				</button>
			</div>
		);
	}
}

export default Controls;
