import { Logo } from '../../assets/images'
import NavItem from '../../components/NavItem'
import { ArrowRight } from '../../assets/icons'
import './header.css'

function Header() {
	const navList = [
		{
			id: 1,
			title: 'About',
			icon: null,
		},
		{
			id: 2,
			title: 'Services',
			icon: null,
		},
		{
			id: 3,
			title: 'Projects',
			icon: null,
		},
		{
			id: 4,
			title: 'Blog',
			icon: null,
		},
		{
			id: 5,
			title: 'Book a call',
			icon: <ArrowRight />,
		},
	]
	return (
		<header className='site-header'>
			<div className='container header'>
				<a className='header-logo-link' href='/'>
					<img src={Logo} alt='Site logo' width={203} height={28} />
				</a>
				<nav className='navbar'>
					{navList.map(item => (
						<NavItem key={item.id} item={item} />
					))}
				</nav>
			</div>
		</header>
	)
}
export default Header
