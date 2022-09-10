import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
// Данное наследование интерфейса позволяет наделить кастомный элемент всеми соответствующими свойствами
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}