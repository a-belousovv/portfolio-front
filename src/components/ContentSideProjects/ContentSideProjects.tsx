import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideProjects = () => {
	const { intersectionRef } = useIntersectionHook('projects');
	return (
		<div className='content-side__projects' ref={intersectionRef} id='projects'>
			<div className='content-side__project'>
				<div className='content-side__project-image'>
					<img
						src='https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75'
						alt=''
					/>
				</div>
				<div className='content-side__project-info'>
					<h4 className='content-side__project-title'>
						Build a Spotify Connected App{' '}
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='rgba(226, 232, 240, 1)'
								aria-hidden='true'
							>
								<path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
							</svg>
						</span>
					</h4>
					<p className='content-side__project-text'>
						Video course that teaches how to build a web app with the Spotify
						Web API. Topics covered include the principles of REST APIs, user
						auth flows, Node, Express, React, Styled Components, and more.
					</p>
				</div>
			</div>
			<div className='content-side__project'>
				<div className='content-side__project-image'>
					<img
						src='https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75'
						alt=''
					/>
				</div>
				<div className='content-side__project-info'>
					<h4 className='content-side__project-title'>
						Build a Spotify Connected App{' '}
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='rgba(226, 232, 240, 1)'
								aria-hidden='true'
							>
								<path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
							</svg>
						</span>
					</h4>
					<p className='content-side__project-text'>
						Video course that teaches how to build a web app with the Spotify
						Web API. Topics covered include the principles of REST APIs, user
						auth flows, Node, Express, React, Styled Components, and more.
					</p>
				</div>
			</div>
			<div className='content-side__project'>
				<div className='content-side__project-image'>
					<img
						src='https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75'
						alt=''
					/>
				</div>
				<div className='content-side__project-info'>
					<h4 className='content-side__project-title'>
						Build a Spotify Connected App{' '}
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='rgba(226, 232, 240, 1)'
								aria-hidden='true'
							>
								<path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
							</svg>
						</span>
					</h4>
					<p className='content-side__project-text'>
						Video course that teaches how to build a web app with the Spotify
						Web API. Topics covered include the principles of REST APIs, user
						auth flows, Node, Express, React, Styled Components, and more.
					</p>
				</div>
			</div>
			<div className='content-side__project'>
				<div className='content-side__project-image'>
					<img
						src='https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75'
						alt=''
					/>
				</div>
				<div className='content-side__project-info'>
					<h4 className='content-side__project-title'>
						Build a Spotify Connected App{' '}
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='rgba(226, 232, 240, 1)'
								aria-hidden='true'
							>
								<path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
							</svg>
						</span>
					</h4>
					<p className='content-side__project-text'>
						Video course that teaches how to build a web app with the Spotify
						Web API. Topics covered include the principles of REST APIs, user
						auth flows, Node, Express, React, Styled Components, and more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContentSideProjects;
