import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ExperienceProvider } from '@vatom/experience-sdk';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NftDetailPage from './pages/NftDetail';
import NftOfferPage from './pages/NftOffer';
//
function App() {
  return (
		<BrowserRouter basename="/3UewHF0ge9">
			<ExperienceProvider>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/nft-detail" element={<NftDetailPage />}></Route>
					<Route path="/nft-offer" element={<NftOfferPage />}></Route>
				</Routes>
			</ExperienceProvider>
		</BrowserRouter>
  )
}
//
export default App;