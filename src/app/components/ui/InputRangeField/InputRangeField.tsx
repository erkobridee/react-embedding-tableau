import * as React from 'react';

import cn from 'clsx';

import { Input } from 'app/components/ui/Input';

type TStringNumber = string | number;

interface InputRangeFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  min: TStringNumber;
  max: TStringNumber;
  step: TStringNumber;
}

const InputRangeFieldInner = (
  { label, min, max, type = 'number', ...props }: InputRangeFieldProps,
  ref: React.Ref<HTMLInputElement>
) => (
  <div className="flex gap-3 items-center">
    {label ? <span className="font-bold text-right">{label}</span> : null}
    <Input
      {...{
        ref,
        type,
        ...props,
        min,
        max,
      }}
    ></Input>
    <span className="text-sm">Limits</span>
    <span className="text-sm italic">{`min: ${min} and max: ${max}`}</span>
  </div>
);

export const InputRangeField = React.forwardRef(InputRangeFieldInner);

InputRangeField.displayName = 'InputRangeField';

export default InputRangeField;
