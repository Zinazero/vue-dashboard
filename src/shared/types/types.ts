import type { DepartmentId, Position } from './departments.domain';

export type RoleLevel = 0 | 1 | 2 | 3 | 4;
export type User = {
	id: number;
	username: string;
	clubId: number;
	employeeId: number;
	roleLevel: RoleLevel;
	name: string;
	position: Position;
	departmentId: DepartmentId;
	email: string;
	phoneNumber: string;
	database: string;
};

export type Employee = {
	employeeId: number;
	name: string;
	active: boolean;
	fullTime: boolean;
	email: string;
	phoneNumber: string;
	initials: string;
	position: Position;
	departmentId: DepartmentId;
	hourWarningEnabled: boolean;
	orderId: number;
	totalHours: number;
	s_monday: string;
	s_tuesday: string;
	s_wednesday: string;
	s_thursday: string;
	s_friday: string;
	s_saturday: string;
	s_sunday: string;
	a_monday: string;
	a_tuesday: string;
	a_wednesday: string;
	a_thursday: string;
	a_friday: string;
	a_saturday: string;
	a_sunday: string;
};
