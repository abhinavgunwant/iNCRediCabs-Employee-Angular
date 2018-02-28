// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: "http://localhost:7000/api/",
  loginUrl: "http://localhost:8080/iNCRediCabs/login",
  logoutUrl: "http://localhost:8080/iNCRediCabs/logout",
  checkLoginUrl: "http://localhost:8080/iNCRediCabs/check-login-status",
  addEmployeeUrl: "http://localhost:8080/iNCRediCabs/add-employee",
  activateEmployeeUrl: "http://localhost:8080/iNCRediCabs/activate-employee",
  deactivateEmployeeUrl: "http://localhost:8080/iNCRediCabs/deactivate-employee",
  editEmployeeUrl: "http://localhost:8080/iNCRediCabs/edit-employee",
  viewEmployeeUrl: "http://localhost:8080/iNCRediCabs/view-employee",
  getManagerByNameUrl: "http://localhost:8080/iNCRediCabs/get-manager-by-name",
  getAllManagersUrl: "http://localhost:8080/iNCRediCabs/get-all-managers"//,
  // checkManager: ""
};
