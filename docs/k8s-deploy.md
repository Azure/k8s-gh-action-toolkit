---
title: "Azure/k8s-deploy"
description: "Deploy Kubernetes manifests using GitHub Actions."
slug: "/docs/k8s-deploy"
---

### Description:
This action deploys a Kubernetes manifest to a cluster. It automates the process of applying your Kubernetes resources using `kubectl`.

### Usage:
```yaml
uses: Azure/k8s-deploy@v1
with:
  namespace: 'default'
  manifests: 'k8s/deployment.yaml'
```

### Inputs:
- `namespace` (optional): The Kubernetes namespace where the resources will be deployed (default is `default`).
- `manifests` (required): The path to the Kubernetes manifest files to be deployed.

### Example:
```yaml
steps:
  - name: Deploy to Kubernetes
    uses: Azure/k8s-deploy@v1
    with:
      namespace: 'production'
      manifests: 'k8s/*.yaml'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/k8s-deploy)
:::
