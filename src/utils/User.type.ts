export type rowUserT = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telegram: string;
  date: string;
  phone: string;
  city: string;
  directionId: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  statusId: 1 | 2 | 3 | 4;
  roleId: number;
};

export type UserT = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telegram: string;
  date: string;
  phone: string;
  city: string;
  directionId: string;
  statusId: string;
  roleId: string;
};
