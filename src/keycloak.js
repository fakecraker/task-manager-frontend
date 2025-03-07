import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "task-manager",
  clientId: "task-app", // 🔹 Replace with your actual client ID
});

export default keycloak; // 🔹 Export ONLY this single instance
