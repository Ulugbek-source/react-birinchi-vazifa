import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'
import Card3 from '../assets/images/card3.png'

function Services() {
	return (
		<section className='service-section'>
			<div className='container service'>
				<div className='service-wrapper'>
					<span>Services</span>
					<h2>Design that solves problems, one product at a time.</h2>
				</div>
				<ul className='service-card-wrapper'>
					<li className='service-card'>
						<img src={Card1} alt='' width={70} height={70} />
						<strong>What I can do for you</strong>
						<p>
							Faster, better products that your users love. Here's all the
							services I provide:
						</p>
						<ul className='service-card-list-wrapper'>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Design Strategy</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Web and Mobile App Design</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Front-end Development</span>
							</li>
						</ul>
					</li>
					<li className='service-card'>
						<img src={Card2} alt='' width={70} height={70} />
						<strong>Applications I'm fluent in</strong>
						<p>
							Every designer needs the right tools to do the perfect job.
							Thankfully, I'm multilingual.
						</p>
						<ul className='service-card-list-wrapper'>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Sketch</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Webflow</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Figma</span>
							</li>
						</ul>
					</li>
					<li className='service-card'>
						<img src={Card3} alt='' width={70} height={70} />
						<strong>What you can expect</strong>
						<p>
							I design products that are more than pretty. I make them shippable
							and usable.
						</p>
						<ul className='service-card-list-wrapper'>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Clean and functional</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Device and user friendly</span>
							</li>
							<li className='service-card-list'>
								<svg
									width='7'
									height='7'
									viewBox='0 0 7 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='7' height='7' fill='black' />
								</svg>
								<span>Efficient and maintainable</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	)
}
export default Services
