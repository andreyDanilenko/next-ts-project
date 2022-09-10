import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IFooterProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}