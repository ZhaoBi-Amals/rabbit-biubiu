import React              from 'react'
import { Router,
	 Route,
	 Link,
	 browserHistory,
	 hashHistory }    from 'react-router'
import App                from './app'


// @Todo browserHistory 并不能在electron用，但是 hashHistory 可以

export const SiteMap =(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
)
