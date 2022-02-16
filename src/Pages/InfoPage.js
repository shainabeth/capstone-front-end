import NavBar from "../Components/NavBar";
import "./InfoPage.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function InfoPage() {
  return (
    <div className="InfoPage">
      <h3>jump to</h3>
      <ul>
        <li>
          <a href="#period">painful periods</a>
        </li>
        <li>
          <a href="#gut">gut health</a>
        </li>
        <li>
          <a href="#thyroid">thyroid health</a>
        </li>
        <li>
          <a href="#adrenal">adrenal support</a>
        </li>
      </ul>

      <h1 id="period">painful periods</h1>
      <img src="castor_oil_pack_1.jpeg" width={300} />
      <br />
      <img src="castor_oil_pack_2.jpeg" width={300} />
      <br />
      <img src="period_pain.jpeg" width={300} />
      <br />
      <img src="manage_period_pain.jpeg" width={300} />
      <br />
      <img src="seed_cycling.png" width={300} />
      <br />
      <img src="lighter_periods.jpeg" width={300} />
      <br />

      <h1 id="gut">gut health</h1>
      <img src="gut_health_signs.jpeg" width={300} />
      <br />
      <img src="gut_health_good_vs_bad.jpeg" width={300} />
      <br />
      <img src="gut_health_1.jpeg" width={300} />
      <br />
      <img src="gut_health_2.jpeg" width={300} />
      <br />
      <img src="gut_health_3.jpeg" width={300} />
      <br />
      <img src="gut_health_4.jpeg" width={300} />
      <br />
      <img src="gut_health_5.jpeg" width={300} />
      <br />

      <h1 id="thyroid">thyroid health</h1>
      <img src="thyroid_1.jpeg" width={300} />
      <br />
      <img src="thyroid_2.jpeg" width={300} />
      <br />
      <img src="thyroid_3.jpeg" width={300} />
      <br />

      <h1 id="adrenal">adrenal support</h1>
      <img src="adrenal_support_overview.jpeg" width={300} />
      <br />
      <img src="adrenal_1.jpeg" width={300} />
      <br />
      <img src="adrenal_2.jpeg" width={300} />
      <br />
      <img src="adrenal_3.jpeg" width={300} />
      <br />
      <img src="adrenal_4.jpeg" width={300} />
      <br />
      <img src="adrenal_5.jpeg" width={300} />
      <br />

      <ul>
        <li>
          <a href="#">jump to top</a>
        </li>
        <br />
        <li>
          <a href="https://www.drsarubala.com/">dr bala's website</a>
        </li>
        <li>
          <a href="https://www.instagram.com/drsarubala/?hl=en">
            dr bala's instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InfoPage;
