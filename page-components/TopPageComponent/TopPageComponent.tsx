
import cn from 'classnames';
import styles from './TopPageComponent.module.css';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { HhData, HTag, Tag } from '../../components';
import { ITopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag='h1'>{page.title}</HTag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <span>sort</span>
            </div>
            <div className="">
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === ITopLevelCategory.Courses && <HhData {...page.hh} />}
        </div>
    );
};