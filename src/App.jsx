import React, { useEffect } from 'react';

// ── design system ──
import './styles/tokens.css';

// ── section components ──
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutFounder from './components/AboutFounder';
import Achievements from './components/Achievements';
import Companies from './components/Companies';
import Statistics from './components/Statistics';
import BusinessMembers from './components/BusinessMembers';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// ── assets ──
import MetroLabs from './Assets/Metrolabs.png';
import Bhokta from './Assets/bhokta.png';
import Santhosh1 from './Assets/santhosh1.jpeg';
import Hemanth from './Assets/HemanthKumarPapani.png';
import prakash from './Assets/Prakash.png';
import PremPrakashPugalia from './Assets/PremPrakashPugalia.png';
import MSumanKumar from './Assets/Dr.MSumanKumar.png';
import PraneethMurarishetty from './Assets/PraneethMurarishetty.png';
import AmbrishSharma from './Assets/AmbrishSharma.png';
import SrivaniNerella from './Assets/Ar.SrivaniNerella.png';
import VenkatRamTalluri from './Assets/VenkatRamTalluri.png';
import RaviKiranGundapaneni from './Assets/RaviKiranGundapaneni.png';
import KArchana from './Assets/Er.KArchana.png';
import AliAsgarBurhani from './Assets/AliAsgarBurhani.png';
import VickyEluri from './Assets/VickyEluri.png';
import RamananSingaram from './Assets/RamananSingaram.png';
import AnanthKulkarni from './Assets/AnanthKulkarni.png';
import VenkateshwaranJayaraman from './Assets/VenkateshwaranJayaraman.png';
import MohammedAbdurRaoof from './Assets/MohammedAbdurRaoof.png';
import MRanganath from './Assets/MRanganath.png';
import PotlapallySairamGoud from './Assets/PotlapallySairamGoud.png';
import MohammedAyaanAli from './Assets/MohammedAyaanAli.png';
import KNageshKumar from './Assets/KNageshKumar.png';
import ParvezSuri from './Assets/ParvezSuri.png';
import DevenderGarigela from './Assets/DevenderGarigela.png';
import JeksaniSreenath from './Assets/JeksaniSreenath.png';
import HarshGupta from './Assets/HarshGupta.png';
import GayatriTejavath from './Assets/GayatriTejavath.png';
import RamesshNotani from './Assets/RamesshNotani.png';
import TarunChowdharyBandlamudi from './Assets/TarunChowdharyBandlamudi.png';
import MadhaviAmarnath from './Assets/MadhaviAmarnath.png';
import SRaviteja from './Assets/SRaviteja.png';
import PSampathKumar from './Assets/PSampathKumar.png';
import MushtaqMohd from './Assets/MushtaqMohd.png';
import NitinSingh from './Assets/NitinSingh.png';
import DhanaLakshmiLinga from './Assets/DhanaLakshmiLinga.png';
import KNikhilGoud from './Assets/K.NikhilGoud.png';
import NarenderCheguri from './Assets/NarenderCheguri.png';
import SantoshGuptaVaraganti from './Assets/SantoshGuptaVaraganti.png';
import AmitKumarSekhani from './Assets/AmitKumarSekhani.png';
import PoojaR from './Assets/PoojaR.png';
import SravanKumarNambi from './Assets/SravanKumarNambi.png';
import SanthoshKumarSoma from './Assets/SanthoshKumarSoma.png';
import AnkitBandari from './Assets/AnkitBandari.png';
import APavanKumar from './Assets/APavanKumar.png';
import DrMadhuSalumuri from './Assets/Dr.MadhuSalumuri.png';
import NileshTelukunta from './Assets/NileshTelukunta.png';
import DrAmritaGandhi from './Assets/DrAmritaGandhi.png';
import NawalKishoreChoudhary from './Assets/NawalKishoreChoudhary.png';
import AbhijeetSharma from './Assets/AbhijeetSharma.png';
import CSSrinivasRajuEpuri from './Assets/CSSrinivasRajuEpuri.png';

import { getAllPersons } from './Api/index.js';

function App() {
  const getPersons = async () => {
    try {
      const res = await getAllPersons();
      if (res?.data) {
        console.log(res?.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    getPersons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const companies = [
    { name: 'MetroLabs', logo: MetroLabs, tagline: 'IT services & software solutions' },
    { name: 'Bhokta', logo: Bhokta, tagline: 'Corporate data management' },
  ];

  const otherBusinessItems = [
    { src: Hemanth, name: 'Hemanth Kumar Papani', company: 'The Shooting Spot', Keywords: ['Photography Resort', 'Pre-Wedding Studio', 'Indoor & Outdoor Shooting', 'Film Studio', 'Premium Photography Services'] },
    { src: prakash, name: 'AVS Prakash', company: 'Digital Xcutives', Keywords: ['Digital Marketing', 'SEO Services', 'PPC Management', 'Social Media Marketing', 'Performance Marketing'] },
    { src: PremPrakashPugalia, name: 'Prem Prakash Pugalia', company: 'Bhagawati Enterprises', Keywords: ['Computer Hardware', 'Printer Cartridges', 'IT Solutions', 'Networking', 'POS Systems'] },
    { src: MSumanKumar, name: 'Dr. M Suman Kumar', company: 'Sri Siddi Vinayaka Property Developers', Keywords: ['Real Estate', 'Open Plots', 'RERA Approved', 'Land Investment', 'Gated Community'] },
    { src: PraneethMurarishetty, name: 'Praneeth Murarishetty', company: 'Shettys Medical Agencies Pvt. Ltd.', Keywords: ['Pharmacy Network', 'Medicine Supply', 'Healthcare Services', 'Patient Counselling', 'Prescription Medicines'] },
    { src: SrivaniNerella, name: 'Ar. Srivani Nerella', company: 'Krivan Concepts', Keywords: ['Residential Architecture', 'Interior Design', 'Luxury Bungalows & Interion Design', 'Farmhouses', 'Sustainable Design'] },
    { src: VenkatRamTalluri, name: 'Venkat Ram Talluri', company: 'Haritha Technologies', Keywords: ['Biometric and Access Control Systems', 'Automatic Sliding and Swing Gates', 'Boom Barriers with Fast tag', 'Retractable Roofs & Pergolas', 'Turnstiles & Flap Barriers.'] },
    { src: RaviKiranGundapaneni, name: 'Ravi Kiran Gundapaneni', company: 'Oval Park', Keywords: ['Cricket Ground', 'Sports Facility', 'Corporate Events', 'Cricket Academy', 'Live Streaming'] },
    { src: AmbrishSharma, name: 'Ambrish Sharma', company: 'Textile Cottage', Keywords: ['Curtains & Blinds', 'Bedsheets', 'Comforters', 'Carpets & Door Mats', 'Towels'] },
    { src: KArchana, name: 'Er. K Archana', company: 'Sri Advaya Engineering Consultants', Keywords: ['Structural Engineering', 'Civil Consultancy', 'Building Design', 'Construction Services', 'Engineering Solutions'] },
    { src: AliAsgarBurhani, name: 'Ali Asgar Burhani', company: 'Decent Metal & Aluminium', Keywords: ['Aluminium Windows & Doors', 'Structural Glazing', 'ACP Cladding', 'Custom Fabrication', 'Toughened Glass Solutions'] },
    { src: VickyEluri, name: 'Vicky Eluri', company: 'V Zone Photography', Keywords: ['Wedding Photography', 'Cinematic Films', 'Corporate Events', 'Destination Photography', 'Pre-Wedding Shoots'] },
    { src: RamananSingaram, name: 'Ramanan Singaram', company: 'Ramana & Co - Forex Support Services', Keywords: ['Foreign Exchange', 'Forex Cards', 'Overseas Remittance', 'Currency Exchange', 'Travel Payments'] },
    { src: AnanthKulkarni, name: 'Ananth Kulkarni', company: 'ASK Associates', Keywords: ['GST Services', 'Company Registration', 'Tax Filing', 'Compliance Services', 'Business Registration'] },
    { src: VenkateshwaranJayaraman, name: 'Venkateshwaran Jayaraman', company: 'Gopathi Shipping Services', Keywords: ['International Shipping', 'Customs Clearance', 'Freight Forwarding', 'Export Import', 'Logistics Services'] },
    { src: MohammedAbdurRaoof, name: 'Mohammed Abdur Raoof', company: 'SRZ Holidays (A Travel Solutions Company)', Keywords: ['Holiday Tour Packages', 'Domestic & International Tours', 'Car & Coach Rentals', 'Five Star Hotels', 'Tour Operator'] },
    { src: MRanganath, name: 'M Ranganath', company: 'Nidhi Diamonds', Keywords: ['Diamond Jewellery', 'Bespoke Jewellery', 'Natural Diamonds', 'Custom Design', 'Luxury Jewellery'] },
    { src: PotlapallySairamGoud, name: 'Potlapally Sairam Goud', company: 'Adhimaatra Education Consultants', Keywords: ['Overseas Education Counselling', 'Student Visas', 'Educational Loans', 'Scholarship Guidance', 'University Selection'] },
    { src: MohammedAyaanAli, name: 'Mohammed Ayaan Ali', company: 'Bellezza Tiles Studio', Keywords: ['Tiles Studio', 'Premium Tiling', 'Designer Tiles', 'Commercial Projects', 'Custom Tiles'] },
    { src: KNageshKumar, name: 'K. Nagesh Kumar', company: 'Snigdha’s Events & Celebrations', Keywords: ['Event Planning', 'Wedding Planning', 'Corporate Events', 'Event Management', 'Celebrations'] },
    { src: PSampathKumar, name: 'P Sampath Kumar', company: 'Underdoggs', Keywords: ['Sports Bar', 'Live Sports Screening', 'Craft Cocktails', 'Watch Parties', 'Corporate Events'] },
    { src: SRaviteja, name: 'S Raviteja', company: 'Venglaze UPVC Windows & Fabrication LLP', Keywords: ['UPVC Windows', 'Fabrication Services', 'Energy-Efficient Windows', 'Custom Fabrication', 'Installation Service'] },
    { src: MadhaviAmarnath, name: 'Madhavi Amarnath', company: 'Sri Tulasi Agencies', Keywords: ['Frozen Foods', 'Ready-to-Cook', 'Retail Supply', 'Hospitality Markets', 'Cold Chain'] },
    { src: ParvezSuri, name: 'Parvez Suri', company: 'Spandrel Mobilia', Keywords: ['Modular Kitchens', 'Office Furniture', 'Custom Wardrobes', 'Doors & Meeting Tables', 'Furniture Manufacturing & CNC Design'] },
    { src: DevenderGarigela, name: 'Devender Garigela', company: 'You & Us', Keywords: ['Print Design', 'Brand Communication', 'Corporate Brochures', 'Packaging Design', 'Creative Services'] },
    { src: JeksaniSreenath, name: 'Jeksani Sreenath', company: 'Shubhakaarya Events & Caterers', Keywords: ['Premium Catering', 'Wedding Catering', 'Corporate Events', 'Traditional Cuisine', 'Event Management'] },
    { src: HarshGupta, name: 'Harsh Gupta', company: 'Gupta Furniture Spare Parts', Keywords: ['Plywood', 'Particle Boards', 'MDF', 'Furniture Manufacturers', 'Interior Design Materials.'] },
    { src: GayatriTejavath, name: 'Gayatri Tejavath', company: 'We Care Pest Controls', Keywords: ['Pest Control Services', 'Termite Treatment', 'Cockroach Control', 'Residential Pest Management', 'Commercial Pest Solutions'] },
    { src: RamesshNotani, name: 'Ramessh Notani', company: 'Fund Grow', Keywords: ['Wealth Management', 'Financial Planning', 'Mutual Funds', 'Equity Trade', 'Demat Account'] },
    { src: TarunChowdharyBandlamudi, name: 'Tarun Chowdhary Bandlamudi', company: 'Sri Shakti Enterprises', Keywords: ['General Insurance', 'Health Insurance', 'Motor Insurance', 'Property Insurance', 'Liability Insurance'] },
    { src: CSSrinivasRajuEpuri, name: 'C S Srinivas Raju Epuri', company: 'KBK Ventures', Keywords: ['Corporate Governance', 'ROC Compliances', 'Mergers & Amalgamations', 'SEBI Compliances', 'Corporate Restructuring'] },
    { src: AbhijeetSharma, name: 'Abhijeet Sharma', company: 'Nandi Jewellers', Keywords: ['Gold Jewellery', 'Bridal Jewellery', 'Silver Articles', 'Corporate Gifting', 'Customised Jewellery'] },
    { src: MushtaqMohd, name: 'Mushtaq Mohd', company: '5M Home Interiors', Keywords: ['Wallpapers', 'Wall Coverings', 'Interior Design', 'Home Decor', 'Custom Wallpapers'] },
    { src: NitinSingh, name: 'Nitin Singh', company: 'Sai Intereotech', Keywords: ['Window Films', 'Automotive Tinting', 'UV Protection', 'Heat Rejection', 'Building Films'] },
    { src: DhanaLakshmiLinga, name: 'Dhana Lakshmi Linga', company: 'Miljo Plants', Keywords: ['Customized Planters', 'Indoor Plants', 'Corporate Gifting', 'Event Décor', 'Eco-friendly Design'] },
    { src: KNikhilGoud, name: 'K. Nikhil Goud', company: 'DN LIFTS', Keywords: ['Lift Installation', 'Elevator Technology', 'Vertical Transportation', 'Commercial Elevators', 'Residential Lifts'] },
    { src: NarenderCheguri, name: 'Narender Cheguri', company: 'Rouurelic Construction Services', Keywords: ['Waterproofing Services', 'Concrete Repairs', 'Swimming Pool Construction', 'Construction Chemicals', 'Turnkey Projects'] },
    { src: SantoshGuptaVaraganti, name: 'Santosh Gupta Varaganti', company: 'Guptha Associates', Keywords: ['Credit Score', 'Interest', 'Amortization', 'Collateral', 'Debt Ratios'] },
    { src: AmitKumarSekhani, name: 'Amit Kumar Sekhani', company: 'Bhagyanagar Hydraulics', Keywords: ['Rod Seals', 'Piston Seals', 'Wiper Seals', 'Hydraulic & Pneumatic Seals', 'Piston & Wiper Seals'] },
    { src: PoojaR, name: 'Pooja R', company: 'Styled By Pooja', Keywords: ['Makeup artist', 'Bridal makeup', 'Hair styling', 'Beauty services', 'Saree Draping'] },
    { src: SravanKumarNambi, name: 'Sravan Kumar Nambi', company: 'Vaaradhi IT Services', Keywords: ['Digital Transformation', 'WhatsApp API Solutions', 'Email Marketing', 'CRM Platforms', 'Premium Software Subscriptions'] },
    { src: SanthoshKumarSoma, name: 'Santhosh Kumar Soma', company: 'Ergo- Hygienist Handyman Services PVT LTD', Keywords: ['Office Chair Restoration', 'Ergonomic Services', 'BIFMA Certified', 'Corporate Handyman', 'Chair Repair Services'] },
    { src: AnkitBandari, name: 'Ankit Bandari', company: 'PS Granites', Keywords: ['Granite Supply', 'Granite Fabrication', 'B2B Granite Solutions', 'Construction Materials', 'Granite Installation'] },
    { src: APavanKumar, name: 'A Pavan Kumar', company: 'Life Insurance Corporation Of India (LIC)', Keywords: ['Life Insurance', 'Financial Protection', "Children's Education Protection Plan", 'Happy Retirement Plan', 'Risk Management'] },
    { src: DrMadhuSalumuri, name: 'Dr. Madhu Salumuri', company: 'Praroha Greens', Keywords: ['Microgreens', 'Sustainable Urban Farming', 'Pesticide-Free Produce', 'Food Literacy', 'Eco-Friendly Practices'] },
    { src: NileshTelukunta, name: 'Nilesh Telukunta', company: 'New Bombay Dresses', Keywords: ['School Uniforms', 'Corporate Workwear', 'Medical Uniforms', 'Hotel Uniforms', 'Customized Apparel'] },
    { src: DrAmritaGandhi, name: 'Dr Amrita Gandhi', company: 'Spectrum Dental Centre', Keywords: ['Multi-Specialty Dental Care', 'Cosmetic Dentistry', 'Root Canals & Crowns', 'Aligners', 'Implants'] },
    { src: NawalKishoreChoudhary, name: 'Nawal Kishore Choudhary', company: 'Aboli Enterprises', Keywords: ['Flooring Solutions', 'Epoxy Flooring', 'Sports Flooring', 'Concrete Flooring', 'Commercial Flooring'] },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-body">
      <Navbar />
      <HeroBanner portraitSrc={Santhosh1} />
      <AboutFounder />
      <Achievements />
      <Companies companies={companies} />
      <Statistics />
      <BusinessMembers otherBusinessItems={otherBusinessItems} />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
