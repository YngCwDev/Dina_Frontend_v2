import { GiMining } from "react-icons/gi";
import { PiHardHatThin, PiTractorLight } from "react-icons/pi";
import { TbCrane, TbCarCrane } from "react-icons/tb";
import { GoLightBulb } from "react-icons/go";

const c_data = {
  categories: [
    {
      name: "Products",
      link: "/products",
      description:
        "High-quality industrial equipment and supplies for various sectors",
      icon: "",
      img: "",
      items: [
        {
          name: "Electrical Components",
          description:
            "Complete range of electrical solutions for industrial applications",
          icon: "",
          img: "",
          link: "/products/electrical",
          sub_items: [
            "Circuit Breakers",
            "Transformers",
            "Wiring and Cables",
            "Lighting Systems",
            "Switchgear",
            "Control Panels",
            "Motors",
            "Sensors",
          ],
          sub_items_link: [
            "/products/electrical/circuit-breakers",
            "/products/electrical/transformers",
            "/products/electrical/wiring-cables",
            "/products/electrical/lighting",
            "/products/electrical/switchgear",
            "/products/electrical/control-panels",
            "/products/electrical/motors",
            "/products/electrical/sensors",
          ],
        },
        {
          name: "Generators and Batteries",
          description: "Reliable power solutions for continuous operation",
          icon: "",
          img: "",
          link: "/products/power",
          sub_items: [
            "Portable Generators",
            "Standby Generators",
            "Deep Cycle Batteries",
            "UPS Systems",
            "Battery Chargers",
            "Solar Generators",
            "Industrial Batteries",
            "Power Banks",
          ],
          sub_items_link: [
            "/products/power/portable-generators",
            "/products/power/standby-generators",
            "/products/power/deep-cycle-batteries",
            "/products/power/ups-systems",
            "/products/power/battery-chargers",
            "/products/power/solar-generators",
            "/products/power/industrial-batteries",
            "/products/power/power-banks",
          ],
        },
        {
          name: "Personal Protective Equipment (PPE)",
          description: "Complete safety gear for workplace protection",
          icon: PiHardHatThin,
          img: "",
          link: "/products/ppe",
          sub_items: [
            "Helmets",
            "Safety Glasses",
            "Gloves",
            "High-Visibility Vests",
            "Respirators",
            "Safety Boots",
            "Ear Protection",
            "Fall Protection",
          ],
          sub_items_link: [
            "/products/ppe/helmets",
            "/products/ppe/safety-glasses",
            "/products/ppe/gloves",
            "/products/ppe/hi-vis",
            "/products/ppe/respirators",
            "/products/ppe/boots",
            "/products/ppe/ear-protection",
            "/products/ppe/fall-protection",
          ],
        },
        {
          name: "Oils and Lubricants",
          description: "High-performance lubricants for industrial machinery",
          icon: "",
          img: "",
          link: "/products/oils",
          sub_items: [
            "Engine Oil",
            "Hydraulic Oil",
            "Grease",
            "Transmission Fluid",
            "Coolants",
            "Synthetic Oils",
            "Cutting Fluids",
            "Specialty Lubricants",
          ],
          sub_items_link: [
            "/products/oils/engine",
            "/products/oils/hydraulic",
            "/products/oils/grease",
            "/products/oils/transmission",
            "/products/oils/coolants",
            "/products/oils/synthetic",
            "/products/oils/cutting-fluids",
            "/products/oils/specialty",
          ],
        },
        {
          name: "Spare Parts",
          description: "Genuine replacement parts for industrial equipment",
          icon: "",
          img: "",
          link: "/products/spare-parts",
          sub_items: [
            "Filters",
            "Belts",
            "Bearings",
            "Pumps",
            "Seals",
            "Gaskets",
            "Chains",
            "Couplings",
          ],
          sub_items_link: [
            "/products/spare-parts/filters",
            "/products/spare-parts/belts",
            "/products/spare-parts/bearings",
            "/products/spare-parts/pumps",
            "/products/spare-parts/seals",
            "/products/spare-parts/gaskets",
            "/products/spare-parts/chains",
            "/products/spare-parts/couplings",
          ],
        },
      ],
    },
    {
      name: "Services",
      link: "/services",
      description: "Comprehensive industrial services and solutions",
      icon: "",
      img: "",
      items: [
        {
          name: "Heavy Machinery Rent",
          description:
            "Wide range of construction and mining equipment for rent",
          icon: "",
          img: "",
          link: "/services/machinery-rent",
          sub_items: [
            "Excavators",
            "Bulldozers",
            "Cranes",
            "Loaders",
            "Dump Trucks",
            "Compactors",
            "Forklifts",
            "Concrete Equipment",
          ],
          sub_items_link: [
            "/services/machinery-rent/excavators",
            "/services/machinery-rent/bulldozers",
            "/services/machinery-rent/cranes",
            "/services/machinery-rent/loaders",
            "/services/machinery-rent/dump-trucks",
            "/services/machinery-rent/compactors",
            "/services/machinery-rent/forklifts",
            "/services/machinery-rent/concrete-equipment",
          ],
        },
        {
          name: "Technical Consulting",
          description: "Expert guidance for industrial operations",
          icon: "",
          img: "",
          link: "/services/consulting",
          sub_items: [
            "Project Assessment",
            "Operational Efficiency",
            "Energy Optimization",
            "Safety Consulting",
            "Equipment Selection",
            "Process Improvement",
            "Cost Reduction",
            "Environmental Compliance",
          ],
          sub_items_link: [
            "/services/consulting/project-assessment",
            "/services/consulting/operational-efficiency",
            "/services/consulting/energy-optimization",
            "/services/consulting/safety",
            "/services/consulting/equipment-selection",
            "/services/consulting/process-improvement",
            "/services/consulting/cost-reduction",
            "/services/consulting/environmental",
          ],
        },
        {
          name: "Equipment Maintenance",
          description:
            "Comprehensive maintenance services for industrial equipment",
          icon: "",
          img: "",
          link: "/services/maintenance",
          sub_items: [
            "Preventive Maintenance",
            "Repair Services",
            "Condition Monitoring",
            "Spare Parts Management",
            "Technical Support",
            "Equipment Upgrades",
            "Emergency Repairs",
            "Maintenance Training",
          ],
          sub_items_link: [
            "/services/maintenance/preventive",
            "/services/maintenance/repairs",
            "/services/maintenance/monitoring",
            "/services/maintenance/spare-parts",
            "/services/maintenance/tech-support",
            "/services/maintenance/upgrades",
            "/services/maintenance/emergency",
            "/services/maintenance/training",
          ],
        },
        {
          name: "Safety Consulting and Training",
          description: "Comprehensive safety solutions and training programs",
          icon: "",
          img: "",
          link: "/services/safety",
          sub_items: [
            "Workplace Safety",
            "Hazard Identification",
            "PPE Training",
            "Emergency Preparedness",
            "Accident Investigation",
            "Safety Audits",
            "Compliance Training",
            "Risk Assessment",
          ],
          sub_items_link: [
            "/services/safety/workplace",
            "/services/safety/hazard-identification",
            "/services/safety/ppe-training",
            "/services/safety/emergency",
            "/services/safety/accident-investigation",
            "/services/safety/audits",
            "/services/safety/compliance",
            "/services/safety/risk-assessment",
          ],
        },
        {
          name: "Customer Support",
          description: "24/7 comprehensive customer support services",
          icon: "",
          img: "",
          link: "/services/support",
          sub_items: [
            "24/7 Assistance",
            "On-site Support",
            "Remote Diagnostics",
            "Warranty Services",
            "Product Information",
            "Technical Documentation",
            "Training Programs",
            "Customized Solutions",
          ],
          sub_items_link: [
            "/services/support/24-7",
            "/services/support/onsite",
            "/services/support/remote",
            "/services/support/warranty",
            "/services/support/product-info",
            "/services/support/documentation",
            "/services/support/training",
            "/services/support/custom",
          ],
        },
      ],
    },
    {
      name: "Industries",
      link: "/industries",
      description: "Specialized solutions for various industrial sectors",
      icon: "",
      img: "",
      items: [
        {
          name: "Mining",
          description: "Complete solutions for mining operations",
          icon: GiMining,
          img: "",
          link: "/industries/mining",
          sub_items: [
            "Open-pit Mining",
            "Underground Mining",
            "Mineral Processing",
            "Exploration",
            "Equipment Maintenance",
            "Safety Systems",
            "Environmental Control",
            "Automation Solutions",
          ],
          sub_items_link: [
            "/industries/mining/open-pit",
            "/industries/mining/underground",
            "/industries/mining/processing",
            "/industries/mining/exploration",
            "/industries/mining/maintenance",
            "/industries/mining/safety",
            "/industries/mining/environmental",
            "/industries/mining/automation",
          ],
        },
        {
          name: "Construction",
          description: "Equipment and services for construction projects",
          icon: TbCrane,
          img: "",
          link: "/industries/construction",
          sub_items: [
            "Civil Construction",
            "Building Infrastructure",
            "Heavy Construction",
            "Project Management",
            "Material Supply",
            "Equipment Rental",
            "Safety Solutions",
            "Green Building",
          ],
          sub_items_link: [
            "/industries/construction/civil",
            "/industries/construction/infrastructure",
            "/industries/construction/heavy",
            "/industries/construction/project-management",
            "/industries/construction/materials",
            "/industries/construction/rental",
            "/industries/construction/safety",
            "/industries/construction/green",
          ],
        },
        {
          name: "Energy",
          description: "Solutions for power generation and distribution",
          icon: GoLightBulb,
          img: "",
          link: "/industries/energy",
          sub_items: [
            "Power Generation",
            "Renewable Energy",
            "Electrical Infrastructure",
            "Energy Storage",
            "Grid Solutions",
            "Smart Systems",
            "Maintenance Services",
            "Energy Efficiency",
          ],
          sub_items_link: [
            "/industries/energy/power-generation",
            "/industries/energy/renewable",
            "/industries/energy/infrastructure",
            "/industries/energy/storage",
            "/industries/energy/grid",
            "/industries/energy/smart-systems",
            "/industries/energy/maintenance",
            "/industries/energy/efficiency",
          ],
        },
        {
          name: "Heavy Machinery",
          description: "Solutions for manufacturing and processing",
          icon: TbCarCrane,
          img: "",
          link: "/industries/heavy-industry",
          sub_items: [
            "Manufacturing",
            "Processing Plants",
            "Heavy Equipment",
            "Automation",
            "Maintenance",
            "Quality Control",
            "Supply Chain",
            "Industrial IoT",
          ],
          sub_items_link: [
            "/industries/heavy-industry/manufacturing",
            "/industries/heavy-industry/processing",
            "/industries/heavy-industry/equipment",
            "/industries/heavy-industry/automation",
            "/industries/heavy-industry/maintenance",
            "/industries/heavy-industry/quality",
            "/industries/heavy-industry/supply-chain",
            "/industries/heavy-industry/iot",
          ],
        },
        {
          name: "Agriculture",
          description: "Equipment and solutions for agricultural operations",
          icon: PiTractorLight,
          img: "",
          link: "/industries/agriculture",
          sub_items: [
            "Farm Equipment",
            "Irrigation Systems",
            "Processing Equipment",
            "Storage Solutions",
            "Precision Agriculture",
            "Maintenance Services",
            "Agricultural IoT",
            "Sustainable Farming",
          ],
          sub_items_link: [
            "/industries/agriculture/equipment",
            "/industries/agriculture/irrigation",
            "/industries/agriculture/processing",
            "/industries/agriculture/storage",
            "/industries/agriculture/precision",
            "/industries/agriculture/maintenance",
            "/industries/agriculture/iot",
            "/industries/agriculture/sustainable",
          ],
        },
        {
          name: "Protection",
          description:
            "Safety and security solutions for industrial environments",
          icon: PiHardHatThin,
          img: "",
          link: "/industries/protection",
          sub_items: [
            "Security Systems",
            "Fire Protection",
            "Emergency Response",
            "Access Control",
            "Monitoring Systems",
            "Risk Management",
            "Training Programs",
            "Compliance Solutions",
          ],
          sub_items_link: [
            "/industries/protection/security",
            "/industries/protection/fire",
            "/industries/protection/emergency",
            "/industries/protection/access",
            "/industries/protection/monitoring",
            "/industries/protection/risk",
            "/industries/protection/training",
            "/industries/protection/compliance",
          ],
        },
      ],
    },
  ],
};

export default c_data;
