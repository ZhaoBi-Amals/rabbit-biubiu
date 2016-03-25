/* @flow */

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
