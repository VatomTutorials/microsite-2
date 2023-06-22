import { useNavigate } from "react-router-dom";
//import { useExperience } from "@vatom/experience-sdk";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


/***
function delay(milliseconds: number){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}// delay
***/


const HomePage = () => {
	const navigate = useNavigate();
	const { navigateToWallet } = useExperience();
	const { business, tokens } = useBusiness();
	const user = useUser();


	/***/
	const delay = async (milliseconds: number) => {
			return new Promise(resolve => {
					setTimeout(resolve, milliseconds);
			});
	}
	/***/


	/***/
	const navigateToCheckForRewardsPage = async () => {
		//const navigate = useNavigate();
		//const { business, tokens } = useBusiness();
		//const user = useUser();
	
		console.log('Log tokens then delay');
		console.log(tokens);
		await delay(200);
		console.log('After delay: tokens, business, user');
		console.log(tokens);
		console.log(business);
		console.log(user);
	
		navigate("/check-for-reward");	
	}
	/***/


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
					//navigate("/check-for-reward");
					navigateToCheckForRewardsPage();
				}}
			>
				Check for reward token
			</button>
		</div>
	);
}
//
export default HomePage;
