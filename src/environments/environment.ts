// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDAE2fxNxWQ1F4kEwcvSHadOU4kan9AMog",
    authDomain: "ng-blog-4ad8d.firebaseapp.com",
    databaseURL: "https://ng-blog-4ad8d.firebaseio.com",
    projectId: "ng-blog-4ad8d",
    storageBucket: "ng-blog-4ad8d.appspot.com",
    messagingSenderId: "812830157790"
  }
};
