export enum Role {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  USER = "USER",
}
export const RoleHierarchy: { [key in Role]: Role[] } = {
  [Role.ADMIN]: [Role.MODERATOR, Role.USER],
  [Role.MODERATOR]: [Role.USER],
  [Role.USER]: [],
};
export function hasRole(userRoles: Role[], requiredRole: Role): boolean {
  const visited = new Set<Role>();
  const stack = [...userRoles];
      while (stack.length > 0) {
      const currentRole = stack.pop()!;
      if (currentRole === requiredRole) {
          return true;
      }
      if (!visited.has(currentRole)) {
          visited.add(currentRole);
          stack.push(...RoleHierarchy[currentRole]);
      }
      }
      return false;
}
