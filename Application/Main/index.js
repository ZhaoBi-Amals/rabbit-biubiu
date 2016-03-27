/**
 * Main.
 *
 * 就是个大框子。
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import React, { Component } from 'react'
import style                from './style'

export default class Main extends Component {
    render() {
	return (
	    <section style={style}>
	    {this.props.children}
	    </section>
	)
    }
}
