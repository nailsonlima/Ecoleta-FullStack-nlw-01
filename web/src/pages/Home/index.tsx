import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Home() {

  return(
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="logo ecoleta" />
        </header>

        <main>
          <h1>
            Seu marketplace de coleta de resíduos.
          </h1>
          <p>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente.</p>

          <Link to={"/create-point"}>
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}