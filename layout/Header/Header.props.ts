import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeaderProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}