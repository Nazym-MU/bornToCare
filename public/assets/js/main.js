// const { google } = require('googleapis');
// const keys = require('./keys.json');

// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// const client = new google.auth.JWT(
//   keys.client_email,
//   null,
//   keys.private_key,
//   SCOPES
// );

// client.authorize(function (err, tokens) {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log('Connected!');
//     gsrun(client);
//   }
// });

// async function gsrun(cl) {
//   const gsapi = google.sheets({ version: 'v4', auth: cl });

//   const opt = {
//     spreadsheetId: '12RnEffmMLpaRWTKw9u6Ecf3gakKdWAMKwrIcm1HPWNU', 
//     range: 'resources!A2:F24'
//   };
//   const resourcesData = {};

//   try {
//     const data = await gsapi.spreadsheets.values.get(opt);
//     const rows = data.data.values;
//     if (rows.length) {
//       rows.forEach(row => {
//         resourcesData[row[0]] = {
//           label: row[0],
//           link: row[1],
//           resourceType: row[2],
//           riskType: row[3],
//           description: row[5], 
//           eligibility: row[4]
//         };
//       });
//       console.log(resourcesData);
//       // updateResources(resourcesData);
//     } else {
//       console.log('No data found.');
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }

// }


  exampleData = {
    data: [
      {
        label: 'Tenderloin Community Benefit District',
        link: 'https://tlcbd.org/',
        resourceType: 'California Grant/Fund/Loan',
        riskType: 'MultipleRisks',
        description: 'Stewardship of Tenderloin area, posts grants and provides assistance to small businesses (cleaning, etc)',
        eligibility: 'N/A'
      },
      {
        label: 'Small Community Drought Relief Program',
        link: 'https://www.grants.ca.gov/grants/small-community-drought-relief-program/',
        resourceType: 'California Grant/Fund/Loan',
        riskType: 'Drought',
        description: 'The purpose of the Small Community Drought Relief Program is to provide immediate and near-term financial and technical support to help small communities survive this and future droughts.',
        eligibility: 'Applicants must be public agencies, nonprofits, or tribal governments.'
      },
      {
        label: "Governor's Office of Emergency Services' Hazard Mitigation Grant Program",
        link: 'https://www.grants.ca.gov/grants/hazard-mitigation-grant-program/',
        resourceType: 'California Grant/Fund/Loan',
        riskType: 'MultipleRisks',
        description: 'Hazard Mitigation Grant Program (HMGP) funds plans and projects that reduce the effects of future natural disasters. In California, these funds are administered by the Cal OES HMGP Unit. Eligible subapplicants include state agencies, local governments, special districts, and some private non-profits.\n' +
          'This would be useful for people creating projects to prevent climate change risks, essentially building resistance. ',
        eligibility: 'open to state agencies, local governments, special districts, and federally recognized tribes. The etities must have a FEMA-approved and locally adopted Local Hazard Mitigation Plan (LHMP) to apply for project grants. '
      },
      {
        label: 'California Small Agricultural Business Drought and Flood Relief Grant Program (Groups 1 & 2)',
        link: 'https://cadroughtfloodrelief.com/',
        resourceType: 'California Grant/Fund/Loan',
        riskType: 'MultipleRisks',
        description: 'Grant funds for this program are for small agricultural businesses that have been financially impacted by severe drought and/or flooding in the State of California and will be disbursed in the following groups for awards of up to $100,000.',
        eligibility: 'This program is for small agricultural businesses financially impacted by the severe drought and/or flood conditions in the State of California.\n' +
          'For full eligibility details, please visit https://cadroughtfloodrelief.com/\n' +
          '\n' +
          'Eligible Geographies:\n' +
          'This program is open to small agricultural businesses located in the State of California.'
      },
      {
        label: 'National Flood Insurance Program',
        link: 'https://www.floodsmart.gov/',
        resourceType: 'Federal Grant/Fund',
        riskType: 'Flooding',
        description: 'providing vital information on flood preparation, recovery, and insurance. The website offers tools and resources to help users understand flood risks, obtain flood insurance, and learn about floodplain management.',
        eligibility: 'reside in a community that participates in the NFIP, which most do. If you have a government-backed mortgage and your property is in a high-risk flood area, having flood insurance is mandatory.'
      },
      {
        label: 'U.S. Small Business Administration Disaster Mitigation Assistance',
        link: 'https://www.sba.gov/funding-programs/disaster-assistance/mitigation-assistance',
        resourceType: 'Federal Grant/Fund',
        riskType: 'MultipleRisks',
        description: 'SBA offers low-interest disaster loans to homeowners and small businesses impacted by declared natural and other disasters. Eligible SBA disaster loan borrowers may choose to receive expanded funding to help mitigate their home or business against future disasters. SBA disaster loans can be increased up to 20% to make building upgrades.',
        eligibility: 'Businesses of all sizes, homeowners, renters, private nonprofit organizations;\n' +
          'You must be located in a declared disaster area and meet other eligibility criteria depending on the type of loan  '
      },
      {
        label: 'TCFD',
        link: 'https://www.fsb-tcfd.org/about/',
        resourceType: 'Federal Organization ',
        riskType: 'Financial',
        description: 'help organizations and investors disclose climate-related risks; they provide workshops',
        eligibility: 'N/A'
      },
      {
        label: 'HDR',
        link: 'https://www.greenbiztracker.org/business/hdr-san-francisco',
        resourceType: 'Federal Organization ',
        riskType: 'N/A',
        description: "Tracking the environmental progress of states' Green Business Programs. California-specific website here. Grants Green certification for businesses who meet the criteria, which then can attract customers",
        eligibility: 'businesses must demonstrate sustainable practices and meet specific environmental standards. '
      },
      {
        label: 'Carbon Disclosure Project',
        link: 'https://www.cdp.net/en/info/about-us',
        resourceType: 'Federal Organization ',
        riskType: 'MultipleRisks',
        description: 'Asks companies to disclose their climate impact, runs the global disclosure system for investors, companies, cities, states, and regions to manage their environmental impacts',
        eligibility: 'N/A'
      },
      {
        label: 'San Francisco Climate and Health Program',
        link: 'https://www.sf.gov/san-francisco-climate-and-health-program',
        resourceType: 'General Information',
        riskType: 'N/A',
        description: 'works to understand and address the impacts of climate change through policy and planning, research and analysis, and outreach and engagement.',
        eligibility: 'N/A'
      },
      {
        label: 'Wildfire Smoke and Health',
        link: 'https://www.sf.gov/reports/may-2023/wildfire-smoke-and-health?_gl=1*1w9ykku*_ga*MTQ1MjA3NDQ4OC4xNzA1NjE1NjMy*_ga_BT9NDE0NFC*MTcwNTYxNTYzMi4xLjAuMTcwNTYxNTYzMi4wLjAuMA..*_ga_63SCS846YP*MTcwNTYxNTYzMi4xLjAuMTcwNTYxNTYzMi4wLjAuMA..',
        resourceType: 'General Information',
        riskType: 'Wildfires',
        description: 'Wildfire smoke is comprised of both gaseous and hazardous pollutants, water vapor, and particulate matter',
        eligibility: 'N/A'
      },
      {
        label: 'SF Office of Resilience and Capital Planning',
        link: 'https://onesanfrancisco.org/',
        resourceType: 'General Information',
        riskType: 'MultipleRisks',
        description: 'Planning and financing projects that strengthen the integrity and resilience of San Francisco. (i.e. 90 strategies to reduce risks, )',
        eligibility: "Most communities within the US are eligible, essential to verify that your local government is compliant with the NFIP's floodplain management standards. These standards involve proper floodplain management policies that reduce future flood risks to new construction in Special Flood Hazard Areas (SFHAs). Homeowners, renters, and business owners in these participating communities can then purchase flood insurance policies from the government."
      },
      {
        label: 'Flooding and Extreme Storms Resource Sheet',
        link: 'https://www.sf.gov/sites/default/files/2023-06/FloodingResourceSheet_05.01.2019.cleaned%20%284%29.pdf',
        resourceType: 'General Information',
        riskType: 'Flooding',
        description: 'government collection of resources of flooding ',
        eligibility: ''
      },
      {
        label: 'Climate Resilience Toolkit',
        link: 'https://toolkit.climate.gov/',
        resourceType: 'How-To-Guide',
        riskType: 'MultipleRisks',
        description: 'Hot-To-Guide to learn about potential climate hazards, assess them in regard to the properties, and how people can protect your vulnerable assets (businesses). ',
        eligibility: 'N/A'
      },
      {
        label: 'Natural Resources Defense Council',
        link: 'https://www.nrdc.org/',
        resourceType: 'How-To-Guide',
        riskType: 'MultipleRisks',
        description: 'guides to green living and green business practices',
        eligibility: 'make a tax-deductible donation through their website,'
      },
      {
        label: 'IRS How-To-Guide',
        link: 'https://www.irs.gov/businesses/small-businesses-self-employed/preparing-for-a-disaster-taxpayers-and-businesses',
        resourceType: 'How-To-Guide',
        riskType: 'MultipleRisks',
        description: 'A general how-to-guide for businesses to get prepared for natural hazards in the future, but this website also has loan opportunities, one of which is described above (U.S. Small Business Administration Disaster Mitigation Assistance)',
        eligibility: 'N/A'
      },
      {
        label: 'One SF',
        link: 'https://onesanfrancisco.org/climateSF',
        resourceType: 'Local Organization',
        riskType: 'MultipleRisks',
        description: 'planning efforts, and capital funding that enhance climate resilience and seeks to maximize the efficacy, efficiency, and community benefits of needed public investments in these areas',
        eligibility: 'N/A'
      },
      {
        label: 'Neighbourhood Empowerment Network',
        link: 'https://www.empowersf.org/#home',
        resourceType: 'Local Organization',
        riskType: 'N/A',
        description: 'Providing programs for empowering neighborhoods to implement strategies for resilience (i.e. experiential leadership development porgrams  in the face of strssors such as climate change and earthquakes, )',
        eligibility: 'Varies '
      },
      {
        label: 'Risk Factor',
        link: 'https://riskfactor.com/',
        resourceType: 'Risk Assessment',
        riskType: 'N/A',
        description: 'Search an address to see its risk from flooding, wildfire, wind, and extreme heat',
        eligibility: 'N/A'
      },
      {
        label: 'Aurora Solar, Inc.',
        link: 'https://aurorasolar.com/',
        resourceType: 'Risk Assessment',
        riskType: 'MultipleRisks',
        description: 'offers a platform to streamline the solar project process from design to installation. Their technology simplifies the solar design process, significantly reducing the time it takes from initial design to installation,',
        eligibility: 'N/A'
      },
      {
        label: 'SF Department of Building Inspection ',
        link: 'https://www.sf.gov/comply-floodplain-management-requirements',
        resourceType: 'SF Grant/Fund',
        riskType: 'Flooding',
        description: "In SF,if your property falls within a FEMA Flood Hazard zone and your construction project is either new or exceeds 50% of the building's market value, you must comply with the Floodplain Management Ordinance. This includes using a licensed professional to complete a Flood Hazard Zone Protection Checklist and submitting it when you apply for a building permit. Your construction must be safe from flood damage and not exacerbate flooding on other properties. ",
        eligibility: 'company must comply with the Floodplain Management Ordinance if all of the following are true:\n' +
          '--> The property is within a FEMA FIRM Flood Hazard zone\n' +
          '--> The project is new construction, or the construction work will cost more than 50% of the structure’s market value'
      },
      {
        label: 'Floodwater Management Grant Program',
        link: 'https://sfpuc.org/programs/grants/floodwater-management-grant-program',
        resourceType: 'SF Grant/Fund',
        riskType: 'Flooding',
        description: 'These grants are for San Francisco property owners who experience flooding from the sewer system or adjacent public right-of-way caused by heavy rains. Learn how you can floodproof your home with support from the Floodwater Management Grant! The SFPUC Floodwater Management Grant Program was launched in 2013 to help property owners in San Francisco minimize the risk of flooding on their properties due to heavy rainstorms that result in flooding from the adjacent City right-of-way or sewer backflow events. ',
        eligibility: 'Already experiencing flooding entering your property through plumbing fixtures or the public right-of-way caused by rain events'
      },
      {
        label: 'Green Infrastructure Grant',
        link: 'https://sfpuc.org/programs/grants/green-infrastructure-grant',
        resourceType: 'SF Grant/Fund',
        riskType: 'Flooding',
        description: 'The Green Infrastructure Grant Program funds the design and construction of green stormwater infrastructure on large public and private properties, with the goal of reducing stormwater runoff while delivering public benefits that enhance the quality of life for all SFPUC rate payers. Project types can include permeable pavement, bioretention, rainwater harvesting, rain gardens, and vegetated roofs. Projects must capture stormwater runoff from at least 0.5 acres of impervious surface and can receive up to $2M per project. Please see the resources section below for links to the Guidebook, Application, Workshop recordings, and other important resources.',
        eligibility: 'Projects must capture stormwater runoff from at least 0.5 acres of impervious surface'
      }
  ],
};

for (let i of exampleData.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.riskType);
  let container = document.createElement("div");
  container.classList.add("container");
  let resourceType = document.createElement("span");
  resourceType.innerHTML = i.resourceType;
  container.appendChild(resourceType);
  let name = document.createElement("h5");
  name.innerHTML = i.label;
  container.appendChild(name);
  let description = document.createElement("p");
  description.innerHTML = i.description;
  container.appendChild(description);
  let eligibilityLabel = document.createElement("h5");
  if (i.eligibility == "N/A" || i.eligibility == "") {
    eligibilityLabel.innerHTML = "";
  } else {
    eligibilityLabel.innerHTML = "Eligibility:";
  }
  container.appendChild(eligibilityLabel);
  let eligibility = document.createElement("p");
  if (i.eligibility == "N/A" || i.eligibility == "") {
    eligibility.innerHTML = "";
  } else {
    eligibility.innerHTML = i.eligibility;
  }
  container.appendChild(eligibility);
  let button = document.createElement("button");
  button.innerHTML = "More";
  button.classList.add("more-button");
  button.addEventListener("click", function() {
    window.location.href = i.link; 
  });
  container.appendChild(button); 
  
  card.appendChild(container);
  document.getElementById("resources").appendChild(card);
};

function filterResources() {
  var riskType = document.getElementById("riskTypeDropdown").value;
  
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    var riskTypeMatch = riskType === "all" || element.classList.contains(riskType);
    
    if (riskTypeMatch) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
};

function searchResource() {
  var value = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (element.innerText.toLowerCase().includes(value.toLowerCase())) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  })
};

window.onload = () => {
  filterResources("all");
};
