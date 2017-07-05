import React from 'react';

export default function AppFooter() {
  return (
    <footer>
      <a
        href="https://grants.g0v.tw/power/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://grants.g0v.tw/images/power/poweredby-long.svg"
          alt="Powered by g0v"
        />
      </a>
      ・
      <a
        href="https://www.facebook.com/groups/cofacts/"
        target="_blank"
        rel="noopener noreferrer"
      >
        編輯求助區
      </a>
      <style jsx>{`
        footer {
          margin: 0 20px 44px;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        img {
          width: 100%;
          max-width: 300px;
        }
      `}</style>
    </footer>
  );
}
