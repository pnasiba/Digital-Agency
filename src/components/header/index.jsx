import "./style.scss"
import logo from "@img/logo.svg";
import Button from "@ui/button";



function header(){
    return (
      <header>
        <div className="container">
          <nav>
            <ul className="logo">
              <img src={logo} alt="logo" />
              <li>
                Digital <span className="logoname">Agency</span>
              </li>
            </ul>
            <ul className="list-item">
              <li>Ana Sayfa</li>
              <li>Kurumsal</li>
              <li>Neler Yapıyoruz?</li>
              <li>Blog</li>
            </ul>
            <ul className="header-btn">
              <li>EN</li>
              <Button />
            </ul>
          </nav>
        </div>
      </header>
    );
}


export default header