import { useNavigate } from "react-router-dom";
import ReactScrollableList from 'react-scrollable-list';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';
import './Common.css'


const RewardViaButtonPage = () => {
  const navigate = useNavigate();
  const wasIssued = false;
  
  let listItems = [];
	for (let i = 0; i < 25; i++) {
		listItems.push({ id: i, content: i });
	}

	if (wasIssued){
		return (
			<div>
				<h1>Reward has been issued</h1>
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
						navigate("/check-for-reward");
					}}
				>
					Check Again
				</button>
			</div>
		);
	}else{
		return (
			<div>
				<h3>list:</h3>
				<div class="container">
					<ReactScrollableList
						listItems={listItems}
						heightOfItem={20}
						maxItemsToRender={10}
						style={{ color: '#333' }}
					/>
				</div>
				<h1>Error sending reward ???</h1>
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
}
//
export default RewardViaButtonPage;