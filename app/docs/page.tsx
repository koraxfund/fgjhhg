import { siteData } from '../../lib/site-data';

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-lg mb-8">Welcome to the fgjhhg documentation. Here you will find in-depth information about the project's architecture, tokenomics, security model, and how to participate as a builder. Documentation will expand as features launch and contracts go live.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p>{siteData.about.description}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
        <ul className="list-disc ml-6">
          {siteData.tokenomics.map((item) => (
            <li key={item.title}><strong>{item.title}:</strong> {item.value}</li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
        <ul className="list-disc ml-6">
          {siteData.roadmap.map((item, idx) => (
            <li key={idx}><strong>{item.title}:</strong> {item.description}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Participation Guide</h2>
        <p>Participation guides, contract interfaces, and builder tutorials will be published post-launch. Please monitor official updates for the latest information.</p>
      </section>
    </div>
  );
}
