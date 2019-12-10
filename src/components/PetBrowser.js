import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = (pets) => {
    let petCards = pets.map(onePet => {
      return <Pet pet={onePet} key={onePet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
    return petCards
  }

  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
