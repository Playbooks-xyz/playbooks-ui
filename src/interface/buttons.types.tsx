import { BtnType } from 'types';

export type iBtn = BtnType;

export type iBtnShared = iBtn & {
	alt?: string;
	span?: any;
};
