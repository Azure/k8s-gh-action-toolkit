---
title: "Azure/k8s-set-context"
description: "Set the Kubernetes context in GitHub Actions workflows."
slug: "/docs/k8s-set-context"
---

### Description:
This action sets the **Kubernetes context** for `kubectl`, allowing you to specify which cluster and user to interact with during your GitHub pipeline.

### Usage:
```yaml
uses: Azure/k8s-set-context@v1
with:
  kubeconfig: '${{ secrets.KUBECONFIG }}'
```

### Inputs:
- `kubeconfig` (required): The Kubernetes configuration file (usually stored in secrets) that contains details about your cluster, user, and context.

### Example:
```yaml
steps:
  - name: Set Kubernetes context
    uses: Azure/k8s-set-context@v1
    with:
      kubeconfig: '${{ secrets.KUBECONFIG }}'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/k8s-set-context)
:::
