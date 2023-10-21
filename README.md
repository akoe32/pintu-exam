# pintu-exam
Repo for Pintu SRE exam
<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">SRE Exam: 2 Backend API</h3>
  <p align="center">
  </p>
</p>

### Flow Diagram

a![flow-k8s](https://github.com/akoe32/pintu-exam/assets/19146909/b5c63401-704d-4291-a72d-56985f017635)

### What's inside this repo?

- Backend apps:
  - Golang - golang-rest-trial
  - Nodejs - nodejs-boilerplate
- Helm Charts for backend apps.

### Infra Technology

- VPS with specs:
  - 2vcpu
  - 2gb RAM
  - 40gb Disk
- Kubernetes Cluster with Microk8s 
- Helm as kubernetes manifest

## Getting Started

To get a local copy up and running follow these simple steps :

### Prerequisites

To run this project, you'll need to have the following installed:

- kubernetes cluster with microk8s - https://microk8s.io/docs/getting-started
- Helm - https://helm.sh/docs/intro/install/

### Run With Helm

## Golang Backend

```sh
helm install [RELEASE_NAME] -f charts/backend-apps/values-golang-rest-trial.yaml
```

## Nodejs Backend

```sh
helm install [RELEASE_NAME] -f charts/backend-apps/values-nodejs-boilerplate.yaml
```


