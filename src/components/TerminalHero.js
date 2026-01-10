import styles from './TerminalHero.module.css';

const TerminalHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                    <div className={`${styles.circle} ${styles.red}`}></div>
                    <div className={`${styles.circle} ${styles.yellow}`}></div>
                    <div className={`${styles.circle} ${styles.green}`}></div>
                </div>
                <div className={styles.terminalBody}>
                    <div className={styles.line}>
                        <span className={styles.prompt}>root@recreat0rz:~#</span>
                        <span className={styles.command}>cat quote.txt</span>
                    </div>
                    <div className={`${styles.output} ${styles.quoteOutput}`}>
                        <div>"I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times." - Bruce Lee</div>
                        <br />
                        <div>“Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.” - Robert T. Kiyosaki</div>
                        <br />
                        <div>“Failure is so important. We speak about success all the time. It is the ability to resist failure or use failure that often leads to greater success. I've met people who don't want to try for fear of failing.” - J.K. Rowling</div>
                        <br />
                        <div>“I have not failed. I've just found 10,000 ways that won't work.” - Thomas A. Edison</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TerminalHero;
