import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getProject, projects } from "../../projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  return { title: project ? `${project.name} — Acep Alinurdin` : "Proyek — Acep Alinurdin" };
}

async function ProjectDetailContent({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link className={styles.wordmark} href="/" aria-label="Acep Alinurdin, kembali ke beranda">
          <img src="/p.png" alt="Acep Alinurdin" width="32" height="32" className={styles.navAvatar} />
          <span className={styles.wordmarkName}>Acep Alinurdin</span>
        </Link>
        <nav aria-label="Navigasi" className={styles.navLinks}><Link href="/#work">SEMUA PROYEK</Link><Link href="/#about">PROFIL</Link><Link href="/#contact">KONTAK</Link></nav>
      </header>

      <article className={styles.detailPage}>
        <Link className={styles.backLink} href="/#work">← Kembali ke proyek</Link>
        <p className={styles.detailEyebrow}>PROYEK {project.number} · {project.type}</p>
        <h1 className={styles.detailTitle}>{project.name}</h1>
        <p className={styles.detailSummary}>{project.summary}</p>

        <div className={styles.detailMeta}>
          <div><span>JENIS PROYEK</span><strong>{project.type}</strong></div>
          <div><span>PERAN / RUANG LINGKUP</span><strong>{project.contribution}</strong></div>
        </div>

        <section className={styles.detailSection}>
          <h2>Yang saya kerjakan</h2>
          <p>{project.contribution}</p>
        </section>

        <section className={styles.detailSection}>
          <h2>Fitur dan cakupan</h2>
          <ul className={styles.detailList}>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </section>

        <section className={styles.detailSection}>
          <h2>Teknologi yang digunakan</h2>
          <ul className={styles.detailStack}>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </section>

        <div className={styles.detailActions}>
          {project.source ? <a className={styles.sourceLink} href={project.source} target="_blank" rel="noreferrer">Lihat repositori GitHub ↗</a> : <p>Proyek ini bersifat internal; tautan kode tidak tersedia untuk publik.</p>}
          <Link className={styles.nextProject} href={`/projects/${nextProject.slug}`}>Proyek berikutnya: {nextProject.name} →</Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <Link className={styles.wordmark} href="/">Acep Alinurdin</Link>
        <span>© 2026</span>
        <div>
          <Link href="/#work">Semua proyek</Link>
          <a href="https://instagram.com/acep_alinurdin?mdxt=MW4zbDAwZ3BzaHIwNA%3D%3D" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.tiktok.com/@naz._587?_r=1&_t=ZS-9AYxzjiP7WW" target="_blank" rel="noreferrer">TikTok ↗</a>
          <a href="https://github.com/AcepAlinurdin" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}

export default function ProjectDetailPage({ params }) {
  return (
    <Suspense fallback={<main className={styles.page}><p className={styles.detailLoading}>Memuat detail proyek…</p></main>}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}
