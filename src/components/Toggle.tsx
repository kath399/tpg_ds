import React, { useState, useEffect } from 'react';
import './toggle.css';

interface ToggleProps {
  Type: 'No icon' | 'With icon';
  OnOff: boolean;
  State: 'Active' | 'Focus' | 'Disabled';
  ShowLabel: boolean;
  Label?: string;
}

export const Toggle = ({
  Type,
  OnOff,
  State,
  ShowLabel = true,
  Label,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(OnOff);

  useEffect(() => {
    setIsChecked(OnOff);
  }, [OnOff]);

  let ToggleType = 'NoIcon';
  if (Type === 'With icon') {
    ToggleType = 'WithIcon';
  }

  const handleToggleChange = () => {
    if (State !== 'Disabled') {
      setIsChecked(!isChecked);
    }
  };

  let Checked = 'Checked'
  if(isChecked) {
    Checked = 'Checked'
  } else {
    Checked = 'Unchecked'
  }

  return (
    <div className={['toggleDiv', `toggleDiv--${State}`].join(' ')}>
      <label className="switch">
        <input
          type="checkbox"
          className={[
            'toggle',
            `toggle--${State}`,
            `toggle--${State}--${Checked}`,
          ].join(' ')}
          checked={isChecked}
          onChange={handleToggleChange}
          disabled={State === 'Disabled'}
        />
        <span
          className={[
            'slider round',
            `slider--${ToggleType} round`,
          ].join(' ')}
        ></span>
      </label>
      {ShowLabel && <span style={{ marginLeft: '8px' }}>{Label}</span>}
    </div>
  );
};
