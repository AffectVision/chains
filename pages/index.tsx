import { NextPage } from 'next'

import { Layout } from '@/components/layout/Layout'
import { Main } from '@/components/layout/main/Main'

const Home: NextPage = () => {
	return (
		<Layout title="Chains list" description="All EVM chains list">
			<Main />
		</Layout>
	)
}
export default Home
