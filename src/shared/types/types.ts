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
