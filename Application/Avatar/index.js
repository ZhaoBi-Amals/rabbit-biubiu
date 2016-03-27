/**
 * Avatar.
 *
 * 没错，是头像。
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import React, { Component } from 'react'
import style                from './style'
import logo                 from 'logo.jpg'

export default class Avatar extends Component {
    render() {
	return (
	    <div style={style}>
	    <img src={logo} />
	    </div>
	)
    }
}
