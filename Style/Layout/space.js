// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Space
 *
 * margin 和 padding
 * @Author Rabbit <yfhj1990@hotmail.com>
 */
import { curry } from 'ramda'

const unit  = 'rem'
const space = curry((name, options) => {
    let output = {}
    let { top, right, bottom, left } = Object.assign({ top: 0,
                                                       right: 0,
                                                       bottom: 0,
                                                       left: 0 }, options)
    output[name] = `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`
    return output
})


/**
 * Exports
 */
export const margin  = space('margin')
export const padding = space('padding')
export function boxSizing() {
    return { 'boxSizing': 'border-box' }
}
