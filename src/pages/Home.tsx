import { useNavigate } from "react-router-dom";
//import { useExperience } from "@vatom/experience-sdk";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


const HomePage = () => {
	const navigate = useNavigate();
	const { navigateToWallet } = useExperience();
	const { business, tokens } = useBusiness();
	const user = useUser();


	// Instantiate promise instead of 'const delay = async ...'
	// see https://alvarotrigo.com/blog/wait-1-second-javascript/
	const delay = (milliseconds: number) => {
			return new Promise(resolve => {
					setTimeout(resolve, milliseconds);
			});
	}// delay()


	const navigateToCheckForRewardsPage = async () => {
		const loggingProperties = false;
		
		console.log('delay');
		
		if (loggingProperties){
			console.log('Log tokens then delay');
			console.log(tokens);
		}
		
		await delay(2000);
		
		if (loggingProperties){
			console.log('After delay: tokens, business, user');
			console.log(tokens);
			console.log(business);
			console.log(user);
		}
	
		navigate("/check-for-reward");	
	}// navigateToCheckForRewardsPage()


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
					navigate("/pii");
				}}
			>
				Pii
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
					//navigateToCheckForRewardsPage();
				}}
			>
				Check for reward token
			</button>
			---
			<button
				onClick={() => {
					navigateToCheckForRewardsPage();
				}}
			>
				2 sec delay check
			</button>
		</div>
	);
}
//
export default HomePage;
