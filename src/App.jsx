// import React, { useEffect, useState, useCallback } from 'react';

// // ── design system ──
// import './styles/tokens.css';

// // ── section components ──
// import Navbar from './components/Navbar';
// import HeroBanner from './components/HeroBanner';
// import AboutFounder from './components/AboutFounder';
// import Achievements from './components/Achievements';
// import Companies from './components/Companies';
// import Statistics from './components/Statistics';
// import BusinessMembers from './components/BusinessMembers';
// import Testimonials from './components/Testimonials';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';

// // ── assets (founder + his own two companies only — member logos now come from the backend) ──
// import MetroLabs from './Assets/Metrolabs.png';
// import Bhokta from './Assets/bhokta.png';
// import Santhosh1 from './Assets/santhosh1.jpeg';

// import { getAllPersons } from './Api/index.js';

// // Backend shape: { _id, name, phone, email, companies: [{ _id, companyName, keywords, logoUrl }] }
// // Flatten to the shape OtherBusinessImage/BusinessDetails already render:
// // { src, name, company, Keywords }  — one card per COMPANY, not per person.
// const flattenPersons = (persons) =>
//   persons.map((person) => ({
//     id: person._id,
//     src: person.profileImage,
//     name: person.name,
//     phone: person.phone,
//     email: person.email,

//     companies: (person.companies || []).map((c) => ({
//       id: c._id,
//       companyName: c.companyName,
//       keywords: c.keywords || [],
//       logoUrl: c.logoUrl,
//     })),
//   }));
  
// function App() {
//   const [businessItems, setBusinessItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadError, setLoadError] = useState('');

//   const fetchMembers = useCallback(async () => {
//     try {
//       setLoading(true);
//       setLoadError('');
//       const res = await getAllPersons();
//       const persons = res?.data || [];
//       console.log("persons", persons)
//       setBusinessItems(flattenPersons(persons));
//     } catch (err) {
//       setLoadError('Could not load business members. Is the backend running?');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchMembers();
//   }, [fetchMembers]);

//   const companies = [
//     { name: 'MetroLabs', logo: MetroLabs, tagline: 'IT services & software solutions' },
//     { name: 'Bhokta', logo: Bhokta, tagline: 'Corporate data management' },
//   ];

//   return (
//     <div className="bg-white min-h-screen overflow-x-hidden font-body">
//       <Navbar />
//       <HeroBanner portraitSrc={Santhosh1} />
//       <AboutFounder />
//       <Achievements />
//       <Companies companies={companies} />
//       <Statistics />

//       {loading && (
//         <p className="text-center text-slate-soft font-body py-16 bg-paper">Loading members…</p>
//       )}
//       {!loading && loadError && (
//         <p className="text-center text-red-600 font-body py-16 bg-paper">{loadError}</p>
//       )}
//       {!loading && !loadError && <BusinessMembers otherBusinessItems={businessItems} />}

//       <Testimonials />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useCallback } from 'react';

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

// ── assets (founder + his own two companies only — member logos now come from the backend) ──
import MetroLabs from './Assets/Metrolabs.png';
import Bhokta from './Assets/bhokta.png';
import Santhosh1 from './Assets/santhosh1.jpeg';

import { getAllPersons } from './Api/index.js';

// Backend shape: { _id, name, phone, email, companies: [{ _id, companyName, category, keywords, logoUrl }] }
// Flatten to the shape BusinessMembers/CategoryBrowser/KeywordList need.
// NOTE: `category` is carried through here now — BusinessMembers groups
// by it to build the category -> keyword browse flow, so if this field
// gets dropped the whole flow falls back to a single "Other" bucket.
const flattenPersons = (persons) =>
  persons.map((person) => ({
    id: person._id,
    src: person.profileImage,
    name: person.name,
    phone: person.phone,
    email: person.email,

    companies: (person.companies || []).map((c) => ({
      id: c._id,
      companyName: c.companyName,
      category: c.category,
      keywords: c.keywords || [],
      logoUrl: c.logoUrl,
    })),
  }));

function App() {
  const [businessItems, setBusinessItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      setLoadError('');
      const res = await getAllPersons();
      const persons = res?.data || [];
      setBusinessItems(flattenPersons(persons));
    } catch (err) {
      setLoadError('Could not load business members. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const companies = [
    { name: 'MetroLabs', logo: MetroLabs, tagline: 'IT services & software solutions' },
    { name: 'Bhokta', logo: Bhokta, tagline: 'Corporate data management' },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-body">
      <Navbar />
      <HeroBanner portraitSrc={Santhosh1} />
      <AboutFounder />
      <Achievements />
      <Companies companies={companies} />
      <Statistics />

      {loading && (
        <p className="text-center text-slate-soft font-body py-16 bg-paper">Loading members…</p>
      )}
      {!loading && loadError && (
        <p className="text-center text-red-600 font-body py-16 bg-paper">{loadError}</p>
      )}
      {!loading && !loadError && <BusinessMembers otherBusinessItems={businessItems} />}

      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;