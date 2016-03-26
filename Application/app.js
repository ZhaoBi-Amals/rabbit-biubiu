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


export default class App extends Component {
    render() {
	return (
	    <section style={style}>
	    <aside style={asideStyle}>
	    <ul className="listReset">
	    <li><a href='#'>Snippet 管理</a></li>
	    <li><a href='#'>Template 管理</a></li>
	    <li><a href='#'>Tool 管理</a></li>
	    </ul>
	    </aside>
	    <section style={bodyStyle}>Hello world</section>
	    </section>
	)
    }
}
