/**
 * Aside Style.
 *
 * 侧边栏
 * @author Rabbit <yfhj1990@hotmail.com>
 */
import { mergeStyles as ms }         from 'mergeStyles'
import { fillMHeight as fh }         from 'Layout/size'
import { bg }                        from 'Theme/color'
import { shadow }                    from 'Theme/shadow'
import { flexItem as fi,
	 flexColumnCenter as flexc } from 'Layout/flex'

export default ms(
    fh(),
    fi('10rem'),
    flexc(),
    bg(0.16),
    shadow(1)
)
