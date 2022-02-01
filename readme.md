# :zap: Ionic Stencil Geo

* Ionic app using Stencil and the [French Gouvernment API](https://geo.api.gouv.fr/) to search for addresses in France
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-stencil-geo?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-stencil-geo?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-stencil-geo?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-stencil-geo?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Stencil Geo](#zap-ionic-stencil-geo)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [API address search](https://geo.api.gouv.fr/adresse) uses the [geocoders geocodespec](https://github.com/geocoders/geocodejson-spec) standard geojson response format
* [Starting a new project](https://stenciljs.com/docs/getting-started) - just type `npm init stencil`, to update Stencil type: `npm install @stencil/core@latest --save-exact`
* The .tsx extension is required since Stencil components are built using JSX and TypeScript. Components can then be used in HTML just like any other tag

## :camera: Screenshots

![Example screenshot](./img/result.jpg)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Stencil v2](https://stenciljs.com/) a Web Component compiler for building fast, reusable UI components and static site generated Progressive Web Apps
* [Stencil component lifecycle](https://stenciljs.com/docs/component-lifecycle) ComponentDidLoad used
* [Ionic 5 open source Ionicons](https://ionicons.com/)

## :floppy_disk: Setup

* Install dependencies by running `npm i`
* `npm run start` to see app on local server - `http://localhost:3333/`
* `npm run build` for a production build of the app
* Serve your `www` folder locally using a local http server and open in your browser.
* [http-server](https://www.npmjs.com/package/http-server) works pretty well for this. You can serve your www folder by running `http-server www`.
* Open the DevTools and look at the network tab.
* Reload the page and you should see all of your files show up in the network tab. Excluding the `sw.js` file, these are the files you want to H2 push.
* Service workers are generated via the Stencil build tool. For more information on how they can be configured, see the [Service Worker docs](https://stenciljs.com/docs/service-workers).
* `npm run start.sw` To generate a Service Worker during dev builds. This will start a dev build and generate a Service Worker as well. For most cases, you'll want to develop your app without generating a Service Worker. But if you'd like to test out Web Push Notifications or Background Sync, you'll need to have one generated.

## :flashlight: Testing

* `npm test` to run the unit tests once
* `npm run test.watch` to run the unit tests and watch for file changes during development
* `https://www.webpagetest.org/easy` with the `Run Lighthouse Audit` option turned on. This will give you an in depth look into your app's load performance on the average device connected to the average network.
For more info on how to use webpagetest check out [this article](https://zoompf.com/blog/2015/07/the-seo-experts-guide-to-web-performance-using-webpagetest-2)

## :computer: Code Examples

* extract from `` tba

```typescript

```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: In work. Accesses gouv data - show in a table - see Angular app.
* To-Do: add interface, display info in table, add input box

## :clap: Inspiration

* [Stencil documentation](https://stenciljs.com/docs/my-first-component)
* [Gouv.fr API](https://geo.api.gouv.fr/) & [API Documentation](https://api.gouv.fr/documentation/api-geo) "Interrogez les référentiels géographiques plus facilement."
* [Geocoders: geocodejson-spec: Github repo](https://github.com/geocoders/geocodejson-spec) DRAFT: attempt to have standard geojson responses from geocoders.

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
