import { app } from './style.module.css'
import classnames from 'classnames'
import { ReduxState } from '../../../redux/reducer'
import React from 'react'
import { useSelector } from 'react-redux'
import { Router, Route } from 'wouter'
import { useHashLocation, navigate } from '../../../helpers/routing'
import Pokemon from '../../content/Pokemon'
import { useGetPokemonByIdQuery } from '../../../redux/services/pokemon'
import IdPicker from '../../content/IdPicker'
import PlayerJoinPage from '../../pages/PlayerJoinPage'
import { QueryClient, QueryClientProvider } from 'react-query'

type Prop = {
  // put props typings here. i.e. "className: string"
}

const queryClient = new QueryClient()

const App: React.FC<Prop> = () => {
  const { id } = useSelector((state: ReduxState) => state.pokemon)
  const [joinGameName, setJoinGameName] = React.useState('')
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <h1>Bzur!</h1>
        <div className={classnames(app)}>
          <Route path="/join/:gameName">
            {params => <PlayerJoinPage gameName={params.gameName} />}
          </Route>
          <Route path="/">
            <div className="join">
              <h2>Join a Game</h2>
              <p>Game Name:</p>
              <input
                type="text"
                value={joinGameName}
                onChange={evt => setJoinGameName(evt.currentTarget.value)}
              />
              <button
                disabled={!joinGameName}
                onClick={() => {
                  navigate(`/join/${joinGameName}`)
                }}
              >
                Join
              </button>
            </div>
          </Route>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
