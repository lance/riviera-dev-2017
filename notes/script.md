# Brief Minishift Demo Script

## Starting Minishift
* Switch to console. Start minishift and log in using developer account.
  * `minishift start --vm-driver=virtualbox`
  * `minishift oc-env`
  * `minishift openshift version`
  * `oc config use-context minishift`
  * `minishift console`

## Show console and Create a project on the CLI

Show the console and delete the default project. We want to create our own.

* `$ oc new-project bonjour-toute-la-monde`
* `$ oc status`

## Using the Console
* Use built-in Node.js 4.x with the sample Node/Mongo app - build it
* `$ oc status`
* Switch to sample app source code and show what's there
  * https://github.com/openshift/nodejs-ex
  * Show package.json doesn't have any openshift dependencies
  * Show that you can also create and deploy this app via command line as per the README.md
* Return to console and note health check warnings
* Show application home page

Easiest first step is to clone this repo and just do what I did. No problemo! Node.js app with mongodb backend, all preconfigured for you.

Note multiple pods
Scale up mongodb
Scale down mongodb

* All done with templates. Templates can define a few things - application foundations - e.g. node+mongo, but also node versions. Image streams are a type of template that allow customization of the builder images.

OK, that's good. But still, I didn't have a lot of control over the node version.

`cat Dockerfile`

Open base dockerfile https://github.com/bucharest-gold/origin-s2i-nodejs/blob/master/Dockerfile.centos7.onbuild

Note that this docker file installs node, sets some environment variables, etc. Messes with the environment, has knowledge of openshift. But you can still just run the app outside of openshift using this dockerfile. For our application, we have a very simple Dockerfile that extends this.

## Aside - Builder Images

* Switch to slides

## Conrtrolling Your Environmernt
* Custom Dockerfiles

### Show Bonjour app
Custom docker files can be used to have more control over your 
application's runtime environment.

https://cdn.rawgit.com/redhat-helloworld-msa/helloworld-msa/master/readme.html#_deploy_bonjour_nodejs_microservice
https://github.com/redhat-helloworld-msa/bonjour

Show ONBUILD version of docker file.

https://github.com/bucharest-gold/origin-s2i-nodejs/blob/master/centos7/Dockerfile.centos7.onbuild

```sh
$ cd bonjour/
$ oc new-build --binary --name=bonjour -l app=bonjour
$ npm install; oc start-build bonjour --from-dir=. --follow
$ oc new-app bonjour -l app=bonjour
$ oc expose service bonjour
```

This is nice, but it requires you to clutter your application source code with operational, runtime environment stuff that may be sensitive, or just otherwise yucky. Maybe you just don't want docker files to be hanging around your source files - or maybe your organization holds the runtime image keys a little tighter. In any case, there is a solution.

You can customize your minishift - and therefore your production runtime environments with base image streams provided from the community, or your own custom base containers. Here we do this with centos7-s2i-nodejs from bucharest-gold.

https://github.com/bucharest-gold/origin-s2i-nodejs/blob/master/centos7/Dockerfile.centos7.onbuild

* Click Add to Project from project home
* Import YAML/JSON image-streams.json
* Go back to Add to Project, show that it's there as a current Node.js choice

Change to command line - `cd hola`. Then show there is no docker file.

```sh
$ cd bonjour/
$ oc new-build --binary --name=bonjour -l app=bonjour
$ npm install; oc start-build bonjour --from-dir=. --follow
$ oc new-app bonjour -l app=bonjour
$ oc expose service bonjour
```

### Show Hola app

```sh
$ cd hola
$ oc get imagestreams
$ oc new-build --image-stream=centos7-s2i-nodejs:latest --binary --name=hola -l app=hola
$ npm install; oc start-build hola --from-dir=. --follow
$ oc new-app hola -l app=hola
$ oc expose service hola
```


* Using Dockerfiles
* Demonstrate Bonjour app that uses a Dockerfile 

## Builds
* Whenever a code change is detected, this service is built again

* Change project name 'Hello World'
* Simple Hapi project description
* Source: https://github.com/lance/sti-nodejs.git
* Save and go to "Add to Project"
* Talk about polyglot and the various options
* Click Node.js say for now, we're just going to do a simple app
* Expand advanced options and show lots of stuff

TODO: GREP FOR redhat-helloworld-msa and REPLACE