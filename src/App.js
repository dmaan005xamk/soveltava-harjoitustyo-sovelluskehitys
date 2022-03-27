import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Add from './Components/Add'
import ListItems from './Components/ListItems';
import Modify from './Components/Modify';
import CheckInfo from './Components/CheckInfo';

function App() {

  const [open, setOpen] = useState({
    add : false,
    modify: false,
    addSuccessful:false,
    FullInfo: true
  })
  const [listOfDevices, setListOfDevices] = useState([])

  return (
    <Router>
      <Container>
        <ListItems
          devices={listOfDevices}
          setOpen={setOpen}
          open={open} />
        <Switch>
          <Route path="/add">
            <Add
              open={open}
              setOpen={setOpen}
              listOfDevices={listOfDevices}
              setListOfDevices={setListOfDevices} />
          </Route>
          <Route path="/modify/:id">
            <Modify
              devices={listOfDevices}
              open={open} />
          </Route>
          <Route path="/info/:id">
            <CheckInfo
              devices={listOfDevices}
              open={open} 
              setOpen={setOpen}/>
              
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
