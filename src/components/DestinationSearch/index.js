import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    SearchInput: '',
  }

  SelectDestinationPlace = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {SearchInput} = this.state
    const {destinationsList} = this.props
    const SearchResults = destinationsList.filter(eachDestinatino =>
      eachDestinatino.name.toLowerCase().includes(SearchInput.toLowerCase()),
    )
    return (
      <div className="bg_container">
        <h1>Destination Search</h1>
        <div className="searching_container">
          <input
            placeholder="Search"
            value={SearchInput}
            onChange={this.SelectDestinationPlace}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="Search icon"
          />
        </div>
        <div className="min_container">
          {SearchResults.map(eachList => (
            <DestinationItem
              key={eachList.id}
              DestinationItemDetails={eachList}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
