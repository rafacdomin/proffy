import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import { InputBlock } from './styles';

import showPassIcon from '../../assets/images/icons/showPass.svg';
import hidePassIcon from '../../assets/images/icons/hidePass.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hidden, setHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleShowPass() {
    setHidden(!hidden);
  }

  function handleTextChange() {
    const text = inputRef.current?.value;

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <InputBlock>
      {label && (
        <label className={isActive ? 'Active' : ''} htmlFor={fieldName}>
          {label}
        </label>
      )}

      <div className="input">
        <input
          onChange={handleTextChange}
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {name === 'password' && (
          <button type="button" onClick={handleShowPass}>
            <img
              src={hidden ? showPassIcon : hidePassIcon}
              alt="Mostrar senha"
            />
          </button>
        )}
      </div>

      {error && <span className="error">{error}</span>}
    </InputBlock>
  );
};

export default Input;
