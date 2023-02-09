const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()}
        <a
          href="https://zazz.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Zazz
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
