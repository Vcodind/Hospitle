"use client"
import { useState } from "react";
import Navbar from "./Nabar";
import Saidbar from "./Saidbar";
import { Stoc } from "./icon/Stoc";
import { Certi } from "./icon/certi";
import { Clinic } from "./icon/clinic";
import { Dig } from "./icon/dig";
import { Addminister } from "./icon/headersIcon";
import { Homa } from "./icon/home";
import { Indor } from "./icon/indor";
import { Maint } from "./icon/maint";
import { Master } from "./icon/master";
import { Opd } from "./icon/opd";
import { Payroll } from "./icon/payrol";
import { Prime } from "./icon/primery";
import { Repo } from "./icon/repo";
import { Set } from "./icon/set";
import { Utili } from "./icon/utili";
import { Vac } from "./icon/vac";
const sections = [
  {
    name: "Home",
    icon: <Homa />,
    content: [
      "Home Master",
      "OPD Patient Category",
      "Discount Authority / Trustee",
      "Patient / Insurance Company",
      "OPD Charges / Diagnostics Test",
      "Department Master",
      "Holiday Master",
    ],
  },
  {
    name: "Master",
    icon: <Master />,
    content: [
      " Master",
      "OPD Patient Category",
      "Discount Authority / Trustee",
      "Patient / Insurance Company",
      "OPD Charges / Diagnostics Test",
      "Department Master",
      "Holiday Master",
    ],
  },
  {
    name: 'OPD Master',
    icon: <Opd />,
    content: [
      'Doctor Master',
      'OPD Patient Category',
      'Discount Authority / Trustee',
      'Patient / Insurance Company',
      'OPD Charges / Diagnostics Test',
      'Department Master',
      'Holiday Master',
    ],
  },
  {
    name: 'Indoor ',
    icon: <Indor />,
    content: [
      'Bed Master',
      'Location Master',
      'Room Type Master',
      'Operation Master',
      'Operation Group Master',
      'Additional Charges Head Master',
    ],
  },
  {
    name: 'Diagnostics',
    icon: <Dig />,
    content: ['Lab Test Master', 'Radiology Master', 'Pathology Master'],
  },
  {
    name: 'Clinical',
    icon: <Clinic />,
    content: ['clinic Test Master', 'Radiology Master', 'Pathology Master'],
  },
  {
    name: 'Vaccine',
    icon: <Vac />,
    content: ['Vaccine Master', 'Vaccine Category', 'Vaccine Charges'],
  },
  {
    name: 'Stock',
    icon: <Stoc />,
    content: ['Stock Master', 'Inventory Reports', 'Stock Adjustments'],
  },
  {
    name: 'Pharmacy',
    icon: <Prime />,
    content: ['Pharmacy Master', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Payroll',
    icon: <Payroll />,
    content: ['Payroll Master', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Maintenance',
    icon: <Maint />,
    content: [' Maintenance', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Certificate',
    icon: <Certi />,
    content: ['Certificate', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Report',
    icon: <Repo />,
    content: ['Report', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Set Up',
    icon: <Set />,
    content: ['Set Up', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Utility',
    icon: <Utili />,
    content: ['Utility', 'Medicine Inventory', 'Purchase Orders'],
  },
  {
    name: 'Administer',
    icon: <Addminister />,
    content: ['Utility', 'Medicine Inventory', 'Purchase Orders'],
  },
];
export default function Home() {
  const [activeSection, setActiveSection] = useState("OPD Master");
  return (
    <>
      <Navbar sections={sections} setActiveSection={setActiveSection} />
      <Saidbar activeSection={activeSection} sections={sections} />
    </>
  );
}
