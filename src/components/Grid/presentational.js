import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Cell from 'components/Cell'

const stylize = (props, state) => ({
  row: {
    display: 'flex',
  }
})

class Grid extends PureComponent {
  render() {
    const styles = stylize(this.props, this.state)
    const { rows, columns } = this.props
    console.log(this.props);
    return (
      <div>
        {
          Array(rows)
            .fill(true)
            .map((foo, x) => (
              <div key={`rows-${x}`} style={styles.row}>
                {Array(columns).fill(true).map((bar, y) => <Cell key={`cell-${x}-${y}`} x={x} y={y} snake={this.props.snake}/>)}
              </div>
            ))
        }
      </div>
    )
  }


  isSnake = (props) => {
    for (let _i = 0; _i < props.snake.length; _i++) {
      if (props.y === props.snake[_i].y
        && props.x === props.snake[_i].x) {
        if (_i === props.snake.length - 1) {
          return stylize(props).snakeHead
        }
        return stylize(props).snake
      } else {
        return stylize(props).cell
      }
    }
  }
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
}

export default Grid
