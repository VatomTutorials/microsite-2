import { useNavigate } from "react-router-dom";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


const AttemptDetail = () => {
	console.log('Log tokens, business, user, found');

  const navigate = useNavigate();
	console.log('1');
  const { navigateToNFTDetail } = useExperience();
	console.log('2');
  const { business, tokens } = useBusiness();
	console.log('3');
	const user = useUser();
	console.log('4');
	
	console.log('Log tokens, business, user, found');
	console.log(tokens);
	console.log(business);
	console.log(user);
	
  const objectDefinitionId = 'RYHEO817ml';
  const found = tokens.find(t => t.studioInfo?.objectDefinitionId === objectDefinitionId);

	console.log(found);

	if (found){
		//navigateToNFTDetail(found?.tokenId ?? '', business?.id ?? '');
	}else{
		//throw new Error("Token not found");
		navigate("/nft-offer");
	}
}// AttemptDetail()


const HomePage = () => {
  const navigate = useNavigate();
  const { navigateToWallet } = useExperience();

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
          AttemptDetail();
          //navigate("/nft-offer");
        }}
			>
				NFT Detail
			</button>
		</div>
  );
}
//
export default HomePage;