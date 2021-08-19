export const environment = {
  production: true,
  baseUrl: 'http://localhost:5000/',
    products: {
        getAll: 'products/get-all',
        create: 'products/create',
        edit: 'products/edit',
        delete: 'products/delete',
        getOne: (id: string) => `products/${id}`,
    }
};
