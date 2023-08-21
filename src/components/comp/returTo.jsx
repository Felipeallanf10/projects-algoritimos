import { Link } from "react-router-dom";
import seta from  '../pages/assets/seta.svg';
import './return.css'

export default function returnTo() {
  return (
    <div>
      <Link to='/'>
        <img src={seta} alt="" id="voltar"/>
      </Link>
    </div>
  );
}