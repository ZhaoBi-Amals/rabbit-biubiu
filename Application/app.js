/* @flow */

import React, { Component }  from 'react'
import { mergeStyles as ms } from  './Tool/mergeStyles'
import { fillHeight }        from './../Style/Layout/size'
import { bg, fg }            from './../Style/Theme/color'
import { shadow }            from './../Style/Theme/shadow'
import { flexCenterStart,
	 flexItem,
	 flexItemGrow }      from './../Style/Layout/flex'


const style      = ms(flexCenterStart(), bg(0.88), fg(0.56))
const asideStyle = ms(fillHeight(), flexItem('15rem'), bg(0.24), shadow(1))
const bodyStyle  = ms(fillHeight(), flexItemGrow())
const headerStyle= ms()
const listStyle  = ms()
const menuStyle  = ms()


export default class App extends Component {
    render() {
	return (
		<section style={style}>
		<aside style={asideStyle}>
		<header style={headerStyle}>兔子的私房菜</header>
		<nav>
		<ul className="listReset" style={listStyle}>
		<li><a href='#' style={menuStyle}>Snippet 管理</a></li>
		<li><a href='#' style={menuStyle}>Template 管理</a></li>
		<li><a href='#' style={menuStyle}>Tool 管理</a></li>
		</ul>
		</nav>
		<footer></footer>
		</aside>
		<section style={bodyStyle}>Hello world</section>
		</section>
	)
    }
}
