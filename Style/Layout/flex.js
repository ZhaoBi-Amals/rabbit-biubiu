/* @flow */

/**
 * Flex Layout 
 *
 * 弹性盒子布局模型
 *
 * 除传统float和inline-block以外的又一布局利器，简单易用。优点是简
 * 单直观，可以实现各种布局难题，如水平居中，垂直居中等；缺点是兼容
 * 性问题，需要支持IE10+。所以推荐在兼容性要求不高的地方使用，入后
 * 台管理系统，mobile端。
 *
 * 简单使用，只需要在给容器定义`display: flex`就可以了。一般来说下
 * 面3个属性比较常用：
 *
 * 1. justify-content 主轴位置的排列方式
 * 2. align-items 容器内子元素的排列方式
 * 3. flex-flow 这是个组合属性，组合了`flex-direction`
 *    和`flex-wrap`，前者设定主轴是x还是y，后者设定包裹方式
 *
 * 如垂直居中:
 * ```css
 * .con {
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 * }
 * 
 * 当然，我们还可以对每个子元素设定自己的行为。这里常用的就是`flex`
 * 这个属性。`flex`也是个组合属性，由`flex-grow`，`flex-shrink`，
 * `flex-basic`组成，分别代表了生长，收缩与基本尺寸。常用方式如下。
 *
 * 每个子元素尺寸平均:
 * ```css
 * .items {
 *   flex: 1 1 auto;
 * }
 *
 * 容器宽度不定，三个元素，左边10px，右边20px，中间部分宽度
 * 随容器宽度自由伸缩:
 * .items1 { flex: 0 1 10px; }
 * .items3 { flex: 0 1 20px; }
 * .items2 { flex: 1 1 auto; }
 *
 *
 * 文献资料
 * 1. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
 * 2. [MDN 中文译版](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
 * 3. [Flex demo](http://demo.agektmr.com/flexbox/)
 * 4. [Flexyboxes](http://the-echoplex.net/flexyboxes/)
 * 5. [css Reference](http://tympanus.net/codrops/css_reference/flexbox/)
 * 6. [Caniuse](http://caniuse.com/#feat=flexbox)
 */


type Direction =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'

type Wrapper =
    | 'wrap'
    | 'no-wrap'
    | 'wrap-reverse'

type Position =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'baseline'
    | 'stretch'


const DefaultDirection: Direction  = 'row'
const DefaultStart:     Position   = 'flex-start'
const DefaultStretch:   Position   = 'stretch'
const DefaultWrap:      Wrapper    = 'wrap'


function defineContainer() {
    return { 'display': 'flex' }
}

function defineDirection(direction: Direction = DefaultDirection) {
    return { 'flex-direction': direction }
}


function defineWrap(wrap: Wrapper = DefaultWrap) {
    return { 'flex-wrap': wrap }
}

function defineFlow(direction: Direction = DefaultDirection,
                    wrap: Wrapper = DefaultWrap) {
    return { 'flex-flow': `${direction} ${wrap}` }
}

function defineJustifyContent(position: Position = DefaultStart) {
    return { 'justify-content': position }
}

function defineAlianItems(position: Position = DefaultStretch) {
    return { 'align-items': position }
}

function constFlex(direction: Direction = DefaultDirection,
                          wrap: Wrapper = DefaultWrap,
                          justifyContent: Position = DefaultStart,
                          alignitems: Position = DefaultStretch) {

    return Object.assign({},
                         defineContainer(),
                         defineFlow(direction, wrap),
                         defineJustifyContent(justifyContent),
                         defineAlianItems(alignitems))
}
