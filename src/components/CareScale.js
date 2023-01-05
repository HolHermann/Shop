import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
	let advice = ''
	switch(scaleValue){
	case 1: 
		advice = 'peu'
		break
	case 2: 
		advice = 'modérément'
		break
	case 3:  
		advice = 'beaucoup'
		break
	default : 
		advice = ''
		break
	}

	let typeOfCare = careType === 'light' ? 'de lumière' : "d'arrosage"

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${advice} ${typeOfCare}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
