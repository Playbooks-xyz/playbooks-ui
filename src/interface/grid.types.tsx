import { HtmlType } from 'types';
import { TailwindColType, TailwindContainerType } from 'types/tailwind.types';

export type iContainer = HtmlType & TailwindContainerType;

export type iGrid = HtmlType & {
  cols?: string;
}

export type iCol = HtmlType & TailwindColType;
