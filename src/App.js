import React, {Component} from "react";
import CitySelector from './CitySelector';

/* Objeto con las rutas de las imágenes,
  vamos a usar las claves para identificar 
  las imágenes correspondientes. Recordad que
  puedo usar estas dos formas para, por ejemplo, Madrid:
    
    images.Madrid

  o 

    images['Madrid']

  Esta última forma nos permite usar variables
*/
const images = {
    Madrid: 'https://uatae.org/wp-content/uploads/2018/02/madrid.jpg',
    Estambul: 'https://cdn.civitatis.com/turquia/estambul/estambul-completo-2-dias-grid.jpg',
    Oslo: 'https://www.visitoslo.com/Images/Bilder%20Oslo/Attraksjoner/Astrup-Fearnley-museet-VO03611-4499.jpg?t=ScaleToFill%7C1450x720&ts=ZRb8gVRnBFnsgRbjCGzDNz0o0Rw%3D&pr=2.625'
}

class App extends Component {
  constructor (props) {
    super (props);

    // Definimos la ciudad por defecto
    this.selectedCity = 'Madrid';

    // Bindeamos handleCityChange para que se ejecute como si fuésemos App.js
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleCityChange(event) {
    /* Este método recoge lo que seleccione el usuario y
    actualiza this.selectedCity de App.js */
    const userSelection = event.currentTarget.value;

    /* No me tengo que preocupar por qué elige el usuario
    ya que controlamos las opciones del select y no hay manera
    de que el usuario elija algo que no queremos
    */
    this.selectedCity = userSelection;
    // Le decimos a App.js que renderice de nuevo
    this.forceUpdate();
  }
  render() {
    return (
      <div className="app">

        {/* Pasamos la función que recoge el value y actualiza
          selectedCity de App.js
        */}
        <CitySelector selectionAction={this.handleCityChange} />


        {/*Ponemos la imagen y el alt dependiento de nuestro atributo
          this.selectedCity
         */}
        <div class="app__image">
          <img src={images[this.selectedCity]} alt={this.selectedCity} width="300"/>
        </div>

      </div>);
  }
}

export default App;