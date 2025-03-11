export const linkQuery = `
	_type == "internalLink" => {
		"linkType": "internalLink",
		"title": coalesce( title,
			linkTarget->title
		),
		"route": select(
			linkTarget->_type == "pageHome" => "index",
			linkTarget->_type == "pageTemi" => "projects",
			linkTarget->_type == "page" => "slug",
			linkTarget->_type == "project" => "projects-slug",
			"index"
		),
		"slug": linkTarget->slug.current
	},
	_type == "link" => {
		...,
		"linkType": "externalLink",
		"title": coalesce(title, href)
	}
`;

export const contentBlockQuery = `
	_type == "block" => {
		...
	},
	_type == "picture" || _type == "pictureTitled" => {
		_type,
		"image": {..., asset->}
	},
	_type == "video" || _type == "videoPlayer" => {
		_type,
		"video": {muxVideo{..., asset->}},
		posterImage {..., asset->}
	},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
		${linkQuery}
	}
`;

export const seoQuery = `
	seo {
		...,
		ogImage{asset->}
	}
`;

export const componentsQuery = `
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
					_editedAt,
					_createdAt       
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
					_editedAt,
					_createdAt
				}
			}
		}
	},
	_type == "ListaNotizie" => {
		...,
		"newsList": *[
			_type == "news" &&
			references(
				select(
					^.selectBy == "tema" => ^.tema._ref,
					^.selectBy == "quartiere" => ^.quartieri._ref,
					^.selectBy == "tag" => ^.tags._ref
				)
			)
		][0...9] | order(_editedAt desc){
			tema,
			title,
			backgroundColor,
			image,
			readingTime,
			slug,
			_editedAt,
			_createdAt
		}
	}
}
`;
