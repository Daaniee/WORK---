const data = [
    {
        placeholder: "Type of Customer",
        values: ["individual","Organization"]
    },
    {
        placeholder: "Gender",
        values: ["Male", "Female"]
    },
    {
        placeholder: "Employment Status",
        values: [
            "Employee",
            {
                "Company/Organization/Entrepreneur": [
                "Micro Enterprise",
                "Small Enterprise",
                "Medium Enterprise",
                "Large Enterprise"
                ]
            },
            "Retired"
        ]
    },
    {
        placeholder: "Working Sector",
        values: {
            agriculture: [
            "Agricultural Engineer", "Agricultural economist", "Agricultural Operation Manager", "Precision Agriculture Specialist",
            "Agricultural consultant", "Farm manager", "Fish farm manager", "Plant breeder/geneticist", "Rural practice surveyor",
            "Soil scientist", "Animal nutritionist", "Field trials officer", "Forest/woodland manager", "Magazine journalist",
            "Newspaper journalist", "Sales executive", "Veterinary Nurse", "Horticulture", "Fishery", "Microbiology"
            ],
            constructionEngineer: [
            "Building Control Surveyor", "Building Service engineer", "Construction Manager", "Estate Manager", "Estimator",
            "Construction Superintendent", "Project Engineer", "Construction Estimator", "Construction Inspector", "Journeyman Electrician",
            "Plumber", "Pipefitter", "Carpenter", "Structural Engineer", "Material Engineer"
            ],
            realEstate: [
            "Residential Sales", "Commercial Sales", "Auctioneering", "Property Management (residential or commercial)",
            "Buyer or vendor advocacy", "Business Broking", "Painters/decorators", "Glaziers", "Welder", "Carpenter"
            ],
            financialServices: [
            "Fin Tech", "Actuary", "Insurance", "Auditing", "Financial Analyst", "Private Equity Analyst", "Risk Manager",
            "Private Wealth Advisor", "Finance Director", "Hedge Fund Manager", "Portfolio Manager", "Investment Analyst",
            "Stock Broker", "Credit manager", "Insurance broker", "Accountants", "Banking", "Insurance"
            ],
            consumerGoods: [
            "Marketing Manager", "Brand Manager", "Sales Coordinator", "Warehouse Manager", "Quality Assurance Manager",
            "Production Manager", "Product Development Scientist", "Supply Chain/Logistics"
            ],
            health: [
            "Doctor", "Nurse", "Pharmacist", "Physician", "Therapist", "Dentist", "Home Health Aide", "Clinical Laboratory Technician",
            "Radiologic Technologist", "Surgical Technologist", "Veterinary Technologist", "Dietician", "Pediatrician", "Podiatrist",
            "Midwife", "Sonographer", "Primary Care Physician", "Prosthetists", "Optician", "Paramedic", "Maternity", "Dentistry",
            "Ophthalmology", "Accident and Emergency", "Medical Laboratory", "Pharmacy", "Radiotherapy", "Medical Records Department",
            "Sexual Health", "Orthopaedic"
            ],
            industrial: [
            "Auto Mechanic", "Maintenance Engineering", "Plant Operator", "Panel Beater", "Plumber", "Welder", "Wood Workers"
            ],
            ict: [
            "Computer Service Technician", "Data Analyst", "Database Administrator", "IT Consultant", "Cyber Security Specialist",
            "Data Scientist", "Hardware Engineer", "Computer and Information Research Scientist", "Computer Network Architect",
            "Computer Support Specialist", "Computer Systems Analyst", "Information Security Analyst", "Network and Computer Systems Administrator",
            "Software Developer", "Web Designer"
            ],
            aviation: [
            "Flight Attendant", "Flight Instructor", "Flight Engineer", "Air Traffic Controller", "Airline Pilot", "Sky Marshal",
            "Dispatcher", "Aviation Medical Examiner", "Aviation Meteorologist", "Avionics Technician", "Ramp Planner",
            "Crew Schedule Coordinator", "Airline Ticket Agent", "Airports"
            ],
            mediaEntertainment: [
            "Digital Marketer", "Content Writer", "Journalist", "News Writer", "Advertising Account Executive", "Broadcast Journalist",
            "Editorial Assistant", "Event Manager", "Film Director", "Magazine Journalist", "Market Researcher", "Marketing Executive",
            "Actor/Actress", "Cinematographer", "Editor", "Reporter", "Correspondent", "Broadcaster", "Sound Engineer", "Art Director",
            "Set Designer", "MC", "Television", "Radio", "Newspaper/Magazine", "Film", "Music"
            ],
            oilGas: [
            "Drilling Engineer", "Petroleum Engineer", "Mining Engineer", "Energy Engineer", "Engineering Geologist", "Geochemist",
            "Geoscientist", "Hydrographic Surveyor", "Mudlogger"
            ],
            utilities: [
            "Project Manager", "Utility Engineer"
            ],
            manufacturing: [
            "Purchasing Manager", "Production Manager", "Factory Manager", "Assemblers and Fabricators", "Bakers",
            "Dental Laboratory Technicians", "Food Processing Occupations", "Food Processing Operators", "Jewelers and Precious Stone and Metal Workers",
            "Machinists and Tool and Die Makers", "Medical Appliance Technicians"
            ],
            sports: [
            "Sport Marketer", "Facility Operations Manager", "Fitness Manager", "Sport Agent", "Event Manager", "Fitness Centre Manager",
            "Outdoor Activities/Education Manager", "Personal Trainer", "Secondary School Teacher (Physical Education)",
            "Sports Administrator", "Sports Coach", "Sports Development Officer", "Commentator", "Reporter", "Referee"
            ],
            hospitality: [
            "Event Planner", "Executive Chef", "Hotel General Manager", "Housekeeper", "Porter", "Waiter/Waitress",
            "Director of Housekeeping", "Executive Casino Host", "Executive Pastry Chef", "Flight Attendant", "Food and Beverage Director",
            "Hotel Manager", "Meeting/Event Manager"
            ],
            legalServices: [
            "Lawyer", "Legal Advisor", "Advertising Lawyer", "Administrative or Regulatory Attorney", "Admiralty and Maritime Lawyer",
            "Antitrust Lawyer", "Appellate Lawyer", "Arbitration, Mediation and Dispute Resolution Attorney", "Banking Lawyer",
            "Compliance Attorney", "Coroner", "Jurist", "Patent Attorney", "Bailiff", "Courthouse", "Private Chamber"
            ],
            transportMarine: [
            "Station", "Operations Manager", "Logistics Executive", "Fleet Executive", "Network Monitoring", "Customer Experience Specialist",
            "Research Analyst", "Customer Service Associate", "Marine Specialist"
            ],
            telecommunication: [
            "Telecommunications Engineer", "Equipment Installer and Repairer", "Telecom Project Manager", "Internet Service Provider",
            "Airtel", "MTN", "Glo", "9mobile"
            ],
            educationIndustry: [
            "School Community Relations Coordinator", "School Counselor", "School Librarian", "Professor", "Lecturer/Teacher"
            ],
            travelTourismHospitality: [
            "Hotels", "Bars and Restaurants", "Club Houses", "Travel Agencies", "Tourist Attraction Sites", "Passenger Services"
            ],
            civilService: [
            "Central Bank", "Federal Agencies", "Federal Ministries", "State Commission", "Armed Forces", "Military", "Air Force",
            "Navy", "NSCDC", "Police", "Mobile Police"
            ]
        }
    },
    {
        placeholder: "status",
        values: ["single", "married", "divorced", "widowed"]
    },
    {
        placeholder: "Dependents",
        hasDependents: ["Yes", "No"],
        values: {
            parentsOrGrandparents: {
            numberOfDependents: ["1", "2", "3", "5"],
            ageRanges: ["0-10", "11-18", "19-25", "26-36"]
            },
            children: {
            numberOfDependents: ["1", "2", "3", "6"],
            ageRanges: ["0-10", "11-18", "19-25", "26-37"]
            },
            brother: {
            numberOfDependents: ["1", "2", "3", "4"],
            ageRanges: ["0-10", "11-18", "19-25", "26-35"]
            },
            sister: {
            numberOfDependents: ["1", "2", "3", "7"],
            ageRanges: ["0-10", "11-18", "19-25", "26-38"]
            },
            cousin: {
            numberOfDependents: ["1", "2", "3", "8"],
            ageRanges: ["0-10", "11-18", "19-25", "26-39"]
            },
            uncle: {
            numberOfDependents: ["1", "2", "3", "9"],
            ageRanges: ["0-10", "11-18", "19-25", "26-40"]
            },
            aunt: {
            numberOfDependents: ["1", "2", "3", "10"],
            ageRanges: ["0-10", "11-18", "19-25", "26-41"]
            },
            guardian: {
            numberOfDependents: ["1", "2", "3", "11"],
            ageRanges: ["0-10", "11-18", "19-25", "26-42"]
            },
            nephew: {
            numberOfDependents: ["1", "2", "3", "12"],
            ageRanges: ["0-10", "11-18", "19-25", "26-43"]
            },
            niece: {
            numberOfDependents: ["1", "2", "3", "13"],
            ageRanges: ["0-10", "11-18", "19-25", "26-44"]
            },
            inLaws: {
            numberOfDependents: ["1", "2", "3", "14"],
            ageRanges: ["0-10", "11-18", "19-25", "26-45"]
            },
            closeFriends: {
            numberOfDependents: ["1", "2", "3", "15"],
            ageRanges: ["0-10", "11-18", "19-25", "26-46"]
            }
        }
    },
    {
        placeholder: "Age Groups",
        values: [
            "0-18 years",
            "18-24 years",
            "25-35 years",
            "35-45 years",
            "45-55 years",
            "55-65 years",
            "70 & above"
        ]
    },
    {
        stateResidence: [
            "Abia/Umuahia",
            "Adamawa/Yola",
            "Akwa Ibom/Uyo",
            "Anambra/Awka",
            "Bauchi/Bauchi",
            "Bayelsa/Yenagoa",
            "Benue/Makurdi",
            "Borno/Maiduguri",
            "Cross River/Calabar",
            "Delta/Asaba",
            "Ebonyi/Abakaliki",
            "Edo/Benin",
            "Ekiti/Ado Ekiti",
            "Enugu/Enugu",
            "FCT/Abuja",
            "Gombe/Gombe",
            "Imo/Owerri",
            "Jigawa/Dutse",
            "Kaduna/Kaduna",
            "Kano/Kano",
            "Katsina/Katsina",
            "Kebbi/Birnin Kebbi",
            "Kogi/Lokoja",
            "Kwara/Ilorin",
            "Lagos/Ikeja",
            "Nasarawa/Lafia",
            "Niger/Minna",
            "Ogun/Abeokuta",
            "Ondo/Akure",
            "Osun/Osogbo",
            "Oyo/Ibadan",
            "Plateau/Jos",
            "Rivers/Port Harcourt",
            "Sokoto/Sokoto",
            "Taraba/Jalingo",
            "Yobe/Damaturu",
            "Zamfara/Gusau"
        ]
    },
    {
        placeholder: "Religion",
        values: [
            "Islam",
            "Christianity",
            "Others"
        ]
    },
    {
        placeholder: "Education Level",
        values: [
            "First School Leaving Certificate (FSLC)",
            "Junior Secondary (JSCE)",
            "Senior Secondary (SSCE)",
            "NTC/NCC",
            "NCE",
            "OND",
            "Youth Corper",
            "BSC/BA/HND",
            "PGD/MSC and MA",
            "PHD"
        ]
    },
    {
        placeholder: "Social Class",
        values: {
            upperClass: {
                upperUpper: [
                    "President",
                    "Vice President",
                    "Ministers",
                    "Senators",
                    "Governors",
                    "Director Generals",
                    "Permanent secretary",
                    "Commissioner",
                    "Former President",
                    "Federal High Judge",
                    "Head of service",
                    "Business man/woman"
                ],
                lowerUpper: [
                    "Royal families",
                    "Politicians",
                    "Top Professors",
                    "Military Officers",
                    "Top Entertainers",
                    "Footballers (Foreign based)",
                    "Religious Leaders",
                    "Civil Servants (Administrative Class)",
                    "Ambassadors",
                    "Chief of staff"
                ]
            },
            middleClass: {
                upperMiddle: [
                    "Vice Chancellors",
                    "Professors",
                    "Lecturers",
                    "Small Business Owners",
                    "Bank Executives",
                    "Lawyers",
                    "Judges",
                    "Footballers(Home Based)",
                    "Traditional Chiefs",
                    "Professionals",
                    "Artistes",
                    "Civil Servant (Executive and Professional Class)"
                ],
                lowerMiddle: [
                    "Civil Servants (Clerical Class)",
                    "Employed Graduates",
                    "Entertainers",
                    "Local government Councilors",
                    "Contract staff",
                    "Self Employed",
                    "Clerical Workers"
                ]
            },
            lowerClass: {
                upperLower: [
                    "Petty traders",
                    "small shop owners",
                    "market traders",
                    "Tailoring",
                    "Bricklayer",
                    "Vulcnaisers",
                    "Plumber",
                    "Electricians",
                    "Mechanics",
                    "Barbers",
                    "Hair-Dressers",
                    "Food Sellers",
                    "Civil Servant (Auxiliary Class)",
                    "Factory Workers",
                    "Typist",
                    "Secretary",
                    "Drivers",
                    "Messangers",
                    "Security"
                ],
                lowerLower: [
                    "Street Hawkers",
                    "Roadside Traders",
                    "Labourers",
                    "Load Carriers",
                    "Scavengers",
                    "Water Cart-pushers"
                ]
            }
        }
    },
    {
        placeholder: "Income / Earnings",
        values: [
            { annual: "240,000-350,000", monthly: "30,000" },
            { annual: "360,000-650,000", monthly: "54,000 - 72,000" },
            { annual: "650,000 - 850,000", monthly: "70,000 - 92,500" },
            { annual: "850,000 - 1,110,000", monthly: "108,000 - 137,000" },
            { annual: "1,300,000 - 1,650,000", monthly: "162,000 - 200,000" },
            { annual: "1,950,000 - 2,400,000", monthly: "290,000 - 400,000" },
            { annual: "3,500,000 -5,000,000", monthly: "550,000 - 620,000" },
            { annual: "6,500,000-7,500,000", monthly: "650,000 - 790,000" },
            { annual: "7,850,000-9,500,000", monthly: "820,000 - 850,000" },
            { annual: "9,850,000-10,000,000", monthly: "870,000 - 1,000,000" },
            { annual: "10,500,000-12,500,000", monthly: "1,000,000 - 1,250,000" },
            { annual: "12,500,000-15,000,000", monthly: "1,250,000 - 1,400,000" },
            { annual: "15,000,000-17,000,000", monthly: "1,400,000 - 1,500,000" },
            { annual: "17,000,000-18,000,000", monthly: "1,500,000 - 1,540,000" },
            { annual: "18,000000-18,500,000", monthly: "1,540,000 - 1,580,000" },
            { annual: "18,500,000-19,000,000", monthly: "1,580,000 - 1,600,000" },
            { annual: "19,000,000-20,000,000", monthly: "1,600,000 - 1,700,000" }
        ]
    },
    {
        placeholder: "Assets",
        values: {
            individual: {
                gadgetsAndAppliances: [
                    "Television",
                    "Streamer webcams",
                    "Home Theatres",
                    "Electronic Scooter/Hoverboards",
                    "3D Virtual Reality Headset",
                    "Generator",
                    "Washing Machine",
                    "Video Game/Play Station Console",
                    "Air Conditioner",
                    "Dish Washer",
                    "Refrigerator",
                    "Microwave Oven",
                    "Water Heater",
                    "Vaccuum Cleaner",
                    "Food Processor",
                    "Decoder"
                ],
                landsHousesBuildings: [
                    "Flats",
                    "Duplex",
                    "Mansion",
                    "Shopping Malls/Complex/Plaza",
                    "Office/Work space",
                    "Shops",
                    "Hotel",
                    "Warehouse",
                    "Fuel Station"
                ],
                personalBelongings: [
                    "Precious Stones/Metals",
                    "Jewelries",
                    "Deposits",
                    "Interest income from fixed deposit",
                    "Cars",
                    "Furniture and Fittings",
                    "Aquarium"
                ],
                computerEquipments: [
                    "Laptop/Desktop",
                    "Computer Hardwares",
                    "Webcam",
                    "Drones",
                    "Digital Camera"
                ]
            },
            corporate: {
                fixedAssets: {
                    tangible: [
                    "Land",
                    "Properties",
                    "Building",
                    "Plants and Equipment",
                    "Furniture and Fittings",
                    "Vehicles"
                    ],
                    intangible: [
                    "Trademark/Tradename",
                    "Patent",
                    "Copyright",
                    "Brand",
                    "Goodwill"
                    ]
                },
                currentAssets: [
                    "Cash",
                    "Account Receivable",
                    "Stock Inventory",
                    "Prepaid Expenses",
                    "Supplies",
                    "Marketable Securities"
                ],
                longTermInvestments: [
                    "Treasury bills/Bonds"
                ]
            }
        }
    },

    {
        placeholder: "Activity and Interests",
        values: {
            indoors: [
            "Hiking","Rock Climbing","Canyoneering","Slacklining","Mountaineering","Mountain Biking","Camping","Glamping","Rafting","Skiing or Snowboarding","Scuba Diving","Fishing, Crabbing, or Lobstering","Yoga"
            ],
            sportHobbies: [
            "Archery","Bowling","Cycling","Golfing","Horse Riding","Ice Skating","Martial Arts or Kickboxing","Paintball","Running","Skateboarding","Surfing","Swimming"
            ],
            travelHobbies: [
            "Cruising","Road Tripping","RVing","Sailing"
            ],
            traditionalArts: [
            "Calligraphy","Coloring","Dancing","Drawing","Musical Instrumentalist","Painting","Photography","Pottery","Writing","Videography / Filmmaking"
            ],
            otherCreativeHobbies: [
            "Beatboxing","Blogging","Engraving","Graffiti Art","Graphic Design","Juggling","Magic","Podcasting","Puppetry"
            ],
            craftingHobbies: [
            "Woodworking","Soap Making","Scrapbooking","Origami","Leather Crafting","Jewelry Making","Knitting / Crocheting","Cross-Stitching / Embroidery","Candle Making","Balloon Twisting"
            ],
            foodAndCookingHobbies: [
            "Wine Tasting","Gardening","Food Styling","Cooking","Coffee Roasting","Canning / Pickling / Making Jam","Baking","Mixology","Decorating"
            ],
            games: [
            "Board Games","Chess","Cosplaying","Gaming","Poker","Puzzles","Trivia Night"
            ],
            collectingHobbies: [
            "Astronomy","Birding","Foraging"
            ]
        }
    },
    {
        placeholder: "Social Network Site",
        values: [
            "Facebook",
            "WhatsApp",
            "Instagram",
            "Twitter",
            "Skype",
            "Linkedin",
            "Telegram"
        ]
    }
]




