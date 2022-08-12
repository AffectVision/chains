import Head from 'next/head'

import { IMeta } from './meta.interface'

export const Meta: React.FC<IMeta> = ({ description, title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			{description ? (
				<meta
					itemProp="descritption"
					name="description"
					content={description}
				/>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	)
}
