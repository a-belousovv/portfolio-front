import ContentSideAbout from '../ContentSideAbout/ContentSideAbout';
import ContentSideExperience from '../ContentSideExperience/ContentSideExperience';
import ContentSideProjects from '../ContentSideProjects/ContentSideProjects';
import '/src/components/ContentSide/style.scss';

const ContentSide = () => {
	return (
		<div className='content-side'>
			<ContentSideAbout />
			<ContentSideExperience />
			<ContentSideProjects />
		</div>
	);
};

export default ContentSide;
