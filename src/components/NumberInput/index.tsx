import React, { useState } from 'react';
import { NumberInputStyle } from './style';

interface Props {
  value: any;
  onChange: Function;
}

export default function NumberInput({ value, onChange }: Props) {
  return (
    <input
      css={NumberInputStyle}
      type="number"
      value={value}
      onChange={event => onChange(parseInt(event.target.value, 10))}
    />
  );
}
