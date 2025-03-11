import {
  contentBlockQuery,
  seoQuery,
  linkQuery,
} from "@/queries/helperQueries";

export const siteQuery = groq`{
	"temi":  *[_type == "tema"],
	"quartieri":  *[_type == "quartiere"],
	"tags":  *[_type == "tag"],
}`;

export const homeQuery = groq`*[_type == "pageHome"] | order(_updatedAt desc)[0]{
  ...,
  content {
    components[] {
      ...,
      _type == "UltimeNotizie" => {
        list[] {
          ...,
          // Caso "manual"
          selection == "manual" => {
            news-> {
              tema,
							title,
							backgroundColor,
							image,
							readingTime,
							slug,
							_editedAt       
						}
          },
          // Caso "automatic"
          selection == "automatic" => {
            "news": *[
              _type == "news" &&
              references(
                select(
                  ^.selectBy == "tema" => ^.tema._ref,
                  ^.selectBy == "quartiere" => ^.quartieri._ref,
                  ^.selectBy == "tag" => ^.tags._ref
                )
              )
            ] | order(_editedAt desc)[0]{
              tema,
							title,
							backgroundColor,
							image,
							readingTime,
							slug,
							_editedAt
            }
          }
        }
      },
			_type == "ListaNotizie" => {
				...,
				"news": *[
					_type == "news" &&
					references(
						select(
							^.selectBy == "tema" => ^.tema._ref,
							^.selectBy == "quartiere" => ^.quartieri._ref,
							^.selectBy == "tag" => ^.tags._ref
						)
					)
				] | order(_editedAt desc){
					tema,
					title,
					backgroundColor,
					image,
					readingTime,
					slug,
					_editedAt
				}
			}
    }
  }
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
