import styles from './AuthForm.module.scss'

export const AuthForm: React.FC = () => {
	return (
		<button
			type="button"
			className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:bg-gray-900"
		>
			Connect
		</button>
	)
}
