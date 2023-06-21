import { useNavigate } from "react-router-dom";
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
import './Common.css'


const claimNFT = async () => {
	const objectDefinitionId = 'RYHEO817ml'
  const { navigateToWallet, navigateToNFTDetail } = useExperience();
  const { business, tokens } = useBusiness();
	const user = useUser();
	const tokenToID = user.accessToken
	const found = tokens.find(t => t.studioInfo?.objectDefinitionId === objectDefinitionId)

	if (found) {
		navigateToNFTDetail(found.tokenId, business?.id ?? '')
	} else {
		try {
			const response = await fetch(
				'https://distribution.api.vatominc.com/me/get-flna/ewogICAgImNhbXBhaWduSWQiOiAiOWxleHJDRmFHdiIsCiAgICAib2JqZWN0RGVmaW5pdGlvbklkIjogIktLdTlNbFBWMFEiCn0=',
				{
					method: 'GET',
					headers: { Authorization: `Bearer ${tokenToID}` }
				}
			)
			navigateToWallet()
		} catch (err) {
			console.error(err)
		}
	}
}// claimNFT()


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
          navigateToNFTDetail(found?.tokenId ?? '', business?.id ?? '');
        }}
			>
				Show Detail
			</button>
		</div>
  );
}
//
export default NftDetailPage;