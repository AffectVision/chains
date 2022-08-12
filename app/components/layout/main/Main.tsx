import { ChainsList } from './chainslist/ChainsList'
import { SearchBar } from './searchbar/SearchBar'

export const Main: React.FC = () => {
	return (
		<main>
			<SearchBar />
			<ChainsList />
		</main>
	)
}
