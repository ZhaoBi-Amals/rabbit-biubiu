
import React, { Component } from 'react'
import style                from './style'

export default class Textarea extends Component {
    render() {
	return (
		<textarea style={style}>
		{this.props.children}
		</textarea>
	)
    }
}
