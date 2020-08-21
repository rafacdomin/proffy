import React, { SelectHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { SelectBlock, MySelect } from './styles';

interface Data {
  value: number | string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<Data>;
  value?: string;
}

const Select: React.FC<Props> = ({
  label,
  name,
  options,
  value = '',
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue = value, registerField, error } = useField(
    name
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>

      <MySelect
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </MySelect>
      {error && <span className="error">{error}</span>}
    </SelectBlock>
  );
};

export default Select;
