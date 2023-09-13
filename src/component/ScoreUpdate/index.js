import {Component} from 'react'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class ScoreUpdate extends Component {
  state = {result: false, itemName: '', finalScore: 0}

  randomGenerator = () => {
    const indexNo = Math.floor(Math.random() * 3)
    console.log(indexNo)
    const oppositePlayer = choicesList[indexNo]
    return oppositePlayer
  }

  onPlayAgain = () => {
    this.setState({result: false})
  }

  updateFinalScore = result => {
    if (result === 'win') {
      this.setState(prevState => ({finalScore: prevState.finalScore + 1}))
    } else if (result === 'lose') {
      this.setState(prevState => ({finalScore: prevState.finalScore - 1}))
    }
  }

  finalResult = () => {
    const {itemName} = this.state
    const random = this.randomGenerator()
    let fResult

    if (itemName.id === random.id) {
      fResult = 'IT IS DRAW'
      this.updateFinalScore('draw')
    } else if (
      (itemName.id === 'PAPER' && random.id === 'ROCK') ||
      (itemName.id === 'SCISSORS' && random.id === 'PAPER') ||
      (itemName.id === 'ROCK' && random.id === 'SCISSORS')
    ) {
      fResult = 'YOU WON'
      //   this.setState(prveState => ({finalScore: prveState.finalScore + 1}))
      this.updateFinalScore('win')
    } else {
      fResult = 'YOU LOSE'
      //   this.setState(prveState => ({finalScore: prveState.finalScore - 1}))
      this.updateFinalScore('lose')
    }

    return (
      <div className="text-center">
        <div className="d-flex flex-row">
          <div className="text-center m-4">
            <h1>You</h1>

            <img className="img" src={itemName.imageUrl} alt={itemName.id} />
          </div>
          <div className="text-center m-4">
            <h1>Opponent</h1>

            <img className="img" src={random.imageUrl} alt={random.id} />
          </div>
        </div>
        <div className="mt-5">
          <h4>{fResult}</h4>
        </div>
        <div>
          <button
            onClick={this.onPlayAgain}
            type="button"
            className="btn btn-primary"
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }

  onChangeResult = item => {
    this.setState({result: true, itemName: item})
  }

  playerChoice = () => (
    <ul className="list-unstyled d-flex flex-row justify-content-center flex-wrap">
      {choicesList.map(eachItem => (
        <li key={eachItem.id}>
          <button
            onClick={() => this.onChangeResult(eachItem)}
            className="btn pe-auto m-3"
            type="button"
          >
            <img className="img" src={eachItem.imageUrl} alt={eachItem.id} />
          </button>
        </li>
      ))}
    </ul>
  )

  render() {
    const {result} = this.state

    if (!result) {
      return <div className="buttonsCon">{this.playerChoice()}</div>
    }

    return <div>{this.finalResult()}</div>
  }
}

export default ScoreUpdate
