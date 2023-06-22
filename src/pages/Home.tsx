import { useNavigate } from "react-router-dom";
//import { useExperience } from "@vatom/experience-sdk";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'
//
const HomePage = () => {
	const navigate = useNavigate();
	const { navigateToWallet } = useExperience();
	const { business, tokens } = useBusiness();
	const user = useUser();

	return (
		<div>
			<h1>Micro-Site Home</h1>
			<button
				onClick={() => {
					navigate("/about");
				}}
			>
				About
			</button>
			---
			<button
				onClick={() => {
					navigateToWallet();
				}}
			>
				Wallet
			</button>
			---
			<button
				onClick={() => {
					navigate("/check-for-reward");
				}}
			>
				Check for reward token
			</button>
		</div>
	);
}
//
export default HomePage;
