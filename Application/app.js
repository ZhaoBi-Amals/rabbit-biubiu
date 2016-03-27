/**
 * App
 *
 * 万恶之源，所有的一切都将从这里开始。
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import Main                 from 'Main/index'
import Aside                from 'Aside/index'
import Body                 from 'Body/index'

/*
const style      = ms(flexCenterStart(), bg(0.88))
const asideStyle = ms(fillHeight(), flexItem('10rem'), bg(0.16), shadow(1), flexColumnCenterStart())
const bodyStyle  = ms(fillHeight(), flexItemGrow())
const headerStyle= ms({
    'fontSize': '1rem',
    'padding': '0 1rem'
}, flexCenterStart(), fg(0.88), fillWidth(), flexItem('3rem'))
const navStyle = ms(flexItemGrow())
const footerStyle = ms(flexItem('4rem'), fg(0.88), {

}, flexCenter(), bg(0.24), shadow(2))
const listStyle  = ms({
    'padding': '1rem 0'
})
const menuStyle  = ms(fg(0.56), {
    'padding': '1rem',
    "fontSize": "0.8rem"
})
*/

export default class App extends Component {
    render() {
	/*
	return (
		<section style={style}>
		<aside style={asideStyle}>
		<header style={headerStyle}>兔子的私房菜</header>
		<nav style={navStyle}>
		<ul className="listReset" style={listStyle}>
		<li style={menuStyle}><a href='#'>Snippet</a></li>
		<li style={menuStyle}><a href='#'>Template</a></li>
		<li style={menuStyle}><a href='#'>Tool</a></li>
		</ul>
		</nav>
		<footer style={footerStyle}>Just for fun</footer>
		</aside>
		<section style={bodyStyle}>Hello world</section>
		</section>
	)
	*/
	return (
	    <Main>
	    <Aside />
	    <Body />
	    </Main>
	)
    }
}
