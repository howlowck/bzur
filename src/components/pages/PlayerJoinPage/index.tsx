import { playerJoinPage } from './style.module.css'
import classnames from 'classnames'
import { useQuery } from 'react-query'
import React from 'react'

type Prop = {
  gameName: string
}

const PlayerJoinPage: React.FC<Prop> = ({ gameName }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['teams', gameName],
    () => {
      return fetch(`/api/groups/${gameName}`).then(res => res.json())
    }
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  const { teams } = data!

  return (
    <div className={classnames(playerJoinPage)}>
      pick your assigned team:
      <select className="form-control" defaultValue="">
        <option value="" disabled>
          Select a team
        </option>
        {teams.map((team: string) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      Your name: <input type="text" />
      <button>Join</button>
    </div>
  )
}

export default PlayerJoinPage
