import TextField from '@material-ui/core/TextField';
import { ChangeEvent, FC, useState } from 'react';

interface IProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  errorText: string;
  validator: (value: string) => boolean;
}

const MUIFormInput: FC<IProps> = ({ id, label, type, errorText, validator }) => {
  const [error, setError] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (validator(event.target.value)) {
      setError('');
    } else {
      setError(errorText);
    }
  };

  return (
    <TextField
      required
      id={id}
      label={label}
      type={type}
      onChange={onChange}
      helperText={error}
      error={Boolean(error.length)}
    />
  );
};

export default MUIFormInput;
