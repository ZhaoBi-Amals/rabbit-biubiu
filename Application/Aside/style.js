// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Aside Style.
 *
 * 侧边栏
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles      as ms }    from 'mergeStyles'
import { fillMinHeight    as fmih }  from 'Layout/size'
import { flexItem         as fi,
	 flexColumnCenter as flexc } from 'Layout/flex'
import { bg }                        from 'Theme/color'
import { shadow }                    from 'Theme/shadow'

export default ms(
    flexc(),
    fi('10rem'),
    fmih(),
    bg(0.16),
    shadow(1)
)
