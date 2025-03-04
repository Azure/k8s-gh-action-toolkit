---
title: "Azure/setup-kubectl"
description: "Install and use kubectl for Kubernetes in GitHub Actions."
slug: "/docs/setup-kubectl"
---

### Description:
This action sets up **kubectl**, the command-line tool for interacting with Kubernetes clusters, on the runner. It enables you to interact with your Kubernetes clusters within your CI/CD pipelines.

### Usage:
```yaml
uses: Azure/setup-kubectl@v1
with:
  kubectl-version: 'v1.21.0'
```

### Inputs:
- `kubectl-version` (optional): The version of `kubectl` to install (default is the latest stable version).

### Example:
```yaml
steps:
  - name: Set up kubectl
    uses: Azure/setup-kubectl@v1
    with:
      kubectl-version: 'v1.21.0'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/setup-kubectl)
:::
