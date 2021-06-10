import { registerApplication, start } from "single-spa";

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

registerApplication({
  name: "@single-spa-test/app-react",
  app: () => System.import("@single-spa-test/app-react"),
  activeWhen: showWhenPrefix(["/"]),
});

registerApplication({
  name: "@practice-org/microfrontend-exercise-app-three",
  app: () => System.import("@practice-org/microfrontend-exercise-app-three"),
  activeWhen: showWhenAnyOf(["/login"]),
});

registerApplication({
  name: "@practice-org/microfrontend-exercise-app-two",
  app: () => System.import("@practice-org/microfrontend-exercise-app-two"),
  activeWhen: showWhenPrefix(["/page1"]),
});

registerApplication({
  name: "@practice-org/microfrontend-exercise-app-one",
  app: () => System.import("@practice-org/microfrontend-exercise-app-one"),
  activeWhen: showWhenAnyOf(["/main"]),
});

start({
  urlRerouteOnly: true,
});
