import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route} from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1> Hats Page </h1>
    </div>
);

const TopicsList = () => (
    <div>
        <h1> TopicsList </h1>
    </div>
)

const TopicsDetail = (params) => (
    <div>
        {console.log(params)}
        <h1> Topics Detail: {params.match.params.topicId} </h1>
    </div>
)


function App() {
    return (
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path='/hats' component={HatsPage}/>
            <Route exact path='/topics' component={TopicsList}/>
            <Route exact path='/topics/:topicId' component={TopicsDetail}/>
        </div>
    );
}

export default App;
