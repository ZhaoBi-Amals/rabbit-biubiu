import { black } from './color'

/**
 * [Material Design Lite](https://github.com/google/material-design-lite)
 */

export function shadow(z = 1) {
    const umbra    = black('0.2')
    const penumbra = black('0.14')
    const ambient  = black('0.12')

    switch(z) {
    case 1:
	return { 'boxShadow': `0px 3px 1px -2px ${umbra},0px 2px 2px 0px ${penumbra}, 0px 1px 5px 0px ${ambient}` }
    case 2:
	return { 'boxShadow': `0px 2px 4px -1px ${umbra},0px 4px 5px 0px ${penumbra}, 0px 1px 10px 0px ${ambient}` }
    case 3:
	return { 'boxShadow': `0px 3px 5px -1px ${umbra},0px 6px 10px 0px ${penumbra}, 0px 1px 18px 0px ${ambient}` }
    case 4:
	return { 'boxShadow': `0px 5px 5px -3px ${umbra},0px 8px 10px 1px ${penumbra}, 0px 3px 14px 2px ${ambient}` }
    case 5:
	return { 'boxShadow': `0px 6px 6px -3px ${umbra},0px 10px 14px 1px ${penumbra}, 0px 4px 18px 3px ${ambient}` }
    }
}
