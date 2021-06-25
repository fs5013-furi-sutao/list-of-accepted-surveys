/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';

const styles = {
    wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: '48px',
        padding: '0 2em',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        height: '48px',
        margin: '2em 0 6em',
        background: '#007fff',
        color: '#fff',
        border: '1px solid #007fff',
        borderRadius: '4px',
        marginTop: '16px',
        textTransform: 'uppercase',
        fontWeight: '300',
    },
    buttonHover: {
        background: '#fff',
        color: '#000000',
        cursor: 'pointer'
    },
    link: {
        color: '#fff',
        fontFamily: 'sans-serif'
    },
    linkHover: {
        color: 'dodgerblue'
    }
};

const PasswordProtect = () => {
    const [password, setPassword] = useState('');
    const [isButtonHovered, buttonHover] = useState(false);
    const [isThemeHovered, themeHover] = useState(false);
    const [isSiteHovered, siteHover] = useState(false);

    const onSubmit = event => {
        event.preventDefault();
        setSessionPassword(password);
        window.location.reload(); // eslint-disable-line
    };

    return (
        <div style={styles.wrapper}>
            <h1 style={{ color: '#3D3D4D', margin: '2em 0' }}>受付中のアンケート一覧 認証ページ</h1>
            <h4 style={{ color: '#6C6C80' }}>全体 LINE で展開されている<br />パスワードを入力してください</h4>

            <form onSubmit={onSubmit} style={{ width: '320px' }}>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    style={styles.input}
                />

                <button
                    type="submit"
                    style={{
                        ...styles.button,
                        ...(isButtonHovered ? styles.buttonHover : null)
                    }}
                    onMouseEnter={() => buttonHover(true)}
                    onMouseLeave={() => buttonHover(false)}
                >
                    送信する
                </button>
            </form>
        </div>
    );
};

export default PasswordProtect;
