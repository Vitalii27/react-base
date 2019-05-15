import React, {Component} from 'react';
import Layout from './hoc/Layout';
import './css/app.css';
import Quiz from './containers/Quiz'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                   <Quiz/>
                </Layout>
            </div>
        )
    }
}

export default App;
