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
              <a href="#">
                Digital <span className="logoname">Agency</span>
              </a>
            </ul>
            <ul className="list-item">
              <li>Ana Sayfa</li>
              <li>Kurumsal</li>
              <li>Neler Yapıyoruz?</li>
              <li>Blog</li>
            </ul>
            <ul className="header-btn">
              <li>
                <select name="en" id="en">
                  <option value="en">EN</option>
                  <option value="uz">UZ</option>
                </select>
              </li>
              <Button />
            </ul>
          </nav>
        </div>
      </header>
    );
}


export default header