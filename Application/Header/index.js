/**
 * Aside Header
 *
 * 侧边栏顶部
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import style                from './style'
import Avatar               from 'Avatar/index'

export default class Header extends Component {
    render() {
	return (
	    <header style={style}>
	    <Avatar />	    
	    </header>
	)
    }
}
