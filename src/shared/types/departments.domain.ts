export const DEPARTMENTS = {
  management: {
    id: 1,
    positions: ['GM', 'EM', 'OPM', 'PTM', 'GFM', 'MES'] as const,
  },
  sales: {
    id: 2,
    positions: ['AR'] as const,
  },
  experience: {
    id: 3,
    positions: ['MEA'] as const,
  },
  facilities: {
    id: 4,
    positions: ['FT', 'MT', 'FA'] as const,
  },
} as const;

export type Department = keyof typeof DEPARTMENTS;
export type DepartmentId = (typeof DEPARTMENTS)[Department]['id'];
export type Position = (typeof DEPARTMENTS)[Department]['positions'][number];

export const POSITION_TO_DEPARTMENT: Record<Position, Department> = Object.entries(DEPARTMENTS).reduce(
  (acc, [department, { positions }]) => {
    positions.forEach((pos) => {
      acc[pos as Position] = department as Department;
    });
    return acc;
  },
  {} as Record<Position, Department>,
);

export const DEPARTMENTID_TO_DEPARTMENT: Record<DepartmentId, Department> = Object.entries(
  DEPARTMENTS,
).reduce(
  (acc, [department, { id }]) => {
    acc[id] = department as Department;
    return acc;
  },
  {} as Record<DepartmentId, Department>,
);

// ---- Freeze objects for runtime safety ----
Object.values(DEPARTMENTS).forEach(({ positions }) => {
  Object.freeze(positions);
});
Object.values(DEPARTMENTS).forEach((dept) => {
  Object.freeze(dept);
});
Object.freeze(DEPARTMENTS);
Object.freeze(POSITION_TO_DEPARTMENT);
Object.freeze(DEPARTMENTID_TO_DEPARTMENT);
