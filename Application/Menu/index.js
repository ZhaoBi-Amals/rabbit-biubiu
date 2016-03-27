/**
 * Menu
 *
 * 菜单
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import { style,
	 listStyle,
	 itemStyle }        from './style'

export default class Menu extends Component {
    render() {
	return (
	    <nav style={style}>
		<ul className="listReset" style={listStyle}>
		<li style={itemStyle}><a href='#'>Snippet</a></li>
		<li style={itemStyle}><a href='#'>Template</a></li>
		<li style={itemStyle}><a href='#'>Tool</a></li>
		</ul>
	    </nav>
	)
    }
}
