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
	const computedProps = { ...base, ...props, tailwind, className, name };

	// Render
	switch (type) {
		case 'draft':
		case 'free':
			return <DraftBadge {...computedProps}>{children}</DraftBadge>;

		case 'info':
		case 'warning':
		case 'scheduled':
			return <WarningBadge {...computedProps}>{children}</WarningBadge>;

		case 'pending':
		case 'running':
		case 'seed':
		case 'testing':
			return <PendingBadge {...computedProps}>{children}</PendingBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...computedProps}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'paid':
		case 'won':
			return <FinishedBadge {...computedProps}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
		case 'stopped':
			return <ErrorBadge {...computedProps}>{children}</ErrorBadge>;

		default:
			return <OutlineBadge {...computedProps}>{children}</OutlineBadge>;
	}
};

export const DraftBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.draftBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const PendingBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.pendingBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const WarningBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.warningBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const SuccessBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.successBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const FinishedBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.finishedBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const ErrorBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.errorBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

export const OutlineBadge = ({ id, tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = { ...styles.badge, ...styles.outlineBadge };
	const computedProps = { ...base, ...props, tailwind, className };

	return <Div {...computedProps}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
