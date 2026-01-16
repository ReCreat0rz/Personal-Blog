import Link from 'next/link';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundGrid} />
      <div className={styles.glow} />
      
      <main className={styles.mainContent}>
        <header className={styles.profile}>
          <h1 className={styles.name}>ReCreat0rz</h1>
          <p className={styles.role}>Penetration Tester | CTF Player</p>
        </header>

        <section className={styles.links}>
          <Link href="/blog" className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div className={styles.cardContent}>
              <h3>My Blog</h3>
              <p>Thoughts, Journeys, Writeups, Opinions related to cybersecurity or hobbies</p>
            </div>
          </Link>

          <Link href="/about" className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className={styles.cardContent}>
              <h3>About Me</h3>
              <p>Researcher, exploit developer, and CTF enthusiast. Learn more about my background.</p>
            </div>
          </Link>

          {/* External Links Section */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="https://github.com/recreat0rz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
            </a>
            <a href="https://x.com/ReCreat0rz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
