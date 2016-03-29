// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Style.
 *
 * 
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles  as ms }    from 'mergeStyles'
import { fillMinWidth as fmiw }  from 'Layout/size'
import { bg, fg }                from 'Theme/color'
import { shadow }                from 'Theme/shadow'
import { flexItemGrow as fi,
	 flexCenter   as flexc } from 'Layout/flex'

export const style = ms(
    fmiw(),
    fi(),
    flexc()
)

export const listStyle = ms(
    fi()
)

export const itemStyle = ms(
    fg(0.56),
    flexc(),
    {
	'fontSize': '0.8rem',
	'padding': '1rem 0'
    }
)
