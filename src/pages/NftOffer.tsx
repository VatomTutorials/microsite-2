import { useNavigate } from "react-router-dom";
import QrDist from "../assets/QrDist.png";
import './Common.css'


const NftOfferPage = () => {
  const navigate = useNavigate();

  return (
		<div>
			<img src={QrDist} />
			<h1>Scan QR code to get token</h1>
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				Home
			</button>
			---
			<button
				onClick={() => {
          navigate("/nft-detail");
        }}
			>
				Try Again
			</button>
		</div>
  );
}
//
export default NftOfferPage;