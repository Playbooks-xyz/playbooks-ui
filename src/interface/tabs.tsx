import { Btn } from 'interface/buttons';
import { FormSelect } from 'interface/forms';
import { Div } from 'interface/html';
import * as styles from 'styles';
import { iTab, iTabPane, iTabPanes, iTabs, iTabSelect, iTabWrapper } from 'types/tab-types';

export const TabWrapper = ({ id, name = 'TabWrapper', className, children, ...tailwind }: iTabWrapper) => {
	const base = styles.tabWrapper;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TabSelect = ({
	id,
	name = 'TabSelect',
	activeTab,
	onSelect,
	tabs,
	className,
	children,
	...tailwind
}: iTabSelect) => {
	const base = styles.tabSelect;
	const props = { ...base, ...tailwind, className, name };

	return <FormSelect value={activeTab} options={tabs} onChange={onSelect} {...props} />;
};

export const Tabs = ({ id, name = 'Tabs', activeTab, tabs, onSelect, className, children, ...tailwind }: iTabs) => {
	const base = styles.tabs;
	const props = { ...base, ...tailwind, className, name };

	return (
		<TabWrapper>
			<TabSelect activeTab={activeTab} tabs={tabs} onSelect={e => onSelect(e.target.value)} />
			<Div {...props}>{children}</Div>
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
	className,
	children,
	...tailwind
}: iTab) => {
	const base = {
		...styles.tab,
		...(active && {
			borderColor: 'border-blue-500 dark:border-cyan-500',
			color: 'text-blue-500 dark:text-cyan-500',
		}),
	};
	const props = { ...base, ...tailwind, alt, children, className, name };

	return <Btn variant={variant} onClick={() => onSelect(value)} {...props} />;
};

export const TabPanes = ({ id, name = 'TabPanes', className, children, ...tailwind }: iTabPanes) => {
	const base = styles.tabPanes;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TabPane = ({ id, name = 'TabPane', active, value, className, children, ...tailwind }: iTabPane) => {
	const base = { ...styles.tabPane, display: active ? 'block' : 'hidden' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/tabs
