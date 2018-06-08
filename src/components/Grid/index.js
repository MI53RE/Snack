import { connect } from 'react-redux'
import Grid from './presentational'

const mapStateToProps = (state) => ({
  rows: state.options.rows,
  columns: state.options.columns,
})

export default connect(mapStateToProps)(Grid)
