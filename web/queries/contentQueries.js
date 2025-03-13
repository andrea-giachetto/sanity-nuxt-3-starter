import {
  contentBlockQuery,
  seoQuery,
  componentsQuery,
} from "@/queries/helperQueries";

export const siteQuery = groq`{
	"temi":  *[_type == "tema"] {
		_id,
		backgroundColor,
		slug,
		title,
		image,
	},
	"quartieri":  *[_type == "quartiere"]{
		_id,
		slug,
		title, 
		image,
	},
	"tags":  *[_type == "tag"]{
		_id,
		slug,
		title,
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
*[_type == 'tema' && slug.current == $slug][0]{
	...,
	content {
		${componentsQuery}
	},
}
`;

export const quartersQuery = groq`
*[_type == 'quartiere' && slug.current == $slug][0]{
	...,
	content {
		${componentsQuery}
	},
}
`;

export const themesPageQuery = groq`
*[_type == 'pageTemi'][0]{
	...,
	content {
		${componentsQuery}
	},
}
`;
export const quartersPageQuery = groq`
*[_type == 'pageQuartieri'][0]{
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
