import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="page">
    <section class="card">
      <p class="eyebrow">Vite + Docker</p>
      <h1>Sample project running on port 4600</h1>
      <p class="copy">
        This app is ready to run locally with Vite or inside a Docker container.
      </p>
      <div class="actions">
        <code>npm run dev</code>
        <code>docker run -p 4600:4600 vite-docker-sample</code>
      </div>
    </section>
  </main>
`;
