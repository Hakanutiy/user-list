import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';
axios.defaults.baseURL = API_URL;
export interface IUsers {
	id: number;
	name: Name;
	username: string;
	address: Address;
}
interface Address {
	city: string;
	street?: string;
}
interface Name {
	firstname: string;
	lastname: string;
}
export const UserServices = {
	async getAll() {
		return axios.get<IUsers[]>('/users');
	}
};
