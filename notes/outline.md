# NODE.JS ON OPENSHIFT FOR YOUR ENTERPRISE

For many companies, making the switch to microservices can be a big change. There are new architectures and patterns to consider, dev ops challenges, and the cloud. Red Hat’s OpenShift is not just for Java developers. If you want to learn more about Node.js on OpenShift, this session will break it all down for you. I will discuss what Node.js offerings are available through OpenShift, and how to quickly get up and running with a simple application.

But, of course, your business does not run on toy applications, and so we will dig a little deeper to learn how to deploy resilient, load balanced Node.js microservices on OpenShift. Touching on clustering, service discovery, and how your Node microservices can participate as an equal in an enterprise Java ecosystem.

---

## Enterprise Architecture

![Enterprise Architecture](enterprise.jpg)

---

## Enterprise Architecture

### Nah, I'm good

---

## What are Microservices

Lots of definitions out there. This is the most succinct, I think.

> Applications composed of small, independenly deployable services communicating
> over the network, usually with HTTP, transferring data/state between them,
> usually with JSON.

---

## Software Development Challenges in the Cloud

* Operational complexity
* Service discovery
* Failure discovery
* Transitive dependencies
* Resiliency, recovery, elasticity
* Understanding performance metrics
* Behavioral statistics
  * Latency
  * Timeouts
  * Failures
  * Successes
  * Fallback

---

## Why Node.js instead of Java?
* If you're here, hopefully you already know?

---

## Why use OpenShift?
* Existing RHT middleware
* Online, on premise, developer
* Failover/redundancy
* Configure the application not the application server
* Resource isolation
* Polyglot
* Continuous delivery/application pipeline
* Configuration through environment

---

## OpenShift Building Blocks

* Kubernetes
* Openshift Origin
* Openshift CLI
* S2i builder images
* Docker ONBUILD
* GitHub integration

Show relationship between these graphically

---

## Developer Tools

* Minishift
* CDK
* Openshift Online

---

## Demonstrate online

---

## Demonstrate minishift

* Start minishift
  * `minishift start --vm-driver=virtualbox`
  * 
  ```sh
     OpenShift server started.
     The server is accessible via web console at:
       https://192.168.99.100:8443
  ```
* Show built-in builder images
* Show built-in skeleton apps
* Show web console
![Node.js / MongoDB Skeleton](ui.png)

### TODO: Create my own example application

---

## What You Get and How to Improve It

* Note node.js version available
* Discuss alternatives (origin-s2i-nodejs, origin-nodejs)
* Show alternatives on CLI
* Show import of alternatives into user interface

---

* Build sample application - products
* Build sample application - pricing
* Show service discovery via DNS
* Show killing an instance and how OpenShift restarts it
* Briefly discuss pods and how that all works

---

## µ-Service Patterns

* Health Checks
  * https://docs.openshift.com/enterprise/3.0/dev_guide/application_health.html
* Circuit Breaker / Bulkhead
* Distributed Tracing

---

## Tools and Monitors

* Hystrix Dashboard
* Quick install of dashboard
* Link application to dashboard
* Show stats
* OpenShift build pipeline

## Other Java Middleware

* Keycloak
* Infinispan

## Data storage

* Redis
* MySQL
* Etc.

## Caveats
