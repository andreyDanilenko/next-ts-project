import styles from './TopPageComponent.module.css';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Advantages, HhData, HTag, Product, Sort, Tag } from '../../components';
import { ITopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from '../../helpers/sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag='h1'>{page.title}</HTag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div className="">
                {sortedProducts && sortedProducts.map(p => (<Product product={p} key={p._id} />))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === ITopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <HTag tag='h2'>Преимущества</HTag>
                <Advantages advantages={page.advantages} />
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <HTag tag="h2">Получаемые навыки</HTag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    );
};