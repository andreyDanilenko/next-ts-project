import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPTagProps extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
}