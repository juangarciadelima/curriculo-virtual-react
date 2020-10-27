import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Curriculo from '../Curriculo'
import Formulario from '../form'

function App() {
    return <Router>
        <h1> Começo Da Tela</h1>
        <Switch>
            <Route path="/curriculo">
                <Curriculo />
            </Route>
            <Route path="/projeto">
                <Formulario />
            </Route>
        </Switch>
        <footer> Fim Da Tela!! </footer>
    </Router>
}

export default App