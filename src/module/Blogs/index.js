import { ArrowRightWhiteBg } from '../../assets/icons'
import './blogs.css'

function Blogs() {
	return (
		<section className='blog-section'>
			<div className='container blog'>
				<div className='blog-left-content-wrapper'>
					<strong>Blogs</strong>
					<h2>Latest Blogs</h2>
					<a href='#'>
						<span>View all</span>
						<ArrowRightWhiteBg />
					</a>
				</div>
				<div className='blog-right-content-wrapper'>
					<ul className='blog-cards-wrapper'>
						<li className='blog-cards'>
							<span>April 16, 2021 6 mins</span>
							<h2>Design tips for designers, that cover everything you need</h2>
							<a href='#'>
								<span>Read the article</span>
								<ArrowRightWhiteBg />
							</a>
						</li>
						<li className='blog-cards'>
							<span>April 16, 2021 6 mins</span>
							<h2>Design tips for designers, that cover everything you need</h2>
							<a href='#'>
								<span>Read the article</span>
								<ArrowRightWhiteBg />
							</a>
						</li>
						<li className='blog-cards'>
							<span>April 16, 2021 6 mins</span>
							<h2>Design tips for designers, that cover everything you need</h2>
							<a href='#'>
								<span>Read the article</span>
								<ArrowRightWhiteBg />
							</a>
						</li>
						<li className='blog-cards'>
							<span>April 16, 2021 6 mins</span>
							<h2>Design tips for designers, that cover everything you need</h2>
							<a href='#'>
								<span>Read the article</span>
								<ArrowRightWhiteBg />
							</a>
						</li>
						<li className='blog-cards'>
							<span>April 16, 2021 6 mins</span>
							<h2>Design tips for designers, that cover everything you need</h2>
							<a href='#'>
								<span>Read the article</span>
								<ArrowRightWhiteBg />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
export default Blogs
