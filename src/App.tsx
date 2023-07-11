import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ExperienceProvider } from '@vatom/experience-sdk';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CheckForRewardPage from './pages/CheckForReward';
import NftOfferPage from './pages/NftOffer';
import PiiPage from './pages/Pii';
import RewardViaButtonPage from './pages/RewardViaButton';
import RewardViaQRPage from './pages/RewardViaQR';
//
function App() {
  return (
		<BrowserRouter basename="/3UewHF0ge9">
			<ExperienceProvider>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/check-for-reward" element={<CheckForRewardPage />}></Route>
					<Route path="/nft-offer" element={<NftOfferPage />}></Route>
					<Route path="/pii" element={<PiiPage />}></Route>
					<Route path="/reward-via-button" element={<RewardViaButtonPage />}></Route>
					<Route path="/reward-via-qr" element={<RewardViaQRPage />}></Route>
				</Routes>
			</ExperienceProvider>
		</BrowserRouter>
  )
}
//
export default App;