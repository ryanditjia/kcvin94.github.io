import React, { useState } from 'react';
import { NumberInputStyle } from './style';

export default function NumberInput({ value, onChange }) {
  return (
    <input
      css={NumberInputStyle}
      type="number"
      value={value}
      onChange={event => onChange(parseInt(event.target.value, 10))}
    />
  );
}
