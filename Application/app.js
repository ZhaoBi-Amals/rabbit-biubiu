/* @flow */

import React, { Component } from 'react'

const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    color: 'rgba(255, 255, 255, 0.56)'
}


export default class App extends Component {
    render() {
	return (
	    <div style={style}>Hello World</div>
	)
    }
}
