import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "./projects";

function InstagramIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.887 2.895 2.895 0 0 1-2.891-2.887 2.895 2.895 0 0 1 2.891-2.887c.28 0 .548.037.804.106V9.43a6.326 6.326 0 0 0-.804-.051C6.012 9.379 3.2 12.183 3.2 15.642 3.2 19.102 6.012 21.906 9.472 21.906c3.46 0 6.272-2.804 6.272-6.264V8.472a8.16 8.16 0 0 0 4.887 1.624V6.651a4.78 4.78 0 0 1-1.042-.035z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const skillGroups = [
  { title: "BAHASA PEMROGRAMAN & FRAMEWORK", items: ["JavaScript", "TypeScript", "PHP", "Node.js", "React.js", "Next.js", "Laravel", "Flutter", "Dart"] },
  { title: "DATABASE & KECERDASAN BUATAN", items: ["MySQL", "Supabase", "Firebase", "Vector Database", "RAG", "Text Embedding"] },
  { title: "TOOLS & INTEGRASI", items: ["Git / GitHub", "REST API", "AJAX", "Midtrans", "Duitku", "Resend", "Cloudflare", "Vercel", "Netlify"] },
  { title: "TROUBLESHOOTING & IT SUPPORT", items: ["Troubleshooting Hardware & Software", "Install Ulang OS (Windows & Linux)", "Diagnosa & Perbaikan PC / Laptop", "Perawatan & Maintenance Sistem", "Konfigurasi Jaringan & Router", "Instalasi Driver & Software", "Backup & Pemulihan Data"] },
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
          <a className={styles.wordmark} href="#top" aria-label="Acep Alinurdin, kembali ke atas">
            <img src="/p.png" alt="Acep Alinurdin" width="32" height="32" className={styles.navAvatar} />
            <span className={styles.wordmarkName}>Acep Alinurdin</span>
          </a>
          <nav aria-label="Navigasi utama" className={styles.navLinks}><a href="#work">PROYEK</a><a href="#experience">PENGALAMAN</a><a href="#about">PROFIL</a><a href="#contact">KONTAK ↗</a></nav>
        </header>

        <div className={styles.heroTitle}>
          <p className={styles.heroKicker}>ACEP ALINURDIN <span>·</span> SOFTWARE ENGINEER <span>·</span> 2026</p>
          <h1 className={styles.portfolioTitle}><span>SOFTWARE</span><span>ENGINEER</span></h1>
          <p className={styles.heroIntro}>Proyek web, aplikasi mobile, dan teknologi kreatif yang pernah saya kerjakan.</p>
          
          <div className={styles.heroSocialBar}>
            <span className={styles.heroSocialLabel}>MEDIA SOSIAL:</span>
            <a
              href="https://instagram.com/acep_alinurdin?mdxt=MW4zbDAwZ3BzaHIwNA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className={`${styles.heroSocialBadge} ${styles.badgeInstagram}`}
              aria-label="Instagram @acep_alinurdin"
            >
              <InstagramIcon className={styles.badgeIcon} />
              <span>Instagram</span>
              <span className={styles.badgeHandle}>@acep_alinurdin</span>
            </a>
            <a
              href="https://www.tiktok.com/@naz._587?_r=1&_t=ZS-9AYxzjiP7WW"
              target="_blank"
              rel="noreferrer"
              className={`${styles.heroSocialBadge} ${styles.badgeTiktok}`}
              aria-label="TikTok @naz._587"
            >
              <TikTokIcon className={styles.badgeIcon} />
              <span>TikTok</span>
              <span className={styles.badgeHandle}>@naz._587</span>
            </a>
            <a
              href="https://github.com/AcepAlinurdin"
              target="_blank"
              rel="noreferrer"
              className={`${styles.heroSocialBadge} ${styles.badgeGithub}`}
              aria-label="GitHub @AcepAlinurdin"
            >
              <GitHubIcon className={styles.badgeIcon} />
              <span>GitHub</span>
              <span className={styles.badgeHandle}>@AcepAlinurdin</span>
            </a>
          </div>

          <a className={styles.heroLink} href="#work">JELAJAHI PROYEK <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroFooter}><span>WEB & MOBILE</span><span>CREATIVE TECHNOLOGY</span><span>PROJECT MANAGEMENT</span></div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.aboutIntro}><p className={styles.eyebrow}>01 / PROFIL</p><h2>Acep Alinurdin</h2><p>Lulusan Teknik Informatika UNIKOM (IPK 3,46). Pernah mengembangkan aplikasi web dan mobile, sistem stok apotek, serta fitur AI. Di PT Movio Kreasi Indonesia, saya juga mengelola vendor, jadwal, dan pemeriksaan hasil proyek.</p><a className={styles.cvLink} href="/pdf/CV.pdf" target="_blank" rel="noreferrer">Buka CV <span aria-hidden="true">↗</span></a></div>
        <div className={styles.skills}>
          <p className={styles.eyebrow}>KEAHLIAN TEKNIS</p>
          {skillGroups.map((group) => (
            <div className={styles.skillGroup} key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
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
        <p className={styles.eyebrow}>04 / KONTAK & MEDIA SOSIAL</p>
        <h2>Hubungi saya<span>.</span></h2>
        <p className={styles.contactIntro}>
          Mari terhubung di media sosial untuk melihat proyek terbaru, konten kreatif, maupun berdiskusi seputar software engineering.
        </p>

        <div className={styles.socialCardsGrid}>
          <a
            href="https://instagram.com/acep_alinurdin?mdxt=MW4zbDAwZ3BzaHIwNA%3D%3D"
            target="_blank"
            rel="noreferrer"
            className={`${styles.socialCard} ${styles.cardInstagram}`}
            aria-label="Kunjungi Instagram @acep_alinurdin"
          >
            <div className={styles.socialCardTop}>
              <div className={`${styles.socialIconBox} ${styles.iconInstagram}`}>
                <InstagramIcon />
              </div>
              <span className={styles.socialCardArrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.socialCardInfo}>
              <span className={styles.socialPlatform}>INSTAGRAM</span>
              <h3 className={styles.socialName}>@acep_alinurdin</h3>
              <p className={styles.socialDesc}>Aktivitas harian, pembaruan karya, dan visual update.</p>
            </div>
            <span className={styles.socialCardAction}>Kunjungi Instagram <span aria-hidden="true">↗</span></span>
          </a>

          <a
            href="https://www.tiktok.com/@naz._587?_r=1&_t=ZS-9AYxzjiP7WW"
            target="_blank"
            rel="noreferrer"
            className={`${styles.socialCard} ${styles.cardTiktok}`}
            aria-label="Kunjungi TikTok @naz._587"
          >
            <div className={styles.socialCardTop}>
              <div className={`${styles.socialIconBox} ${styles.iconTiktok}`}>
                <TikTokIcon />
              </div>
              <span className={styles.socialCardArrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.socialCardInfo}>
              <span className={styles.socialPlatform}>TIKTOK</span>
              <h3 className={styles.socialName}>@naz._587</h3>
              <p className={styles.socialDesc}>Video konten kreatif, cuplikan teknologi, dan inspirasi.</p>
            </div>
            <span className={styles.socialCardAction}>Kunjungi TikTok <span aria-hidden="true">↗</span></span>
          </a>

          <a
            href="https://github.com/AcepAlinurdin"
            target="_blank"
            rel="noreferrer"
            className={`${styles.socialCard} ${styles.cardGithub}`}
            aria-label="Kunjungi GitHub @AcepAlinurdin"
          >
            <div className={styles.socialCardTop}>
              <div className={`${styles.socialIconBox} ${styles.iconGithub}`}>
                <GitHubIcon />
              </div>
              <span className={styles.socialCardArrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.socialCardInfo}>
              <span className={styles.socialPlatform}>GITHUB</span>
              <h3 className={styles.socialName}>@AcepAlinurdin</h3>
              <p className={styles.socialDesc}>Repositori proyek, source code, dan kontribusi open source.</p>
            </div>
            <span className={styles.socialCardAction}>Kunjungi GitHub <span aria-hidden="true">↗</span></span>
          </a>
        </div>

        <div className={styles.contactBottom}>
          <div className={styles.contactMethods}>
            <a className={styles.email} href="mailto:acepali2253@gmail.com">acepali2253@gmail.com <span aria-hidden="true">↗</span></a>
            <a className={styles.phone} href="tel:+62882000882684">+62 882-0008-82684</a>
          </div>
          <p>Garut, Jawa Barat, Indonesia</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top">Acep Alinurdin</a>
        <span>© 2026</span>
        <div>
          <a href="https://instagram.com/acep_alinurdin?mdxt=MW4zbDAwZ3BzaHIwNA%3D%3D" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.tiktok.com/@naz._587?_r=1&_t=ZS-9AYxzjiP7WW" target="_blank" rel="noreferrer">TikTok ↗</a>
          <a href="https://github.com/AcepAlinurdin" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
