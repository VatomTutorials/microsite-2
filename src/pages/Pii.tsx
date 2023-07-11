import { useNavigate } from "react-router-dom";
import { useUser } from "@vatom/experience-sdk";
import { AddPiiForm } from "../components/AddPiiForm"
import './Common.css'


const PiiPage = () => {
  const { campaignUserInfo, updateUserCampaignInfo } = useUser();
  const navigate = useNavigate();
  
  
  function PiiObject(key,value){
  	this[key] = value;
  }


	const addItem = (item) => {
		const newPii = new PiiObject(item.piiKey, item.piiValue);
		console.log("Adding:", item, newPii);
		
    updateUserCampaignInfo( newPii );
	}// addItem()


  return (
		<div>
			<AddPiiForm onSubmit={addItem} />
			<h1>Pii page</h1>
			<h3>v 0.0.9</h3>
			
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				Home
			</button>
		</div>
  );
}
//
export default PiiPage;