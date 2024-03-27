import React, { useState, useEffect } from 'react';
import './switch.css';

interface SwitchProps {
  Type: 'No icon' | 'With icon';
  OnOff: boolean;
  State: 'Active' | 'Focus' | 'Disabled';
  ShowLabel: boolean;
  Label?: string;
}

export const Switch = ({
  Type,
  OnOff,
  State,
  ShowLabel = true,
  Label,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(OnOff);

  useEffect(() => {
    setIsChecked(OnOff);
  }, [OnOff]);

  const handleToggleChange = () => {
    if (State !== 'Disabled') {
      setIsChecked(!isChecked);
    }
  };

  let ToggleType = 'NoIcon';
  if (Type === 'With icon') {
    ToggleType = 'WithIcon';
  }

  let Checked
  if(isChecked) {
    Checked = 'Checked'
  } else {
    Checked = 'Unchecked'
  }

  return (
    <label className={['toggleDiv', `toggleDiv--${State}`].join(' ')}>
      <div className="switch">
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
      </div>
      {ShowLabel && <text style={{ marginLeft: '8px' }}>{Label}</text>}
    </label>
  );
};
