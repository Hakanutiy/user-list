import { useUsers } from '../../../hooks/useUsers';

export const User = () => {
	const { isLoading, data } = useUsers();
	return (
		<div className={'users__list'}>
			<div className={'users__block'}>
				{isLoading ? (
					<div>Loading...</div>
				) : data?.data.length ? (
					<div className={'users__content'}>
						{data.data.map(user => (
							<div className={'users__block'}>
								<div className={'user__content__header'}>
									<img
										className={'users__image'}
										src={
											'https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/user-profile.png'
										}
									/>

									<div>
										<div className={'users__name'}>
											{user.name.firstname} {user.name.lastname}
										</div>
										<div className={'users_username'}>@{user.username} </div>
										<div className={'users__city'}>{user.address.city}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div>Users not found</div>
				)}
			</div>
		</div>
	);
};
