import { AccentBtn, Btn } from 'interface/buttons';
import { FormSelect } from 'interface/forms';
import { Div } from 'interface/html';
import { iTab, iTabPane, iTabPanes, iTabs, iTabSelect, iTabWrapper } from 'interface/tabs.types';

export const TabWrapper = ({ id, name = 'TabWrapper', className, children, ...tailwind }: iTabWrapper) => {
	const base = { width: 'w-full' };
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
	const base = { border: 'border-1', borderRadius: '', sm: 'sm:hidden' };
	const props = { ...base, ...tailwind, className, name };

	return <FormSelect value={activeTab} options={tabs} onChange={onSelect} {...props} />;
};

export const Tabs = ({ id, name = 'Tabs', activeTab, tabs, onSelect, className, children, ...tailwind }: iTabs) => {
	const base = { display: 'flex-start', space: 'space-x-0' };
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
	type = 'accent',
	size = 'p-4',
	active,
	value,
	onSelect,
	className,
	children,
	...tailwind
}: iTab) => {
	const base = {
		bgColor: 'h:bg-gray-100 dark:h:bg-gray-700',
		border: 'border-b-4',
		borderColor: active
			? 'border-blue-500 dark:border-orange-500'
			: 'border-transparent h:border-gray-300 dark:h:border-gray-600',
		color: active ? 'blue-500 dark:orange-500' : 'gray-700 dark:gray-200',
		borderRadius: 'rounded-none',
		grid: 'hidden sm:block',
		zIndex: 'z-10',
	};
	const props = { ...base, ...tailwind, className, name };

	switch (type) {
		case 'accent':
			return (
				<AccentBtn size={size} onClick={() => onSelect(value)} {...props}>
					{children}
				</AccentBtn>
			);

		default:
			return (
				<Btn size={size} onClick={() => onSelect(value)} {...props}>
					{children}
				</Btn>
			);
	}
};

export const TabPanes = ({ id, name = 'TabPanes', className, children, ...tailwind }: iTabPanes) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TabPane = ({ id, name = 'TabPane', active, value, className, children, ...tailwind }: iTabPane) => {
	const base = { display: active ? 'block' : 'hidden' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/tabs
