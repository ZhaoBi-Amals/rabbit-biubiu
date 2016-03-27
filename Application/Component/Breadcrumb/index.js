
import React, { Component } from 'react'
import style                from './style'

export default class Breadcrumb extends Component {
    render() {
	return (
	    <header style={style}>
	    <a href='#'>兔</a>
	    <span>></span>
	    <a href='#'>Snippet</a>
	    <span>></span>
	    <a href='#'>html</a>
	    <span>></span>
	    <a href='#'>h5 start</a>
	    </header>
	)
    }
}
