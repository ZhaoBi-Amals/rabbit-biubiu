// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Body.
 *
 * 第二个大框子，右边的主要内容区域。
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import style                from './style'
import SnippetDetail        from 'Module/Snippet/Detail/index'

export default class Body extends Component {
    render() {
	return (
	    <section style={style}>
	      <SnippetDetail />
	    </section>
	)
    }
}
