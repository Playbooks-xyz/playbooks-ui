import { HtmlProps } from 'types';
import { TailwindColProps, TailwindContainerProps } from 'types/tailwind-types';

export type ContainerProps = HtmlProps & TailwindContainerProps;

export type GridProps = HtmlProps & {
	cols?: string;
};

export type ColProps = HtmlProps & TailwindColProps;
