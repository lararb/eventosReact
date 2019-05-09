import React from 'react';

class CitySelector extends React.Component {
  render () {
    // Pillamos la función que nos viene por props
    const {selectionAction} = this.props;
    return (
      <select onChange={selectionAction} name="" id="">
        <option value="Madrid">Madrid</option>
        <option value="Estambul">Estambul</option>
        <option value="Oslo">Oslo</option>
      </select>   
    );
  }
}

export default CitySelector;