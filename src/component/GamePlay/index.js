import {Component} from 'react'

import ScoreUpdate from '../ScoreUpdate'

class GamePlay extends Component {
  state = {score: 0}

  render() {
    const {score} = this.state

    return (
      <div className="bg pt-4 d-flex flex-column justify-content-center align-items-center">
        <div className="w-75 border rounded d-flex flex-row justify-content-between p-4">
          <div>
            <h1 className="fw-bold">ROCK</h1>
            <h1 className="fw-bold">PAPER</h1>
            <h1 className="fw-bold">SCISSORS</h1>
          </div>
          <div className="bg-light text-primary p-4 rounded d-flex flex-column justify-content-center align-items-center">
            <p className="fw-bold">Score</p>
            <h1>{score}</h1>
          </div>
        </div>
        <div className="mt-4">
          <ScoreUpdate />
        </div>
      </div>
    )
  }
}

export default GamePlay
