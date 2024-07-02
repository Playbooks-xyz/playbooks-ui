import { iBadge } from 'types/badges.types';
import { Span } from 'interface/html';
import { borderProps, computeBadgeSize } from 'tailwind';

export const Badge = ({ id, name = 'Badge', type = '', size = 'sm', className, children, ...tailwind }: iBadge) => {
	const base = {
		size: computeBadgeSize(size),
		...borderProps,
		borderRadius: 'rounded-md',
		flex: 'shrink-0',
		fontFamily: 'font-accent',
		fontSize: 'text-xs',
		fontWeight: 'font-medium',
		space: 'space-x-2',
		textTransform: 'capitalize',
		whitespace: 'whitespace-nowrap',
	};
	const props = { ...base, ...tailwind, className, name };

	// Render
	switch (type) {
		case 'draft':
		case 'free':
			return <DraftBadge {...props}>{children}</DraftBadge>;

		case 'info':
		case 'warning':
		case 'scheduled':
			return <WarningBadge {...props}>{children}</WarningBadge>;

		case 'pending':
		case 'running':
		case 'seed':
			return <PendingBadge {...props}>{children}</PendingBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...props}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'stopped':
		case 'paid':
		case 'testing':
			return <FinishedBadge {...props}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
			return <ErrorBadge {...props}>{children}</ErrorBadge>;

		default:
			return <OutlineBadge {...props}>{children}</OutlineBadge>;
	}
};

export const DraftBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-gray-200 dark:bg-gray-500', color: 'gray-500 dark:gray-100' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const PendingBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-blue-500 dark:bg-blue-500', color: 'white' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const WarningBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-orange-500', color: 'white' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const SuccessBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-green-500 dark:bg-green-500', color: 'white' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const FinishedBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-gray-700 dark:bg-gray-700', color: 'white' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const ErrorBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = { bgColor: 'bg-red-500', color: 'white' };
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const OutlineBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = {
		bgColor: '',
		border: 'border',
		color: 'gray-600 dark:gray-300',
		display: 'flex-inline',
		space: 'space-x-2',
		textTransform: 'capitalize',
	};
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
