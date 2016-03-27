// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Breadcrumb Style.
 *
 * 面包屑导航
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import { mergeStyles   as ms }  from 'mergeStyles'
import { fg }                   from 'Theme/color'
import { fontSizeLarge as fsl,
         fontSizeSmall as fss } from 'Theme/font'
import { margin        as m }   from 'Layout/space'

export const titleStyle = ms(
    fg(0.72),
    fsl(),
    m({ bottom: 1 })
)

export const introStyle = ms(
    fg(0.56),
    fss(),
    m({ bottom: 1 })
)
