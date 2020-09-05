import * as React from 'react';
import * as ReactDom from 'react-dom';

import './index.css';
// Test blueprint
import { Button } from "@blueprintjs/core";



const App = () => {
    return (<Button intent="success" text="button content"/>)
}

ReactDom.render(<App/>, 
                document.getElementById('app'));

