import { JsonDataDisplay } from '@/services/parse'

import styles from './chainslist.module.scss'

export const ChainsList: React.FC = () => {
	return (
		<div className={styles.chains}>
			<JsonDataDisplay />
		</div>
	)
}
