import { ReactNode } from "react";

export interface IHTagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode
}