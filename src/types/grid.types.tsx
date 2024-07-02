import { HtmlType } from 'types';
import { TailwindColType, TailwindContainerType } from 'types/tailwind-type';

export type iContainer = HtmlType & TailwindContainerType;

export type iGrid = HtmlType;

export type iCol = HtmlType & TailwindColType;
