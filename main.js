import React from 'react'
import { render } from 'react-dom'
import {} from './Style/reset.styl'
import { SiteMap } from './Application/sitemap'

function 觉妹子(node) {
    render(
	SiteMap,
	node
    )
}

觉妹子(document.getElementById('app'))
