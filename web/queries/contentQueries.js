import {
  contentBlockQuery,
  seoQuery,
  componentsQuery,
} from "@/queries/helperQueries";

export const siteQuery = groq`{
	"temi":  *[_type == "tema"] {
		..., 
	},
	"quartieri":  *[_type == "quartiere"]{
		..., 
	},
	"tags":  *[_type == "tag"]{
		..., 
	},
}`;

export const homeQuery = groq`*[_type == "pageHome"] | order(_updatedAt desc)[0]{
  ...,
  content {
    ${componentsQuery}
  }
}
`;

export const themeQuery = groq`
*[_type == 'tema' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content {
		${componentsQuery}
	},
}
`;

export const pageQuery = groq`
*[_type == 'page' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	${seoQuery}
}
`;

export const projectsQuery = groq`
*[(_type == "pageTemi")] | order(_updatedAt desc) [0]{
	...,
	"projects": *[_type == "project"] | order(title asc, _updatedAt desc) {
		title, slug, subtitle, titleImage{..., asset->}
	},
	${seoQuery}
}
`;

export const singleProjectQuery = groq`
*[_type == 'project' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	titleImage{..., asset->},
	${seoQuery}
}
`;
