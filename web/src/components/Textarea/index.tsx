import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { TextAreaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value = '',
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue = value, registerField, error } = useField(
    name
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextAreaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={fieldName}
        ref={textAreaRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </TextAreaBlock>
  );
};

export default Textarea;
