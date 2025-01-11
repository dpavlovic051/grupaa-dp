const routes = [
  {
    path: '/',
    
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') ,
      component: () => import('pages/ErrorNotFound.vue')},
      { path: '/BiljkaKolokvij',
      component: () => import('pages/BiljkaKolokvij.vue')},
    ]
  },
]

export default routes
