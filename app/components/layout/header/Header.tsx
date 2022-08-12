import styles from './Header.module.scss'
import { Logo } from './Logo'
import { Buttons } from './buttons/Buttons'

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Buttons />
		</header>
	)
}
