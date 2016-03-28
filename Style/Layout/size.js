// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Size
 *
 * width 和 height
 * @Author Rabbit <yfhj1990@hotmail.com>
 */
import _ from 'ramda'

export const size =  _.curry((name, value) => {
    let output = {}
    output[name] = value
    return () => {
	return output
    }
})

/**
 * Exports.
 */
export const width         = size('width')
export const height        = size('height')
export const minWidth      = size('minWidth')
export const minHeight     = size('minHeight')
export const fillWidth     = width('100%')
export const fillHeight    = height('100%')
export const fillMinWidth  = minWidth('100%')
export const fillMinHeight = minHeight('100%')
