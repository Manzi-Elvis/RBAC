export enum Permission {
  CREATE_USER = "CREATE_USER",
  DELETE_USER = "DELETE_USER",
  VIEW_USERS = "VIEW_USERS",

  CREATE_POST = "CREATE_POST",
  DELETE_POST = "DELETE_POST",
}

export const ALL_PERMISSIONS: Permission[] = [
  Permission.CREATE_USER,
  Permission.DELETE_USER,
  Permission.VIEW_USERS,
  Permission.CREATE_POST,
  Permission.DELETE_POST,
];
export const DEFAULT_PERMISSIONS: Permission[] = [
  Permission.VIEW_USERS,
  Permission.CREATE_POST,
];
export const ADMIN_PERMISSIONS: Permission[] = [...ALL_PERMISSIONS];
export const MODERATOR_PERMISSIONS: Permission[] = [
  Permission.VIEW_USERS,
  Permission.DELETE_POST,
];
export const USER_PERMISSIONS: Permission[] = [
  Permission.VIEW_USERS,
  Permission.CREATE_POST,
];
export const GUEST_PERMISSIONS: Permission[] = [];
export const PERMISSION_ROLES: { [key in Permission]: string[] } = {
      [Permission.CREATE_USER]: ["ADMIN"],
      [Permission.DELETE_USER]: ["ADMIN"],
      [Permission.VIEW_USERS]: ["ADMIN", "MODERATOR", "USER"],
      [Permission.CREATE_POST]: ["ADMIN", "USER"],
      [Permission.DELETE_POST]: ["ADMIN", "MODERATOR"],
};