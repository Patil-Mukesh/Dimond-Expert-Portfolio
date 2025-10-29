import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import SkillCard from './components/SkillCard';
import StatsCard from './components/StatsCard';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import DiamondDashboard from './components/Dimont_api';
import D_ro from './components/Dimond_rotation'
import Contact from './components/Contact';
import About from './components/Abou';

export default function App() {
  const sessionStart = useRef(Date.now());
  const [visits, setVisits] = useState(0);

  // Determine initial theme
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  return (
    <div className="app">
      <D_ro />
      <Hero />
      <ImageSlider />
      <About />
      <section className="skills-section">
        <SkillCard title="Sarin Machine Operator" desc="3+ years experience in precision cutting.Experienced Sarin Diamond Machine Operator with a strong background in diamond planning, measurement, and quality control. Skilled in operating and maintaining Sarin machines for accurate 3D scanning, mapping, and inclusion analysis.Detail-oriented professional ensuring precision in diamond cutting processes, from pre-polishing to final grading, while maintaining consistency, accuracy, and efficiency.
Dedicated to achieving high-quality output with minimal loss, supporting production teams and maintaining strict safety and maintenance standards.

Key Skills

Sarin Diamond Machine Operation

Helium / DiaExpert / DiaMark Systems

Diamond 3D Scanning & Mapping

Inclusion Planning & Optimization

Precision Measurement & Calibration

Preventive Maintenance & Troubleshooting

Quality Control & Data Reporting

Attention to Detail & Process Efficiency" />
        <SkillCard title="Galaxy Planning Operator" desc="Freelance Galaxy planning with industry software.Experienced Galaxy Planning Operator with hands-on expertise in diamond inclusion scanning, mapping, and planning using Sarin Galaxy systems. Skilled in analyzing internal inclusions, optimizing cutting plans, and maximizing yield while maintaining precision and quality. Strong understanding of Helium and Advisor software integration, ensuring accurate 3D models and minimal diamond loss.

Key Skills

Galaxy Inclusion Scanning & Analysis

Diamond Planning & Optimization

3D Mapping & Modeling (Advisor / Helium)

Sarin & Galatea System Operation

Machine Calibration & Maintenance

Quality Control & Yield Improvement" />
        <SkillCard title="Data Entry Operator" desc="Detail-oriented Data Entry Operator with strong typing accuracy and over 3 years of experience in maintaining, updating, and verifying data in digital systems. Skilled in using MS Excel, Google Sheets, and ERP databases to ensure accuracy, consistency, and timely reporting. Dedicated to data confidentiality, quality assurance, and efficient workflow management.
        
Key Skills

Data Entry & Database Management

MS Excel / Google Sheets / ERP Software

Typing Speed & Accuracy

Data Verification & Validation

Record Maintenance & Reporting

Confidential Data Handling

Attention to Detail & Time Management

Microsoft Office & Basic Computer Skills" />
      </section>
      <DiamondDashboard />
      <Contact />
      <Footer />
    </div>
  );
}
