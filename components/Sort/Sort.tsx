import { ISortProps, SortEnum } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import { SortIcon } from '../../assets/image/icons';

export const Sort = ({ sort, setSort, className, ...props }: ISortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>

			<span onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort === SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon} />
				<span>По рейтенгу</span>
			</span>
			<span onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort === SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon} />
				<span>По цене</span>
			</span>
		</div>
	);
};