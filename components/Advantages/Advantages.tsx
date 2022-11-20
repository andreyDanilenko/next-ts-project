import styles from './Advantages.module.css';
import { CheckIcon } from '../../assets/image/icons';
import { IAdvantagesProps } from './Advantages.props';

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon className={styles.icon} />
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vLine} />
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};