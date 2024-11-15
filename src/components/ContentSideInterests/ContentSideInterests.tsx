import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideInterests = () => {
	const { intersectionRef } = useIntersectionHook('interests');
	return (
		<div
			className='content-side__interests'
			ref={intersectionRef}
			id='interests'
		>
			<h3 className='content-side__interests-title'>Interests</h3>

			<div className='content-side__interests-texts'>
				<p className='content-side__interests-text'>
					Apart from being a web developer, I enjoy most of my time being
					outdoors. In the winter, I am an avid skiier and novice ice climber.
					During the warmer months here in Colorado, I enjoy mountain biking,
					free climbing, and kayaking.
				</p>
				<p className='content-side__interests-text'>
					When forced indoors, I follow a number of sci-fi and fantasy genre
					movies and television shows, I am an aspiring chef, and I spend a
					large amount of my free time exploring the latest technolgy
					advancements in the front-end web development world.
				</p>
			</div>
		</div>
	);
};

export default ContentSideInterests;
