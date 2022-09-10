import { PTagProps } from './PTag.props';
import styles from './PTag.module.css';
import cn from 'classnames';

export const PTag = ({ size = 'm', children, className, ...props }: PTagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};