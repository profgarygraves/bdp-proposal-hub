/*
  Curriculum data for the Applied Human-AI Collaboration & Leadership BS.
  One object per course. Field order follows the Fullerton CurricUNET course outline.

  STATUS (Gary updates these to track progress):
    "not-started"  - only application data (title, description, CLOs) exists
    "drafting"     - outline is being written
    "in-review"    - full draft posted for faculty / dean / reviewer feedback
    "revising"     - feedback received, changes in progress
    "complete"     - outline approved by Gary; ready for the curriculum system

  Strings may include [CONFIRM ...] markers for items that need a decision.
*/

window.BDP_COURSE_DEFAULTS = {
  division: "FC Business/CIS",
  departmentCode: "2BUS",
  divisionCode: "2BU",
  department: "Business Management",
  prerequisite:
    "Admission into the baccalaureate degree program upon completion of all required lower division courses.",
  prerequisiteType:
    "Authorized or Required by Statute or Regulation or Licensing Agency",
  prerequisiteJustification:
    "All CSUs and UCs require completion of lower division coursework to move to upper division courses.",
  prerequisiteGrade: "Pass",
  repeatability: "A - Not designed as repeatable",
  grading: "Standard Letter",
  creditStatus: "Credit - Degree Applicable",
  basicSkills: "No",
  cb26: "N - Not a support course",
  openEntry: "No",
  transferCode: "Transfer to CSU (CSU)",
  classification: "I - Occupational Education",
  budgetCode: "0",
  specialFunding: "No",
  standAlone: "No",
  sam: "D - Possible Occupational",
  cip: "52.0201",
  scheduleTypes: "02, 72, HY",
  classSize: "35",
  classSizeJustification:
    "Lecture/Discussion/Group Learning/Student Presentations (Fullerton/Cypress Class Size Planning & Resource Document): while the instructor does lecture, much of the class time focuses on discussion, group learning, and formal and informal student presentations.",
  effectiveTerm: "Fall 2027 [CONFIRM: may move to Fall 2028]",
  startYear: "2027",
  cb27: "A - Upper-division course",

  /* Distance Education Addendum (Fullerton College DEA, effective Fall 2023) */
  de: {
    rationale:
      "This course is designed for baccalaureate students, many of whom are working adults, who may not otherwise be able to attend a traditional course, or who want to take advantage of the convenience and flexibility of fully or partially online courses. Online delivery also lets students practice the digital collaboration skills used in AI-enabled organizations.",
    modes: ["Asynchronous Online", "Synchronous Online", "Hybrid"],
    canvasMeetsObjectives: true,
    nonCanvas:
      "Oral presentations and the team project defense are delivered live through Zoom or recorded with Canvas Studio and submitted in Canvas.",
    frequency:
      "Instructor-student and student-student interactions will occur at least weekly for semester-length classes and more frequently for short-term classes via Canvas LMS, Zoom or other video chat, faculty virtual office hours, and email. Instructors will respond to inquiries from students, ideally within 24 hours and within three days Monday through Friday.",
    instructorStudent: [
      "Orientations using Canvas LMS",
      "Email via Canvas LMS: instructor-student questions, comments, and problem-solving; regular to-do lists, reminders, and assignment descriptions",
      "Announcements: Canvas LMS (at least weekly)",
      "FAQs posted on Canvas LMS and handled through a designated Q&A discussion board",
      "Exams/Quizzes/Surveys using Canvas LMS",
      "Projects submitted using Canvas LMS",
      "Individualized instruction: instructor-guided application of course content; student demonstration with instructor feedback; instructor facilitation of small group presentations; student projects developed through extensive feedback and re-working; writing assignments developed through feedback and multiple revisions",
      "Other: virtual office hours and optional live review sessions through Zoom",
    ],
    studentStudent: [
      "Online discussions using Canvas LMS tools (weekly; initial post by Friday, replies to classmates by Sunday)",
      "Online peer review using Canvas",
      "Virtual chat and web conferencing (Zoom) for team meetings",
      "Other: Canvas Groups for cross-functional team projects, monitored by the instructor",
    ],
    studentContent: [
      "Content delivery: lectures and digital handouts; PowerPoints; videos and podcasts",
      "Access: content on Canvas LMS; content links embedded in Canvas; virtual classroom (Zoom)",
      "Individual student assignments on Canvas LMS",
      "Group/team student assignments on Canvas LMS",
      "Other: guided, hands-on activities with generative AI tools, completed and documented in Canvas",
    ],
    instructorResources: [
      "Hardware: webcam and microphone",
      "Software: Zoom and Canvas Studio; generative AI platforms approved or licensed by the district",
    ],
    studentResources: [
      "Hardware: webcam and microphone for presentations and team meetings",
      "Software: access to generative AI tools approved by the district (free or college-provided options)",
      "No proctoring software is required",
    ],
    accessibility: [
      "Word processing documents designed for accessibility",
      "Images: use of alternate text",
      "PowerPoint documents designed for accessibility",
      "Instructor videos: closed captioning provided",
      "External links to videos: closed-captioned and designed for accessibility",
      "External links designed for accessibility",
      "Other: AI tools are reviewed for accessibility before use, and an accessible alternative is provided for any tool that does not meet Section 508 standards",
    ],
  },

  /* Title 5 § 55001.5(b)-(c): equity, inclusion, and Universal Design for Learning */
  equity: [
    "Case studies and examples drawn from organizations of different sizes, industries, and communities, including small businesses and organizations led by people from groups underrepresented in technology leadership.",
    "Multiple means of representation: readings, captioned video, audio, and visual summaries for each module.",
    "Multiple means of action and expression: students may show learning through written analyses, recorded presentations, live presentations, or visual deliverables when the outcome allows.",
    "Multiple means of engagement: choice of organization or industry for major projects so students can connect coursework to their own workplaces and career goals.",
    "Transparent assignment design with published rubrics, examples, and staged deadlines with feedback before final submission.",
    "Low-cost and open educational resources wherever possible, with required materials available through the library.",
    "Explicit course content on how AI systems can create or reduce inequities, including bias in hiring, evaluation, and access to technology.",
    "Referrals to Disability Support Services, tutoring, basic needs, and other student support services.",
  ],

  library: {
    adequate: "Yes",
    cost: "0",
    notes: "",
  },
  multicultural: "Not applicable. This course is not proposed for the Fullerton College Multiculturalism Graduation Requirement.",
};

window.BDP_COURSES = [
  /* ------------------------------------------------------------------ */
  {
    id: "bus-371",
    prefix: "BUS",
    number: "371",
    title: "Advanced Organizational Behavior and Leadership in AI-Enabled Environments",
    units: 4,
    block: "Upper Division Breadth",
    year: "Year 4",
    status: "in-review",
    updated: "2026-10-09",
    reviewNotes:
      "First full outline, written as the model for the HAI courses. Please review the depth of content, objectives, and assignments.",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: "",
    },
    hours: { lecture: 4, lab: 0, prep: 8, total: 216, lectureTerm: 72 },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification:
        "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the upper-division organizational behavior and leadership foundation required for students who will lead AI adoption in organizations.",
    },
    description:
      "This course examines advanced concepts in organizational behavior and leadership within technology-driven and AI-enabled environments. Students analyze how artificial intelligence is transforming workplace structures, decision-making, and leadership practices. Emphasis is placed on managing organizational change, leading cross-functional teams, and designing human-AI collaboration strategies that enhance performance and innovation.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses.",
    ],
    slos: [
      {
        outcome: "Analyze the impact of artificial intelligence on organizational behavior, team dynamics, and leadership practices.",
        assessment: "Case Analysis Paper",
      },
      {
        outcome: "Evaluate leadership strategies for managing change in AI-enabled environments.",
        assessment: "Exam",
      },
      {
        outcome: "Design organizational and leadership approaches that support effective human-AI collaboration.",
        assessment: "Project",
      },
    ],
    deSamples: [
      {
        objective: "Analyze the impact of artificial intelligence on organizational behavior, team dynamics, and leadership practices.",
        assignment: "Case analysis paper on a real organization's AI adoption, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader.",
      },
      {
        objective: "Evaluate leadership strategies for managing change in AI-enabled environments.",
        assignment: "Weekly discussion comparing leadership approaches in a current AI transformation, followed by a Canvas exam with scenario-based questions.",
        evaluation: "Discussion rubric and Canvas exam.",
      },
      {
        objective: "Design organizational and leadership approaches that support effective human-AI collaboration.",
        assignment: "Team project designing a human-AI collaboration strategy, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions.",
      },
    ],
    objectives: [
      "Explain foundational organizational behavior theories at the individual, group, and organizational levels and apply them to technology-driven workplaces.",
      "Analyze how AI adoption changes job design, task allocation, and the division of work between people and AI systems.",
      "Evaluate the effects of AI-enabled work on employee motivation, job satisfaction, trust, and well-being.",
      "Assess individual and group decision-making when AI-generated recommendations are involved, including automation bias and algorithm aversion.",
      "Analyze communication, coordination, and conflict in cross-functional and hybrid human-AI teams.",
      "Compare transformational, servant, adaptive, and situational leadership theories and evaluate their effectiveness in AI-enabled organizations.",
      "Apply change management models such as Lewin, Kotter, and ADKAR to plan an AI adoption initiative.",
      "Evaluate organizational culture, structure, and learning capacity for AI readiness.",
      "Examine power, politics, and stakeholder resistance during technology-driven change.",
      "Analyze ethical, equity, and inclusion implications of AI in workforce decisions such as hiring, performance management, and employee monitoring.",
      "Design a human-AI collaboration strategy for a team, department, or organization.",
      "Communicate leadership recommendations to executive and frontline audiences in writing and in oral presentations.",
    ],
    content: [
      {
        topic: "Organizational behavior in the age of AI",
        items: [
          "Levels of analysis: individual, group, organization",
          "Historical waves of workplace technology and their effects on work",
          "Why AI differs: prediction, generation, and autonomy",
          "Evidence-based management and the role of data",
        ],
      },
      {
        topic: "Work design and human-AI task allocation",
        items: [
          "Job characteristics model revisited",
          "Automation versus augmentation",
          "Task decomposition and human-in-the-loop design",
          "Emerging roles: AI champions, prompt specialists, AI operations",
        ],
      },
      {
        topic: "Perception, judgment, and decision-making with AI",
        items: [
          "Bounded rationality and heuristics",
          "Automation bias, algorithm aversion, and appropriate reliance",
          "Explainability and its effect on trust",
          "Group decision processes with AI input",
        ],
      },
      {
        topic: "Motivation, engagement, and well-being",
        items: [
          "Content and process theories of motivation",
          "Self-determination theory and autonomy in AI-assisted work",
          "Technostress, deskilling, and job insecurity",
          "Designing for meaningful work",
        ],
      },
      {
        topic: "Attitudes, trust, and psychological safety",
        items: [
          "Job satisfaction and organizational commitment",
          "Trust in technology and trust in leaders",
          "Psychological safety and experimentation with AI tools",
          "Measuring employee sentiment",
        ],
      },
      {
        topic: "Teams and cross-functional collaboration",
        items: [
          "Team composition, roles, and development stages",
          "Bridging technical and business teams",
          "Virtual and hybrid team practices",
          "AI agents and assistants as team members",
        ],
      },
      {
        topic: "Communication in AI-enabled organizations",
        items: [
          "Communication channels and information richness",
          "Translating technical concepts for non-technical stakeholders",
          "AI-generated communication: benefits, risks, and authenticity",
          "Crisis and change communication",
        ],
      },
      {
        topic: "Conflict, negotiation, and power",
        items: [
          "Sources of conflict in technology change",
          "Negotiation strategies across functions",
          "Bases of power and influence tactics",
          "Organizational politics during AI adoption",
        ],
      },
      {
        topic: "Leadership theories and their application",
        items: [
          "Trait, behavioral, and contingency approaches",
          "Transformational, servant, and authentic leadership",
          "Adaptive leadership for complex problems",
          "Leading with and through AI tools",
        ],
      },
      {
        topic: "Leading digital transformation",
        items: [
          "Strategic vision and sense-making",
          "Leader roles across the AI adoption lifecycle",
          "Balancing efficiency gains with workforce impact",
          "Executive, middle-manager, and frontline leadership",
        ],
      },
      {
        topic: "Organizational change management",
        items: [
          "Lewin, Kotter, and ADKAR models",
          "Readiness for change and resistance",
          "Pilots, scaling, and sustaining change",
          "Measuring change outcomes",
        ],
      },
      {
        topic: "Organizational culture and learning",
        items: [
          "Elements and levels of culture",
          "Innovation and learning cultures",
          "Upskilling and reskilling strategies",
          "Knowledge management with AI",
        ],
      },
      {
        topic: "Organizational structure and design",
        items: [
          "Centralized versus federated AI functions",
          "Centers of excellence and governance bodies",
          "Flattening, span of control, and role redesign",
          "Agile and networked organizational forms",
        ],
      },
      {
        topic: "Ethics, equity, and inclusion in AI-enabled workplaces",
        items: [
          "AI in hiring, evaluation, and promotion",
          "Employee monitoring and privacy",
          "Bias, fairness, and accessibility",
          "Ethical leadership and accountability",
        ],
      },
      {
        topic: "Performance management and human resources",
        items: [
          "Goal setting and feedback with AI analytics",
          "Redefining productivity metrics",
          "Workforce planning and talent strategy",
          "Labor relations and employee voice",
        ],
      },
      {
        topic: "Designing human-AI collaboration strategies",
        items: [
          "Integrating individual, team, and organizational factors",
          "Building a collaboration and adoption roadmap",
          "Presenting recommendations to stakeholders",
          "Reflection on leadership development",
        ],
      },
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos",
    ],
    evaluation: [
      "Class Participation",
      "Class Work",
      "Exams/Tests",
      "Group Projects",
      "Homework",
      "Oral Presentation",
      "Papers",
      "Projects",
      "Quizzes",
      "Research Projects",
    ],
    textbooks: {
      recommended: [
        "Robbins, Stephen P., and Timothy A. Judge. Organizational Behavior, 19th ed. Pearson, 2022. Recommended",
        "Daugherty, Paul R., and H. James Wilson. Human + Machine: Reimagining Work in the Age of AI, Updated and Expanded ed. Harvard Business Review Press, 2024. Recommended",
        "Mollick, Ethan. Co-Intelligence: Living and Working with AI. Portfolio, 2024. Recommended",
      ],
      supplemental: [
        "Black, J. Stewart, David S. Bright, et al. Organizational Behavior. OpenStax, 2019. Open educational resource (free).",
        "Northouse, Peter G. Leadership: Theory and Practice, 9th ed. SAGE, 2021.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI and the workforce.",
      ],
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on organizational behavior in AI-enabled workplaces.",
        "Write a case analysis paper that examines how a real organization's AI adoption affected job design, employee attitudes, and team dynamics.",
        "Complete a leadership self-assessment and write a reflective paper on personal leadership strengths for leading technology change.",
        "Prepare a stakeholder communication plan that explains an AI initiative to executive, management, and frontline audiences.",
      ],
      critical: [
        "Evaluate two leadership approaches used during an AI transformation and justify which was more effective, using course theories as evidence.",
        "Analyze a workplace decision in which people relied on AI recommendations and assess the risks of automation bias and the safeguards that were or should have been in place.",
        "Design a change management plan for an AI adoption initiative, including readiness assessment, resistance strategies, and success measures.",
        "Working in a cross-functional team, design a human-AI collaboration strategy for an organization and defend it in a presentation to a panel.",
      ],
    },
    rigor: {
      buildsOn: [
        "BUS 271 F Leadership and Business Ethics",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 108 F Living in an Online World",
      ],
      distinction:
        "BUS 271 F introduces leadership theory and business ethics at the lower-division level. BUS 371 requires students to apply and evaluate organizational behavior and leadership theory in AI-driven organizational change, use research evidence to analyze real organizations, and design organization-level strategies for human-AI collaboration.",
      criticalThinking:
        "Demonstrated through writing (case analysis paper and change management plan) and oral communication (team strategy presentation defended before a panel).",
      research:
        "Students locate and evaluate peer-reviewed research and industry reports through library databases for the case analysis paper and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 2 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)",
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications:
        "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410).",
    },
    geTransfer: ["CSU Transfer Course: Yes"],
    comparable: [
      "California State University, Fullerton: MGMT 340 Organizational Behavior [CONFIRM]",
    ],
    masterDb: {
      top: "0506.00 - Business Management",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management",
    },
  },

  /* ------------------------------------------------------------------ */
  /* Courses below are seeded from the Cycle 9 application (title, units,
     description, and learning outcomes). Full outlines to be written.  */
  {
    id: "hai-300",
    prefix: "HAI",
    number: "300",
    title: "Foundations of Human-AI Collaboration",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course introduces advanced concepts in human-AI collaboration, focusing on how artificial intelligence systems augment human capabilities in organizational settings. Students examine AI capabilities, limitations, and the design of effective human-AI workflows across industries.",
    slos: [
      { outcome: "Analyze the roles of humans and AI systems in collaborative workflows." },
      { outcome: "Evaluate the capabilities and limitations of AI technologies in organizational contexts." },
      { outcome: "Design human-AI collaboration models to improve efficiency and outcomes." },
    ],
  },
  {
    id: "hai-310",
    prefix: "HAI",
    number: "310",
    title: "Applied AI for Organizational Decision-Making",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course explores the application of AI tools and technologies to support organizational decision-making. Students learn to interpret AI-generated insights and integrate them into structured decision frameworks.",
    slos: [
      { outcome: "Analyze AI-generated outputs to support business decision-making." },
      { outcome: "Evaluate AI tools for effectiveness in solving organizational problems." },
      { outcome: "Apply decision-making frameworks using AI-driven insights." },
    ],
  },
  {
    id: "hai-320",
    prefix: "HAI",
    number: "320",
    title: "Data Analytics and Visualization for Leaders",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course develops advanced data literacy skills for leaders working with AI systems. Students learn to interpret complex datasets, create visualizations, and communicate insights to stakeholders.",
    slos: [
      { outcome: "Interpret complex data outputs and visualizations for decision-making." },
      { outcome: "Develop data visualizations to communicate insights effectively." },
      { outcome: "Evaluate data quality and limitations in AI-driven environments." },
    ],
  },
  {
    id: "hai-340",
    prefix: "HAI",
    number: "340",
    title: "Organizational Leadership in AI-Enabled Environments",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course examines leadership strategies for managing organizations undergoing AI-driven transformation. Topics include workforce adaptation, human-AI role design, and leading change in technology-enabled environments.",
    slos: [
      { outcome: "Evaluate leadership strategies for AI-enabled organizations." },
      { outcome: "Design workforce adaptation strategies for AI integration." },
      { outcome: "Apply change management principles to support AI adoption." },
    ],
  },
  {
    id: "hai-350",
    prefix: "HAI",
    number: "350",
    title: "AI Strategy and Implementation",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course focuses on the development and execution of AI strategies within organizations. Students assess readiness, identify use cases, and design implementation plans aligned with organizational goals.",
    slos: [
      { outcome: "Develop AI implementation strategies aligned with organizational objectives." },
      { outcome: "Assess organizational readiness for AI adoption." },
      { outcome: "Evaluate the impact and value of AI initiatives." },
    ],
  },
  {
    id: "hai-360",
    prefix: "HAI",
    number: "360",
    title: "Ethics, Governance, and Responsible AI",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course explores ethical, legal, and governance issues associated with artificial intelligence. Students examine bias, fairness, accountability, and regulatory considerations in AI systems.",
    slos: [
      { outcome: "Evaluate ethical risks associated with AI systems." },
      { outcome: "Apply governance frameworks for responsible AI implementation." },
      { outcome: "Analyze legal and regulatory considerations related to AI technologies." },
    ],
  },
  {
    id: "hai-370",
    prefix: "HAI",
    number: "370",
    title: "Managing AI Projects and Cross-Functional Teams",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course prepares students to manage AI-related projects and collaborate across technical and non-technical teams. Emphasis is placed on project management methodologies, communication, and stakeholder alignment.",
    slos: [
      { outcome: "Apply project management methodologies to AI initiatives." },
      { outcome: "Coordinate communication across cross-functional teams." },
      { outcome: "Evaluate project performance and outcomes." },
    ],
  },
  {
    id: "hai-380",
    prefix: "HAI",
    number: "380",
    title: "Human-AI Interaction and Experience Design",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "not-started",
    description:
      "This course examines the design of effective human-AI interactions, focusing on usability, trust, and user experience. Students explore how design influences adoption and system performance.",
    slos: [
      { outcome: "Analyze factors influencing user trust and adoption of AI systems." },
      { outcome: "Design human-centered AI interaction frameworks." },
      { outcome: "Evaluate usability and user experience in AI-enabled systems." },
    ],
  },
  {
    id: "hai-495a",
    prefix: "HAI",
    number: "495A",
    title: "AI Implementation Capstone I",
    units: 3,
    block: "Capstone",
    year: "Year 4",
    status: "not-started",
    description:
      "In this capstone course, students identify a real-world organizational problem and develop a proposal for an AI-enabled solution. Emphasis is placed on research, feasibility, and project planning.",
    slos: [
      { outcome: "Define a real-world problem appropriate for AI-enabled solutions." },
      { outcome: "Develop a structured project proposal including scope and methodology." },
      { outcome: "Conduct feasibility and stakeholder analysis." },
    ],
  },
  {
    id: "hai-495b",
    prefix: "HAI",
    number: "495B",
    title: "AI Implementation Capstone II",
    units: 3,
    block: "Capstone",
    year: "Year 4",
    status: "not-started",
    description:
      "This culminating course requires students to design, implement, and present an AI-enabled solution to an organizational challenge. Students integrate technical, leadership, and ethical considerations.",
    slos: [
      { outcome: "Design and implement an AI-enabled solution addressing an organizational need." },
      { outcome: "Evaluate the effectiveness and impact of the implemented solution." },
      { outcome: "Present findings and recommendations to professional audiences." },
    ],
  },
];

/* Existing, already-approved courses used in the program (no new outline needed). */
window.BDP_EXISTING = [
  { block: "Lower Division Required", code: "BUS 108 F", title: "Living in an Online World", units: 3 },
  { block: "Lower Division Required", code: "BUS 256 F", title: "Artificial Intelligence and Prompt Engineering for Business", units: 3 },
  { block: "Lower Division Required", code: "BUS 257 F", title: "AI Applications for Business", units: 3 },
  { block: "Lower Division Required", code: "CIS 201 F", title: "Introduction to Python Programming", units: 3 },
  { block: "Lower Division Required", code: "CIS 258 F", title: "Applied AI: Machine Learning, Deep Learning and NLP", units: 3 },
  { block: "Restricted Lower Division Electives", code: "BUS 255 F", title: "Introduction to Business and Data Analytics", units: 3 },
  { block: "Restricted Lower Division Electives", code: "BUS 271 F", title: "Leadership and Business Ethics", units: 3 },
  { block: "Restricted Lower Division Electives", code: "CIS 142 F", title: "Database I", units: 3 },
  {
    block: "Restricted Lower Division Electives",
    code: "STAT C1000",
    title: "Introduction to Statistics",
    units: 4,
    alts: [
      { code: "STAT C1000E", title: "Introduction to Statistics", units: 5 },
      { code: "STAT C1000H", title: "Introduction to Statistics - Honors", units: 4 },
      { code: "PSY 161 F", title: "Elementary Statistics for Behavioral Science", units: 4 },
      { code: "PSY 161HF", title: "Honors Elementary Statistics for Behavioral Science", units: 4 },
      { code: "SOSC 120 F", title: "Introduction to Probability and Statistics", units: 4 },
    ],
  },
  { block: "Upper Division Breadth", code: "ENGL 301 F", title: "Technical Writing", units: 3, note: "Approved with the Drone and Autonomous Systems BS" },
  { block: "Upper Division Breadth", code: "PHIL 361 F", title: "Technology and Ethics", units: 3, note: "Approved with the Drone and Autonomous Systems BS" },
  { block: "Restricted Electives", code: "MKT 256 F", title: "Artificial Intelligence in Marketing", units: 3 },
  { block: "Restricted Electives", code: "CIS 210 F", title: "Advanced Python Programming", units: 3 },
  { block: "Restricted Electives", code: "CIS 235 F", title: "Introduction to Cloud Computing", units: 3 },
  { block: "Restricted Electives", code: "CYBR 256 F", title: "Artificial Intelligence in Cybersecurity", units: 3 },
  { block: "Restricted Electives", code: "BUS 180 F", title: "Small Business Management", units: 3 },
  { block: "Restricted Electives", code: "CISG 105 F", title: "Introduction to Augmented and Virtual Reality", units: 3 },
];
