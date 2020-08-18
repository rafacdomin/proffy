import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';

import { SelectBlock, MySelect } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  label: string;
  name: string;
  initialData?: string;
}

const Select: React.FC<Props> = ({ label, name, initialData, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <MySelect
        defaultValue={
          initialData
            ? { label: initialData, value: initialData }
            : defaultValue
        }
        ref={selectRef}
        classNamePrefix="react-select"
        placeholder="Selecionar"
        {...rest}
      />
    </SelectBlock>
  );
};

export default Select;
