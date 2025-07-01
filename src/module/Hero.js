import Bro from '../assets/images/human.png'
function Hero() {
	return (
		<section className='hero-section'>
			<div className='container hero'>
				<div className='hero-content-wrapper'>
					<h1>
						<span>I design products</span>
						that delight and inspire people.
					</h1>
					<p>
						Hi! I’m Jake, a product designer based in Berlin. I create
						user-friendly interfaces for fast-growing startups.
					</p>
					<div className='hero-content-btn-wrapper'>
						<button>Book call</button>
						<a href='#'>
							Download CV
							<svg
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clip-path='url(#clip0_1_477)'>
									<path
										d='M10.4767 5.93361L6.00671 1.46361L7.18504 0.285278L13.6667 6.76694L7.18504 13.2486L6.00671 12.0703L10.4767 7.60028H0.333374V5.93361H10.4767Z'
										fill='black'
									/>
								</g>
								<defs>
									<clipPath id='clip0_1_477'>
										<rect width='14' height='14' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
				<img src={Bro} alt='Human image' width={500} height={595} />
			</div>
		</section>
	)
}
export default Hero
