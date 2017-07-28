import { connect } from 'react-redux'
import { addList, renameList, deleteList } from '../actions'
import Feed from '../components/Feed'

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (id) => {
      dispatch(addList(id))
    }
  }
}

const FeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)

export default FeedContainer
