/**
 * Button Style.
 *
 * 按钮样式
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }    from 'mergeStyles'
import { bg }                   from 'Theme/color'
import { flexCenter as flexc }  from 'Layout/flex'

export default ms(
    flexc(),
    {
	'width': '10rem',
	'backgroundColor': 'rgba(255, 255, 255, 0.08)',
	'font-size': '0.8rem',
	'width': '6rem',
	'height': '2rem',
	'color': 'rgba(255, 255, 255, 0.72)',
	'borderRadius': '2px'
    }
)
