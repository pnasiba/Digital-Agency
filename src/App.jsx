import Header from "@cm/header";
import icon from "@img/CaretDoubleRight.svg";
import icon1 from "@img/icon1.svg";
import icon2 from "@img/icon2.svg";
import icon3 from "@img/icon3.svg";
import pagination from "@img/pagination.svg";
import img from "@img/thirdsection.png";
import line from "@img/lines.svg";
// import Footer from "@cm/footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="intro">
          <div className="container">
            <h1 className="intro-name">
              İşinize uygun <span>Tasarım</span> ve <span>yazılımlar</span>
            </h1>

            <p className="intro-title">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>

            <button>
              Detaylı İncele
              <img src={icon} alt="icon" />
            </button>

            <div className="p">
              <div className="box">
                <p className="desc">Assalomu alaykum , </p>

                <h1>Web sitesi ve Kurumsal Kimlik Tasarımları</h1>

                <p className="info">
                  Online dünyadaki yüzünüz olan web sitelerinizi tasarlar.
                  E-ticaret siteleri dahil olmak üzere tüm ihyitaçlarınıza
                  çözümler sunar.
                </p>
              </div>

              <div className="pagination">
                <img src={pagination} alt="pagination" />
              </div>
            </div>
          </div>
        </section>

        <section className="neler">
          <div className="container">
            <p className="infos">
              Neler <span>Yapıyoruz?</span>
            </p>
            <h1>3 adımda çalışma sürecimiz</h1>

            <p className="description">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>

            <div className="cards">
              <div className="cards__item">
                <img src={icon1} alt="icon" />
                <p className="cards__item--title">Keşif ve Planlama</p>
                <p className="cards__item--info">
                  Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
                  sağlanır.
                </p>
              </div>

              <div className="cards__item">
                <img src={icon2} alt="icon" />
                <p className="cards__item--title">Tasarım ve Geliştirme</p>
                <p className="cards__item--info">
                  Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
                  sağlanır.
                </p>
              </div>

              <div className="cards__item">
                <img src={icon3} alt="icon" />
                <p className="cards__item--title">Test ve Yayına Alma</p>
                <p className="cards__item--info">
                  Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
                  sağlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="information">
          <div className="container">
            <h1>Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.</h1>

            <p className="desc">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>

            <button>
              HEMEN TEKLİF ALIN
              <img src={icon} alt="icon" />
            </button>
          </div>
        </section>

        <section className="neler-desc">
          <div className="container">
            <p className="infos">
              Neler <span>Yapıyoruz?</span>
            </p>
            <h1>3 adımda çalışma sürecimiz</h1>

            <p className="description">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>
          </div>

          <div className="equipments">
            <img src={img} alt="image" />

            <div className="equipments__title">
              <h1>Sizin için neler yapabiliriz beraber bakalım.</h1>

              <p className="info">
                Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili
                bilgiler edinelim.
              </p>

              <div className="desc">
                <img src={line} alt="" />

                <div>
                  <h3>Web Tasarım</h3>
                  <p className="desc-title">
                    Var olan veya yeni kurulan işletmenizin, modern bir kurumsal
                    kimliğe sahip olması için web sitesi.
                  </p>
                </div>
              </div>

              <div className="desc">
                <img src="" alt="" />

                <div>
                  <h3>Dijital Pazarlama</h3>
                  <p className="desc-title">
                    Web sitenizin veya işletmenizin, daha popüler hale gelmesi
                    için çeşitli hizmetler sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="desc">
                <img src="" alt="" />

                <div>
                  <h3>Prodüksiyon</h3>
                  <p className="desc-title">
                    İşletmenizin tanıtımının daha güzel hale gelmesi için,
                    fotoğraf çekimi ve prodüksiyon yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer/> */}
    </>
  );
}

export default App;
