import { ProjectImg1, ProjectImg2, ProjectImg3 } from '../../assets/images'
import Button from '../../components/Button'
import { ArrowRight, ArrowBtnLeft, ArrowBtnRight } from '../../assets/icons'
import './project.css'

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
					<Button title={'View all projects'} />
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
								<ArrowRight />
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
								<ArrowRight />
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
								<ArrowRight />
							</a>
						</div>
					</li>
				</ul>
				<div className='arrow-btns-wrapper'>
					<button>
						<ArrowBtnLeft />
					</button>
					<button>
						<ArrowBtnRight />
					</button>
				</div>
			</div>
		</section>
	)
}
export default Projects
