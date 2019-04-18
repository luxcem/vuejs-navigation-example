// 1. Définissez les composants de route.
// Ces derniers peuvent être importés depuis d'autre fichier
const Step1 = { template: "<div>Step 1</div>" };
const Step2 = { template: "<div>Step 2</div>" };
const Step3 = { template: "<div>Step 3</div>" };
const Step4 = { template: "<div>Step 4</div>" };

// 2. Définissez des routes.
// Chaque route doit correspondre à un composant.
const routes = [
  { path: "/step-1", component: Step1 },
  { path: "/step-2", component: Step2 },
  { path: "/step-3", component: Step3 },
  { path: "/step-4", component: Step4 }
];

// 3. Créez l'instance du routeur et passez l'option `routes`.
// Vous pouvez également passer des options supplémentaires,
// mais nous allons faire simple pour l'instant.
const router = new VueRouter({
  routes // raccourci pour `routes: routes`
});

// 5. Créez et montez l'instance de Vue.
// Soyez sûr d'injecter le routeur avec l'option `router` pour
// permettre à l'application tout entière d'être à l'écoute du routeur.
const app = new Vue({
  data() {
    return {};
  },
  router
}).$mount("#app");
