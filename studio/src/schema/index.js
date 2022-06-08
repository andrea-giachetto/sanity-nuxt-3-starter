// imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// documents
import project from "./documents/collections/project";
import pageText from "./documents/pages/pageText";
import pageHome from "./documents/pages/pageHome";
import pageProjects from "./documents/pages/pageProjects";
import siteOptions from "./documents/site/siteOptions";
import siteNavigation from "./documents/site/siteNavigation";
// content
import contentMinimal from "./content/contentMinimal";
import contentText from "./content/contentText";
import contentTextMedia from "./content/contentTextMedia";
import blockImage from "./content/blocks/blockImage";
import blockLoop from "./content/blocks/blockLoop";
import blockVideo from "./content/blocks/blockVideo";
// objects
import link from "./objects/link";
import picture from "./objects/picture";
import seo from "./objects/seo";
import video from "./objects/video";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		// documents
		project,
		pageText,
		pageHome,
		pageProjects,
		siteOptions,
		siteNavigation,
		// content
		contentMinimal,
		contentText,
		contentTextMedia,
		blockImage,
		blockLoop,
		blockVideo,
		// objects
		link,
		picture,
		seo,
		video,
	]),
});
