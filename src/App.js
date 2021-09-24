import './App.js';
import './App.scss';
import React, { useState } from 'react';
import data from './clubs.json';
console.log(data);

function App() {
  /*Variables*/

  /*Variables de estado*/

  /*Funciones*/

  const htmlClubList = data.map((club, index) => (
    <li className='club'>
      <h2 className='name'>{club.name}</h2>
      <label className='weekdays'>
        Abierto entre semana:{club.openOnWeekdays}
      </label>
      <label className='weekends'>
        Abierto el fin de semana:{club.openOnWeekend}
      </label>
    </li>
  ));

  return (
    <>
      <header>
        <h1 className='title'>Mis clubs:</h1>
        <form className='form'>
          <select name='select' className='select' onChange=''>
            <option value=''>todos mis clubs</option>
            <option value=''>los que abren entre semana</option>
            <option value=''>los que abren el fin de semana</option>
          </select>
        </form>
      </header>

      <main className='header'>
        <ul className='list'>{htmlClubList}</ul>
        <form className='form2'>
          <h2>Añadir un nuevo club</h2>
          <label>
            Nombre del club
            <input
              type='text'
              className='textarea'
              name='description'
              value=''
            />
          </label>
          <label>
            ¿Abre entre semana?
            <input type='checkbox'></input>
          </label>
          <label>
            ¿Abre el fin de semana?
            <input type='checkbox'></input>
          </label>
        </form>
      </main>
    </>
  );
}

export default App;

//
//
//function App() {
//  /*Variables*/
//
//  /*Varibles de estado */
//  const [color, setColor] = useState('');
//  const [player, setPlayer] = useState('');
//  /*Funciones*/
//  const handleColor = (ev) => {
//    setColor(ev.target.value);
//  };
//  const handlePlayer = (event) => {
//    setPlayer(event.target.value);
//  };
//
//  return (
//    <>
//      <div className='App'>
//        <h1 className={color}>Adivina el número</h1>
//        <form action='' method='GET' className='form'>
//          <label className='body__form--label' for='number'>
//            Introduce aquí tu número:
//          </label>
//          <input className='js-number form--number' type='number' />
//          <input
//            className='js-button form--button'
//            type='button'
//            value='Prueba'
//          />
//          <p className='js-clue form--clue'>
//            Pista: Escribe el numero y dale a Prueba.
//          </p>
//          <input className='js-tries form--count' type='text' name='count' />
//        </form>
//        <form>
//          <input
//            type='text'
//            name='player'
//            className='player'
//            placeholder='Player Name'
//            onKeyUp={handlePlayer}
//          />
//          <select name='select' className='select' onChange={handleColor}>
//            <option value='select'>Select</option>
//            <option value='pink'>Pink</option>
//            <option value='blue'>Blue</option>
//            <option value='purple'>Purple</option>
//          </select>
//        </form>
//        <small>{player}</small>
//      </div>
//      <form className='form-movies'>
//        <label>
//          <input
//            type='text'
//            name='name'
//            placeholder='Título de videjuego' /*onChange={handeTitle}*/
//          ></input>
//        </label>
//        <label>
//          Descripción
//          <textarea className='textarea' name='description' value='' />
//        </label>
//
//        <label>
//          Idioma
//          <select name='language' className='language' onChange={handleColor}>
//            <option value='es'>Español</option>
//            <option value='en'>Inglés</option>
//            <option value='pt'>Portugués</option>
//          </select>
//        </label>
//      </form>
//    </>
//  );
//}
//
//export default App;
//
//
//
