import { Div } from 'interface/html';
import * as styles from 'styles/badge-styles';
import * as types from 'types/badge-types';
import { computeBadgeSize } from 'utils';

export const Badge = ({
	id,
	name = 'Badge',
	type = '',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.BadgeProps) => {
	const base = { ...styles.badge, size: computeBadgeSize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	// Render
	switch (type) {
		case 'draft':
		case 'free':
			return <DraftBadge {...computed}>{children}</DraftBadge>;

		case 'info':
		case 'warning':
		case 'scheduled':
			return <WarningBadge {...computed}>{children}</WarningBadge>;

		case 'pending':
		case 'running':
		case 'seed':
		case 'testing':
			return <PendingBadge {...computed}>{children}</PendingBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...computed}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'paid':
		case 'won':
			return <FinishedBadge {...computed}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
		case 'stopped':
			return <ErrorBadge {...computed}>{children}</ErrorBadge>;

		default:
			return <OutlineBadge {...computed}>{children}</OutlineBadge>;
	}
};

export const DraftBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.draftBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const PendingBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.pendingBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const WarningBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.warningBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const SuccessBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.successBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const FinishedBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.finishedBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const ErrorBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.errorBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

export const OutlineBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.outlineBadge };
	const computed = { ...base, ...props, tailwind, className };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
