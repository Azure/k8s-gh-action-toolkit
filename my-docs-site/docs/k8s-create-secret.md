---
title: "Azure/k8s-create-secret"
description: "Create Kubernetes secrets using GitHub Actions."
slug: "/docs/k8s-create-secret"
---

### Description:
This action creates Kubernetes secrets in your cluster using `kubectl`. You can use it to securely store sensitive information such as passwords, tokens, or keys.

### Usage:
```yaml
uses: Azure/k8s-create-secret@v1
with:
  secret-name: 'my-secret'
  namespace: 'default'
  secrets: '{"mykey": "myvalue"}'
```

### Inputs:
- `secret-name` (required): The name of the secret to create.
- `namespace` (optional): The Kubernetes namespace to store the secret (default is `default`).
- `secrets` (required): A JSON string containing the secret data.

### Example:
```yaml
steps:
  - name: Create Kubernetes secret
    uses: Azure/k8s-create-secret@v1
    with:
      secret-name: 'db-credentials'
      namespace: 'production'
      secrets: '{"username": "xxx", "password": "xxx"}'
```

:::info GitHub Repository
[View on GitHub →](https://github.com/Azure/k8s-create-secret)
:::
