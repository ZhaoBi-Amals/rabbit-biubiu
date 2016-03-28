// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Main Style.
 *
 * 背景样式，黑色背景真真是极好的。
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }    from 'mergeStyles'
import { flexCenter  as flexc } from 'Layout/flex'
import { bg }                   from 'Theme/color'

export default ms(
    flexc(),
    bg(0.88)
)
