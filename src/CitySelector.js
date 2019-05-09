import React from 'react';

const images = {
    Madrid: 'https://uatae.org/wp-content/uploads/2018/02/madrid.jpg',
    Estambul: 'https://cdn.civitatis.com/turquia/estambul/estambul-completo-2-dias-grid.jpg',
    Oslo: 'https://www.visitoslo.com/Images/Bilder%20Oslo/Attraksjoner/Astrup-Fearnley-museet-VO03611-4499.jpg?t=ScaleToFill%7C1450x720&ts=ZRb8gVRnBFnsgRbjCGzDNz0o0Rw%3D&pr=2.625'
}

class CitySelector extends React.Component {
    constructor (props) {
        super (props);
        this.selectedCity = 'Madrid'
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.value === 'Estambul') {
            return (
                <img src={images.Estambul} alt=""/>
            );
        } else if (event.target.value === 'Oslo') {
            return (
                <img src={images.Oslo} alt=""/>
            );
        } else {
            return (
                <img src={images.Madrid} alt=""/>
            );
        }
        this.forceUpdate();
    }

    render () {
        return (
            <select onChange={this.handleClick} name="" id="">
                <option value="Madrid">Madrid</option>
                <option value="Estambul">Estambul</option>
                <option value="Oslo">Oslo</option>
            </select>
            
        )
    }
}

export default CitySelector;