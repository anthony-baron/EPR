// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl:  "https://my.api.mockaroo.com/",
  //baseGoogleApiURL: "https://maps.googleapis.com/maps/api/"
  baseGoogleApiURL: "https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyDkDZe8Z9ucJ1_8OR5lFAuJNTcKRFaTpeg"

  //AIzaSyDkDZe8Z9ucJ1_8OR5lFAuJNTcKRFaTpeg
  //https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
