import React from 'react';

function Footer() {
  return (
      <footer className="footer">
        <div className="container text-center">
          <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/tahaelsayed04/" target="_blank" rel="noreferrer tooltip">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
          <a className="cc-github btn btn-link" href="https://github.com/tahazayed" target="_blank" rel="noreferrer tooltip">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a className="cc-twitter btn btn-link" href="https://x.com/tahaamin" target="_blank" rel="noreferrer tooltip">
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="h4 title text-center">Taha Elsayed</div>
        <div class="text-center text-muted">
        <p>&copy; Creative CV. All rights reserved.<br/>Design - <a class="credit" href="https://templateflip.com" target="_blank"  rel="noreferrer">TemplateFlip</a></p>
      </div>
      </footer>
  );
}

export default Footer;
