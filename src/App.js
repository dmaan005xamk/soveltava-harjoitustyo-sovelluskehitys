import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Add from './Components/Add'
import ListItems from './Components/ListItems';
import Modify from './Components/Modify';

function App() {

  const [add, setAdd] = useState(false)
  const [listOfDevices, setListOfDevices] = useState([])
  const [addSuccessful, setAddSuccessful] = useState(false);

  return (

    <Router>
      <Container>
        <ListItems
          devices={listOfDevices}
          setOpen={setAdd}
          addSuccessful={addSuccessful} />
        <Switch>
          <Route path="/add">
            <Add
              open={add}
              setOpen={setAdd}
              listOfDevices={listOfDevices}
              setListOfDevices={setListOfDevices}
              setAddSuccessful={setAddSuccessful} />
          </Route>
          <Route path="/modify">
            <Modify
              devices={listOfDevices} />
          </Route>
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
