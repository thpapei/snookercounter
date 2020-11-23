import React from 'react';

const Options = () => {

  const [soundsDisabled, setSoundsDisabled] = useState(false);

  const handleToggleSounds = () => {

  }

  return (
    <div className='options'>
      <p>Disable sounds?</p>
      <input className='remove-red-checkbox' type='checkbox' onClick={() => setSoundsDisabled(true)} />
    </div>
  )
};

export default Options;