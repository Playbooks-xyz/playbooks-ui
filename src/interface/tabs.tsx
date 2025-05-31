import * as theme from '@playbooks/theme';
import { Btn } from 'interface/buttons';
import { FormSelect } from 'interface/forms';
import { Div } from 'interface/html';
import * as types from 'types/tab-types';

export const TabWrapper = ({
	id,
	name = 'TabWrapper',
	tailwind,
	className,
	children,
	...props
}: types.TabWrapperProps) => {
	const base = theme.tabWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TabSelect = ({
	id,
	name = 'TabSelect',
	activeTab,
	onSelect,
	tabs,
	tailwind,
	className,
	children,
	...props
}: types.TabSelectProps) => {
	const base = theme.tabSelect();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FormSelect value={activeTab} options={tabs} onChange={onSelect} {...computed} />;
};

export const Tabs = ({
	id,
	name = 'Tabs',
	activeTab,
	tabs,
	onSelect,
	tailwind,
	className,
	children,
	...props
}: types.TabPropss) => {
	const base = theme.tabs();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<TabWrapper>
			<TabSelect activeTab={activeTab} tabs={tabs} onSelect={e => onSelect(e.target.value)} />
			<Div {...computed}>{children}</Div>
		</TabWrapper>
	);
};

export const Tab = ({
	id,
	name = 'Tab',
	alt = 'select tab',
	variant = 'accent',
	size = 'p-4',
	active,
	value,
	onSelect,
	tailwind,
	className,
	children,
	...props
}: types.TabProps) => {
	const base = theme.tab({ active });
	const computed = { ...base, ...props, tailwind, alt, children, className, name };

	return <Btn variant={variant} onClick={() => onSelect(value)} {...computed} />;
};

export const TabPanes = ({ id, name = 'TabPanes', tailwind, className, children, ...props }: types.TabPanesProps) => {
	const base = theme.tabPanes();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TabPane = ({
	id,
	name = 'TabPane',
	active,
	value,
	tailwind,
	className,
	children,
	...props
}: types.TabPaneProps) => {
	const base = theme.tabPane({ active });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/tabs
