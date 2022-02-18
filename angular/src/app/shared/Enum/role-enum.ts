export enum RoleEnum {
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER',
}

export function TranslateRole(role: string): string {
  switch (role) {
    case RoleEnum.ADMINISTRATOR:
      return 'Administrateur';
    case RoleEnum.USER:
      return 'Lecteur';
    default:
      return role;
  }
}
