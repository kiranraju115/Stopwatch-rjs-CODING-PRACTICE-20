// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return `${seconds}`
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return `${minutes}`
  }

  render() {
    const {isTimerRunning} = this.state

    const Time = `${this.renderMinutes()}:${this.renderSeconds()}`
    console.log(isTimerRunning)
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stop-watch-header">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="stopwatch-icon"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{Time}</h1>
            <div className="timer-buttons">
              <button
                className="start-button button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
