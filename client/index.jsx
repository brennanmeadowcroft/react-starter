import React from 'react'
import { render } from 'react-dom'
import config from './config'
import StarterComponent from './components/StarterComponent/Starter.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React - {config.environment}</p>
        <StarterComponent />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

