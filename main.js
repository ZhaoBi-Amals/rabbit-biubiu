import React from 'react'
import { render } from 'react-dom'
import App from './Application/app'

const AppMountNode = document.getElementById("app")

render(
    <App />,
    AppMountNode
)
