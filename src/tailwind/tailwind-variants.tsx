export const sectionVariant = (variant): any => {
	switch (variant) {
		case 'display':
			return {
				section: {
					border: '',
					spacing: 'py-4',
				},
				sectionHeader: {
					border: '',
					spacing: 'py-4',
				},
				sectionTitle: {
					size: 'h5',
				},
				sectionBody: {
					size: 'lg',
					spacing: 'py-4',
				},
				sectionFooter: {
					border: '',
					display: 'flex-middle',
					spacing: 'py-4',
				},
			};
	}
};
