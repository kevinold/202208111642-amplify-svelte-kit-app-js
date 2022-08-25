import { Amplify, API } from 'aws-amplify';
import awsExports from '../aws-exports';
import { listTodos } from '../graphql/queries';

export async function load() {
	Amplify.configure({ ...awsExports, ssr: true });
	const { data } = await API.graphql({ query: listTodos });

	return {
		todos: data?.listTodos?.items
	};
}
