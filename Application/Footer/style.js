// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Aside Footer Style.
 *
 * 侧边栏底部
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles  as ms }    from 'mergeStyles'
import { fillMinWidth as fmiw }  from 'Layout/size'
import { flexItem     as fi,
	 flexCenter   as flexc } from 'Layout/flex'

export default ms(
    flexc(),
    fi('10rem'),
    fmiw()
)
