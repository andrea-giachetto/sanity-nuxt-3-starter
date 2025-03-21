export const structure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem({
				title: 'Notizie',
				id: 'news',
				schemaType: 'news',
				child: () =>
					S.documentTypeList('news')
						.title('news')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),
			S.divider(),

			S.documentListItem().id('pageHome').schemaType('pageHome'),

			S.divider(),

			S.documentListItem().id('pageTemi').schemaType('pageTemi'),

			S.divider(),

			S.documentListItem().id('pageTags').schemaType('pageTags'),

			S.divider(),

			S.documentListItem().id('pageQuartieri').schemaType('pageQuartieri'),

			S.divider(),

			S.listItem({
				title: 'Temi',
				id: 'tema',
				schemaType: 'tema',
				child: () =>
					S.documentTypeList('tema')
						.title('tema')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),

			S.divider(),

			S.listItem({
				title: 'Tags',
				id: 'tag',
				schemaType: 'tag',
				child: () =>
					S.documentTypeList('tag')
						.title('tag')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),

			S.divider(),

			S.listItem({
				title: 'Quartieri',
				id: 'quartiere',
				schemaType: 'quartiere',
				child: () =>
					S.documentTypeList('quartiere')
						.title('quartiere')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),

			S.divider(),

			S.listItem({
				title: 'Pubblicità',
				id: 'adv',
				schemaType: 'adv',
				child: () =>
					S.documentTypeList('adv')
						.title('adv')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),

			// S.documentListItem().id('pageProjects').schemaType('pageProjects'),

			S.divider(),

			// S.documentListItem().id('siteNav').schemaType('siteNav'),
		])
