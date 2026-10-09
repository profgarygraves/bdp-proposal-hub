/*
  Full-time pathway map for the Applied Human-AI Collaboration and Leadership BS.
  Modeled on the Fullerton College Program Pathways Mapper (pathways.fullcoll.edu).

  Each course row:
    options: course codes (or a Cal-GETC area); more than one = "choose one"
    tag:     "Major" | "Gen Ed" | "Major / Gen Ed" | "Upper Division" | "Capstone" | "Elective"
    units:   number or "min-max" string
*/

window.BDP_PATHWAY = {
  title: "Applied Human-AI Collaboration and Leadership",
  award: "Bachelor of Science",
  mapType: "Full-Time Map",
  catalogYear: "2027-2028",
  totalUnits: "120",
  stages: [
    { label: "Fullerton College", sub: "AI in Business AS (Years 1-2)" },
    { label: "Fullerton College", sub: "Applied Human-AI BS (Years 3-4)" },
  ],
  disclaimer:
    "Program maps are for reference only. Students should meet with a counselor to create a customized education plan. Students who already hold the AI in Business AS or equivalent preparation begin at Year 3.",
  terms: [
    {
      name: "Year 1 · Fall",
      courses: [
        { options: ["BUS 108 F"], title: "Living in an Online World", tag: "Major", units: 3 },
        { options: ["STAT C1000", "STAT C1000H"], title: "Introduction to Statistics", tag: "Major / Gen Ed", units: 4, note: "Also meets Cal-GETC Area 2 (Mathematical Concepts and Quantitative Reasoning)." },
        { options: ["Cal-GETC Area 1A"], title: "English Composition", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 6"], title: "Ethnic Studies", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 4"], title: "Social and Behavioral Sciences", tag: "Gen Ed", units: 3 },
      ],
    },
    {
      name: "Year 1 · Spring",
      courses: [
        { options: ["BUS 256 F"], title: "Artificial Intelligence and Prompt Engineering for Business", tag: "Major", units: 3 },
        { options: ["CIS 201 F"], title: "Introduction to Python Programming", tag: "Major", units: 3 },
        { options: ["Cal-GETC Area 1B"], title: "Critical Thinking and Composition", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 3A"], title: "Arts", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 5B"], title: "Biological Sciences", tag: "Gen Ed", units: 3 },
      ],
    },
    {
      name: "Year 2 · Fall",
      courses: [
        { options: ["BUS 257 F"], title: "AI Applications for Business", tag: "Major", units: 3 },
        { options: ["BUS 255 F"], title: "Introduction to Business and Data Analytics", tag: "Major", units: 3 },
        { options: ["CIS 142 F"], title: "Database I", tag: "Major", units: 3 },
        { options: ["Cal-GETC Area 1C"], title: "Oral Communication", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 5A"], title: "Physical Sciences", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 5C"], title: "Laboratory Activity", tag: "Gen Ed", units: 1 },
      ],
    },
    {
      name: "Year 2 · Spring",
      courses: [
        { options: ["CIS 258 F"], title: "Applied AI: Machine Learning, Deep Learning and NLP", tag: "Major", units: 3 },
        { options: ["BUS 271 F"], title: "Leadership and Business Ethics", tag: "Major", units: 3 },
        { options: ["Cal-GETC Area 3B"], title: "Humanities", tag: "Gen Ed", units: 3 },
        { options: ["Cal-GETC Area 4"], title: "Social and Behavioral Sciences (second discipline)", tag: "Gen Ed", units: 3 },
        { options: ["CSU-transferable elective"], title: "Elective, as needed to reach 120 units", tag: "Elective", units: 3, note: "Reduce if 4-unit Cal-GETC courses are chosen." },
      ],
      milestones: [
        { title: "Earn the AI in Business AS", text: "Submit the graduation application to Admissions and Records. Degrees are not awarded automatically." },
        { title: "Apply to the BS program", text: "Admission requires completion of all required lower-division courses before the first upper-division term." },
      ],
    },
    {
      name: "Year 3 · Fall",
      courses: [
        { options: ["HAI 300"], title: "Foundations of Human-AI Collaboration", tag: "Upper Division", units: 3, note: "Take in the first upper-division term." },
        { options: ["HAI 310"], title: "Applied AI for Organizational Decision-Making", tag: "Upper Division", units: 3 },
        { options: ["HAI 320"], title: "Data Analytics and Visualization for Leaders", tag: "Upper Division", units: 3 },
        { options: ["HAI 340"], title: "Organizational Leadership in AI-Enabled Environments", tag: "Upper Division", units: 3 },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
      ],
    },
    {
      name: "Year 3 · Spring",
      courses: [
        { options: ["HAI 350"], title: "AI Strategy and Implementation", tag: "Upper Division", units: 3, note: "Prerequisite for HAI 495A." },
        { options: ["HAI 360"], title: "Ethics, Governance, and Responsible AI", tag: "Upper Division", units: 3 },
        { options: ["HAI 370"], title: "Managing AI Projects and Cross-Functional Teams", tag: "Upper Division", units: 3, note: "Prerequisite for HAI 495A." },
        { options: ["HAI 380"], title: "Human-AI Interaction and Experience Design", tag: "Upper Division", units: 3 },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
      ],
      milestones: [
        { title: "Secure a capstone partner", text: "Identify an employer, nonprofit, campus department, or your own workplace to host the capstone project." },
      ],
    },
    {
      name: "Year 4 · Fall",
      courses: [
        { options: ["HAI 495A"], title: "AI Implementation Capstone I", tag: "Capstone", units: 3 },
        { options: ["BUS 371"], title: "Advanced Organizational Behavior and Leadership in AI-Enabled Environments", tag: "Upper Division", units: 4 },
        { options: ["ENGL 301 F"], title: "Technical Writing", tag: "Upper Division", units: 3, note: "Upper-division general education." },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
      ],
      milestones: [
        { title: "File the graduation application", text: "Submit the BS graduation application to Admissions and Records by the posted deadline." },
      ],
    },
    {
      name: "Year 4 · Spring",
      courses: [
        { options: ["HAI 495B"], title: "AI Implementation Capstone II", tag: "Capstone", units: 3 },
        { options: ["PHIL 361 F"], title: "Technology and Ethics", tag: "Upper Division", units: 3, note: "Upper-division general education." },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
        { options: ["MKT 256 F", "CIS 210 F", "CIS 235 F", "CYBR 256 F", "BUS 180 F", "CISG 105 F"], title: "Restricted elective", tag: "Elective", units: 3 },
      ],
      milestones: [
        { title: "Present the capstone", text: "Present the implemented solution and results to a professional panel of advisory board members and employer partners." },
        { title: "Earn the Applied Human-AI Collaboration and Leadership BS", text: "Degrees are not awarded automatically; confirm the graduation application was submitted." },
      ],
    },
  ],
};
