import { DetailedHTMLProps, InputHTMLAttributes, KeyboardEventHandler} from 'react';
// import { FieldError } from 'react-hook-form';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,  HTMLInputElement> {
	error?: string;
	onKeyDown?: KeyboardEventHandler;
}