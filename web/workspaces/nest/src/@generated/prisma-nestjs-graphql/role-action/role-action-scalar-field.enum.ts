import { registerEnumType } from '@nestjs/graphql';

export enum RoleActionScalarFieldEnum {
    id = "id",
    name = "name",
    manage = "manage",
    create = "create",
    read = "read",
    update = "update",
    'delete' = "delete"
}


registerEnumType(RoleActionScalarFieldEnum, { name: 'RoleActionScalarFieldEnum', description: undefined })
