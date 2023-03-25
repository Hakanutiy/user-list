import React from 'react';
import './styles/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { User } from './features/user/component/user';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<User />
		</QueryClientProvider>
	);
}
export default App;
