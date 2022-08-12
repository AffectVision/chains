import { AuthForm } from './authform/AuthForm'
import styles from './buttons.module.scss'
import { DarkMode } from './darkmode/DarkMode'
import { GitHub } from './github/GitHub'

export const Buttons: React.FC = () => {
	return (
		<div className={styles.buttons}>
			<GitHub />
			<DarkMode />
			<AuthForm />
		</div>
	)
}
