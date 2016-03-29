// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Body Style.
 *
 * 使用flex让宽度自动填充
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles   as ms }   from 'mergeStyles'
import { fillMinHeight as fmih } from 'Layout/size'
import { flexItemGrow  as fig }  from 'Layout/flex'

export default ms(
    fmih(),
    fig(),
    {
	'padding': '3rem 6rem',
	'boxSizing': 'border-box'
    }
)
