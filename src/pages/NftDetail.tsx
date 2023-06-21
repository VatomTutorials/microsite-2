import { Link } from "react-router-dom";
import { useExperience } from "@vatom/experience-sdk";
import './Common.css'
//
const NftDetailPage = () => {
  const { openSpace, navigateToExternalBrowser, navigateToWallet, navigateToNFTDetail } =
    useExperience();


  return (
		<div>
			<h1>NFT Detail page</h1>
			<Link to="/home"> Return to the Home page </Link>
		</div>
  )
}
//
export default NftDetailPage;