import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header} from '../components'
const change = (agrs) => {
  document.getElementById('preview').style.backgroundColor = agrs.currentValue.hex;
};
const ColorPicker = () => {

 
  return (
   <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category= "アプリ" title= "ColorPicker" />
    <div className="text-center">
      <div id="preview" />
      <div className='flex justify-center items-center gap-24 flex-wrap'>
        <div>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline PalLete</p>
          <ColorPickerComponent
          id='inline-palette' 
          mode='Palette'
          modeSwitcher = {false}
          showButtons = {false}
          inline
          change={change}
          />
        </div>

        <div>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
          <ColorPickerComponent
          id='inline-picker' 
          mode='Picker'
          modeSwitcher = {false}
          showButtons = {false}
          inline
          change={change}
          />
        </div>
      </div>
    </div>


   </div>
  )
}

export default ColorPicker
