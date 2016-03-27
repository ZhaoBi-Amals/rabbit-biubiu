/**
 * Display
 *
 * 大标题
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import React, { Component }       from 'react'
import { titleStyle, introStyle } from './style'

export class Title extends Component {
    render() {
	      return (
	              <div style={titleStyle}>{this.props.children}</div>
	      )
    }
}

export class Intro extends Component {
    render() {
        return <div style={introStyle}>{this.props.children}</div>
    }
}
