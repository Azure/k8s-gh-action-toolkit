---
title: "Azure/setup-helm"
description: "Install and use Helm for Kubernetes in GitHub Actions."
slug: "/docs/setup-helm"
---

### Description:
This action sets up **Helm**, a package manager for Kubernetes, on the runner. It allows you to interact with Kubernetes clusters using Helm to install, upgrade, or manage charts.

### Usage:
```yaml
uses: Azure/setup-helm@v1
with:
  helm-version: 'v3.7.0'
```

### Inputs:
- `helm-version` (optional): The version of Helm to install (default is the latest stable version).

### Example:
```yaml
steps:
  - name: Set up Helm
    uses: Azure/setup-helm@v1
    with:
      helm-version: 'v3.7.0'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/setup-helm)
:::
