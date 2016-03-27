// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Breadcrumb Style.
 *
 * 面包屑导航
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import { mergeStyles   as ms }    from 'mergeStyles'
import { fg }                     from 'Theme/color'
import { fontSizeSmall as fss }   from 'Theme/font'
import { flexCenter    as flexc } from 'Layout/flex'
import { margin        as m }     from 'Layout/space'


export default ms(
    fg(0.72),
    m({ bottom: 3, left: -0.5 }),
    fss()
)

export const itemStyle = ms(
    m({ right: 0.5, left: 0.5 })
)
