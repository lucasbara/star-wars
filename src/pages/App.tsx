import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CharacterCardDetail } from './CharacterDetail';
import { NotFound } from './NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
