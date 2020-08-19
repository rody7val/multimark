
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // home
      { path: '',
        component: () => import('pages/Index.vue') },
      { path: '/contact',
        component: () => import('pages/contact.vue') },
      // auth
      { path: '/signup',
        meta: { redirect: true },
        component: () => import('pages/signUp.vue') },
      { path: '/signin',
        meta: { redirect: true },
        component: () => import('pages/signIn.vue') },
      // admin
      { path: '/dash',
        meta: { requiresAuth: true },
        component: () => import('pages/dash.vue') },
      { path: '/my',
        meta: { requiresAuth: true },
        component: () => import('pages/my.vue') },
      { path: '/items',
        meta: { requiresAuth: true },
        component: () => import('pages/items.vue') },
      { path: '/orders',
        meta: { requiresAuth: true },
        component: () => import('pages/orders.vue') },
      { path: '/users',
        meta: { requiresAuth: true },
        component: () => import('pages/users.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
