import {
  DEPARTMENTID_TO_DEPARTMENT,
  DEPARTMENTS,
  type Department,
  type DepartmentId,
  POSITION_TO_DEPARTMENT,
  type Position,
} from './departments.domain';

// Get Department
export const getDepartmentByPosition = (position: Position): Department => POSITION_TO_DEPARTMENT[position];
export const getDepartmentByDepartmentId = (id: DepartmentId): Department => DEPARTMENTID_TO_DEPARTMENT[id];

// Get Department Id
export const getDepartmentIdByPosition = (position: Position): DepartmentId =>
  DEPARTMENTS[getDepartmentByPosition(position)].id;
export const getDepartmentIdByDepartment = (department: Department): DepartmentId =>
  DEPARTMENTS[department].id;

// Validation
export const isPosition = (value: string): value is Position => value in POSITION_TO_DEPARTMENT;
export const isDepartment = (value: string): value is Department => value in DEPARTMENTS;
export const isDepartmentId = (value: number): value is DepartmentId =>
  Object.values(DEPARTMENTS).some((dept) => dept.id === value);
