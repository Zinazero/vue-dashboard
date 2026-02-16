import type { User } from '@/shared/types';

export type VerifyAuthResponse = {
	authenticated: boolean;
	user: User | null;
};

export type LoginBody = {
	username: string;
	password: string;
	database: string;
};
