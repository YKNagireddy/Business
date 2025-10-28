import React, { useState } from 'react';
import MetroLabs from './Assets/Metrolabs.png'
import SRN from './Assets/SRN.png'
import Bhokta from './Assets/bhokta.png'
import Osian from './Assets/osian.jpg'
import Hemanth from './Assets/HemanthKumarPapani.png';
import prakash from './Assets/Prakash.png'
import PremPrakashPugalia from './Assets/PremPrakashPugalia.png'
import MSumanKumar from './Assets/Dr.MSumanKumar.png'
import PraneethMurarishetty from './Assets/PraneethMurarishetty.png'
import OtherBusinessImage from './OtherBusinessImage';
import UserInfo from './UsersInfo'
import BusinessList from './BusinessList';
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

function App() {
  const [showOtherBusiness, setShowOtherBusiness] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null
  // eslint-disable-next-line no-unused-vars
  const [showOnlyOtherBusinesses, setShowOnlyOtherBusinesses] = useState(false);

  const ITEMS_PER_PAGE = selectedBusiness ? 12 : 15;
  const [currentPage, setCurrentPage] = useState(1);

  const toggleBusinessView = () => {
    setShowOtherBusiness(!showOtherBusiness);
    setSelectedBusiness(null);
    setShowOnlyOtherBusinesses(false);
  };

  const showOtherBusinessesOnly = () => {
    setShowOtherBusiness(true);
    setSelectedBusiness(null);
    setShowOnlyOtherBusinesses(true);
  };

  const buttonContent = showOtherBusiness ? 'My Business' : 'Other Business';

  const userData = {
    name: "Santhosh Maryala",
    email: "maryalasanthosh.hr@gmail.com",
    phone: "8886089669",
  };

  const otherBusinessItems = [
    // { src: santhosh, name: "Staffing and recruting", Keywords: ["HR Solutions", "Payroll Services", "Recruitment Solutions", "Manpower Services", "Human Resource Management"] },
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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = otherBusinessItems
    .filter((b) => !selectedBusiness || b.name !== selectedBusiness.name)
    .slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(
    (selectedBusiness
      ? otherBusinessItems.filter((b) => b.name !== selectedBusiness.name).length
      : otherBusinessItems.length) / ITEMS_PER_PAGE
  );

  const businessesData = [
    { name: "IT", logo: MetroLabs },
    { name: "CDM (Data Management)", logo: Bhokta },
    { name: "Overseas Consultancy", logo: Osian },
    { name: "Corrugated Boxes", logo: SRN },
  ];

  const BusinessButton = (
    <>
      <div className="flex gap-1">
        <button
          className="p-2 bg-blue-700 rounded-full text-white hover:bg-blue-800 transition"
          onClick={toggleBusinessView}
        >
          {buttonContent}
        </button>
        <button
          className="p-2 bg-green-700 rounded-full text-white hover:bg-green-800 transition"
          onClick={showOtherBusinessesOnly}
        >
          Show Other Businesses
        </button>
      </div>
      {buttonContent === "Other Business" && (<p className='p-2 text-justify leading-snug text-left font-[callibri]'>Santhosh Maryala is a serial entrepreneur dedicated to innovation, job creation, and national growth. Armed with an MBA in HR and Finance from Osmania University and an MSc in Psychology from Kakatiya University, he blends business strategy with human insight. Guided by Dr. Narsin Vijaya, he founded Metrolabs Services Pvt Ltd in 2020—an integrated HR and IT solutions company offering end-to-end services in recruitment, payroll management, HR audits, accounting, POSH training, and software development using technologies like .NET, Java, Python, ServiceNow, and Full Stack. Later, he introduced training and placement programs to boost employability and internships. Despite pandemic challenges, he expanded globally, serving clients across the USA and Canada.</p>)}
    </>
  );

  return (
    <div className="p-2 bg-orange-500 min-h-screen">
      {showOtherBusiness ? (
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 grid grid-rows-2 bg-gray-100 rounded-xl shadow-lg transition duration-300 p-1 bg-white rounded-lg">
            {/* {!showOnlyOtherBusinesses && ( */}
            <>
              <UserInfo user={userData} />
              <BusinessList businesses={businessesData} />
            </>
            {/* )} */}
          </div>
          <div className="col-span-8 bg-gray-100 rounded-xl shadow-lg transition duration-300 relative p-2">
            {selectedBusiness ? (
              <div className="grid grid-cols-2 gap-2">
                <BusinessDetails business={selectedBusiness} />
                <div className="p-4 rounded-lg bg-gray-50 overflow-y-auto h-full">
                  <h3 className="text-lg font-semibold mb-2">Other Businesses</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {paginatedItems.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedBusiness(item)}
                        className="cursor-pointer p-2 bg-white rounded-lg border hover:shadow-md flex flex-col items-center text-center transition mt-2"
                      >
                        <img
                          src={item.src}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700">{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-2 space-x-1">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                      Prev
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-gray-50 overflow-y-auto">
                <OtherBusinessImage
                  otherBusinessItems={paginatedItems}
                  setSelectedBusiness={setSelectedBusiness}
                />
                <div className="flex justify-center mt-2 space-x-1">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            <div className="absolute top-6 right-2 z-10">{BusinessButton}</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 p-2 rounded-xl shadow-lg">
          <div className="p-4 bg-white rounded-lg">
            <UserInfo user={userData} />
          </div>
          <div className="p-4 bg-white rounded-lg">
            <BusinessList businesses={businessesData} />
          </div>
          <div className="p-4 bg-white rounded-lg">
            {BusinessButton}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
