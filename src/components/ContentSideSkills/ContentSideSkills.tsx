import { useGetTechnologies } from '../../hooks/useGetTechnologies';
import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideSkills = () => {
	const { intersectionRef } = useIntersectionHook('skills');

	const skills = useGetTechnologies();
	return (
		<div className='content-side__skills' ref={intersectionRef} id='skills'>
			<h3 className='content-side__skills-title'>
				Programming Languages & Tools
			</h3>
			<div className='content-side__skills-items'>
				{skills.map((skill) => {
					return (
						<div className='content-side__skills-item' key={skill.id}>
							<img src={skill.icon} alt='' />
						</div>
					);
				})}
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
