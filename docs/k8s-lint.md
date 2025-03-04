---
title: "Azure/k8s-lint"
description: "Lint Kubernetes YAML files using kube-linter in GitHub Actions."
slug: "/docs/k8s-lint"
---

### Description:
This action lints your Kubernetes YAML files using **kube-linter**, a static analysis tool for Kubernetes YAML files. It helps identify issues such as deprecated API versions, missing values, or misconfigured resources.

### Usage:
```yaml
uses: Azure/k8s-lint@v1
with:
  files: '**/*.yaml'
```

### Inputs:
- `files` (required): The path(s) to the Kubernetes manifest files to lint (e.g., `**/*.yaml`).

### Example:
```yaml
steps:
  - name: Lint Kubernetes files
    uses: Azure/k8s-lint@v1
    with:
      files: '**/*.yaml'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/k8s-lint)
:::
