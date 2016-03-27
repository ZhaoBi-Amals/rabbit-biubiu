/**
 * Avatar Style.
 *
 * 头像框样式
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }    from 'mergeStyles'
import { bg }                   from 'Theme/color'
import { flexCenter as flexc }  from 'Layout/flex'

export default ms(
    flexc(),
    {
	'borderRadius': '50%',
	'width': '6rem',
	'height': '6rem',
	'overflow': 'hidden'
    }
)
