import {
	contentBlockQuery,
	seoQuery,
	linkQuery,
} from "@/queries/helperQueries";

export const siteQuery = groq`{
	"siteOptions": *[_id == "siteOptions"] [0] {
		...,
		footerLinks[] {
			${linkQuery}
		},
		cookieText[]{
			${contentBlockQuery}
		},
		${seoQuery}
	},
	"siteNav": *[_id == "siteNav"] [0] {
		navMain[]{
			${linkQuery}
		},
		navFooter[]{
			${linkQuery}
		},
	},
	"temi":  *[_type == "tema"],
	"quartieri":  *[_type == "quartiere"],
	"tags":  *[_type == "tag"],
}`;

export const homeQuery = groq`*[_type == "pageHome"] | order(_updatedAt desc) [0]{
  ...,
  content {
    components[] {
      ...,
      news1 {
        news-> { 
          ...,
        }
      },
      news2 {
        news-> {
          ...,
        }
      },
      news3 {
        news-> {
          ...,
        }
      },
      news4 {
        news-> {
          ...,
        }
      }
    }
  }
}`;

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
