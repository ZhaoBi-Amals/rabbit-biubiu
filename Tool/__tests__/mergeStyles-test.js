// -*- coding: utf-8 -*-
// -*- mode: Js -*-
// @flow

jest.unmock('../mergeStyles')

import { mergeStyles as ms } from '../mergeStyles'

describe('test values', () => {
    it('Ok, it\'s should be pass', () => {
	const result = ms({
	    'width': '1rem'
	})
	expect(result).toEqual({
	    'width': '1rem'
	})
    })

    it('should return a empty object', () => {
	expect(ms()).toEqual({})
    })

    it('', () => {

    })
})
