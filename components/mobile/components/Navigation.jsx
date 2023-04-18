const Navigation = () => {

  return (
    <div className="container">

      <div className="row">
        <ul className="d-flex justify-content-center flex-wrap">
          <li className="col link-style">
            <div className="link-navigation" >
              <div className="link-img">
                <img src='assets/mobile/produit.png' alt="" />
              </div>
              Produits Frais
            </div>
          </li>
          <li className="col link-style">
            <div className="link-navigation" >
            <div className="link-img">
            <img src='/assets/mobile/plat.png' alt="" />

            </div>

              Plats Cuisinée
            </div>
          </li>
          <li className="col link-style">
            <div className="link-navigation" >
            <div className="link-img">
            <img src='/assets/mobile/fromage.png' alt="" />

            </div>

              Epicerie
            </div>
          </li>
          <li className="col link-style">
            <div className="link-navigation " >
            <div className="link-img fromage">
            <img src='/assets/mobile/epicerie.png' alt=""/>

            </div>

              Composition de fromage
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
