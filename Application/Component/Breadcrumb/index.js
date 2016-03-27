/**
 * Breadcrumb
 *
 * 面包屑导航
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import React, { Component } from 'react'
import style, { itemStyle } from './style'

export default class Breadcrumb extends Component {
    render() {
	      return (
	          <header style={style}>
	          <span style={itemStyle}><a href='#'>兔</a></span>
	          <span>>>=</span>
	          <span style={itemStyle}><a href='#'>Snippet</a></span>
	          <span>>>=</span>
	          <span style={itemStyle}><a href='#'>html</a></span>
	          <span>>>=</span>
	          <span style={itemStyle}><a href='#'>h5 start</a></span>
	          </header>
	      )
    }
}
