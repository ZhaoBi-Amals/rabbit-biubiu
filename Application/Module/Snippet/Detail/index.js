// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Snippet Detail.
 *
 * Snippet 模块操作
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import style                from './style'
import Button               from 'Component/Button/index'
import Textarea             from 'Component/Textarea/index'
import Breadcrumb           from 'Component/Breadcrumb/index'
import { Title, Intro }     from 'Component/Display/index'


export default class Detail extends Component {
    render() {
	      return (
	              <section style={style}>
	              <Breadcrumb split={'>>='} />
	              <Title>h5 start</Title>
	              <Intro>快速创建一个html页面</Intro>

	          {
		            /*
		              <select>
		              <option>javascript</option>
		              <option>css</option>
		              <option>coffee</option>
		              </select>
		              <Textarea>Something</Textarea>
		            */
	          }
	              <Button>修改</Button>
	              </section>
	      )
    }
}
