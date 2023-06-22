import { useNavigate } from "react-router-dom";
import './Common.css'


const RewardAutomatedPage = () => {
  const navigate = useNavigate();
  const wasIssued = false;

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
				<h1>Error sending reward</h1>
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
					Try Again
				</button>
			</div>
		);
	}
}
//
export default RewardAutomatedPage;