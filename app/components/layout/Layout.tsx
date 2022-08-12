import { PropsWithChildren } from 'react'

import { Header } from '@/layout/header/Header'

import { Meta } from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import { Main } from './main/Main'

export const Layout: React.FC<PropsWithChildren<IMeta>> = ({
	children,
	...meta
}) => {
	return (
		<>
			<Meta {...meta} />
			<Header />
			<Main />
		</>
	)
}
