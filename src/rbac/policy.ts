import { Role } from "./roles.js";
import { Permission } from "./permissions.js";

export const RolePolicies: Record<Role, Permission[]> = {
  ADMIN: [
    Permission.CREATE_USER,
    Permission.DELETE_USER,
    Permission.VIEW_USERS,
    Permission.DELETE_POST,
  ],

  MODERATOR: [
    Permission.VIEW_USERS,
    Permission.DELETE_POST,
  ],

  USER: [
    Permission.CREATE_POST,
  ],
};
export function getPermissionsForRole(role: Role): Permission[] {
  return RolePolicies[role] || [];
}
export function canRolePerformPermission(role: Role, permission: Permission): boolean {
  const permissions = getPermissionsForRole(role);
  return permissions.includes(permission);
}
export function getRolesForPermission(permission: Permission): Role[] {
  const roles: Role[] = [];
      for (const role in RolePolicies) {
      if ((RolePolicies[role as Role] ?? []).includes(permission)) {
            roles.push(role as Role);
      }
      }
      return roles;
}