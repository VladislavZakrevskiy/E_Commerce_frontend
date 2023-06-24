import { Box } from '@mui/material';
import Selector from '../shared/Selector';
import { IProduct, Tags, tags } from '../models/IProduct';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProductSortBarProps {
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
	products: IProduct[];
}

const ProductSortBar = ({ setProducts, products }: IProductSortBarProps) => {
	const [popularitySort, setPopularitySort] = useState<string>('');
	const [dateSort, setDateSort] = useState<string>('');
	const [ratedSort, setRatedSort] = useState<string>('');
	const [priceSort, setPriceSort] = useState<string>('');
	const [tagSort, setTagSort] = useState<Tags>('No Tag');
	const {t} = useTranslation()

	useMemo(() => {
		switch (popularitySort) {
			case 'asc':
				setProducts([...products].sort((a, b) => a.sales - b.sales));
				break;
			case 'desc':
				setProducts([...products].sort((a, b) => b.sales - a.sales));
				break;
			case '':
				//Add RTK Query to start
				break;
		}
	}, [popularitySort]);

	useMemo(() => {
		switch (dateSort) {
			case 'asc':
				setProducts([...products].sort((a, b) => a.created_at - b.created_at));
				break;
			case 'desc':
				setProducts([...products].sort((a, b) => b.created_at - a.created_at));
				break;
			case '':
				//Add RTK Query to start
				break;
		}
	}, [dateSort]);

	useMemo(() => {
		switch (ratedSort) {
			case 'asc':
				setProducts([...products].sort((a, b) => a.rating - b.rating));
				break;
			case 'desc':
				setProducts([...products].sort((a, b) => b.rating - a.rating));
				break;
			case '':
				//Add RTK Query to start
				break;
		}
	}, [ratedSort]);

	useMemo(() => {
		if (tagSort === 'No Tag') {
			//Add to start by RTK Query
			return;
		}

		setProducts((prev) => prev.filter((a) => a.tag === tagSort));
	}, [tagSort]);

	useMemo(() => {
		switch (priceSort) {
			case 'asc':
				setProducts([...products].sort((a, b) => +a.price - +b.price));
				break;
			case 'desc':
				setProducts([...products].sort((a, b) => +b.price - +a.price));
				break;
			case '':
				//Add RTK Query to start
				break;
		}
	}, [priceSort]);

	return (
		<Box
			component={'div'}
			display={'flex'}
			paddingLeft={2}
			paddingRight={2}
			gap={1}
		>
			<Selector
				cb={(value) => setPopularitySort(value)}
				label={t('popularity')}
				menuItems={[t('asc'), t('desc'), '-']}
				values={['asc', 'desc', '']}
			/>
			<Selector
				cb={(value) => setDateSort(value)}
				label={t('date')}
				menuItems={[t('asc'), t('desc'), '-']}
				values={['asc', 'desc', '']}
			/>
			<Selector
				cb={(value) => setRatedSort(value)}
				label={t('rated')}
				menuItems={[t('asc'), t('desc'), '-']}
				values={['asc', 'desc', '']}
			/>
			<Selector
				cb={(value) => setPriceSort(value)}
				label={t("price")}
				menuItems={[t('asc'), t('desc'), '-']}
				values={['asc', 'desc', '']}
			/>
			<Selector
				cb={(value) => setTagSort(value as Tags)}
				label={t("tag")}
				menuItems={tags}
				values={tags}
			/>
		</Box>
	);
};

export default ProductSortBar;
