import { useNavigate } from "react-router-dom";
import { useUser } from "@vatom/experience-sdk";
import { AddPiiForm } from "../components/AddPiiForm"
import { FetchPiiForm } from "../components/FetchPiiForm"
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


	const fetchItemByKey = (key) => {
		const value = campaignUserInfo[key];
		console.log("Fetch by key:", key, value);
	}// fetchItem()


  return (
		<div>
			<AddPiiForm onSubmit={addItem} />
			<br/>
			<FetchPiiForm onSubmit={fetchItemByKey} />
			
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