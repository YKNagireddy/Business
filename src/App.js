import React, { useState, useEffect } from 'react';
import MetroLabs from './Assets/Metrolabs.png'
// import SRN from './Assets/SRN.png'
import Bhokta from './Assets/bhokta.png'
// import Osian from './Assets/osian.jpg'
import Hemanth from './Assets/HemanthKumarPapani.png';
import prakash from './Assets/Prakash.png'
import PremPrakashPugalia from './Assets/PremPrakashPugalia.png'
import MSumanKumar from './Assets/Dr.MSumanKumar.png'
import PraneethMurarishetty from './Assets/PraneethMurarishetty.png'
import OtherBusinessImage from './OtherBusinessImage';
// import UserInfo from './UsersInfo'
// import BusinessList from './BusinessList';
import BusinessDetails from './BusinessDetails'
import AmbrishSharma from './Assets/AmbrishSharma.png'
import SrivaniNerella from './Assets/Ar.SrivaniNerella.png'
import VenkatRamTalluri from './Assets/VenkatRamTalluri.png'
import RaviKiranGundapaneni from './Assets/RaviKiranGundapaneni.png'
import KArchana from './Assets/Er.KArchana.png'
import AliAsgarBurhani from './Assets/AliAsgarBurhani.png'
import VickyEluri from './Assets/VickyEluri.png'
import RamananSingaram from './Assets/RamananSingaram.png'
import AnanthKulkarni from './Assets/AnanthKulkarni.png'
import VenkateshwaranJayaraman from './Assets/VenkateshwaranJayaraman.png'
import MohammedAbdurRaoof from './Assets/MohammedAbdurRaoof.png'
import MRanganath from './Assets/MRanganath.png'
import PotlapallySairamGoud from './Assets/PotlapallySairamGoud.png'
import MohammedAyaanAli from './Assets/MohammedAyaanAli.png'
import KNageshKumar from './Assets/KNageshKumar.png'
import ParvezSuri from './Assets/ParvezSuri.png'
import DevenderGarigela from './Assets/DevenderGarigela.png'
import JeksaniSreenath from './Assets/JeksaniSreenath.png'
import HarshGupta from './Assets/HarshGupta.png'
import GayatriTejavath from './Assets/GayatriTejavath.png'
import RamesshNotani from './Assets/RamesshNotani.png'
import TarunChowdharyBandlamudi from './Assets/TarunChowdharyBandlamudi.png'
import MadhaviAmarnath from './Assets/MadhaviAmarnath.png'
import SRaviteja from './Assets/SRaviteja.png'
import PSampathKumar from './Assets/PSampathKumar.png'
import MushtaqMohd from './Assets/MushtaqMohd.png'
import NitinSingh from './Assets/NitinSingh.png'
import DhanaLakshmiLinga from './Assets/DhanaLakshmiLinga.png'
import KNikhilGoud from './Assets/K.NikhilGoud.png'
import NarenderCheguri from './Assets/NarenderCheguri.png'
import SantoshGuptaVaraganti from './Assets/SantoshGuptaVaraganti.png'
import AmitKumarSekhani from './Assets/AmitKumarSekhani.png'
import PoojaR from './Assets/PoojaR.png'
import SravanKumarNambi from './Assets/SravanKumarNambi.png'
import SanthoshKumarSoma from './Assets/SanthoshKumarSoma.png'
import AnkitBandari from './Assets/AnkitBandari.png'
import APavanKumar from './Assets/APavanKumar.png'
import DrMadhuSalumuri from './Assets/Dr.MadhuSalumuri.png'
import NileshTelukunta from './Assets/NileshTelukunta.png'
import DrAmritaGandhi from './Assets/DrAmritaGandhi.png'
import NawalKishoreChoudhary from './Assets/NawalKishoreChoudhary.png'
import AbhijeetSharma from './Assets/AbhijeetSharma.png'
import CSSrinivasRajuEpuri from './Assets/CSSrinivasRajuEpuri.png'
import Santhosh1 from './Assets/santhosh1.jpeg'
import { getAllPersons } from './Api/index.js';


function App() {
  // const [showOtherBusiness, setShowOtherBusiness] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  // eslint-disable-next-line no-unused-vars
  // const [showOnlyOtherBusinesses, setShowOnlyOtherBusinesses] = useState(false);
// const [activeTab, setActiveTab] = useState("home");
const [showMobile, setShowMobile] = useState(false);
const [bniSearchTerm, setBniSearchTerm] = useState("");
// const [menuOpen, setMenuOpen] = useState(false);



  // const ITEMS_PER_PAGE = selectedBusiness ? 12 : 15;
  // const [currentPage, setCurrentPage] = useState(1);
// const scrollToSection = (sectionId, tabName) => {
//   setActiveTab(tabName);
//   const element = document.getElementById(sectionId);
//   if (element) {
//     const offset = element.offsetTop - 80; // Subtract navbar height + extra space
//     window.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
//   }
// };


  // const toggleBusinessView = () => {
  //   setShowOtherBusiness(!showOtherBusiness);
  //   setSelectedBusiness(null);
  //   setShowOnlyOtherBusinesses(false);
  // };

  // const showOtherBusinessesOnly = () => {
  //   setShowOtherBusiness(true);
  //   setSelectedBusiness(null);
  //   setShowOnlyOtherBusinesses(true);
  // };

  // const buttonContent = showOtherBusiness ? 'My Business' : 'Other Business';

  // const userData = {
  //   name: "Santhosh Maryala",
  //   email: "maryalasanthosh.hr@gmail.com",
  //   phone: "8886089669",
  // };

  const getPersons = async () => {
    try {
      const res = await getAllPersons();
      if (res?.data) {
        console.log(res?.data)
        // setMessages(res.data.messages);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    getPersons();
  }, []);

  const otherBusinessItems = [
    { src: Hemanth, name: "Hemanth Kumar Papani", company: "The Shooting Spot", Keywords: ["Photography Resort", "Pre-Wedding Studio", "Indoor & Outdoor Shooting", "Film Studio", "Premium Photography Services"] },
    { src: prakash, name: "AVS Prakash", company: "Digital Xcutives", Keywords: ["Digital Marketing", "SEO Services", "PPC Management", "Social Media Marketing", "Performance Marketing"] },
    { src: PremPrakashPugalia, name: "Prem Prakash Pugalia", company: "Bhagawati Enterprises", Keywords: ["Computer Hardware", "Printer Cartridges", "IT Solutions", "Networking", "POS Systems"] },
    { src: MSumanKumar, name: "Dr. M Suman Kumar", company: "Sri Siddi Vinayaka Property Developers", Keywords: ["Real Estate", "Open Plots", "RERA Approved", "Land Investment", "Gated Community"] },
    { src: PraneethMurarishetty, name: "Praneeth Murarishetty", company: "Shettys Medical Agencies Pvt. Ltd.", Keywords: ["Pharmacy Network", "Medicine Supply", "Healthcare Services", "Patient Counselling", "Prescription Medicines"] },
    { src: SrivaniNerella, name: "Ar. Srivani Nerella", company: "Krivan Concepts", Keywords: ["Residential Architecture", "Interior Design", "Luxury Bungalows & Interion Design", "Farmhouses", "Sustainable Design"] },
    { src: VenkatRamTalluri, name: "Venkat Ram Talluri", company: "Haritha Technologies", Keywords: ["Biometric and Access Control Systems", "Automatic Sliding and Swing Gates", "Boom Barriers with Fast tag", "Retractable Roofs & Pergolas", "Turnstiles & Flap Barriers."] },
    { src: RaviKiranGundapaneni, name: "Ravi Kiran Gundapaneni", company: "Oval Park", Keywords: ["Cricket Ground", "Sports Facility", "Corporate Events", "Cricket Academy", "Live Streaming"] },
    { src: AmbrishSharma, name: "Ambrish Sharma", company: "Textile Cottage", Keywords: ["Curtains & Blinds", "Bedsheets", "Comforters", "Carpets & Door Mats", "Towels"] },
    { src: KArchana, name: "Er. K Archana", company: "Sri Advaya Engineering Consultants", Keywords: ["Structural Engineering", "Civil Consultancy", "Building Design", "Construction Services", "Engineering Solutions"] },
    { src: AliAsgarBurhani, name: "Ali Asgar Burhani", company: "Decent Metal & Aluminium", Keywords: ["Aluminium Windows & Doors", "Structural Glazing", "ACP Cladding", "Custom Fabrication", "Toughened Glass Solutions"] },
    { src: VickyEluri, name: "Vicky Eluri", company: "V Zone Photography", Keywords: ["Wedding Photography", "Cinematic Films", "Corporate Events", "Destination Photography", "Pre-Wedding Shoots"] },
    { src: RamananSingaram, name: "Ramanan Singaram", company: "Ramana & Co - Forex Support Services", Keywords: ["Foreign Exchange", "Forex Cards", "Overseas Remittance", "Currency Exchange", "Travel Payments"] },
    { src: AnanthKulkarni, name: "Ananth Kulkarni", company: "ASK Associates", Keywords: ["GST Services", "Company Registration", "Tax Filing", "Compliance Services", "Business Registration"] },
    { src: VenkateshwaranJayaraman, name: "Venkateshwaran Jayaraman", company: "Gopathi Shipping Services", Keywords: ["International Shipping", "Customs Clearance", "Freight Forwarding", "Export Import", "Logistics Services"] },
    { src: MohammedAbdurRaoof, name: "Mohammed Abdur Raoof", company: "SRZ Holidays (A Travel Solutions Company)", Keywords: ["Holiday Tour Packages", "Domestic & International Tours", "Car & Coach Rentals", "Five Star Hotels", "Tour Operator"] },
    { src: MRanganath, name: "M Ranganath", company: "Nidhi Diamonds", Keywords: ["Diamond Jewellery", "Bespoke Jewellery", "Natural Diamonds", "Custom Design", "Luxury Jewellery"] },
    { src: PotlapallySairamGoud, name: "Potlapally Sairam Goud", company: "Adhimaatra Education Consultants", Keywords: ["Overseas Education Counselling", "Student Visas", "Educational Loans", "Scholarship Guidance", "University Selection"] },
    { src: MohammedAyaanAli, name: "Mohammed Ayaan Ali", company: "Bellezza Tiles Studio", Keywords: ["Tiles Studio", "Premium Tiling", "Designer Tiles", "Commercial Projects", "Custom Tiles"] },
    { src: KNageshKumar, name: "K. Nagesh Kumar", company: "Snigdha’s Events & Celebrations", Keywords: ["Event Planning", "Wedding Planning", "Corporate Events", "Event Management", "Celebrations"] },
    { src: PSampathKumar, name: "P Sampath Kumar", company: "Underdoggs", Keywords: ["Sports Bar", "Live Sports Screening", "Craft Cocktails", "Watch Parties", "Corporate Events"] },
    { src: SRaviteja, name: "S Raviteja", company: "Venglaze UPVC Windows & Fabrication LLP", Keywords: ["UPVC Windows", "Fabrication Services", "Energy-Efficient Windows", "Custom Fabrication", "Installation Service"] },
    { src: MadhaviAmarnath, name: "Madhavi Amarnath", company: "Sri Tulasi Agencies", Keywords: ["Frozen Foods", "Ready-to-Cook", "Retail Supply", "Hospitality Markets", "Cold Chain"] },
    { src: ParvezSuri, name: "Parvez Suri", company: "Spandrel Mobilia", Keywords: ["Modular Kitchens", "Office Furniture", "Custom Wardrobes", "Doors & Meeting Tables", "Furniture Manufacturing & CNC Design"] },
    { src: DevenderGarigela, name: "Devender Garigela", company: "You & Us", Keywords: ["Print Design", "Brand Communication", "Corporate Brochures", "Packaging Design", "Creative Services"] },
    { src: JeksaniSreenath, name: "Jeksani Sreenath", company: "Shubhakaarya Events & Caterers", Keywords: ["Premium Catering", "Wedding Catering", "Corporate Events", "Traditional Cuisine", "Event Management"] },
    { src: HarshGupta, name: "Harsh Gupta", company: "Gupta Furniture Spare Parts", Keywords: ["Plywood", "Particle Boards", "MDF", "Furniture Manufacturers", "Interior Design Materials."] },
    { src: GayatriTejavath, name: "Gayatri Tejavath", company: "We Care Pest Controls", Keywords: ["Pest Control Services", "Termite Treatment", "Cockroach Control", "Residential Pest Management", "Commercial Pest Solutions"] },
    { src: RamesshNotani, name: "Ramessh Notani", company: "Fund Grow", Keywords: ["Wealth Management", "Financial Planning", "Mutual Funds", "Equity Trade", "Demat Account"] },
    { src: TarunChowdharyBandlamudi, name: "Tarun Chowdhary Bandlamudi", company: "Sri Shakti Enterprises", Keywords: ["General Insurance", "Health Insurance", "Motor Insurance", "Property Insurance", "Liability Insurance"] },
    { src: CSSrinivasRajuEpuri, name: "C S Srinivas Raju Epuri", company: "KBK Ventures", Keywords: ["Corporate Governance", "ROC Compliances", "Mergers & Amalgamations", "SEBI Compliances", "Corporate Restructuring"] },
    { src: AbhijeetSharma, name: "Abhijeet Sharma", company: "Nandi Jewellers", Keywords: ["Gold Jewellery", "Bridal Jewellery", "Silver Articles", "Corporate Gifting", "Customised Jewellery"] },
    { src: MushtaqMohd, name: "Mushtaq Mohd", company: "5M Home Interiors", Keywords: ["Wallpapers", "Wall Coverings", "Interior Design", "Home Decor", "Custom Wallpapers"] },
    { src: NitinSingh, name: "Nitin Singh", company: "Sai Intereotech", Keywords: ["Window Films", "Automotive Tinting", "UV Protection", "Heat Rejection", "Building Films"] },
    { src: DhanaLakshmiLinga, name: "Dhana Lakshmi Linga", company: "Miljo Plants", Keywords: ["Customized Planters", "Indoor Plants", "Corporate Gifting", "Event Décor", "Eco-friendly Design"] },
    { src: KNikhilGoud, name: "K. Nikhil Goud", company: "DN LIFTS", Keywords: ["Lift Installation", "Elevator Technology", "Vertical Transportation", "Commercial Elevators", "Residential Lifts"] },
    { src: NarenderCheguri, name: "Narender Cheguri", company: "Rouurelic Construction Services", Keywords: ["Waterproofing Services", "Concrete Repairs", "Swimming Pool Construction", "Construction Chemicals", "Turnkey Projects"] },
    { src: SantoshGuptaVaraganti, name: "Santosh Gupta Varaganti", company: "Guptha Associates", Keywords: ["Credit Score", "Interest", "Amortization", "Collateral", "Debt Ratios"] },
    { src: AmitKumarSekhani, name: "Amit Kumar Sekhani", company: "Bhagyanagar Hydraulics", Keywords: ["Rod Seals", "Piston Seals", "Wiper Seals", "Hydraulic & Pneumatic Seals", "Piston & Wiper Seals"] },
    { src: PoojaR, name: "Pooja R", company: "Styled By Pooja", Keywords: ["Makeup artist", "Bridal makeup", "Hair styling", "Beauty services", "Saree Draping"] },
    { src: SravanKumarNambi, name: "Sravan Kumar Nambi", company: "Vaaradhi IT Services", Keywords: ["Digital Transformation", "WhatsApp API Solutions", "Email Marketing", "CRM Platforms", "Premium Software Subscriptions"] },
    { src: SanthoshKumarSoma, name: "Santhosh Kumar Soma", company: "Ergo- Hygienist Handyman Services PVT LTD", Keywords: ["Office Chair Restoration", "Ergonomic Services", "BIFMA Certified", "Corporate Handyman", "Chair Repair Services"] },
    { src: AnkitBandari, name: "Ankit Bandari", company: "PS Granites", Keywords: ["Granite Supply", "Granite Fabrication", "B2B Granite Solutions", "Construction Materials", "Granite Installation"] },
    { src: APavanKumar, name: "A Pavan Kumar", company: "Life Insurance Corporation Of India (LIC)", Keywords: ["Life Insurance", "Financial Protection", "Children's Education Protection Plan", "Happy Retirement Plan", "Risk Management"] },
    { src: DrMadhuSalumuri, name: "Dr. Madhu Salumuri", company: "Praroha Greens", Keywords: ["Microgreens", "Sustainable Urban Farming", "Pesticide-Free Produce", "Food Literacy", "Eco-Friendly Practices"] },
    { src: NileshTelukunta, name: "Nilesh Telukunta", company: "New Bombay Dresses", Keywords: ["School Uniforms", "Corporate Workwear", "Medical Uniforms", "Hotel Uniforms", "Customized Apparel"] },
    { src: DrAmritaGandhi, name: "Dr Amrita Gandhi", company: "Spectrum Dental Centre", Keywords: ["Multi-Specialty Dental Care", "Cosmetic Dentistry", "Root Canals & Crowns", "Aligners", "Implants"] },
    { src: NawalKishoreChoudhary, name: "Nawal Kishore Choudhary", company: "Aboli Enterprises", Keywords: ["Flooring Solutions", "Epoxy Flooring", "Sports Flooring", "Concrete Flooring", "Commercial Flooring"] },
  ];

  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const paginatedItems = otherBusinessItems
  //   .filter((b) => !selectedBusiness || b.name !== selectedBusiness.name)
  //   .slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // const totalPages = Math.ceil(
  //   (selectedBusiness
  //     ? otherBusinessItems.filter((b) => b.name !== selectedBusiness.name).length
  //     : otherBusinessItems.length) / ITEMS_PER_PAGE
  // );

  // const businessesData = [
  //   { name: "IT", logo: MetroLabs },
  //   { name: "CDM (Data Management)", logo: Bhokta },
  //   // { name: "Overseas Consultancy", logo: Osian },
  //   // { name: "Corrugated Boxes", logo: SRN },
  // ];

  // eslint-disable-next-line no-unused-vars
  const BusinessButton = (
    <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3">
      {/* === Buttons Row === */}
      {/* <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
        <button
          className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-700 rounded-full text-white text-xs sm:text-sm hover:bg-blue-800 transition"
          onClick={toggleBusinessView}
        >
          {buttonContent}
        </button>
        <button
          className="px-3 py-1 sm:px-4 sm:py-2 bg-green-700 rounded-full text-white text-xs sm:text-sm hover:bg-green-800 transition"
          onClick={showOtherBusinessesOnly}
        >
          Show Other Businesses
        </button>
      </div> */}

      {/* === Text Below === */}
      {/* {buttonContent === "Other Business" && ( */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-justify p-2 leading-snug">
          Santhosh Maryala is a dynamic serial entrepreneur committed to driving innovation, employment generation, and national economic progress. With a strong academic foundation, he earned an MBA in HR and Finance from Osmania University and an MSc in Psychology from Kakatiya University. This unique combination of disciplines allows him to merge business strategy with a deep understanding of human behavior—an approach that shapes his leadership and business philosophy. Inspired by his mentor, Dr. Narsin Vijaya, Santhosh embarked on a journey to create ventures that contribute meaningfully to India’s GDP and empower individuals through sustainable employment opportunities.
        </p>
      {/* )} */}
    </div>
  );


  return (
    // <div className="p-2 bg-orange-500 min-h-screen overflow-x-hidden">
    //   {showOtherBusiness ? (
    //     <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
    //       {/* LEFT PANEL */}
    //       <div className="md:col-span-4 flex flex-col bg-white rounded-xl shadow-lg p-2">
    //         {!showOnlyOtherBusinesses && (
    //           <>
    //             <UserInfo user={userData} />
    //             <BusinessList businesses={businessesData} />
    //           </>
    //         )}
    //       </div>

    //       {/* RIGHT PANEL */}
    //       <div className="md:col-span-8 bg-white rounded-xl shadow-lg relative p-2">
    //         {selectedBusiness ? (
    //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
    //             <BusinessDetails business={selectedBusiness} />

    //             <div className="p-3 rounded-lg bg-gray-50 overflow-y-auto h-full">
    //               <h3 className="text-base sm:text-lg font-semibold mb-2">
    //                 Other Businesses
    //               </h3>
    //               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    //                 {paginatedItems.map((item, index) => (
    //                   <div
    //                     key={index}
    //                     onClick={() => setSelectedBusiness(item)}
    //                     className="cursor-pointer p-2 bg-white rounded-lg border hover:shadow-md flex flex-col items-center text-center transition"
    //                   >
    //                     <img
    //                       src={item.src}
    //                       alt={item.name}
    //                       className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md border mb-2"
    //                     />
    //                     <p className="text-xs sm:text-sm font-medium text-gray-700 truncate w-full">
    //                       {item.name}
    //                     </p>
    //                   </div>
    //                 ))}
    //               </div>

    //               {/* Pagination */}
    //               <div className="flex justify-center mt-3 space-x-2 text-xs sm:text-sm">
    //                 <button
    //                   disabled={currentPage === 1}
    //                   onClick={() => setCurrentPage((p) => p - 1)}
    //                   className="px-2 py-1 border rounded disabled:opacity-50"
    //                 >
    //                   Prev
    //                 </button>
    //                 <span className="text-gray-600">
    //                   Page {currentPage} of {totalPages}
    //                 </span>
    //                 <button
    //                   disabled={currentPage === totalPages}
    //                   onClick={() => setCurrentPage((p) => p + 1)}
    //                   className="px-2 py-1 border rounded disabled:opacity-50"
    //                 >
    //                   Next
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ) : (
    //           <div className="p-2 sm:p-3 rounded-lg bg-gray-50 overflow-y-auto">
    //             <OtherBusinessImage
    //               otherBusinessItems={paginatedItems}
    //               setSelectedBusiness={setSelectedBusiness}
    //             />

    //             {/* Pagination */}
    //             <div className="flex justify-center mt-3 space-x-2 text-xs sm:text-sm">
    //               <button
    //                 disabled={currentPage === 1}
    //                 onClick={() => setCurrentPage((p) => p - 1)}
    //                 className="px-2 py-1 border rounded disabled:opacity-50"
    //               >
    //                 Prev
    //               </button>
    //               <span className="text-gray-600">
    //                 Page {currentPage} of {totalPages}
    //               </span>
    //               <button
    //                 disabled={currentPage === totalPages}
    //                 onClick={() => setCurrentPage((p) => p + 1)}
    //                 className="px-2 py-1 border rounded disabled:opacity-50"
    //               >
    //                 Next
    //               </button>
    //             </div>
    //           </div>
    //         )}

    //         <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
    //           {BusinessButton}
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     // Default view (My Business)
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2 rounded-xl">
    //       <div className="p-3 bg-white rounded-lg">
    //         <UserInfo user={userData} />
    //       </div>
    //       <div className="p-3 bg-white rounded-lg">
    //         <BusinessList businesses={businessesData} />
    //       </div>
    //       <div className="p-3 bg-white rounded-lg">{BusinessButton}</div>
    //     </div>
    //   )}
    // </div>
// return (
<div className=" bg-white min-h-screen overflow-x-hidden pt-4">
{/* NAVBAR */}
{/*<div className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b">

  <div className="relative flex items-center h-16 px-6 max-w-7xl mx-auto">

    
    <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-lg">
      My Business
    </h1>

    
    <div className="hidden md:flex gap-3 ml-auto">

      <button
        onClick={() => scrollToSection("home", "home")}
        className={`px-4 py-2 rounded-full font-semibold transition ${
          activeTab === "home"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-purple-300 hover:text-white"
        }`}
      >
        Home
      </button>

      <button
        onClick={() => scrollToSection("bni", "bni")}
        className={`px-4 py-2 rounded-full font-semibold transition ${
          activeTab === "bni"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-purple-300 hover:text-white"
        }`}
      >
        BNI
      </button>

      <button
        onClick={() => scrollToSection("contact", "contact")}
        className={`px-4 py-2 rounded-full font-semibold transition ${
          activeTab === "contact"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-purple-300 hover:text-white"
        }`}
      >
        Contact Us
      </button>

    </div>

    
    <button
      className="md:hidden ml-auto text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
  </div>

  
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ${
      menuOpen ? "max-h-60 py-4" : "max-h-0"
    }`}
  >
    <div className="flex flex-col gap-3 px-6">

      <button
        onClick={() => {
          scrollToSection("home", "home");
          setMenuOpen(false);
        }}
        className="bg-gray-200 px-4 py-2 rounded-full"
      >
        Home
      </button>

      <button
        onClick={() => {
          scrollToSection("bni", "bni");
          setMenuOpen(false);
        }}
        className="bg-gray-200 px-4 py-2 rounded-full"
      >
        BNI
      </button>

      <button
        onClick={() => {
          scrollToSection("contact", "contact");
          setMenuOpen(false);
        }}
        className="bg-gray-200 px-4 py-2 rounded-full"
      >
        Contact Us
      </button>

    </div>
  </div>
</div>
*/}


   {/* HOME SECTION */}
<div id="home" className="bg-white min-h-screen ">

  <div className="flex justify-center items-center py-9">
    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center drop-shadow-lg leading-tight">
      Business Portfolio
    </h1>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-7xl mx-auto">

    {/* LEFT — FULL IMAGE */}
    <div className="flex justify-center">
      <img
        src={Santhosh1}  
        alt="Santhosh"
        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
      />
    </div>

    {/* RIGHT — EQUAL 50/50 TEXT + LOGOS */}
<div className="flex flex-col space-y-6">

  {/* TOP ROW */}
<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">

  {/* DETAILS */}
  <div className="flex flex-col text-gray-800 text-lg space-y-3">

    <p><strong>Name:</strong> Santhosh Maryala</p>

{/* Mail + Phone centered */}
<div className="flex flex-col text-sm md:text-lg text-gray-800 space-y-2">

  <div className="flex items-center gap-3 w-full max-w-xl">
    <i className="bi bi-envelope-fill text-blue-600 text-lg"></i>
    <span className="break-all">
      maryalasanthosh.hr@gmail.com
    </span>
  </div>

<div className="flex items-center gap-3 w-full max-w-xl">
  <i className="bi bi-telephone-fill text-green-600 text-lg"></i>

  <a
    href="tel:+917036089669"
    className="text-gray-800"
  >
    +91 7036089669
  </a>

  <span>-</span>

  <a
    href="tel:+918886089669"
    className="text-gray-800"
  >
    +91 8886089669
  </a>
</div>

</ div>
</ div>

  {/* LOGOS */}
  <div className="flex flex-col items-center justify-center gap-6 order-2">

    <div className="text-center">
      <img src={MetroLabs} alt="Metro Labs" className="h-13 object-contain mx-auto" />
      {/* <p className="mt-2 text-sm text-gray-700">IT</p> */}
    </div>

    <div className="text-center">
      <img src={Bhokta} alt="Bhokta" className="h-13 object-contain mx-auto" />
      {/* <p className="mt-2 text-sm text-gray-700">
        CDM (Data Management)
      </p> */}
    </div>

  </div>
</div>



  {/* PARAGRAPH */}
    <p className="text-gray-700 text-base leading-relaxed text-justify " >
      Santhosh Maryala is a dynamic serial entrepreneur committed to driving innovation,
      employment generation, and national economic progress. With a strong academic
      foundation, he earned an MBA in HR and Finance from Osmania University and an MSc
      in Psychology from Kakatiya University. This unique combination of disciplines
      allows him to merge business strategy with a deep understanding of human behavior—
      an approach that shapes his leadership and business philosophy.
    </p>



</div>

</div>
</div>

{/* BNI SECTION */}
<div
  id="bni"
  className="  max-w-7xl mx-auto flex flex-col h-[85vh]"
>

  {/* TITLE ROW */}
  <div className="mb-6 text-center">
    <h1 className="font-extrabold text-4xl md:text-5xl drop-shadow-lg">
      My Business List
    </h1>
  </div>

  {/* SEARCH ROW */}
<div className="mb-6 flex justify-end">
  <input
    type="text"
    placeholder="Search by keyword, name, or company..."
    value={bniSearchTerm}
    onChange={(e) => setBniSearchTerm(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
</div>


  {/* SCROLLABLE GRID AREA */}
  <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">

    {selectedBusiness ? (
      <div className="bg-gray-50 p-4 rounded-xl">
        <BusinessDetails
          business={selectedBusiness}
          onBack={() => setSelectedBusiness(null)}
        />
      </div>
    ) : (

      <OtherBusinessImage
        otherBusinessItems={otherBusinessItems}
        setSelectedBusiness={setSelectedBusiness}
        searchTerm={bniSearchTerm}
      />
    )}

  </div>
</div>


    {/* CONTACT SECTION */}
<div id="contact" className="py-16 px-6 max-w-5xl mx-auto">

  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
    Contact Us
  </h2>

  <form className="space-y-8">

    {/* ROW 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
        />
      </div>

    </div>

    {/* MESSAGE */}
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-2">
        Message
      </label>
      <textarea
        rows="6"
        placeholder="Write your message..."
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
      />
    </div>

    {/* BUTTON */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-purple-600 text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition shadow-md"
      >
        Send Message
      </button>
    </div>

  </form>
</div>

    {/* Floating Click Me Button */}
  {/* Floating Click Me Button */}
  <div className="fixed bottom-5 right-5 z-[999]">
    <button
      onClick={() => setShowMobile(!showMobile)}
      className={`px-5 py-3 rounded-full font-bold shadow-lg transition duration-300 
        ${showMobile 
          ? "bg-white text-purple-600 border border-purple-400" 
          : "bg-purple-500 text-white animate-bounce hover:bg-purple-600"
        }`}
    >
      {showMobile ? "📞 8886089669" : "Click Me"}
    </button>
  </div>
</div>
// );

  );
}

export default App;