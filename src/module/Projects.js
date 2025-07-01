import ProjectImg1 from '../assets/images/projectcard1.png'
import ProjectImg2 from '../assets/images/projectcard2.png'
import ProjectImg3 from '../assets/images/projectcard3.png'

function Projects() {
	return (
		<section className='projects-section'>
			<div className='container projects'>
				<div className='projects-content-wrapper'>
					<div className='projects-content'>
						<span>PROJECTS</span>
						<h2>
							I bring results.
							<br />
							My clients are proof.
						</h2>
					</div>
					<button className='projects-btn'>View all projects</button>
				</div>
				<ul className='projects-card-wrapper'>
					<li className='projects-card'>
						<img
							src={ProjectImg1}
							alt='Project card image'
							width={486}
							height={305}
						/>
						<div className='project-content-card'>
							<span>Branding</span>
							<strong>Soulful Rebrand</strong>
							<a href='#'>
								<span>View Project</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_1_576)'>
										<path
											d='M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_576'>
											<rect width='15' height='15' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</li>
					<li className='projects-card'>
						<img
							src={ProjectImg2}
							alt='Project card image'
							width={486}
							height={305}
						/>
						<div className='project-content-card'>
							<span>Product Design</span>
							<strong>Datadash Product design</strong>
							<a href='#'>
								<span>View Project</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_1_576)'>
										<path
											d='M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_576'>
											<rect width='15' height='15' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</li>
					<li className='projects-card'>
						<img
							src={ProjectImg3}
							alt='Project card image'
							width={486}
							height={305}
						/>
						<div className='project-content-card'>
							<span>Web Design</span>
							<strong>Maize Website Design</strong>
							<a href='#'>
								<span>View Project</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_1_576)'>
										<path
											d='M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_576'>
											<rect width='15' height='15' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</li>
				</ul>
				<div className='arrow-btn-wrapper'>
					<button>
						<svg
							width='10'
							height='15'
							viewBox='0 0 10 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_1_637)'>
								<path
									d='M3.53487 7.34308L9.72237 13.0546L7.95487 14.6861L-0.00012207 7.34308L7.95487 0L9.72237 1.63154L3.53487 7.34308Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_637'>
									<rect width='10' height='15' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</button>
					<button>
						<svg
							width='10'
							height='15'
							viewBox='0 0 10 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_1_641)'>
								<path
									d='M6.1875 7.34308L0 1.63154L1.7675 0L9.7225 7.34308L1.7675 14.6862L0 13.0546L6.1875 7.34308Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_641'>
									<rect width='10' height='15' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}
export default Projects
