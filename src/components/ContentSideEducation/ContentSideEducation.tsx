import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideEducation = () => {
	const { intersectionRef } = useIntersectionHook('education');
	return (
		<div
			ref={intersectionRef}
			className='content-side__education'
			id='education'
		>
			<div className='content-side__education__items'>
				<div className='content-side__education__item'>
					<div className='content-side__education__item-left'>
						<h3 className='content-side__education__item-title'>
							University of Colorado Boulder
						</h3>
						<h4 className='content-side__education__item-subtitle'>
							Bachelor of Science
						</h4>
						<p className='content-side__education__item-text'>
							Computer Science - Web Development Track
						</p>
						<p className='content-side__education__item-text'>GPA: 3.23</p>
					</div>
					<div className='content-side__education__item-right'>
						<p className='content-side__education__item-date'>
							August 2006 - May 2010
						</p>
					</div>
				</div>
				<div className='content-side__education__item'>
					<div className='content-side__education__item-left'>
						<h3 className='content-side__education__item-title'>
							University of Colorado Boulder
						</h3>
						<h4 className='content-side__education__item-subtitle'>
							Bachelor of Science
						</h4>
						<p className='content-side__education__item-text'>
							Computer Science - Web Development Track
						</p>
						<p className='content-side__education__item-text'>GPA: 3.23</p>
					</div>
					<div className='content-side__education__item-right'>
						<p className='content-side__education__item-date'>
							August 2006 - May 2010
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentSideEducation;
