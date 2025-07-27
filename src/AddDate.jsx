import { useState } from 'react'

export const CurrentDate = () => {
	const [currentDate, setCurrentDate] = useState(new Date())

	setTimeout(() => {
		setCurrentDate(new Date())
	}, 1000)

	return (
		<div>
			{currentDate.toISOString().substring(11, 19)}
		</div>
	)
}
