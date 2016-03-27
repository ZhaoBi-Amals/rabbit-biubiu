/**
 * Snippet Detail.
 *
 * Snippet 模块操作
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import style                from './style'

export default class Detail extends Component {
    render() {
	return (
	    <section style={style}>
		<header>Snippet</header>
		<select>
		<option>javascript</option>
		<option>css</option>
		<option>coffee</option>
		</select>
		<textarea></textarea>
		<button>save</button>
	    </section>
	)
    }
}
