// documents
import project from './documents/collections/project'
import page from './documents/collections/page'
import articolo from './documents/collections/articolo'
import tema from './documents/collections/tema'
import quartiere from './documents/collections/quartiere'
import tag from './documents/collections/tag'
import adv from './documents/collections/adv'
// singletons
import pageHome from './documents/singletons/pageHome'
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

export const schemaTypes = [
	// collections
	page,
	articolo,
	tema,
	quartiere,
	tag,
	adv,

	...pageComponents,

	// rest
	project,
	pageHome,
	pageContatti,
	siteNav,
	siteOptions,
	editorText,
	editorTextMedia,
	link,
	internalLink,
	picture,
	pictureTitled,
	seo,
	video,
	videoPlayer,

]
