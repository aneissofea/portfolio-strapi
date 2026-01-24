import type {Core} from '@strapi/strapi';

// add default superadmin user with email: `superadmin@os.my` and password `password`
export async function addSuperadmin(strapi: Core.Strapi) {
  const admins = await strapi.admin.services.user.count();

  if (admins === 0) {
    try {
      await strapi.admin.services.user.create({
        firstname: 'Super',
        lastname: 'Admin',
        email: 'superadmin@os.my',
        password: 'Secret!01',
        isActive: true,
        roles: [1], // Assumes the Super Admin role has an ID of 1
      });
      console.log('Super Admin user created');
    } catch (error) {
      console.error('Could not create super admin user:', error);
    }
  }
}