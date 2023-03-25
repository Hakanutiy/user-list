import { useQuery } from 'react-query';
import { UserServices } from '../services/UserServices';

export const useUsers = () => {
	const { isLoading, data: data } = useQuery('users list', () =>
		UserServices.getAll()
	);
	return { isLoading, data };
};
