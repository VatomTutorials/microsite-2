import { useNavigate } from "react-router-dom";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


const NftDetailPage = () => {
  const navigate = useNavigate();
  const { navigateToNFTDetail } = useExperience();
  const { business, tokens } = useBusiness();
	const user = useUser();
  const objectDefinitionId = 'RYHEO817ml';
  const found = tokens.find(t => t.studioInfo?.objectDefinitionId === objectDefinitionId);

	console.log('Log tokens, business, user, found');
	console.log(tokens);
	console.log(business);
	console.log(user);
	console.log(found);

	if (found){
		return (
			<div>
				<h1>You have a reward token in your wallet.</h1>
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
				<h1>NFT Detail page</h1>
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
						navigate("/nft-offer");
					}}
				>
					Acquire Reward token
				</button>
			</div>
		);
	}
}
//
export default NftDetailPage;