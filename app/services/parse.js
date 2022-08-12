import JsonData from './data.json'

export function JsonDataDisplay() {
	const DisplayData = JsonData.map((info) => {
		return (
			<div
				key={info.chainId}
				className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="#">
					<h5 className="truncate mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{info.name}
					</h5>
				</a>
				<div className="flex justify-around">
					<p className="mb-3 font-normal text-black dark:text-white">Chain</p>
					<p className="mb-3 font-normal text-black dark:text-white">ID</p>
				</div>
				<div className="flex justify-around">
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						{info.chain}
					</p>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						{info.chainId}
					</p>
				</div>

				<div className="flex justify-around">
					<button
						type="button"
						className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-800 dark:g-gray-800"
					>
						Connect
					</button>
					<button
						type="button"
						className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-800 dark:bg-gray-800"
					>
						Show RPC
					</button>
				</div>
			</div>
		)
	})

	return DisplayData
}
