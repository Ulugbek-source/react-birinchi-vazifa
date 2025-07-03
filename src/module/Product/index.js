import {
	Productimg1,
	Productimg2,
	Productimg3,
	Productimg4,
} from '../../assets/images'
import './product.css'

function Product() {
	return (
		<section className='product-section'>
			<div className='container product'>
				<div className='product-text-wrapper'>
					<div className='text-left-content'>
						<span>Product Designer</span>
						<h2>That's me!</h2>
					</div>
					<div className='text-right-wrapper'>
						<p>
							Over the past 12 years, I've worked with a diverse range of
							clients, from startups to Fortune 500 companies. I love crafting
							interfaces that delight users and help businesses grow.
						</p>
					</div>
				</div>
				<div className='product-img-wrapper'>
					<div className='product-img-left-content'>
						<img
							src={Productimg1}
							alt='Product image'
							width={338}
							height={626}
						/>
						<img
							src={Productimg2}
							alt='Product image'
							width={507}
							height={626}
						/>
					</div>
					<div className='product-img-right-content'>
						<img
							src={Productimg3}
							alt='Product image'
							width={338}
							height={305}
						/>
						<img
							src={Productimg4}
							alt='Product image'
							width={338}
							height={305}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Product
