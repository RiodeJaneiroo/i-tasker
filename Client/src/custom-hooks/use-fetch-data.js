import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

const useFetchData = (fetchFn, stateFn) => {
	const dispatch = useDispatch();
	const value = useSelector(stateFn);

	useEffect(() => {
		fetchFn(dispatch);
	}, [dispatch, fetchFn]);

	return value;
}

export default useFetchData;