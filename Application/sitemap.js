import React from 'react'
import { Router,
	 Route,
	 Link,
	 browserHistory } from 'react-router'
import App from './app'

export const SiteMap =(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
)
