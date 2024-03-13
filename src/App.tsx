import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Theme, Flex, Text, Button } from '@radix-ui/themes'
import * as Popover from '@radix-ui/react-popover';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>Text from Radix Themes</Text>

        <Popover.Root>
          <Popover.Trigger>More info</Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              Some more info…
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <form>
          <div className="flex items-center">
            <RadixCheckbox.Root
              className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
              defaultChecked
              id="c1"
            >
              <RadixCheckbox.Indicator className="text-violet11">
                <CheckIcon />
              </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
            <label className="pl-[15px] text-[15px] leading-none text-white" htmlFor="c1">
              Accept terms and conditions.
            </label>
          </div>
        </form>

        <h1 className="text-3xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
