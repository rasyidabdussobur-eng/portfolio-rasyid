import React, { useState } from 'react';
import { 
  User, Briefcase, GraduationCap, Trophy, 
  Mail, Linkedin, Phone, MapPin, 
  ChevronRight, Menu, X, 
  Award, Microscope, Users, FolderOpen
} from 'lucide-react';

// ✅ IMPORT SEMUA FOTO
import profile from "./assets/profile.jpg";

import setda from "./assets/setda.jpg";
import kimia1 from "./assets/kimia-sertif.jpg";
import kimia2 from "./assets/kimia-foto.jpg";
import accsec from "./assets/accsec.jpg";

import hmak1 from "./assets/hmak-sertif.jpg";
import hmak2 from "./assets/hmak-foto.jpg";

import alfest1 from "./assets/alfest-sertif.jpg";
import alfest2 from "./assets/alfest-pidato.jpg";
import alfest3 from "./assets/alfest-tim.jpg";

import aic1 from "./assets/aic-sertif.jpg";
import aic2 from "./assets/aic-foto.jpg";

import award2024 from "./assets/award2024-sertif.jpg";
import award2023 from "./assets/award2023-sertif.jpg";

// ✅ COMPONENT IMAGE
const ImageGallery = ({ images = [] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    {images.map((img, i) => (
      <img key={i} src={img} className="rounded-xl w-full object-cover" />
    ))}
  </div>
);

const App = () => {

  const portfolioData = {
    personal: {
      name: "RASYID ABDUS SOBUR",
      title: "Governmental Management Accounting Student",
      location: "Bandung Regency, West Java",
      email: "rasyidabdussobur@gmail.com",
      linkedin: "linkedin.com/in/rasyidabdussobur",
      summary: "Detail-oriented accounting student with strong interest in taxation, auditing, and financial data processing."
    },

    internships: [
      {
        role: "Finance Section Intern",
        company: "Sekretariat Daerah Kabupaten Bandung",
        period: "Aug 2025 — Dec 2025",
        points: [
          "Processed tax administration and e-billing data",
          "Prepared and verified SPP/SPM documents",
          "Compiled budget realization data in Excel"
        ],
        images: [setda]
      },
      {
        role: "Finance Accounting Intern",
        company: "PT. Kimia Farma, TBK",
        period: "Jul 2025 — Aug 2025",
        points: [
          "Built automated Excel tools",
          "Managed SAP procurement process",
          "Performed tax verification and reporting"
        ],
        images: [kimia1, kimia2]
      },
      {
        role: "Junior Accountant",
        company: "KJA AccSEC Priority",
        period: "Dec 2024 — Jan 2025",
        points: [
          "Handled transaction data using MYOB",
          "Managed petty cash and reconciliation",
          "Prepared tax documentation"
        ],
        images: [accsec]
      }
    ],

    organizations: [
      {
        role: "Vice Head Education Division",
        org: "HMAK",
        period: "2024 — 2025",
        points: ["Led 25 members", "Managed education programs"],
        images: [hmak1, hmak2]
      },
      {
        role: "Project Leader ALFEST 15",
        org: "HMAK",
        period: "2024 — 2025",
        points: ["Led 145 committee", "National event execution"],
        images: [alfest1, alfest2, alfest3]
      }
    ],

    achievements: [
      {
        title: "Judge – Accounting Internal Competition",
        date: "May 2025",
        images: [aic1, aic2]
      },
      {
        title: "Outstanding Student Award",
        date: "Aug 2024",
        images: [award2024]
      },
      {
        title: "Outstanding Student Award",
        date: "Aug 2023",
        images: [award2023]
      }
    ]
  };

  return (
    <div className="p-10 space-y-16">

      {/* HERO */}
      <section>
        <h1 className="text-4xl font-bold">{portfolioData.personal.name}</h1>
        <p>{portfolioData.personal.title}</p>
        <img src={profile} className="w-40 mt-4 rounded-xl"/>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-2xl font-bold">Experience</h2>
        {portfolioData.internships.map((exp, i) => (
          <div key={i} className="mt-6">
            <h3 className="font-bold">{exp.role}</h3>
            <p>{exp.company}</p>
            <ul>
              {exp.points.map((p, j) => <li key={j}>• {p}</li>)}
            </ul>
            <ImageGallery images={exp.images}/>
          </div>
        ))}
      </section>

      {/* ORGANIZATION */}
      <section>
        <h2 className="text-2xl font-bold">Organization</h2>
        {portfolioData.organizations.map((org, i) => (
          <div key={i}>
            <h3>{org.role}</h3>
            <ImageGallery images={org.images}/>
          </div>
        ))}
      </section>

      {/* ACHIEVEMENT */}
      <section>
        <h2 className="text-2xl font-bold">Achievements</h2>
        {portfolioData.achievements.map((a, i) => (
          <div key={i}>
            <h3>{a.title}</h3>
            <ImageGallery images={a.images}/>
          </div>
        ))}
      </section>

    </div>
  );
};

export default App;