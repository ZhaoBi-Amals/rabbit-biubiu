
import React, { Component } from 'react'
import style                from './style'

export default class Button extends Component {
    render() {
	return (
		<button type='button' style={style}>
		{this.props.children}
		</button>
	)
    }
}
