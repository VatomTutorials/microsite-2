import { useNavigate } from "react-router-dom";
import QrDist from "../assets/QrDist.png";
import './Common.css'


const NftOfferPage = () => {
  const navigate = useNavigate();

  return (
		<div>
			<img src={QrDist} />
			<h1>Token Not Yet Acquired</h1>
			<h3>Scan QR code then click 'Try Again'.</h3>
			<button
				onClick={() => {
          navigate("/home");
        }}
			>
				Try Again
			</button>
		</div>
  );
}
//
export default NftOfferPage;