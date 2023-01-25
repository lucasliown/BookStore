import React, { useState } from 'react';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
import './custom.css';

function App() {
    const [check, setCheck] = useState("here");
    return (
      <div>
        {/*<Route path='/' component={Home} />*/}
        {/*<Route path='/counter' component={Counter} />*/}
            {/*<Route path='/fetch-data' component={FetchData} />*/}
            <div>{check}</div>
            1212
            1111111111111111111
      </div>
    );
}

export default App;
