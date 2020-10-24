import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Curriculo from '../Curriculo'

function App() {
    return <Router>
        <h1> Oi</h1>
        <Switch>
            <Route path="/curriculo">
                <Curriculo />
            </Route>
            <Route path="/projetos">
                <h1>Oi</h1>
            </Route>
        </Switch>
        <footer> Adeus </footer>
    </Router>
}

export default App