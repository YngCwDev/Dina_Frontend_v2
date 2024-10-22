import img3 from "@/assets/img-3.png"
const images = [img3, img3, img3,  img3,]

const c_data = {
  categories: [
    {
      name: "Products",
      link: "/products",
      items: [
        {
          name: "Electrical Components",
          link: "",
          sub_items: [
            "Circuit Breakers",
            "Transformers",
            "Wiring and Cables",
            "Lighting Systems",
            "Switchgear",
          ],
          sub_items_link: [""],
        },
        {
          name: "Generators and Batteries",
          link: "",
          sub_items: [
            "Portable Generators",
            "Standby Generators",
            "Deep Cycle Batteries",
            "UPS Systems",
            "Battery Chargers",
          ],
          sub_items_link: [""],
        },
        {
          name: "Personal Protective Equipment (PPE)",
          link: "",
          sub_items: [
            "Helmets",
            "Safety Glasses",
            "Gloves",
            "High-Visibility Vests",
            "Respirators",
          ],
          sub_items_link: [""],
        },
        {
          name: "Oils and Lubricants",
          link: "",
          sub_items: [
            "Engine Oil",
            "Hydraulic Oil",
            "Grease",
            "Transmission Fluid",
            "Coolants",
          ],
          sub_items_link: [""],
        },
        {
          name: "Spare Parts",
          link: "",
          sub_items: ["Filters", "Belts", "Bearings", "Pumps", "Seals"],
          sub_items_link: [""],
        },
      ],
    },
    {
      name: "Services",
      link: "/services",
      items: [
        {
          name: "Heavy Machinery Rent",
          link: "/heavy_achinery_rent",
          sub_items: [
            "Excavators",
            "Bulldozers",
            "Cranes",
            "Loaders",
            "Dump Trucks",
          ],
          sub_items_link: [""],
        },
        {
          name: "Technical Consulting",
          link: "",
          sub_items: [
            "Project Assessment",
            "Operational Efficiency",
            "Energy Optimization",
            "Safety Consulting",
            "Equipment Selection",
          ],
          sub_items_link: [""],
        },
        {
          name: "Equipment Maintenance",
          link: "",
          sub_items: [
            "Preventive Maintenance",
            "Repair Services",
            "Condition Monitoring",
            "Spare Parts Management",
            "Technical Support",
          ],
          sub_items_link: [""],
        },
        {
          name: "Safety Training",
          link: "",
          sub_items: [
            "Workplace Safety",
            "Hazard Identification",
            "PPE Training",
            "Emergency Preparedness",
            "Accident Investigation",
          ],
          sub_items_link: [""],
        },
        {
          name: "Customer Support",
          link: "",
          sub_items: [
            "24/7 Assistance",
            "On-site Support",
            "Remote Diagnostics",
            "Warranty Services",
            "Product Information",
          ],
          sub_items_link: [""],
        },
      ],
    },
    {
      name: "Industries",
      link: "/industries",
      items: [
        {
          name: "Industrial",
          link: "",
          sub_items: [
            "Manufacturing",
            "Processing Plants",
            "Heavy Equipment",
            "Automation",
            "Maintenance",
          ],
          sub_items_link: [""],
        },
        {
          name: "Mining",
          link: "",
          sub_items: [
            "Open-pit Mining",
            "Underground Mining",
            "Mineral Processing",
            "Exploration",
            "Equipment Maintenance",
          ],
          sub_items_link: [""],
        },
        {
          name: "Construction",
          link: "",
          sub_items: [
            "Civil Construction",
            "Building Infrastructure",
            "Heavy Construction",
            "Project Management",
            "Material Supply",
          ],
          sub_items_link: [""],
        },
        {
          name: "Energy",
          link: "",
          sub_items: [
            "Power Generation",
            "Renewable Energy",
            "Electrical Infrastructure",
            "Energy Storage",
            "Grid Solutions",
          ],
          sub_items_link: [""],
        },
        {
          name: "Healthcare",
          link: "",
          sub_items: [
            "Medical Equipment",
            "Laboratory Supplies",
            "Safety Equipment",
            "Facilities Maintenance",
            "Power Solutions",
          ],
          sub_items_link: [""],
        },
        {
          name: "Cleaning",
          link: "",
          sub_items: [
            "Industrial Cleaning",
            "Facility Sanitation",
            "Chemical Cleaning",
            "Janitorial Supplies",
            "Waste Management",
          ],
          sub_items_link: [],
        },
      ],
    },
  ],
};

export  {c_data, images};
