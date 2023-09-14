import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './assets/App.css';
import './assets/variables.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import FooterComp from './components/FooterComp';
import Home from './components/Home'
import Faq from "./components/Faq";
import RegularFaculty from "./components/RegularFaculty";
import ScholarsResi from "./components/ScholarsResi";
import TechStaff from "./components/TechStaff";
import AdminStaff from "./components/AdminStaff";
import UgAcads from "./components/UgAcads";
import UgPlacement from "./components/UgPlacement";
import PgAcads from "./components/PgAcads";
import PgPlacement from "./components/PgPlacement";
import DocAcads from "./components/DocAcads";
import PhDPlacement from "./components/PhDPlacement";
import OnProj from "./components/OnProj";
import CompProj from "./components/CompProj";
import SponsColab from "./components/SponsColab";
import Webinar from "./components/Webinar";
import Chaitanya_talk from "./components/talks/Chaitanya_talk";
import Mandal_Sandeep_talk from "./components/talks/Mandal_Sandeep_talk";
import Aakash_talk from "./components/talks/Aakash_talk";
import Manisha_talk from "./components/talks/Manisha_talk";
import Rajdip_talk from "./components/talks/Rajdip_talk";
import Masaru_talk from "./components/talks/Masaru_talk";
import Sarvesh_talk from "./components/talks/Sarvesh_talk";
import Jessica_talk from "./components/talks/Jessica_talk";
import Rajaram_talk from "./components/talks/Rajaram_talk";
import Ravindra_talk from "./components/talks/Ravindra_talk";
import Nachiket_talk from "./components/talks/Nachiket_talk";
import Jhumpa_talk from "./components/talks/Jhumpa_talk";
import Naveen_talk from "./components/talks/Naveen_talk";
import Surya_talk from "./components/talks/Surya_talk";
import Pradip_talk from "./components/talks/Pradip_talk";
import Guruswamy_talk from "./components/talks/Guruswamy_talk";
import Yamuna_talk from "./components/talks/Yamuna_talk";
import CorpRelation from "./components/CorpRelation";
import Donation from "./components/Donation";
import ResearchLabs from "./components/ResearchLabs";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/regularFaculty" element={<RegularFaculty/>}/>
            <Route exact path="/scholarsResidence" element={<ScholarsResi/>}/>
            <Route exact path="/technicalStaff" element={<TechStaff/>}/>
            <Route exact path="/adminStaff" element={<AdminStaff/>}/>
            <Route exact path="/ugAcads" element={<UgAcads/>}/>
            <Route exact path="/ugPlacement" element={<UgPlacement/>}/>
            <Route exact path="/pgAcads" element={<PgAcads/>}/>
            <Route exact path="/pgPlacement" element={<PgPlacement/>}/>
            <Route exact path="/doctoralAcads" element={<DocAcads/>}/>
            <Route exact path="/phDPlacement" element={<PhDPlacement/>}/>
            <Route exact path="/currProjects" element={<OnProj/>}/>
            <Route exact path="/completedProjects" element={<CompProj/>}/>
            <Route exact path="/sponsorsColabs" element={<SponsColab/>}/>
            <Route exact path="/webinars" element={<Webinar/>}/>
            <Route exact path="/chaitanya-talk" element={<Chaitanya_talk/>}/>
            <Route exact path="/mandalSandeep-talk" element={<Mandal_Sandeep_talk/>}/>
            <Route exact path="/aakash-talk" element={<Aakash_talk/>}/>
            <Route exact path="/manisha-talk" element={<Manisha_talk/>}/>
            <Route exact path="/rajdip-talk" element={<Rajdip_talk/>}/>
            <Route exact path="/masaru-talk" element={<Masaru_talk/>}/>
            <Route exact path="/sarvesh-talk" element={<Sarvesh_talk/>}/>
            <Route exact path="/jessica-talk" element={<Jessica_talk/>}/>
            <Route exact path="/rajaram-talk" element={<Rajaram_talk/>}/>
            <Route exact path="/ravindra-talk" element={<Ravindra_talk/>}/>
            <Route exact path="/nachiket-talk" element={<Nachiket_talk/>}/>
            <Route exact path="/naveen-talk" element={<Naveen_talk/>}/>
            <Route exact path="/spc-talk" element={<Surya_talk/>}/>
            <Route exact path="/pradip-talk" element={<Pradip_talk/>}/>
            <Route exact path="/guruswamy-talk" element={<Guruswamy_talk/>}/>
            <Route exact path="/yamuna-talk" element={<Yamuna_talk/>}/>
            <Route exact path="/jhumpa-talk" element={<Jhumpa_talk/>}/>
            <Route exact path="/corpBrochure" element={<CorpRelation/>}/>
            <Route exact path="/researchArea" element={<ResearchLabs/>}/>
            <Route exact path="/newsLetter" element={<Newsletter/>}/>
            <Route exact path="/donate" element={<Donation/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/faq" element={<Faq/>}/>
          </Routes>
          <FooterComp/>
        </Router> 
    </>
  );
}
export default App;
