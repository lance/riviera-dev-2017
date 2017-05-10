/**
 * JBoss, Home of Professional Open Source
 * Copyright 2016, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const os = require('os');
const fs = require('fs');

const express = require('express');
const router = express.Router();

// authorized routes
const Keycloak = require('keycloak-connect');

// business logic
const sayHola = () => `Hola de ${os.hostname()}`;

// Define routes
router.routes = (store) => {
  router.get('/hola', (req, resp) => resp.type('text/plain').send(sayHola()));

  router.get('/health', (req, resp) => {
    resp.type('text/plain').send('I am ok');
  });

  router.get('/hola-chaining', (req, resp) => {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.type('application/json').send({
      service: 'hola',
      greeting: sayHola()
    });
  });

  // Configure keycloak based on keycloak.json and the KEYCLOAK_AUTH_SERVER_URL env var
  const customKeyCloakConfig = JSON.parse(fs.readFileSync(`${__dirname}/keycloak.json`).toString());
  customKeyCloakConfig.authServerUrl = process.env.KEYCLOAK_AUTH_SERVER_URL;
  const keycloak = new Keycloak({ scope: 'USERS', store }, customKeyCloakConfig);

  // add a logout route
  router.use(keycloak.middleware({ logout: '/logout' }));

  // add a secured route
  router.get('/hola-secured', keycloak.protect(),
    (req, resp) => resp
      .type('text/plain')
      .send(`This is a Secured resource. You're logged as ${req.kauth.grant.access_token.content.name}`));

  return router;
};

module.exports = exports = router;
