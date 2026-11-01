
function Terminal() {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>oluwaseun@portfolio: ~</p>
            </div>

            <div className="terminal-body">
                <p>
                    <span className="terminal-user">visitor@oluwaseun</span>
                    <span className="terminal-symbol">:~$ </span>
                    whoami
                </p>

                <h3>Oluwaseun Oloruntoba</h3>
                <p className="terminal-output">Frontend Developer</p>

                <br />

                <p>
                    <span className="terminal-user">visitor@oluwaseun</span>
                    <span className="terminal-symbol">:~$ </span>
                    skills
                </p>

                <p className="terminal-output">
                    HTML, CSS, JavaScript, React
                </p>

                <br />

                <p>
                    <span className="terminal-user">visitor@oluwaseun</span>
                    <span className="terminal-symbol">:~$ </span>
                    status
                </p>

                <p className="terminal-output">
                    Learning. Building. Improving.
                </p>

                <br />

                <p>
                    <span className="terminal-user">visitor@oluwaseun</span>
                    <span className="terminal-symbol">:~$ </span>
                    <span className="terminal-cursor">_</span>
                </p>
            </div>
        </div>
    )
}

export default Terminal
