import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideSkills = () => {
	const { intersectionRef } = useIntersectionHook('skills');
	return (
		<div className='content-side__skills' ref={intersectionRef} id='skills'>
			<h3 className='content-side__skills-title'>
				Programming Languages & Tools
			</h3>
			<div className='content-side__skills-items'>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
				<div className='content-side__skills-item'>
					<img src='/icons/content-side/skills/html.png' alt='' />
				</div>
			</div>

			<h4 className='content-side__skills-title'>Workflow</h4>

			<div className='content-side__skills-list'>
				<p className='content-side__skills-item'>
					Mobile-First, Responsive Design
				</p>
				<p className='content-side__skills-item'>
					Mobile-First, Responsive Design
				</p>
				<p className='content-side__skills-item'>
					Mobile-First, Responsive Design
				</p>
				<p className='content-side__skills-item'>
					Mobile-First, Responsive Design
				</p>
			</div>
		</div>
	);
};

export default ContentSideSkills;
