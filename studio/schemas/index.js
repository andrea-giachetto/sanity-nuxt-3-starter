// documents
import project from './documents/collections/project'
import page from './documents/collections/page'
import news from './documents/collections/news'
import tema from './documents/collections/tema'
import quartiere from './documents/collections/quartiere'
import tag from './documents/collections/tag'
import adv from './documents/collections/adv'
// singletons
import pageHome from './documents/singletons/pageHome'
import pageTemi from './documents/singletons/pageTemi'
import pageContatti from './documents/singletons/pageContatti'
import siteNav from './documents/site/siteNav'
import siteOptions from './documents/site/siteOptions'
// content
import editorText from './content/editors/editorText'
import editorTextMedia from './content/editors/editorTextMedia'
// objects
import link from './objects/link'
import internalLink from './objects/internalLink'
import picture from './objects/picture'
import pictureTitled from './objects/pictureTitled'
import seo from './objects/seo'
import video from './objects/video'
import videoPlayer from './objects/videoPlayer'
// components
import pageComponents from '../schemas/documents/pageComponents'
import pageTags from './documents/singletons/pageTags'
import pageQuartieri from './documents/singletons/pageQuartieri'
import blockContent from './objects/blockContent'
import { newsType } from './types/news.type'

export const schemaTypes = [
	newsType,

	// collections
	page,
	news,
	tema,
	quartiere,
	tag,
	adv,

	...pageComponents,

	// rest
	//project,
	pageHome,
	pageTemi,
	pageTags,
	pageQuartieri,
	pageContatti,
	siteNav,
	siteOptions,

	// content
	blockContent,
	//editorText,
	//editorTextMedia,
	link,
	internalLink,
	picture,
	pictureTitled,
	seo,
	//video,
	//videoPlayer,

]
