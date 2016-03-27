/**
 * Aside Header Style.
 *
 * 侧边栏顶部
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }    from 'mergeStyles'
import { fillMWidth  as fw }    from 'Layout/size'
import { bg, fg }               from 'Theme/color'
import { shadow }               from 'Theme/shadow'
import { flexItem    as fi,
	 flexCenter  as flexc } from 'Layout/flex'

export default ms(
    fw(),
    fi('10rem'),
    flexc()
    //fg(0.88),
    //bg(0.16),
    //shadow(1)
)
