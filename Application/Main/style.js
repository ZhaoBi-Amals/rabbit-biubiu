/**
 * Main Style.
 *
 * 背景样式，黑色背景真真是极好的。
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }    from 'mergeStyles'
import { bg }                   from 'Theme/color'
import { flexCenter as flexc }  from 'Layout/flex'

export default ms(
    bg(0.88),
    flexc()
)
