import NavigationLinks from '../NavigationLinks/NavigationLinks';
import '/src/components/NavigationSide/style.scss';

const NavigationSide = () => {
	return (
		<header className='navigation-side'>
			<div>
				<div className='navigation-side__header'>
					<div className='navigation-side__image'>
						<img src='http://127.0.0.1:5500/img/profile.jpg' alt='' />
					</div>
					<h1 className='navigation-side__title'>Brittany Chiang</h1>
					<h2 className='navigation-side__subtitle'>Front End Engineer</h2>
					<p className='navigation-side__text'>
						I build accessible, pixel-perfect digital experiences for the web.
					</p>
				</div>
				<NavigationLinks />
			</div>
			<div className='navigation-side__socials'>
				<a className='navigation-side__social'>
					<img src='/icons/navigation-side/socials/github-icon.svg' alt='' />
				</a>
				<a className='navigation-side__social'>
					<img src='/icons/navigation-side/socials/linkedin-icon.svg' alt='' />
				</a>
				<a className='navigation-side__social'>
					<img src='/icons/navigation-side/socials/codepen-icon.svg' alt='' />
				</a>
				<a className='navigation-side__social'>
					<img src='/icons/navigation-side/socials/instagram-icon.svg' alt='' />
				</a>
				<a className='navigation-side__social'>
					<img src='/icons/navigation-side/socials/twitter-icon.svg' alt='' />
				</a>
				<a className='navigation-side__social'>
					<img
						src='/icons/navigation-side/socials/good-reads-icon.svg'
						alt=''
					/>
				</a>
			</div>
		</header>
	);
};

export default NavigationSide;
