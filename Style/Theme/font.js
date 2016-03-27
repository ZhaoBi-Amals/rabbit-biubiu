// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

/**
 * Font Style
 *
 * 字体相关样式
 * @Author Rabbit <yfhj1990@hotmail.com>
 */
const normal = 1
const small  = 0.8
const large  = 1.2
const unit   = 'rem'

export function fontSize(size: number = 1) {
    return { 'fontSize': `${size}${unit}` }
}

export function fontSizeSmall() {
    return fontSize(small)
}

export function fontSizeLarge() {
    return fontSize(large)
}
