
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue') },
      { path: '/contact',
        component: () => import('pages/contact.vue') },
      { path: '/signup',
        meta: { redirect: true },
        component: () => import('pages/signUp.vue') },
      { path: '/signin',
        meta: { redirect: true },
        component: () => import('pages/signIn.vue') },
      { path: '/dash',
        meta: { requiresAuth: true },
        component: () => import('pages/dash.vue') },
      { path: '/my',
        meta: { requiresAuth: true },
        component: () => import('pages/my.vue') },
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
