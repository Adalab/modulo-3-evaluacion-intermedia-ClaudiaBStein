import './App.js';
import './App.scss';
import React, { useState } from 'react';
import data from './clubs.json';
console.log(data);

function App() {
  /*Variables*/

  /*Variables de estado*/
  const [newClub, setNewClub] = useState('');
  /*Funciones*/
  const handleAddClub = (ev) => {
    setNewClub(ev.currentTarget.value);
  };
  const handleWeekdays = (ev) => {
    setNewClub(ev.currentTarget.checked);
  };
  const handleWeekends = (ev) => {
    setNewClub(ev.currentTarget.checked);
  };
  const handleClick = (ev) => {
    data.push(newClub);
    const newClub = {
      name: ev.currentTarget.value,
    };
    const newWeekday = {ev.currentTarget.checked };
    const newWeekend = {ev.currentTarget.checked };
  };

  const htmlClubList = data.map((club, index) => (
    <li className='club'>
      <h2 className='name'>{club.name}</h2>
      <label className='weekdays'>
        Abierto entre semana:{club.openOnWeekdays === true ? ' Sí' : ' No'}
      </label>
      <label className='weekends'>
        Abierto el fin de semana:{club.openOnWeekends === true ? ' Sí' : ' No'}
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
          <h2 class='add'>Añadir un nuevo club</h2>
          <label className='addname'>
            Nombre del club
            <input
              type='text'
              className='addtext'
              name='description'
              value={newClub}
              onChange={handleAddClub}
            />
          </label>
          <label className='openweekday'>
            ¿Abre entre semana?
            {
              <input
                type='checkbox'
                checked={newWeekday}
                onClick={handleWeekdays}
              ></input>
            }
          </label>
          <label className='openweekend'>
            ¿Abre el fin de semana?
            <input
              type='checkbox'
              checked={newWeekend}
              onClick={handleWeekends}
            ></input>
          </label>
          <input
            type='button'
            class='button'
            name='button'
            value='Añadir'
            onClick={handleClick}
          />
        </form>
      </main>
    </>
  );
}

export default App;
