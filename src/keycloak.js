import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "task-manager",
  clientId: "task-app", 
});

export default keycloak; 
