import { LinkType } from 'types';

export type iLink = LinkType;

export type iLinkShared = iLink & {
	alt?: string;
	span?: any;
};
