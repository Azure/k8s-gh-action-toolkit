import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const cardStyle = {
  background: '#F8FAFC',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  color: '#1E293B',
  fontWeight: 'bold',
  transition: '0.2s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function Home() {
  return (
    <Layout title="Kubernetes GitHub Action Toolkit" description="Automate Kubernetes workflows using GitHub Actions.">
      <main className={styles.main}>
        
        {/* Hero Section */}
        <h1 className={styles.title}>Kubernetes GitHub Action Toolkit 🚀</h1>
        <p className={styles.subtitle}>
          A collection of GitHub Actions to streamline Kubernetes deployments, security, and automation.
        </p>

        {/* Call-to-Action Button */}
        <Link to="/docs/k8s-create-secret" className={clsx(styles.button, styles.primaryButton)}>
          📖 View Documentation
        </Link>

        {/* Quick Navigation to Docs */}
        <div className={styles.grid}>
          <Link to="/docs/k8s-create-secret" className={styles.card}>
            <h3>🔐 k8s-create-secret</h3>
            <p>Create and manage Kubernetes secrets.</p>
          </Link>

          <Link to="/docs/k8s-deploy" className={styles.card}>
            <h3>🚀 k8s-deploy</h3>
            <p>Deploy Kubernetes manifests easily.</p>
          </Link>

          <Link to="/docs/k8s-lint" className={styles.card}>
            <h3>🔍 k8s-lint</h3>
            <p>Lint Kubernetes YAML files for best practices.</p>
          </Link>

          <Link to="/docs/k8s-set-context" className={styles.card}>
            <h3>🌐 k8s-set-context</h3>
            <p>Set Kubernetes context for workflows.</p>
          </Link>

          <Link to="/docs/setup-helm" className={styles.card}>
            <h3>⚓ setup-helm</h3>
            <p>Install and use Helm for Kubernetes.</p>
          </Link>

          <Link to="/docs/setup-kubectl" className={styles.card}>
            <h3>📦 setup-kubectl</h3>
            <p>Install and use `kubectl` in GitHub Actions.</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
