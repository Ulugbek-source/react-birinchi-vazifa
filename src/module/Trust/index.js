import { Ipsum1, Ipsum2, Ipsum3, Ipsum4 } from '../../assets/images'
import './trust.css'

function Trust() {
	return (
		<section className='trust-section'>
			<div className='container trust'>
				<span className='trust-name'>Trusted by</span>
				<div className='image-wrapper'>
					<img src={Ipsum1} alt='Logo ipsum image' width={141} height={32} />
					<img src={Ipsum2} alt='Logo ipsum image' width={141} height={32} />
					<img src={Ipsum3} alt='Logo ipsum image' width={141} height={32} />
					<img src={Ipsum4} alt='Logo ipsum image' width={141} height={32} />
				</div>
			</div>
		</section>
	)
}
export default Trust
