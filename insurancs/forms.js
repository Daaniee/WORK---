const data = [
    {
        id: 0,
        placeholder: "Type Of Customer",
        values: ["Individual", "Organization"]
    },
    {
        id: 1,
        placeholder: "Gender",
        values: ["Male", "Female"]
    },
    {
        id: 2,
        placeholder: "Age",
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
        id: 3,
        placeholder: "Religion",
        values: [
            "Islam",
            "Christianity",
            "Others"
        ]
    },
    {
        id: 4,
        placeholder: "Marital Status",
        values: ["single", "married", "divorced", "widowed"]
    },
    {
        id: 5,
        placeholder: "Dependents",
        hasDependents: ["Yes", "No"],
        dependentRelationship: ["Children", "Brother", "Sister", "Cousin", "Uncle", "Aunt", "Guardian", "Nephews", "Niece", "Inlaws", "Close Friends"],
        ageRanges: ["0-10", "11-18", "19-25", "26-36", "37 and above"],
        
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
        placeholder:  "State Residence",
        values: [
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
        id: 9,
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
        id: 10,
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
        id: 11,
        placeholder: "Income / Earnings",
        values: {
            Annual : [
                "240,000-350,000",
                "360,000-650,000",
                "650,000 - 850,000",
                "850,000 - 1,110,000",
                "1,300,000 - 1,650,000",
                "1,950,000 - 2,400,000",
                "3,500,000 -5,000,000",
                "6,500,000-7,500,000",
                "7,850,000-9,500,000",
                "9,850,000-10,000,000",
                "10,500,000-12,500,000",
                "12,500,000-15,000,000",
                "15,000,000-17,000,000",
                "17,000,000-18,000,000",
                "18,000000-18,500,000",
                "18,500,000-19,000,000",
                "19,000,000-20,000,000"
            ],
            Monthly : [
                "30,000",
                "54,000 - 72,000",
                "70,000 - 92,500",
                "108,000 - 137,000",
                "162,000 - 200,000",
                "290,000 - 400,000",
                "550,000 - 620,000",
                "650,000 - 790,000",
                "820,000 - 850,000",
                "870,000 - 1,000,000",
                "1,000,000 - 1,250,000",
                "1,250,000 - 1,400,000",
                "1,400,000 - 1,500,000",
                "1,500,000 - 1,540,000",
                "1,540,000 - 1,580,000",
                "1,580,000 - 1,600,000",
                "1,600,000 - 1,700,000"
            ]

        }
    },
    {
        id: 12,
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
        id: 13,
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
        id: 14,
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
var allContent = document.getElementById("allContent");
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        allContent.classList.add('Show');
    }, 500);
});


let display = "";
function populatePage(){
    allContent.classList.remove('Show');
    var firstDiv = document.createElement('div');
    firstDiv.id = "div1"
    var firstPick = data[0].values;
    display = `
        <div id="styleDiv">
            <label>What type of Customer are you?</label>
            <select name="customer" id="customer" onchange="changeshii()">
                <option value="">--Select--</option>`;
    for(let specific of firstPick){
        display += `
                <option value="${specific}">${specific}</option>
        `
    }
    display += `
            </select>
        </div>
    `
    setTimeout(() => {
        allContent.innerHTML = "";
        firstDiv.innerHTML = display;
        allContent.appendChild(firstDiv);
        allContent.insertBefore(backBtn, allContent.firstChild);
        allContent.appendChild(nextBtn);
        allContent.classList.add('Show');
    },500)
    
}

function populatePage2(){
    display = ''
    allContent.classList.remove('Show');
    var secondDiv = document.createElement('div');
    secondDiv.id = "div2"
    display = `
        <p>Personal Information</p>

           <label for="name">Name:</label>
           <input type="text" name="name" placeholder="Fullname">
           <label for="phone">Phone Number</label>
           <input type="text" id="phoneNo" name="phoneNo" placeholder="Phone Number" oninput="checkPhone(this)">
           <label for="email">Email</label>
           <input type="email" id="email" name="email" placeholder="Email" oninput="checkEmail(this)">`


    setTimeout(() => {
        allContent.innerHTML = "";
        secondDiv.innerHTML = display;
        allContent.appendChild(secondDiv);
        allContent.insertBefore(backBtn, allContent.firstChild);
        allContent.appendChild(nextBtn);
        allContent.classList.add('Show');
    },500)
}


function populatePage3(){
    display = '<p>Personal Information</p>'
    allContent.classList.remove('Show');
    var thirdDiv = document.createElement('div');
    thirdDiv.id = "div3"

    var personalArray = data.slice(1,6);

    for (let specific of personalArray){
        display += `<label for="${specific.placeholder}">${specific.placeholder}</label>
                    <select name="${specific.placeholder}">
                    <option value="">--Select--</option>`
        if(specific.placeholder === "Dependents"){
            for(let special of specific.hasDependents) {
                display += `<option value="${special}">${special}</option>`
            }
        }else {
            for(let special of specific.values) {
                display += `<option value="${special}">${special}</option>`
            }
            display += `</select>`
        }
    }
    setTimeout(() => {
        allContent.innerHTML = "";
        thirdDiv.innerHTML = display;
        allContent.appendChild(thirdDiv);
        allContent.insertBefore(backBtn, allContent.firstChild);
        allContent.appendChild(nextBtn);
        allContent.classList.add('Show');
    },500)
}

function populatePage4(){
    display = '<p>Dependent Information</p>'
    allContent.classList.remove('Show');
    var fourthDiv = document.createElement('div');
    fourthDiv.id = "div4";

    display += `
        <label for="dependantNo">Number Of Dependants</label><br>
        <input id="noOfD" type="number" name="number" placeholder="Input Number">
        <div id="buttonsDiv">
        <button id="dependantButton" onclick="add()">Add Dependants</button>
        <button id="dependantButton" onclick="erase()">Delete Dependants</button>
        </div>
    `;



    setTimeout(() => {
        allContent.innerHTML = "";
        fourthDiv.innerHTML = display;
        allContent.appendChild(fourthDiv);
        allContent.insertBefore(backBtn, allContent.firstChild);
        allContent.appendChild(nextBtn);
        allContent.classList.add('Show');
    },500)
}

function populatePage5(){
    var assetsData = data[12];
    allContent.classList.remove('Show');
    var fifthDiv = document.createElement('div');
    fifthDiv.id = "div5";

    display = `<p>${assetsData.placeholder}</p>`
    display += `<label>${assetsData.placeholder}</label>
                <select id="selectedAssets">
                    <option value="none">--select--</option>
                `;
           for (let option in assetsData.values){
               display += `<option value="${option}">${option}</option>`;
    }
    display += `</select>`

    setTimeout(() => {
        allContent.innerHTML = "";
        fifthDiv.innerHTML = display;
        allContent.appendChild(fifthDiv);
        allContent.insertBefore(backBtn, allContent.firstChild);
        allContent.appendChild(nextBtn);
        allContent.classList.add('Show');
    },500)
}


assetsShow(){
    var pick = document.getElementById("selectedAssets").value; 
    if(pick === )
}

let createdDependants = 0;
function add(){
    var numberOfD = document.getElementById('noOfD').value;
    if(createdDependants < numberOfD){
        createdDependants++
        var actualDiv = document.getElementById("div4");
        var dependentsData = data[5];
        var added = document.createElement('div')
        added.id = "dependentsContainer"
        display = '';
        display += `
            <div>
            <label for="dependantRelationship">Dependants Relationship</label>
            <select name="dependantRelationship" id="dependentSelect">
            <option value="">--Select--</option>
            `
        for (let specific of dependentsData.dependentRelationship){
            display += `<option value="${specific}">${specific}</option>`
        }
        display += `</select>
                </div>`
        
        display += `
            <div>
            <label for="dependantAge">Dependants Age</label>
            <select name="dependantAge" id="dependentSelect">
            <option value="">--Select--</option>`
        for (let specific of dependentsData.ageRanges){
            display += `<option value="${specific}">${specific}</option>`
        }
        display += `</select>
                </div>`

        added.innerHTML = display;
        actualDiv.appendChild(added)
    } else {
    
        document.getElementById('noOfD').focus();
    }
}

function erase() {
    if (createdDependants > 0) {
        createdDependants--;

        // Find the last dependents block
        const actualDiv = document.getElementById("div4");
        const containers = actualDiv.querySelectorAll("#dependentsContainer");

        if (containers.length > 0) {
        const lastContainer = containers[containers.length - 1];
        actualDiv.removeChild(lastContainer);
        }

        // Optionally update the value of numberOfD if needed
        document.getElementById("noOfD").value = createdDependants;
    }
}


function changeshii(){
    var pick = document.getElementById("customer");
    if (pick.value === "Individual") {
        setTimeout(() => {
        populatePage3();
        }, 300);
    }
};


let currentPage = 0;
const pages = [populatePage, populatePage2, populatePage3, populatePage4, populatePage5];

const nextBtn = document.createElement('button');
nextBtn.innerHTML = "Next &gt;&gt;";

const backBtn = document.createElement('button');
backBtn.innerHTML = "&lt;&lt; Back";

nextBtn.id = "nextBtn";
backBtn.id = "backBtn";



nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        pages[currentPage](); // Load next page
    }
});

backBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage](); // Load previous page
    }
});

// var backbtn = document.getElementById("back");
// var viewport = document.getElementById("content");

// var viewportChanger = document.getElementById("contents")

// function populate() {
//     viewportPro.classList.add('fade-out-left');

//     let allSelects = '';

//     for (const specific of data) {
//         // Dependents
//         if (specific.placeholder === "Dependents") {
//             allSelects += `
//                 <div>
//                     <label>Do you have dependents?</label>
//                     <select name="hasDependents" id="hasDependentsSelect" onchange="toggleDependents()">
//                         <option value="">--Select--</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>
//                 <div id="dependentsDropdowns" style="display: none;"></div>
//             `;
//             continue;
//         }

//         // Social Class
//         if (specific.placeholder === "Social Class") {
//             var socialstuff = data[9].values;
//             let selectSocial = `
//                 <div>
//                     <label>Social Class</label>
//                     <select id="classSelect" onchange="socialFunction()">
//                         <option value="none">--select--</option>
//             `;
//             for (let option in socialstuff) {
//                 selectSocial += `<option value="${option}">${option}</option>`;
//             }
//             selectSocial += `
//                     </select>
//                     <div id="classOptions" style="display: none;"></div>
//                 </div>
//             `;
//             allSelects += selectSocial;
//             continue;
//         }

//         // Assets
//         if (specific.placeholder === "Assets") {
//             var assetsStuff = data[11].values;
//             let selectAssets = `
//                 <div>
//                     <label>Assets</label>
//                     <select id="assetsSelect" onchange="assetsFunction()">
//                         <option value="none">--select--</option>
//             `;
//             for (let option in assetsStuff) {
//                 selectAssets += `<option value="${option}">${option}</option>`;
//             }
//             selectAssets += `
//                     </select>
//                     <div id="assetsOptions" style="display: none;"></div>
//                 </div>
//             `;
//             allSelects += selectAssets;
//             continue;
//         }

//         // Income / Earnings
//         if (specific.placeholder === "Income / Earnings") {
//             var incomes = data[10].values;
//             var incomesName = data[10].placeholder;
//             allSelects += `<div>
//                 <label>${incomesName}</label>`;
//             for (const special in incomes) {
//                 let select = `<select>
//                         <option selected disabled>--${special}--</option>`;
//                 for (const opt of incomes[special]) {
//                     select += `<option value="${opt}">${opt}</option>`;
//                 }
//                 select += `</select>`;
//                 allSelects += select;
//             }
//             allSelects += `</div>`;
//             continue;
//         }

//         // Regular dropdown
//         let selects = `<div>
//                 <label>${specific.placeholder}</label><br>
//                 <select name="${specific.placeholder}">
//                     <option selected disabled>--Select--</option>`;

//         const values = specific.values;
//         if (Array.isArray(values)) {
//             for (const element of values) {
//                 if (typeof element === 'string') {
//                     selects += `<option value="${element}">${element}</option>`;
//                 } else if (typeof element === 'object' && element !== null) {
//                     for (const key in element) {
//                         selects += `<optgroup label="${key}">`;
//                         for (const subItem of element[key]) {
//                             selects += `<option value="${subItem}">${subItem}</option>`;
//                         }
//                         selects += `</optgroup>`;
//                     }
//                 }
//             }
//         } else if (values && typeof values === 'object') {
//             for (const key in values) {
//                 selects += `<optgroup label="${key}">`;
//                 for (const item of values[key]) {
//                     selects += `<option value="${item}">${item}</option>`;
//                 }
//                 selects += `</optgroup>`;
//             }
//         } else {
//             selects += `<option value="">No options available</option>`;
//         }

//         selects += `</select></div>`;
//         allSelects += selects;
//     }

//     // After fade-out delay, update content
//     setTimeout(() => {
//         // Only update the selects inside viewport
        

//         // Remove fade-out effect
//         viewportPro.classList.remove('fade-out-left');

        
//         backbtn.classList.add('show');

//         // Add inputs if not already present
//         if (!document.getElementById("user-inputs")) {
//             viewportChanger.innerHTML = "";
//             const inputsDiv = document.createElement("div");
//             inputsDiv.id = "user-inputs";
//             inputsDiv.innerHTML = `
//                 <p>Personal Information</p>

//                 <label for="name">Name:</label>
//                 <input type="text" name="name" placeholder="Fullname">
//                 <label for="age">Age:</label>
//                 <input type="date" name="age" placeholder="Age">
//                 <label for="phone">Phone Number</label>
//                 <input type="text" name="phoneNo" placeholder="Phone Number">
//                 <label for="email">Email</label>
//                 <input type="email" name="email" placeholder="Email">
//             `;
//             viewportPro.appendChild(inputsDiv)
//         }

        
//     }, 500); // Match CSS transition
// }



// function assetsFunction() {
//   const classesContainer = document.getElementById('assetsOptions');
//   const selected = document.getElementById('assetsSelect').value;
//   let list = "";

//   const selectedCategory = data[11].values[selected];

//   if (selectedCategory) {
//     classesContainer.style.display = 'block';
//     list += `<label>${selected}</label><br>`;
//     list += `<select name="${selected}_number">`;
//     list += `<option value="">Select ${selected} assets</option>`;

//     for (const key in selectedCategory) {
//       list += `<optgroup label="${key}">`;

//       const items = selectedCategory[key];
//       if (Array.isArray(items)) {
//         for (const subItem of items) {
//           list += `<option value="${subItem}">${subItem}</option>`;
//         }
//       }

//       list += `</optgroup>`;
//     }

//     list += `</select><br>`;
//     classesContainer.innerHTML = list;
//   } else {
//     classesContainer.style.display = 'none';
//     classesContainer.innerHTML = "";
//   }
// }

// function socialFunction() {
//   const classesContainer = document.getElementById('classOptions');
//   const selected = document.getElementById('classSelect').value;
//   let list = "";

//   const selectedCategory = data[9].values[selected];

//   if (selectedCategory) {
//     classesContainer.style.display = 'grid';  // make sure it's grid
//     list += `<div class="grid-item">
//                 <label>${selected}</label>
//                 <select name="${selected}_number">
//                     <option value="">Select ${selected} role</option>`;

//     for (const key in selectedCategory) {
//       list += `<optgroup label="${key}">`;

//       const items = selectedCategory[key];
//       if (Array.isArray(items)) {
//         for (const subItem of items) {
//           list += `<option value="${subItem}">${subItem}</option>`;
//         }
//       }

//       list += `</optgroup>`;
//     }

//     list += `</select>
//             </div>`;
//     classesContainer.innerHTML = list;
//   } else {
//     classesContainer.style.display = 'none';
//     classesContainer.innerHTML = "";
//   }
// }

// function toggleDependents() {
//     const dropdownsContainer = document.getElementById('dependentsDropdowns');
//     const selection = document.getElementById('hasDependentsSelect').value;

//     // Clear current dropdowns
//     dropdownsContainer.innerHTML = '';

//     if (selection === "Yes") {
//         dropdownsContainer.style.display = 'contents'; // Optional, can also use block
//         const dependentsValues = data[4].values;

//         let html = '';

//         for (const category in dependentsValues) {
//             html += `
//                 <div class="grid-item">
//                     <label>${category}</label><br>
//                     <select name="${category}_number">
//                         <option value="">Number of Dependents</option>`;
//             for (const num of dependentsValues[category].numberOfDependents) {
//                 html += `<option value="${num}">${num}</option>`;
//             }

//             html += `</select>
//                      <select name="${category}_age">
//                         <option value="">Age Range</option>`;
//             for (const age of dependentsValues[category].ageRanges) {
//                 html += `<option value="${age}">${age}</option>`;
//             }

//             html += `</select>
//                 </div>
//             `;
//         }

//         dropdownsContainer.innerHTML = html;
//     } else {
//         dropdownsContainer.style.display = 'none';
//     }
// }


// function back() {
//     backbtn.classList.remove('show');
//     viewportPro.classList.add('fade-out-left'); // start fade-out

//     setTimeout(() => {
//         // Reset the main content
//         viewport.innerHTML = `
//             <h3 id="head">Type Of Customer</h3>
//             <select id="first" onchange="changeshii()">
//                 <option value="non" selected disabled>--select--</option>
//                 <option value="individual">Individual</option>
//                 <option value="organization">Organization</option>
//             </select>  
//         `;

//         // Remove the inputs section if it exists
//         const inputsDiv = document.getElementById("user-inputs");
//         if (inputsDiv) {
//             inputsDiv.remove();
//         }

//         viewportPro.classList.remove('fade-out-left'); // remove fade-out after update
//     }, 500); // match CSS transition
// }





// function changeshii(){
//     var pick = document.getElementById("first");
//     if (pick.value === "individual") {
//         setTimeout(() => {
//         populate();
//         }, 300);
//   }
// };



