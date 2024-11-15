import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideAbout = () => {
	const { intersectionRef } = useIntersectionHook('about');
	return (
		<div className='content-side__about' id='about' ref={intersectionRef}>
			<p className='content-side__about-text'>
				I’m a developer passionate about crafting accessible, pixel-perfect user
				interfaces that blend thoughtful design with robust engineering. My
				favorite work lies at the intersection of design and development,
				creating experiences that not only look great but are meticulously built
				for performance and usability.
			</p>
			<p className='content-side__about-text'>
				Currently, I'm a Senior Front-End Engineer at <span>Klaviyo</span>,
				specializing in accessibility. I contribute to the creation and
				maintenance of UI components that power Klaviyo’s frontend, ensuring our
				platform meets web accessibility standards and best practices to deliver
				an inclusive user experience.
			</p>
			<p className='content-side__about-text'>
				In the past, I've had the opportunity to develop software across a
				variety of settings — from <span>advertising agencies</span> and{' '}
				<span>large corporations</span> to <span>start-ups</span> and{' '}
				<span>small digital product studios.</span> Additionally, I also
				released a <span>comprehensive video course</span> a few years ago,
				guiding learners through building a web app with the Spotify API.
			</p>
			<p className='content-side__about-text'>
				In my spare time, I’m usually climbing, reading, hanging out with my
				wife and two cats, or running around Hyrule searching for
				<span> Korok seeds</span>.
			</p>
		</div>
	);
};

export default ContentSideAbout;
