import '@/styles/globals.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CharacterCardDetail } from '@/pages/CharacterDetail';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:name">
          <CharacterCardDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
