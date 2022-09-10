import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import { ArrowIcon } from '../../assets/image/icons';
import cn from 'classnames';




export const Button = ({ appearance, arrow = 'none', children, className, ...props }: IButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })}>
                 <ArrowIcon /> 
                </span>}
        </button>
    );
};