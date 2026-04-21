import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Katalog from './pages/Katalog';
import Sluzby from './pages/Sluzby';
import Kontakt from './pages/Kontakt';
import Poptavka from './pages/Poptavka';
import LetakyDetail from './pages/LetakyDetail';
import PlakatyDetail from './pages/PlakatyDetail';
import KatalogyDetail from './pages/KatalogyDetail';
import SlozkyDetail from './pages/SlozkyDetail';
import ObalyDetail from './pages/ObalyDetail';
import EtiketyDetail from './pages/EtiketyDetail';
import BanneryDetail from './pages/BanneryDetail';
import BlokyDetail from './pages/BlokyDetail';
import KnihyDetail from './pages/KnihyDetail';
import TaskyDetail from './pages/TaskyDetail';
import LepiciPaskyDetail from './pages/LepiciPaskyDetail';
import ObalkyDetail from './pages/ObalkyDetail';
import PvcSamolepkyDetail from './pages/PvcSamolepkyDetail';
import ReklamniPuzzleDetail from './pages/ReklamniPuzzleDetail';
import TextilDetail from './pages/TextilDetail';
import SamolepiciBlockyDetail from './pages/SamolepiciBlockyDetail';
import KalendareDetail from './pages/KalendareDetail';
import PivniTackyDetail from './pages/PivniTackyDetail';
import ReklamniDeskyDetail from './pages/ReklamniDeskyDetail';
import PrezentacniStenyDetail from './pages/PrezentacniStenyDetail';
import RezanaReklamaDetail from './pages/RezanaReklamaDetail';
import TapetyDetail from './pages/TapetyDetail';
import TiskNaPlatnoDetail from './pages/TiskNaPlatnoDetail';
import VstupenkyDetail from './pages/VstupenkyDetail';
import VizitkDetail from './pages/VizitkDetail';
import VlajkyDetail from './pages/VlajkyDetail';
import PlastickeNapisyDetail from './pages/PlastickeNapisyDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen selection:bg-primary selection:text-on-primary text-on-surface bg-surface">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/sluzby" element={<Sluzby />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/poptavka" element={<Poptavka />} />
            <Route path="/letaky" element={<LetakyDetail />} />
            <Route path="/plakaty" element={<PlakatyDetail />} />
            <Route path="/katalogy" element={<KatalogyDetail />} />
            <Route path="/slozky" element={<SlozkyDetail />} />
            <Route path="/obaly" element={<ObalyDetail />} />
            <Route path="/etikety" element={<EtiketyDetail />} />
            <Route path="/bannery" element={<BanneryDetail />} />
            <Route path="/bloky" element={<BlokyDetail />} />
            <Route path="/knihy" element={<KnihyDetail />} />
            <Route path="/tasky" element={<TaskyDetail />} />
            <Route path="/lepici-pasky" element={<LepiciPaskyDetail />} />
            <Route path="/obalky" element={<ObalkyDetail />} />
            <Route path="/pvc-samolepky" element={<PvcSamolepkyDetail />} />
            <Route path="/reklamni-puzzle" element={<ReklamniPuzzleDetail />} />
            <Route path="/textil" element={<TextilDetail />} />
            <Route path="/samolepici-blocky" element={<SamolepiciBlockyDetail />} />
            <Route path="/kalendare" element={<KalendareDetail />} />
            <Route path="/pivni-tacky" element={<PivniTackyDetail />} />
            <Route path="/reklamni-desky" element={<ReklamniDeskyDetail />} />
            <Route path="/prezentacni-steny" element={<PrezentacniStenyDetail />} />
            <Route path="/rezana-reklama" element={<RezanaReklamaDetail />} />
            <Route path="/tapety" element={<TapetyDetail />} />
            <Route path="/tisk-na-platno" element={<TiskNaPlatnoDetail />} />
            <Route path="/vstupenky" element={<VstupenkyDetail />} />
            <Route path="/vizitky" element={<VizitkDetail />} />
            <Route path="/vlajky" element={<VlajkyDetail />} />
            <Route path="/3d-napisy" element={<PlastickeNapisyDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
