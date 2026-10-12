import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "./projects";

const skillGroups = [
  { label: "LANGUAGES & FRAMEWORKS", items: ["JavaScript", "TypeScript", "PHP", "Node.js", "React.js", "Next.js", "Laravel", "Flutter", "Dart"] },
  { label: "DATABASE & AI", items: ["MySQL", "Supabase", "Firebase", "Vector Database", "RAG", "Text Embedding"] },
  { label: "TOOLS & INTEGRATIONS", items: ["Git / GitHub", "REST API", "AJAX", "Midtrans", "Duitku", "Resend", "Cloudflare", "Vercel", "Netlify"] },
];

const experience = [
  { role: "Teknologi Kreatif & Manajer Proyek", place: "PT Movio Kreasi Indonesia · Tangerang Selatan", date: "Nov 2025 — Des 2026", kind: "Magang & Kontrak", points: ["Membangun aplikasi Android dan situs interaktif, termasuk aplikasi kesehatan mental dan platform SaaS.", "Mengembangkan fitur melukis cepat interaktif dengan pendekatan machine learning.", "Mengelola proyek kuis SCORM, mulai dari memilih vendor hingga memeriksa hasil kerja dan memantau jadwal.", "Mengembangkan frontend dan backend menggunakan Next.js, JavaScript, dan Firebase."] },
  { role: "Full-Stack Engineer", place: "Apotek Parakan Muncang · Bandung", date: "Nov 2024 — Agu 2025", kind: "Kegiatan mahasiswa", points: ["Merancang sistem informasi dan stok obat untuk mendukung operasional apotek.", "Membangun REST API dan dashboard admin menggunakan Laravel dan PHP.", "Merancang basis data MySQL dan antarmuka web menggunakan JavaScript."] },
  { role: "Front-End Intern", place: "PT Indera Sae Pratama · Bandung", date: "Sep 2023", kind: "Magang", points: ["Membuat antarmuka responsif untuk sistem keuangan perusahaan menggunakan Next.js.", "Menghubungkan antarmuka dengan REST API menggunakan AJAX."] },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="top">
        <header className={styles.nav}>
          <a className={styles.wordmark} href="#top" aria-label="Acep Alinurdin, kembali ke atas">Acep Alinurdin</a>
          <nav aria-label="Navigasi utama" className={styles.navLinks}><a href="#work">PROYEK</a><a href="#experience">PENGALAMAN</a><a href="#about">PROFIL</a><a href="#contact">KONTAK ↗</a></nav>
        </header>

        <div className={styles.heroTitle}>
          <p className={styles.heroKicker}>ACEP ALINURDIN <span>·</span> SOFTWARE ENGINEER <span>·</span> 2026</p>
          <h1 className={styles.portfolioTitle}><span>SOFTWARE</span><span>ENGINEER</span></h1>
          <p className={styles.heroIntro}>Proyek web, aplikasi mobile, dan teknologi kreatif yang pernah saya kerjakan.</p>
          <a className={styles.heroLink} href="#work">JELAJAHI PROYEK <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroFooter}><span>WEB & MOBILE</span><span>CREATIVE TECHNOLOGY</span><span>PROJECT MANAGEMENT</span></div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.aboutIntro}><p className={styles.eyebrow}>01 / PROFIL</p><h2>Acep Alinurdin</h2><p>Lulusan Teknik Informatika UNIKOM (IPK 3,46). Pernah mengembangkan aplikasi web dan mobile, sistem stok apotek, serta fitur AI. Di PT Movio Kreasi Indonesia, saya juga mengelola vendor, jadwal, dan pemeriksaan hasil proyek.</p><a className={styles.cvLink} href="/pdf/CV.pdf" target="_blank" rel="noreferrer">Buka CV <span aria-hidden="true">↗</span></a></div>
        <div className={styles.skills}><p className={styles.eyebrow}>KEAHLIAN TEKNIS</p>{skillGroups.map((group) => <div className={styles.skillGroup} key={group.label}><h3>{group.label === "LANGUAGES & FRAMEWORKS" ? "BAHASA PEMROGRAMAN & FRAMEWORK" : group.label === "DATABASE & AI" ? "DATABASE & KECERDASAN BUATAN" : "TOOLS & INTEGRASI"}</h3><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>02 / PILIHAN PROYEK</p><h2>Web, aplikasi,<br /><span>dan sistem.</span></h2></div>
          <p className={styles.sectionAside}>Pilihan proyek yang pernah saya kerjakan. Buka tiap proyek untuk melihat fitur dan teknologinya.</p>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => {
            const content = <>
              <div className={styles.projectNumber}>{project.number}</div>
              <div className={styles.projectMain}><p className={styles.projectType}>{project.type}</p><h3>{project.name}</h3><p className={styles.projectSummary}>{project.summary}</p></div>
              <div className={styles.projectDetails}><p>{project.work}</p><span>{project.stack.join(" · ")}</span></div>
              <span className={styles.projectArrow} aria-hidden="true">↗</span>
            </>;
            return <Link className={styles.project} key={project.number} href={`/projects/${project.slug}`} aria-label={`${project.name} — lihat detail proyek`}>{content}</Link>;
          })}
        </div>
        <p className={styles.projectNote}>Sebagian proyek bersifat internal, jadi detail tertentu tidak ditampilkan di sini.</p>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>03 / PENGALAMAN</p><h2>Tempat<br /><span>saya bekerja.</span></h2></div><p className={styles.sectionAside}>Peran, tanggung jawab, dan teknologi dari pengalaman kerja saya.</p></div>
        <div className={styles.experienceList}>{experience.map((job) => <article className={styles.job} key={job.place}><div className={styles.jobDate}>{job.date}<small>{job.kind}</small></div><div className={styles.jobBody}><h3>{job.role}</h3><p className={styles.jobPlace}>{job.place}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        <div className={styles.credentials}><div><p className={styles.eyebrow}>PENDIDIKAN</p><h3>Universitas Komputer Indonesia (UNIKOM)</h3><p>S1 Teknik Informatika · IPK 3,46 / 4,00 · Lulus Nov 2025</p></div><div><p className={styles.eyebrow}>SERTIFIKASI</p><ul><li>BNSP — Junior Web Programmer</li><li>Cisco Networking Academy — CCNA (Jaringan & Keamanan Siber)</li></ul></div></div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>04 / KONTAK</p>
        <h2>Hubungi saya<span>.</span></h2>
        <div className={styles.contactBottom}><div className={styles.contactMethods}><a className={styles.email} href="mailto:acepali2253@gmail.com">acepali2253@gmail.com <span aria-hidden="true">↗</span></a><a className={styles.phone} href="tel:+628****2684">+62 882-0008-82684</a></div><p>Garut, Jawa Barat, Indonesia</p></div>
      </section>

      <footer className={styles.footer}><a className={styles.wordmark} href="#top">Acep Alinurdin</a><span>© 2026</span><div><a href="https://linkedin.com/in/acepalinurdin" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AcepAlinurdin" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </main>
  );
}
