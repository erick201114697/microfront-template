import { registerApplication, start } from "single-spa";

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

registerApplication({
  name: "@practice-org/microfrontend-exercise-app-two",
  app: () => System.import("@practice-org/microfrontend-exercise-app-two"),
  activeWhen: ["/page1"]
});

 registerApplication({
   name: "@practice-org/microfrontend-exercise-app-one",
   app: () => System.import("@practice-org/microfrontend-exercise-app-one"),
   activeWhen: ["/"]
 });


start({
  urlRerouteOnly: true,
});
