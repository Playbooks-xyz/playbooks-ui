import { Span } from 'interface/html';
import * as styles from 'styles';
import { iBadge } from 'types/badge-types';
import { computeBadgeSize } from 'utils';

export const Badge = ({ id, name = 'Badge', type = '', size = 'sm', className, children, ...tailwind }: iBadge) => {
	const base = {
		...styles.badgeBase,
		size: computeBadgeSize(size),
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
		case 'testing':
			return <PendingBadge {...props}>{children}</PendingBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...props}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'paid':
		case 'won':
			return <FinishedBadge {...props}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
		case 'stopped':
			return <ErrorBadge {...props}>{children}</ErrorBadge>;

		default:
			return <OutlineBadge {...props}>{children}</OutlineBadge>;
	}
};

export const DraftBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.draftBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const PendingBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.pendingBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const WarningBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.warningBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const SuccessBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.successBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const FinishedBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.finishedBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const ErrorBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.errorBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

export const OutlineBadge = ({ id, className, children, ...tailwind }: iBadge) => {
	const base = styles.outlineBadgeBase;
	const props = { ...base, ...tailwind, className };

	return <Span {...props}>{children}</Span>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
