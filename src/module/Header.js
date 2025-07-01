import Logo from '../assets/images/logo.svg'

function Header() {
	return (
		<header className='site-header'>
			<div className='container header'>
				<a className='header-logo-link' href='/'>
					<img src={Logo} alt='Site logo' width={203} height={28} />
				</a>
				<nav className='navbar'>
					<a href='#'>About</a>
					<a href='#'>Services</a>
					<a href='#'>Projects</a>
					<a href='#'>Blog</a>
					<a href='#'>About</a>
					<a href='#'>
						Book a call
						<svg
							width='13'
							height='13'
							viewBox='0 0 13 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_1_452)'>
								<path
									d='M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_452'>
									<rect width='13' height='13' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</a>
				</nav>
			</div>
		</header>
	)
}
export default Header
