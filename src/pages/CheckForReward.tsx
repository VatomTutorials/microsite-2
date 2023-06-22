import { useNavigate } from "react-router-dom";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}// delay


const CheckForRewardPage = () => {
  const navigate = useNavigate();
  const { navigateToNFTDetail } = useExperience();
  const { business, tokens } = useBusiness();
	const user = useUser();
  const objectDefinitionId = 'RYHEO817ml';
  const found = tokens.find(t => t.studioInfo?.objectDefinitionId === objectDefinitionId);

	console.log('Log tokens then delay');
	console.log(tokens);
	//await delay(200);
	console.log('After delay: tokens, business, user, found');
	console.log(business);
	console.log(user);
	console.log(found);

	if (found){
		return (
			<div>
				<h1>Reward token in wallet</h1>
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
						navigateToNFTDetail(found?.tokenId ?? '', business?.id ?? '');
					}}
				>
					Show reward token detail
				</button>
			</div>
		);
	}else{
		return (
			<div>
				<h1>Reward not yet acquired</h1>
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
						navigate("/reward-automated");
					}}
				>
					Acquire automatically
				</button>
				---
				<button
					onClick={() => {
						navigate("/reward-via-qr");
					}}
				>
					Acquire via QR
				</button>
			</div>
		);
	}
}
//
export default CheckForRewardPage;