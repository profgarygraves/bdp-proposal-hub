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
  top: "0501.00 - Business and Commerce, General",
  soc: "11-1021 General and Operations Managers; 13-1082 Project Management Specialists; 13-1111 Management Analysts",
  fsa: "A35 - Business, B90 - Management",
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

  /* ------------------------------------------------------------------ */
    {
    id: "hai-300",
    prefix: "HAI",
    number: "300",
    title: "Foundations of Human-AI Collaboration",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division core course in the Applied Human-AI Collaboration and Leadership baccalaureate program and the gateway course taken first in Year 3. It establishes the shared upper-division vocabulary, analytical methods, and workflow design skills that later HAI courses in decision-making, analytics, leadership, strategy, governance, project management, and interaction design build upon."
    },
    description: "This course introduces advanced concepts in human-AI collaboration, focusing on how artificial intelligence systems augment human capabilities in organizational settings. Students examine AI capabilities, limitations, and the design of effective human-AI workflows across industries.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Analyze the roles of humans and AI systems in collaborative workflows.",
        assessment: "Workflow Analysis Paper"
      },
      {
        outcome: "Evaluate the capabilities and limitations of AI technologies in organizational contexts.",
        assessment: "Exam"
      },
      {
        outcome: "Design human-AI collaboration models to improve efficiency and outcomes.",
        assessment: "Project"
      }
    ],
    deSamples: [
      {
        objective: "Analyze the roles of humans and AI systems in collaborative workflows.",
        assignment: "Workflow analysis paper that maps the human and AI tasks in a real business process, submitted in Canvas, with a process map draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Evaluate the capabilities and limitations of AI technologies in organizational contexts.",
        assignment: "Structured AI tool test logs posted to a weekly Canvas discussion, followed by a Canvas exam with scenario-based questions on AI capabilities, failure modes, and fit for organizational tasks.",
        evaluation: "Discussion rubric and Canvas exam."
      },
      {
        objective: "Design human-AI collaboration models to improve efficiency and outcomes.",
        assignment: "Team project redesigning an organizational workflow as a human-AI collaboration model, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      }
    ],
    objectives: [
      "Explain the major categories of AI systems, including predictive, generative, and agentic systems, and describe how each produces its outputs.",
      "Compare automation, augmentation, and collaboration as models for dividing work between people and AI systems.",
      "Analyze the roles that humans and AI systems play in collaborative workflows across business functions and industries.",
      "Break down a business process into tasks and classify each task by its suitability for AI support, human judgment, or shared work.",
      "Evaluate the capabilities and limitations of current AI technologies, including accuracy, reliability, hallucination, bias, and data dependence.",
      "Assess claims made by AI vendors and media against available evidence of performance in organizational settings.",
      "Apply structured testing methods to measure the quality, consistency, and error rates of AI tool outputs for a defined task.",
      "Differentiate human-in-the-loop, human-on-the-loop, and fully automated designs and justify when each is appropriate.",
      "Examine how trust, over-reliance, and skill change affect the people who work alongside AI systems.",
      "Design a human-AI collaboration model that specifies task allocation, handoffs, review checkpoints, and escalation paths.",
      "Estimate the efficiency and quality outcomes of a redesigned workflow using baseline and pilot measures.",
      "Communicate a workflow redesign proposal to organizational stakeholders in writing and in an oral presentation."
    ],
    content: [
      {
        topic: "Human-AI collaboration as a field of practice",
        items: [
          "Defining human-AI collaboration in organizations",
          "From lower-division AI tool use to upper-division workflow analysis",
          "Industry adoption patterns and current evidence",
          "Course roadmap and the HAI program learning outcomes"
        ]
      },
      {
        topic: "How AI systems work: a manager's view",
        items: [
          "Rule-based systems, machine learning, and deep learning",
          "Predictive, generative, and agentic AI",
          "Training data, models, and outputs",
          "Large language models, context, and retrieval"
        ]
      },
      {
        topic: "Models of human-AI work",
        items: [
          "Automation, augmentation, and collaboration",
          "Centaur and cyborg patterns of working with AI",
          "Complementarity of human and machine strengths",
          "The jagged frontier of AI capability"
        ]
      },
      {
        topic: "Task analysis and process mapping",
        items: [
          "Process mapping and swim-lane diagrams",
          "Task decomposition and task inventories",
          "Classifying tasks by routine, judgment, and creativity",
          "Identifying candidate tasks for AI support"
        ]
      },
      {
        topic: "AI capabilities in organizational contexts",
        items: [
          "Language, analysis, and content generation",
          "Prediction, classification, and recommendation",
          "Perception: vision, speech, and document processing",
          "Agents and multi-step task execution"
        ]
      },
      {
        topic: "AI limitations and failure modes",
        items: [
          "Hallucination, inconsistency, and brittleness",
          "Bias and data quality problems",
          "Distribution shift and changing conditions",
          "Separating evidence from hype in AI claims"
        ]
      },
      {
        topic: "Testing and evaluating AI tools for a task",
        items: [
          "Defining task requirements and quality criteria",
          "Building test sets and structured test logs",
          "Measuring accuracy, consistency, and error rates",
          "Documenting results for stakeholders"
        ]
      },
      {
        topic: "Roles of humans in AI-supported workflows",
        items: [
          "Human-in-the-loop and human-on-the-loop designs",
          "Reviewer, editor, supervisor, and exception handler roles",
          "Expertise and judgment that AI does not replace",
          "Accountability for AI-assisted work"
        ]
      },
      {
        topic: "Trust, reliance, and human factors",
        items: [
          "Calibrated trust in AI outputs",
          "Over-reliance, under-reliance, and complacency",
          "Cognitive load and attention in review tasks",
          "Skill retention and deskilling risks"
        ]
      },
      {
        topic: "Designing human-AI workflows",
        items: [
          "Task allocation and handoff design",
          "Review checkpoints and quality controls",
          "Escalation paths and exception handling",
          "Documenting a workflow design"
        ]
      },
      {
        topic: "Knowledge work and content workflows",
        items: [
          "Research, writing, and summarization workflows",
          "Customer communication and service workflows",
          "Prompt libraries and reusable instructions",
          "Quality standards for AI-assisted content"
        ]
      },
      {
        topic: "Operational and data workflows",
        items: [
          "Document processing and data entry",
          "Scheduling, routing, and back-office operations",
          "Integrating AI tools with existing business systems",
          "Data privacy and security considerations in workflow design"
        ]
      },
      {
        topic: "Industry applications",
        items: [
          "Healthcare and education",
          "Finance, insurance, and professional services",
          "Retail, marketing, and small business",
          "Public sector and nonprofit organizations"
        ]
      },
      {
        topic: "Measuring efficiency and outcomes",
        items: [
          "Establishing a process baseline",
          "Time, cost, quality, and error measures",
          "Designing a small pilot",
          "Interpreting results and unintended effects"
        ]
      },
      {
        topic: "Responsible collaboration practices",
        items: [
          "Transparency and disclosure of AI use",
          "Organizational AI use policies",
          "Accessibility and inclusion in workflow design",
          "Overview of governance topics developed in later HAI courses"
        ]
      },
      {
        topic: "Presenting a human-AI collaboration model",
        items: [
          "Structuring a workflow redesign proposal",
          "Communicating capabilities and limits to stakeholders",
          "Team presentations and peer review",
          "Reflection on personal human-AI collaboration practice"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Davenport, Thomas H., and Steven M. Miller. Working with AI: Real Stories of Human-Machine Collaboration, 1st ed. Cambridge, MA: MIT Press, 2022. Recommended",
        "Narayanan, Arvind, and Sayash Kapoor. AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference, 1st ed. Princeton, NJ: Princeton University Press, 2024. Recommended",
        "Leonardi, Paul, and Tsedal Neeley. The Digital Mindset: What It Really Takes to Thrive in the Age of Data, Algorithms, and AI, 1st ed. Boston: Harvard Business Review Press, 2022. Recommended"
      ],
      supplemental: [
        "Ault, Shaun V., Soohyun Nam Liao, and Larry Musolino. Principles of Data Science, 1st ed. Houston, TX: OpenStax, 2025. Open educational resource (free).",
        "Shneiderman, Ben. Human-Centered AI, 1st ed. New York: Oxford University Press, 2022.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry research on AI adoption and workflow redesign."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on how organizations divide work between people and AI systems.",
        "Write a workflow analysis paper that maps a real business process, identifies the current and potential roles of people and AI systems, and supports the analysis with course readings.",
        "Test an AI tool on a defined business task outside of class, keep a structured test log of outputs and errors, and write a summary of its capabilities and limitations for that task.",
        "Write a reflective paper on personal practices for working with AI tools, including how trust, verification, and skill development changed during the course."
      ],
      critical: [
        "Analyze a business process in a chosen industry and classify each task as suited to AI support, human judgment, or shared work, with justification for each classification.",
        "Evaluate an AI vendor's or media report's claims about a tool's performance against independent evidence and results from the student's own testing.",
        "Compare human-in-the-loop and fully automated designs for the same task and justify which design better balances efficiency, quality, and risk.",
        "Working in a team, design a human-AI collaboration model for an organizational workflow, including task allocation, review checkpoints, and outcome measures, and defend it in a presentation."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 108 F Living in an Online World",
        "BUS 255 F Introduction to Business and Data Analytics"
      ],
      distinction: "BUS 256 F and BUS 257 F teach students to write prompts and use AI tools for individual business tasks at the lower-division level. HAI 300 moves from individual tool use to the analysis and redesign of organizational workflows: students decompose business processes, test AI tools against defined quality criteria, evaluate capability and limitation claims against evidence, and design collaboration models with task allocation, review checkpoints, and measured outcomes.",
      criticalThinking: "Demonstrated through writing (workflow analysis paper and AI tool evaluation summary), computation (baseline and pilot measures of time, cost, and error rates), and oral communication (team workflow redesign presentation).",
      research: "Students locate and evaluate peer-reviewed research, industry reports, and vendor documentation through library databases and conduct structured testing of AI tools for the workflow analysis paper and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 1 (Implement AI-enabled solutions)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions) and PLO 3 (Govern responsible AI)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "A regional bank plans to let a generative AI assistant draft responses to customer loan inquiries, with staff reviewing each draft before it is sent. Analyze which parts of this workflow should remain human, which can be automated, and which should be shared. Justify your design using course frameworks on task allocation, AI limitations, and appropriate reliance, and explain how you would test whether the design works."
  },
  {
    id: "hai-310",
    prefix: "HAI",
    number: "310",
    title: "Applied AI for Organizational Decision-Making",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division core course in the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the upper-division decision-making foundation students need to interpret AI-generated insights, select appropriate AI tools for organizational problems, and integrate AI outputs into structured, accountable decisions."
    },
    description: "This course explores the application of AI tools and technologies to support organizational decision-making. Students learn to interpret AI-generated insights and integrate them into structured decision frameworks.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Analyze AI-generated outputs to support business decision-making.",
        assessment: "Decision Analysis Paper"
      },
      {
        outcome: "Evaluate AI tools for effectiveness in solving organizational problems.",
        assessment: "Exam"
      },
      {
        outcome: "Apply decision-making frameworks using AI-driven insights.",
        assessment: "Project"
      }
    ],
    deSamples: [
      {
        objective: "Analyze AI-generated outputs to support business decision-making.",
        assignment: "Decision analysis paper that interprets the predictions, probabilities, and explanations produced by an AI tool for a business case, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Evaluate AI tools for effectiveness in solving organizational problems.",
        assignment: "Weekly discussion comparing AI tools against a shared set of evaluation criteria, followed by a Canvas exam with scenario-based and computational questions.",
        evaluation: "Discussion rubric and Canvas exam."
      },
      {
        objective: "Apply decision-making frameworks using AI-driven insights.",
        assignment: "Team project applying a structured decision framework to an organizational problem using AI-generated insights, built in Canvas Groups and presented as a decision brief live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      }
    ],
    objectives: [
      "Describe the stages of organizational decision-making and identify where AI tools can contribute to each stage.",
      "Distinguish between prediction and judgment and explain how AI changes the cost and role of each in a decision.",
      "Interpret AI-generated outputs, including predictions, probability scores, confidence measures, rankings, and generated recommendations.",
      "Analyze the quality of AI-generated insights by examining data sources, assumptions, uncertainty, and explanations.",
      "Calculate expected value, decision thresholds, and the costs of false positives and false negatives for an AI-supported decision.",
      "Evaluate AI tools for effectiveness in solving organizational problems using defined criteria such as accuracy, cost, usability, and fit.",
      "Apply structured decision frameworks, including decision trees, multi-criteria decision analysis, and scenario planning, using AI-driven insights.",
      "Assess how cognitive biases, noise, and automation bias affect decisions made with AI support.",
      "Compare individual, group, and algorithmic decision processes and recommend safeguards for each.",
      "Formulate decision rights and escalation rules that specify when AI outputs may be acted on and when human review is required.",
      "Construct a decision brief that documents the problem, alternatives, AI inputs, analysis, and recommendation.",
      "Justify an AI-supported recommendation to organizational stakeholders in writing and in an oral presentation."
    ],
    content: [
      {
        topic: "Decision-making in organizations",
        items: [
          "Types of decisions: strategic, tactical, and operational",
          "Rational and bounded rationality models",
          "Stages of the decision process",
          "Where AI contributes to each stage"
        ]
      },
      {
        topic: "The economics of prediction and judgment",
        items: [
          "Prediction as an input to decisions",
          "Judgment, action, and outcomes",
          "How cheaper prediction changes decision design",
          "Point solutions, application solutions, and system solutions"
        ]
      },
      {
        topic: "Interpreting predictive AI outputs",
        items: [
          "Classifications, scores, and probabilities",
          "Confidence, uncertainty, and calibration",
          "Confusion matrices and error types",
          "Reading model performance reports"
        ]
      },
      {
        topic: "Interpreting generative AI outputs",
        items: [
          "Summaries, analyses, and recommendations from language models",
          "Verifying sources and checking factual claims",
          "Consistency testing across prompts and runs",
          "Using AI to generate and challenge alternatives"
        ]
      },
      {
        topic: "Explainability and transparency in decisions",
        items: [
          "Global and local explanations",
          "Feature importance and reason codes",
          "Limits of explanations for complex models",
          "Explaining AI-supported decisions to affected parties"
        ]
      },
      {
        topic: "Quantifying decisions under uncertainty",
        items: [
          "Expected value and decision trees",
          "Cost of false positives and false negatives",
          "Setting decision thresholds",
          "Sensitivity analysis"
        ]
      },
      {
        topic: "Structured decision frameworks",
        items: [
          "Problem framing and objectives hierarchies",
          "Multi-criteria decision analysis and weighted scoring",
          "Pros-cons, SWOT, and cost-benefit analysis",
          "Integrating AI inputs into a chosen framework"
        ]
      },
      {
        topic: "Forecasting and scenario planning with AI",
        items: [
          "AI-assisted forecasting in operations and finance",
          "Scenario planning and what-if analysis",
          "Simulation as a decision aid",
          "Communicating forecast uncertainty"
        ]
      },
      {
        topic: "Judgment, bias, and noise",
        items: [
          "Heuristics and cognitive biases in managerial decisions",
          "Noise and inconsistency in human judgment",
          "Automation bias and algorithm aversion",
          "Debiasing techniques and decision hygiene"
        ]
      },
      {
        topic: "Group and organizational decision processes",
        items: [
          "Group decision methods and their pitfalls",
          "Using AI to support deliberation and dissent",
          "Decision rights and escalation rules",
          "Documenting decisions for accountability"
        ]
      },
      {
        topic: "Evaluating AI tools for organizational problems",
        items: [
          "Matching problem types to AI tool categories",
          "Evaluation criteria: accuracy, cost, usability, integration, and risk",
          "Vendor claims, benchmarks, and independent testing",
          "Build, buy, or configure decisions"
        ]
      },
      {
        topic: "Piloting and measuring AI decision support",
        items: [
          "Designing a pilot with a comparison baseline",
          "Measuring decision quality versus decision outcomes",
          "Return on investment and total cost of ownership",
          "Deciding to scale, revise, or stop"
        ]
      },
      {
        topic: "Functional applications of AI decision support",
        items: [
          "Marketing and customer decisions",
          "Operations and supply chain decisions",
          "Finance, risk, and credit decisions",
          "Human resources decisions and their special risks"
        ]
      },
      {
        topic: "Risk, fairness, and accountability in AI-supported decisions",
        items: [
          "High-stakes and consequential decisions",
          "Disparate impact in automated decisions",
          "Legal and regulatory considerations in decision use",
          "Human oversight and appeal processes"
        ]
      },
      {
        topic: "Decision briefs and stakeholder communication",
        items: [
          "Structure of a decision brief",
          "Presenting AI evidence and its limits",
          "Tailoring recommendations to executive audiences",
          "Responding to challenges and objections"
        ]
      },
      {
        topic: "Integrated decision project",
        items: [
          "Selecting an organizational problem and framework",
          "Generating and analyzing AI-driven insights",
          "Presenting and defending the recommendation",
          "Reflection on decision quality and lessons learned"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Agrawal, Ajay, Joshua Gans, and Avi Goldfarb. Prediction Machines: The Simple Economics of Artificial Intelligence, Updated and Expanded ed. Boston: Harvard Business Review Press, 2022. Recommended",
        "Agrawal, Ajay, Joshua Gans, and Avi Goldfarb. Power and Prediction: The Disruptive Economics of Artificial Intelligence, 1st ed. Boston: Harvard Business Review Press, 2022. Recommended",
        "Ault, Shaun V., Soohyun Nam Liao, and Larry Musolino. Principles of Data Science, 1st ed. Houston, TX: OpenStax, 2025. Open educational resource (free). Recommended"
      ],
      supplemental: [
        "Kahneman, Daniel, Olivier Sibony, and Cass R. Sunstein. Noise: A Flaw in Human Judgment, 1st ed. New York: Little, Brown Spark, 2021.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry research on AI-supported decision-making."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on how AI changes organizational decisions.",
        "Write a decision analysis paper that interprets the outputs of an AI tool for a business case, explains their uncertainty and limitations, and recommends how they should inform the decision.",
        "Use an AI tool outside of class to generate alternatives and analysis for a business problem, then write a critique of the quality, accuracy, and usefulness of its output.",
        "Prepare a decision brief that documents an organizational problem, alternatives, AI-generated insights, analysis, and a final recommendation for an executive audience."
      ],
      critical: [
        "Analyze the predictions and probability scores from an AI model in a business scenario and calculate the expected costs of different decision thresholds.",
        "Evaluate two or more AI tools against a weighted set of criteria for a specific organizational problem and recommend one, with justification.",
        "Assess a real organizational decision in which AI was used and identify the cognitive biases, noise, or automation bias that affected the outcome.",
        "Working in a team, formulate a recommendation by applying a structured decision framework to an organizational problem using AI-driven insights, and defend it in a presentation to a panel."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 255 F Introduction to Business and Data Analytics",
        "STAT C1000 Introduction to Statistics",
        "BUS 257 F AI Applications for Business",
        "CIS 258 F Applied AI: Machine Learning, Deep Learning and NLP"
      ],
      distinction: "BUS 255 F introduces descriptive analytics and STAT C1000 introduces probability and statistical inference, while CIS 258 F introduces how machine learning models are built. HAI 310 requires students to use that knowledge to interpret AI model outputs as decision inputs, quantify the costs of errors and decision thresholds, evaluate competing AI tools against organizational criteria, and integrate AI-driven insights into structured decision frameworks that they must document and defend.",
      criticalThinking: "Demonstrated through writing (decision analysis paper and decision brief), computation (expected value, decision thresholds, error costs, and weighted scoring), and oral communication (team decision presentation defended before a panel).",
      research: "Students locate and evaluate peer-reviewed research, industry reports, and AI tool documentation through library databases for the decision analysis paper and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 1 (Implement AI-enabled solutions)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "13-1111 Management Analysts; 11-1021 General and Operations Managers",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "An AI model predicts which customers are likely to cancel their subscriptions, and leadership wants to offer discounts to everyone above a 60 percent risk score. Evaluate this decision rule using expected-value reasoning and the costs of false positives and false negatives. Recommend a decision threshold and process, and explain the human judgment that should remain in the decision."
  },
  {
    id: "hai-320",
    prefix: "HAI",
    number: "320",
    title: "Data Analytics and Visualization for Leaders",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division core course in the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the advanced data literacy, analysis, and visualization skills that leaders need to interpret AI system outputs, judge data quality, and communicate evidence to decision-makers."
    },
    description: "This course develops advanced data literacy skills for leaders working with AI systems. Students learn to interpret complex datasets, create visualizations, and communicate insights to stakeholders.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Interpret complex data outputs and visualizations for decision-making.",
        assessment: "Exam"
      },
      {
        outcome: "Develop data visualizations to communicate insights effectively.",
        assessment: "Project"
      },
      {
        outcome: "Evaluate data quality and limitations in AI-driven environments.",
        assessment: "Data Quality Audit Paper"
      }
    ],
    deSamples: [
      {
        objective: "Interpret complex data outputs and visualizations for decision-making.",
        assignment: "Weekly Canvas discussion interpreting a published dashboard or AI model output, followed by a Canvas exam with scenario-based questions that require reading charts, statistical summaries, and model performance metrics.",
        evaluation: "Discussion rubric and Canvas exam."
      },
      {
        objective: "Develop data visualizations to communicate insights effectively.",
        assignment: "Individual dashboard project built in Tableau, Power BI, or Python from an organizational dataset, submitted in Canvas with a recorded Canvas Studio walkthrough for an executive audience.",
        evaluation: "Project and oral presentation rubrics with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Evaluate data quality and limitations in AI-driven environments.",
        assignment: "Data quality audit paper on a dataset used to train or feed an AI system, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader."
      }
    ],
    objectives: [
      "Explain the role of data, analytics, and AI outputs in organizational decision-making at the strategic, tactical, and operational levels.",
      "Apply data preparation techniques, including cleaning, joining, filtering, and reshaping, to organizational datasets using spreadsheet, SQL, or Python tools.",
      "Calculate and interpret descriptive statistics, distributions, correlations, and trends to answer business questions.",
      "Interpret predictive and AI model outputs, including confidence levels, error rates, classification metrics, and forecast ranges.",
      "Distinguish correlation from causation and identify confounding, sampling bias, and Simpson's paradox in business data.",
      "Select chart types and visual encodings that match the analytical task and the audience.",
      "Construct interactive dashboards with appropriate key performance indicators using a business intelligence tool such as Tableau or Power BI.",
      "Evaluate data quality using the dimensions of accuracy, completeness, consistency, timeliness, and representativeness.",
      "Assess the limitations of AI-generated analyses, including hallucinated figures, training data gaps, and data drift.",
      "Critique visualizations for misleading scales, omitted context, accessibility barriers, and ethical concerns.",
      "Demonstrate the use of generative AI tools for data exploration and chart creation and verify the accuracy of their outputs.",
      "Communicate data-driven recommendations to executive and non-technical audiences in written reports and oral presentations."
    ],
    content: [
      {
        topic: "Data-driven leadership in AI-enabled organizations",
        items: [
          "The analytics continuum: descriptive, diagnostic, predictive, prescriptive",
          "The leader's role as a consumer and sponsor of analytics",
          "Framing business questions that data can answer",
          "Data literacy as a leadership competency"
        ]
      },
      {
        topic: "Data sources, structures, and pipelines",
        items: [
          "Structured, semi-structured, and unstructured data",
          "Relational databases and SQL queries for analysis",
          "Data warehouses, data lakes, and cloud data platforms",
          "How data flows into and out of AI systems"
        ]
      },
      {
        topic: "Data preparation and wrangling",
        items: [
          "Cleaning missing, duplicate, and inconsistent values",
          "Joining, aggregating, and reshaping datasets",
          "Data preparation in spreadsheets, Power Query, and Python (pandas)",
          "Documenting data preparation steps for reproducibility"
        ]
      },
      {
        topic: "Descriptive statistics for decision-makers",
        items: [
          "Measures of center, spread, and shape",
          "Distributions, outliers, and percentiles",
          "Correlation and its limits",
          "Time series trends and seasonality"
        ]
      },
      {
        topic: "Statistical reasoning and inference",
        items: [
          "Sampling, margin of error, and confidence intervals",
          "Hypothesis tests and A/B testing in business",
          "Correlation versus causation and confounding variables",
          "Simpson's paradox and other common reasoning errors"
        ]
      },
      {
        topic: "Interpreting predictive and AI model outputs",
        items: [
          "Regression and forecast outputs with uncertainty ranges",
          "Classification metrics: accuracy, precision, recall, confusion matrices",
          "Probability scores, thresholds, and business trade-offs",
          "Feature importance and explainability summaries"
        ]
      },
      {
        topic: "Principles of visual perception and design",
        items: [
          "Preattentive attributes and visual encoding",
          "Gestalt principles and visual hierarchy",
          "Color, contrast, and clutter reduction",
          "Accessibility standards for charts and dashboards"
        ]
      },
      {
        topic: "Choosing the right visualization",
        items: [
          "Comparison, composition, distribution, and relationship charts",
          "Time series, geographic, and network visualizations",
          "Tables versus charts",
          "Visualizing uncertainty and ranges"
        ]
      },
      {
        topic: "Business intelligence tools",
        items: [
          "Connecting to data sources in Tableau and Power BI",
          "Calculated fields, measures, and aggregations",
          "Filters, parameters, and interactivity",
          "Publishing and sharing reports securely"
        ]
      },
      {
        topic: "Dashboard design and key performance indicators",
        items: [
          "Strategic, operational, and analytical dashboards",
          "Selecting and defining key performance indicators",
          "Layout, drill-down, and user-centered design",
          "Monitoring AI system performance with dashboards"
        ]
      },
      {
        topic: "Programmatic visualization with Python",
        items: [
          "Notebook environments for analysis",
          "Charting with matplotlib, seaborn, or plotly",
          "Reproducible analysis workflows",
          "When to use code versus business intelligence tools"
        ]
      },
      {
        topic: "Generative AI for data analysis",
        items: [
          "Natural language querying and AI-assisted analytics features",
          "Using AI assistants to write formulas, SQL, and code",
          "Verifying AI-generated calculations and charts",
          "Hallucinated figures and fabricated sources"
        ]
      },
      {
        topic: "Data quality and limitations in AI-driven environments",
        items: [
          "Dimensions of data quality",
          "Representativeness, sampling bias, and training data gaps",
          "Data drift and model degradation over time",
          "Data quality auditing and documentation (data cards and datasheets)"
        ]
      },
      {
        topic: "Ethics and integrity in data presentation",
        items: [
          "Misleading axes, cherry-picking, and omitted context",
          "Privacy, de-identification, and aggregation risks",
          "Bias in metrics and who is counted",
          "Professional standards for honest data communication"
        ]
      },
      {
        topic: "Data storytelling and executive communication",
        items: [
          "Identifying the audience and the decision",
          "Narrative structure for data presentations",
          "Writing executive summaries and data briefs",
          "Presenting and defending findings under questioning"
        ]
      },
      {
        topic: "Integrated analytics project",
        items: [
          "Scoping a business question and dataset",
          "Analysis, visualization, and quality review",
          "Peer review of dashboards",
          "Final presentation to stakeholders"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Sharda, Ramesh, Dursun Delen, and Efraim Turban. Business Intelligence, Analytics, Data Science, and AI, 5th ed. Hoboken, NJ: Pearson, 2024. Recommended",
        "Schwabish, Jonathan. Better Data Visualizations: A Guide for Scholars, Researchers, and Wonks, 1st ed. New York: Columbia University Press, 2021. Recommended",
        "Ault, Shaun V., Soohyun Nam Liao, and Larry Musolino. Principles of Data Science, 1st ed. Houston, TX: OpenStax, 2025. Open educational resource (free). Recommended"
      ],
      supplemental: [
        "Knaflic, Cole Nussbaumer. Storytelling with Data: A Data Visualization Guide for Business Professionals, 1st ed. Hoboken, NJ: Wiley, 2015.",
        "Vendor documentation and free training for Tableau Public and Microsoft Power BI.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on analytics and AI."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and published dashboards to prepare for weekly discussions on interpreting data and AI outputs.",
        "Complete weekly hands-on lab exercises outside of class that clean, analyze, and visualize datasets using spreadsheets, SQL, Tableau or Power BI, and Python.",
        "Write a data quality audit paper that examines a dataset used by an AI system and documents its strengths, gaps, and risks.",
        "Write an executive data brief that summarizes findings from a dashboard and recommends a decision, including a log of how generative AI tools were used and verified."
      ],
      critical: [
        "Critique a published visualization or dashboard for accuracy, clarity, accessibility, and ethical presentation, and redesign it to correct the problems identified.",
        "Interpret the outputs of a predictive or AI model, including its error rates and uncertainty, and recommend whether leaders should act on its results.",
        "Evaluate an AI-generated analysis by reproducing its calculations and judge where its conclusions are supported or unsupported by the data.",
        "Design an interactive dashboard that answers an organizational question and defend its metrics, design choices, and data limitations in a presentation to a panel."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 255 F Introduction to Business and Data Analytics",
        "CIS 142 F Database I",
        "STAT C1000 Introduction to Statistics",
        "CIS 201 F Introduction to Python Programming",
        "BUS 257 F AI Applications for Business"
      ],
      distinction: "BUS 255 F introduces business analytics concepts and tools, CIS 142 F introduces database design and queries, and STAT C1000 introduces statistical methods. HAI 320 requires students to integrate these skills on messy organizational datasets, interpret predictive and AI model outputs, audit data quality for AI systems, build interactive dashboards, and defend data-based recommendations to leadership audiences. Unlike HAI 310, which focuses on decision-making frameworks, HAI 320 focuses on the analysis, visualization, and communication of data itself.",
      criticalThinking: "Demonstrated through computation (data preparation, statistical analysis, and dashboard construction), writing (data quality audit paper and executive data brief), and oral communication (dashboard presentation defended before a panel).",
      research: "Students locate and evaluate public datasets, data documentation, and peer-reviewed or industry research on data quality and visualization through library databases and open data portals.",
      ploAlignment: [
        "SLO 1 supports PLO 4 (Develop and communicate AI strategy)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)",
        "SLO 3 supports PLO 3 (Govern responsible AI) and PLO 1 (Implement AI-enabled solutions)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, management, or computer information systems, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "13-1111 Management Analysts; 11-1021 General and Operations Managers",
      fsa: "A35 - Business, B90 - Management, M50 - Computer Information Systems"
    },
    sampleEssay: "You are given a dashboard showing that sales rose 20 percent after an AI pricing tool was introduced. Critique the dashboard and the claim: identify at least three data quality, statistical, or visualization problems that could make the conclusion misleading, and propose a revised analysis and visualization that would give leaders a defensible answer."
  },
  {
    id: "hai-340",
    prefix: "HAI",
    number: "340",
    title: "Organizational Leadership in AI-Enabled Environments",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division core course in the Applied Human-AI Collaboration and Leadership baccalaureate program. It prepares students for the practical leadership work of AI adoption: redesigning roles, planning workforce reskilling, and leading the change initiatives that move AI from pilot to everyday use."
    },
    description: "This course examines leadership strategies for managing organizations undergoing AI-driven transformation. Topics include workforce adaptation, human-AI role design, and leading change in technology-enabled environments.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Evaluate leadership strategies for AI-enabled organizations.",
        assessment: "Exam"
      },
      {
        outcome: "Design workforce adaptation strategies for AI integration.",
        assessment: "Project"
      },
      {
        outcome: "Apply change management principles to support AI adoption.",
        assessment: "Change Initiative Plan"
      }
    ],
    deSamples: [
      {
        objective: "Evaluate leadership strategies for AI-enabled organizations.",
        assignment: "Weekly Canvas discussion comparing how leaders at two organizations approached AI adoption, followed by a Canvas exam with scenario-based questions.",
        evaluation: "Discussion rubric and Canvas exam."
      },
      {
        objective: "Design workforce adaptation strategies for AI integration.",
        assignment: "Team project producing a workforce adaptation plan (task analysis, redesigned roles, and reskilling program) for a department, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      },
      {
        objective: "Apply change management principles to support AI adoption.",
        assignment: "Individual change initiative plan for an AI tool rollout, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored plan with written instructor feedback in Canvas SpeedGrader."
      }
    ],
    objectives: [
      "Describe the leader's responsibilities at each stage of an AI adoption initiative, from opportunity identification to sustained use.",
      "Compare leadership strategies used by organizations that have adopted AI and evaluate their outcomes for performance and the workforce.",
      "Analyze jobs at the task level to identify work that can be automated, augmented, or kept human.",
      "Design human-AI roles, including responsibilities, decision rights, and points of human oversight.",
      "Assess workforce skill gaps using skills inventories and skills-based workforce planning methods.",
      "Develop reskilling and upskilling programs that include learning objectives, delivery methods, and measures of effectiveness.",
      "Apply change management principles to plan the rollout of an AI tool, including stakeholder analysis, communication, training, and reinforcement.",
      "Formulate strategies to address employee concerns about job security, deskilling, and surveillance during AI adoption.",
      "Plan pilot programs and scaling decisions using adoption and performance metrics.",
      "Evaluate legal, labor relations, and equity considerations in workforce decisions related to AI.",
      "Demonstrate the use of AI tools to support leadership tasks such as communication drafting, skills mapping, and training design, and critique the quality of the results.",
      "Communicate workforce and change recommendations to executives, managers, and employees in writing and in oral presentations."
    ],
    content: [
      {
        topic: "The leader's role in AI-driven transformation",
        items: [
          "What changes and what does not for leaders",
          "Leadership responsibilities across the AI adoption lifecycle",
          "Executive sponsors, middle managers, and frontline supervisors",
          "Lessons from organizations that have scaled AI"
        ]
      },
      {
        topic: "Leadership strategies for AI-enabled organizations",
        items: [
          "Top-down mandates versus bottom-up experimentation",
          "Building an AI champions network",
          "Setting expectations and norms for AI tool use",
          "Comparing leadership strategies across industries"
        ]
      },
      {
        topic: "Assessing organizational readiness for AI",
        items: [
          "Readiness dimensions: people, process, technology, data",
          "Readiness surveys and maturity models",
          "Identifying adoption barriers",
          "Prioritizing where to start"
        ]
      },
      {
        topic: "Task-level analysis of work",
        items: [
          "Deconstructing jobs into tasks",
          "Automate, augment, or keep human",
          "Estimating time savings and quality effects",
          "Documenting current and future workflows"
        ]
      },
      {
        topic: "Human-AI role design",
        items: [
          "Redesigning job descriptions for AI-assisted work",
          "Decision rights and human oversight points",
          "New roles: AI operations, AI trainers, workflow owners",
          "Career paths in AI-enabled organizations"
        ]
      },
      {
        topic: "Skills-based workforce planning",
        items: [
          "Skills taxonomies and skills inventories",
          "Gap analysis between current and future skills",
          "Build, buy, borrow, and redeploy decisions",
          "Internal talent marketplaces"
        ]
      },
      {
        topic: "Designing reskilling and upskilling programs",
        items: [
          "Needs assessment and learning objectives",
          "Delivery methods: workshops, coaching, on-the-job learning, AI tutors",
          "AI literacy programs for all employees",
          "Measuring training effectiveness"
        ]
      },
      {
        topic: "Change management principles applied to AI adoption",
        items: [
          "Kotter's eight-step model and the ADKAR model in practice",
          "Stakeholder mapping and impact assessment",
          "Sponsorship and coalition building",
          "Reinforcement and sustaining adoption"
        ]
      },
      {
        topic: "Communicating AI change",
        items: [
          "Building the case for change",
          "Tailoring messages to executives, managers, and employees",
          "Two-way communication and feedback channels",
          "Using AI tools to draft communications responsibly"
        ]
      },
      {
        topic: "Addressing employee concerns and resistance",
        items: [
          "Job security fears and transparency about workforce impact",
          "Deskilling, workload, and burnout risks",
          "Monitoring, privacy, and trust",
          "Involving employees in redesign"
        ]
      },
      {
        topic: "Pilots, scaling, and adoption metrics",
        items: [
          "Designing pilot programs",
          "Adoption, proficiency, and performance metrics",
          "Go, adjust, or stop decisions",
          "Scaling from team to enterprise"
        ]
      },
      {
        topic: "Labor relations and legal considerations",
        items: [
          "Collective bargaining and AI in unionized workplaces",
          "Employment law and AI in hiring and evaluation",
          "Notice, consultation, and redeployment obligations",
          "Working with human resources and legal partners"
        ]
      },
      {
        topic: "Equity and inclusion in workforce transformation",
        items: [
          "Unequal effects of AI across roles and groups",
          "Access to reskilling opportunities",
          "Accessibility of AI tools",
          "Fair transition practices"
        ]
      },
      {
        topic: "Leading AI-enabled teams day to day",
        items: [
          "Setting goals and reviewing AI-assisted work",
          "Coaching employees to use AI tools well",
          "Quality control and accountability for AI outputs",
          "Recognizing and sharing effective practices"
        ]
      },
      {
        topic: "Building the workforce adaptation plan",
        items: [
          "Integrating task analysis, role design, and reskilling",
          "Timelines, budgets, and resource needs",
          "Risk assessment and contingency plans",
          "Presenting the plan to leadership"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Jesuthasan, Ravin, and Tanuj Kapilashrami. The Skills-Powered Organization: The Journey to the Next-Generation Enterprise, 1st ed. Cambridge, MA: MIT Press, 2024. Recommended",
        "Jesuthasan, Ravin, and John W. Boudreau. Work Without Jobs: How to Reboot Your Organization's Work Operating System, 1st ed. Cambridge, MA: MIT Press, 2022. Recommended",
        "Davenport, Thomas H., and Steven M. Miller. Working with AI: Real Stories of Human-Machine Collaboration, 1st ed. Cambridge, MA: MIT Press, 2022. Recommended"
      ],
      supplemental: [
        "Bright, David S., Anastasia H. Cortes, et al. Principles of Management, 1st ed. Houston, TX: OpenStax, 2019. Open educational resource (free).",
        "Kotter, John P. Leading Change, with a New Preface by the Author, 1st ed. Boston: Harvard Business Review Press, 2012.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI and workforce transformation."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on leading AI adoption and workforce change.",
        "Interview a manager or employee about AI adoption in their workplace and write a paper connecting the interview to course concepts.",
        "Conduct a task-level analysis of a job using AI tools to assist, and write a memo that recommends which tasks to automate, augment, or keep human, including a log of how AI outputs were checked.",
        "Write a change initiative plan for an AI tool rollout that includes stakeholder analysis, communication messages, training, and adoption metrics."
      ],
      critical: [
        "Compare the leadership strategies two organizations used to adopt AI and judge which better balanced performance gains with workforce impact.",
        "Assess an organization's readiness for AI adoption using a readiness framework and prioritize the barriers leaders should address first.",
        "Develop a reskilling program for employees whose roles are changing because of AI, and justify its design with skills gap evidence.",
        "Working in a team, design a workforce adaptation plan for a department and defend it in a presentation to a panel acting as executive leadership."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 271 F Leadership and Business Ethics",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 108 F Living in an Online World"
      ],
      distinction: "BUS 271 F introduces leadership theory and business ethics, and BUS 256 F and BUS 257 F introduce AI tools and business applications. HAI 340 requires students to apply that knowledge to the operational work of leading AI adoption: analyzing jobs at the task level, redesigning human-AI roles, planning skills-based reskilling programs, and running change initiatives with measurable adoption goals. HAI 340 is distinct from BUS 371, which examines organizational behavior theory (motivation, perception, teams, culture, and structure); HAI 340 takes a practitioner and implementation focus on the leader's workforce and change tasks. It also differs from HAI 350 (enterprise AI strategy) and HAI 370 (project management of AI initiatives).",
      criticalThinking: "Demonstrated through writing (task analysis memo and change initiative plan) and oral communication (team workforce adaptation plan defended before a panel).",
      research: "Students locate and evaluate peer-reviewed research, labor market data, and industry reports on AI and the workforce through library databases for the change initiative plan and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 2 supports PLO 2 (Lead organizational change and digital transformation) and PLO 1 (Implement AI-enabled solutions)",
        "SLO 3 supports PLO 2 (Lead organizational change and digital transformation) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "A hospital system will introduce AI scheduling and documentation tools that change the daily work of 400 administrative employees. Develop a leadership strategy for the first year that addresses role redesign, reskilling, employee concerns, and communication. Justify each element with course concepts and explain how you would measure whether the transition succeeded."
  },
  {
    id: "hai-350",
    prefix: "HAI",
    number: "350",
    title: "AI Strategy and Implementation",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the strategy and implementation foundation students need to move organizations from isolated AI experiments to planned, measured, and scaled AI initiatives that serve organizational goals."
    },
    description: "This course focuses on the development and execution of AI strategies within organizations. Students assess readiness, identify use cases, and design implementation plans aligned with organizational goals.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Develop AI implementation strategies aligned with organizational objectives.",
        assessment: "Project"
      },
      {
        outcome: "Assess organizational readiness for AI adoption.",
        assessment: "Readiness Assessment Report"
      },
      {
        outcome: "Evaluate the impact and value of AI initiatives.",
        assessment: "Exam"
      }
    ],
    deSamples: [
      {
        objective: "Develop AI implementation strategies aligned with organizational objectives.",
        assignment: "Team project producing an AI strategy and implementation roadmap for a partner or case organization, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      },
      {
        objective: "Assess organizational readiness for AI adoption.",
        assignment: "Individual readiness assessment report on a real organization using a structured readiness framework, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored report with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Evaluate the impact and value of AI initiatives.",
        assignment: "Weekly discussion evaluating published AI deployment results, an ROI and value-measurement worksheet, and a Canvas exam with scenario-based questions.",
        evaluation: "Discussion rubric, worksheet rubric, and Canvas exam."
      }
    ],
    objectives: [
      "Explain the relationship between business strategy, competitive advantage, and AI strategy, including how prediction and generation capabilities change the economics of decisions and work.",
      "Assess an organization's AI readiness across strategy, data, technology, talent, processes, culture, and governance using a structured maturity model.",
      "Identify AI use cases by analyzing value chains, business processes, and pain points with stakeholders.",
      "Prioritize a portfolio of AI use cases using criteria such as business value, feasibility, data availability, risk, and time to value.",
      "Construct a business case for an AI initiative that estimates costs, benefits, return on investment, and total cost of ownership, and tests key assumptions with sensitivity analysis.",
      "Compare build, buy, partner, and platform options for AI capabilities and justify a sourcing decision.",
      "Evaluate AI vendors and products using defined criteria, including capability, integration, data handling, security, pricing, and contract terms.",
      "Analyze data, infrastructure, and integration requirements that affect the feasibility of an AI implementation.",
      "Design a phased implementation roadmap that sequences pilots, milestones, resources, dependencies, and decision gates.",
      "Formulate key performance indicators and a value-measurement plan that link AI initiatives to operational and financial outcomes.",
      "Develop strategies for scaling successful pilots, including operating models, centers of excellence, and change adoption.",
      "Communicate an AI strategy and implementation plan to executive audiences in writing and in an oral presentation."
    ],
    content: [
      {
        topic: "AI strategy in the context of business strategy",
        items: [
          "Corporate, business-level, and functional strategy",
          "Sources of competitive advantage with AI",
          "Economics of prediction and generation",
          "AI strategy as part of digital transformation"
        ]
      },
      {
        topic: "Strategic analysis tools applied to AI",
        items: [
          "Industry and competitor analysis of AI adoption",
          "Value chain analysis and AI touchpoints",
          "Business model innovation enabled by AI",
          "Scenario planning for AI-driven market change"
        ]
      },
      {
        topic: "Assessing organizational AI readiness",
        items: [
          "AI maturity models and readiness dimensions",
          "Data, technology, and talent assessment",
          "Leadership commitment and cultural readiness",
          "Interpreting readiness gaps and setting targets"
        ]
      },
      {
        topic: "Identifying AI use cases",
        items: [
          "Process mapping and pain-point discovery",
          "Stakeholder interviews and workshops",
          "Task-level analysis for augmentation and automation",
          "Generative AI, predictive AI, and agent use cases"
        ]
      },
      {
        topic: "Prioritizing the AI portfolio",
        items: [
          "Value versus feasibility matrices",
          "Weighted scoring models",
          "Quick wins, strategic bets, and foundational investments",
          "Balancing risk across the portfolio"
        ]
      },
      {
        topic: "Building the business case",
        items: [
          "Cost categories and total cost of ownership",
          "Quantifying hard and soft benefits",
          "ROI, payback period, and net present value",
          "Assumptions, sensitivity analysis, and uncertainty"
        ]
      },
      {
        topic: "Build, buy, partner, or platform",
        items: [
          "Off-the-shelf tools, embedded AI, and custom models",
          "Foundation models, APIs, and fine-tuning options",
          "Internal capability and skills requirements",
          "Decision criteria and trade-offs"
        ]
      },
      {
        topic: "Vendor evaluation and selection",
        items: [
          "Requests for information and proposals",
          "Evaluation criteria and scoring rubrics",
          "Proofs of concept and reference checks",
          "Contract terms, pricing models, and data rights"
        ]
      },
      {
        topic: "Data and technology foundations for implementation",
        items: [
          "Data availability, quality, and access",
          "Integration with existing systems and workflows",
          "Cloud infrastructure and cost management",
          "Security and privacy requirements in implementation planning"
        ]
      },
      {
        topic: "Designing and running pilots",
        items: [
          "Pilot scope, hypotheses, and success criteria",
          "Selecting pilot teams and users",
          "Collecting evidence during a pilot",
          "Go, pivot, or stop decisions"
        ]
      },
      {
        topic: "Implementation roadmaps",
        items: [
          "Phasing, sequencing, and dependencies",
          "Resource and budget planning",
          "Decision gates and executive checkpoints",
          "Roadmap documentation and communication"
        ]
      },
      {
        topic: "Operating models for AI",
        items: [
          "Centralized, federated, and hybrid models",
          "Centers of excellence and AI product teams",
          "Roles and responsibilities across business and IT",
          "Funding models for ongoing AI work"
        ]
      },
      {
        topic: "Scaling AI across the organization",
        items: [
          "Why pilots fail to scale",
          "Reusable assets, platforms, and standards",
          "Adoption, training, and workflow redesign",
          "Monitoring and maintaining AI systems in production"
        ]
      },
      {
        topic: "Measuring value and impact",
        items: [
          "Key performance indicators and leading and lagging measures",
          "Baselines, controls, and attribution",
          "Productivity, quality, revenue, and customer outcomes",
          "Value tracking dashboards and post-implementation reviews"
        ]
      },
      {
        topic: "Strategic risk in AI implementation",
        items: [
          "Strategic, operational, and financial risks",
          "Vendor lock-in and technology change",
          "Workforce and reputational impacts",
          "Coordinating with governance and compliance functions"
        ]
      },
      {
        topic: "Communicating and defending AI strategy",
        items: [
          "Executive summaries and strategy documents",
          "Presenting to boards and senior leaders",
          "Responding to stakeholder questions and objections",
          "Reflection on strategic decision-making"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Lamarre, Eric, Kate Smaje, and Rodney Zemmel. Rewired: The McKinsey Guide to Outcompeting in the Age of Digital and AI, 1st ed. Hoboken, NJ: Wiley, 2023. Recommended",
        "Davenport, Thomas H., and Nitin Mittal. All-in on AI: How Smart Companies Win Big with Artificial Intelligence, 1st ed. Boston: Harvard Business Review Press, 2023. Recommended",
        "Agrawal, Ajay, Joshua Gans, and Avi Goldfarb. Power and Prediction: The Disruptive Economics of Artificial Intelligence, 1st ed. Boston: Harvard Business Review Press, 2022. Recommended"
      ],
      supplemental: [
        "National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. U.S. Department of Commerce, 2023. Free resource.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI adoption, investment, and value."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on AI strategy and implementation.",
        "Write an organizational AI readiness assessment report for a real organization that identifies strengths, gaps, and recommended priorities.",
        "Use generative AI tools to support use-case discovery and business case drafting, then write a reflection that documents the prompts used, verifies the AI output against sources, and explains what was accepted or revised.",
        "Prepare an executive summary of an AI strategy and implementation roadmap suitable for senior leadership."
      ],
      critical: [
        "Prioritize a set of candidate AI use cases using a weighted scoring model and justify the resulting portfolio in a written memo.",
        "Construct a business case for an AI initiative, including cost and benefit estimates, ROI, and a sensitivity analysis of key assumptions.",
        "Evaluate competing AI vendors or sourcing options for a defined business need and recommend a build, buy, or partner decision with supporting evidence.",
        "Working in a team, design an AI strategy and phased implementation roadmap with a value-measurement plan and defend it in a presentation to a panel."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 257 F AI Applications for Business",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 255 F Introduction to Business and Data Analytics",
        "CIS 258 F Applied AI: Machine Learning, Deep Learning and NLP",
        "STAT C1000 Introduction to Statistics"
      ],
      distinction: "BUS 257 F introduces how AI tools are applied to individual business functions, and BUS 256 F develops hands-on skill with AI tools and prompting. HAI 350 moves from tool use to the organization level: students assess enterprise readiness, prioritize a portfolio of use cases, build financial business cases, make and defend sourcing decisions, and design measured implementation and scaling plans. Within the program, HAI 350 is distinct from HAI 300 (workflow design), HAI 340 (leadership and workforce), HAI 360 (governance and compliance), and HAI 370 (project execution and team management) because its focus is strategic selection, investment, and value realization.",
      criticalThinking: "Demonstrated through writing (readiness assessment report, use-case prioritization memo, and business case), computation (ROI, total cost of ownership, and sensitivity analysis), and oral communication (team strategy presentation defended before a panel).",
      research: "Students locate and evaluate industry reports, company disclosures, and peer-reviewed research through library databases to support the readiness assessment, business case, and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 4 (Develop and communicate AI strategy) and PLO 1 (Implement AI-enabled solutions)",
        "SLO 2 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 3 supports PLO 4 (Develop and communicate AI strategy) and PLO 1 (Implement AI-enabled solutions)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "A mid-sized manufacturer has identified twelve possible AI use cases but can fund only three this year. Formulate the criteria you would use to prioritize them, apply those criteria to three contrasting example use cases, and justify a phased roadmap that balances quick value, feasibility, risk, and long-term strategy."
  },
  {
    id: "hai-360",
    prefix: "HAI",
    number: "360",
    title: "Ethics, Governance, and Responsible AI",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It prepares students to put responsible AI into practice inside organizations by applying risk management frameworks, regulatory requirements, internal policies, documentation, and audit practices that employers increasingly expect of staff who deploy and oversee AI systems."
    },
    description: "This course explores ethical, legal, and governance issues associated with artificial intelligence. Students examine bias, fairness, accountability, and regulatory considerations in AI systems.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Evaluate ethical risks associated with AI systems.",
        assessment: "Risk Assessment Report"
      },
      {
        outcome: "Apply governance frameworks for responsible AI implementation.",
        assessment: "Project"
      },
      {
        outcome: "Analyze legal and regulatory considerations related to AI technologies.",
        assessment: "Exam"
      }
    ],
    deSamples: [
      {
        objective: "Evaluate ethical risks associated with AI systems.",
        assignment: "Individual risk assessment and bias audit of a deployed AI use case, documented with a risk register and submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored report with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Apply governance frameworks for responsible AI implementation.",
        assignment: "Team project producing an AI governance program for a case organization, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      },
      {
        objective: "Analyze legal and regulatory considerations related to AI technologies.",
        assignment: "Weekly discussion analyzing how current AI laws and regulations apply to a scenario, a regulatory comparison brief, and a Canvas exam with scenario-based questions.",
        evaluation: "Discussion rubric, brief rubric, and Canvas exam."
      }
    ],
    objectives: [
      "Identify the categories of harm that AI systems can cause to individuals, groups, organizations, and society, including discrimination, privacy loss, safety failures, misinformation, and loss of human oversight.",
      "Evaluate AI systems for ethical and operational risk using a structured risk assessment and a risk register.",
      "Analyze sources of bias across the AI lifecycle and select appropriate fairness metrics and mitigation techniques for a given use case.",
      "Perform a basic bias audit of an AI system or dataset and interpret the results for a non-technical audience.",
      "Apply the NIST AI Risk Management Framework functions and the structure of an AI management system standard such as ISO/IEC 42001 to an organizational AI program.",
      "Compare the risk-based approach of the European Union AI Act with United States federal and California approaches to AI regulation.",
      "Analyze how existing laws on privacy, consumer protection, employment discrimination, and intellectual property apply to AI uses.",
      "Develop organizational AI policies, including acceptable use, procurement, and human review requirements.",
      "Prepare model and system documentation such as model cards, data sheets, and AI impact assessments.",
      "Design accountability structures for AI, including governance committees, roles, escalation paths, and incident response.",
      "Formulate monitoring and audit plans that address transparency, explainability, and ongoing compliance after deployment.",
      "Recommend governance decisions to organizational leaders in writing and in an oral presentation."
    ],
    content: [
      {
        topic: "From principles to practice in responsible AI",
        items: [
          "Common responsible AI principles: fairness, transparency, accountability, privacy, safety",
          "Why principles alone fail without governance",
          "Organizational roles in responsible AI",
          "Connecting ethical reasoning from prior coursework to operational decisions"
        ]
      },
      {
        topic: "AI harms and risk identification",
        items: [
          "Harms to individuals, groups, and society",
          "Generative AI risks: inaccurate output, misinformation, and misuse",
          "Stakeholder mapping and impact analysis",
          "Risk registers and risk ratings"
        ]
      },
      {
        topic: "Bias and fairness across the AI lifecycle",
        items: [
          "Sources of bias in data, design, and deployment",
          "Fairness definitions and their trade-offs",
          "Fairness metrics and disaggregated evaluation",
          "Mitigation techniques before, during, and after training"
        ]
      },
      {
        topic: "Conducting bias audits",
        items: [
          "Audit scope, data, and methods",
          "Using open-source fairness and evaluation tools",
          "Interpreting and reporting audit results",
          "Independent versus internal audits"
        ]
      },
      {
        topic: "Transparency, explainability, and documentation",
        items: [
          "Explainability needs of different stakeholders",
          "Model cards and data sheets",
          "AI system inventories",
          "Disclosure to users and affected individuals"
        ]
      },
      {
        topic: "Privacy and data governance for AI",
        items: [
          "Personal data in training and inference",
          "Data minimization, consent, and retention",
          "Privacy impact assessments",
          "Data governance roles and controls"
        ]
      },
      {
        topic: "AI risk management frameworks",
        items: [
          "NIST AI Risk Management Framework: Govern, Map, Measure, Manage",
          "NIST generative AI profile",
          "Characteristics of trustworthy AI",
          "Tailoring a framework to an organization"
        ]
      },
      {
        topic: "AI management system standards",
        items: [
          "Purpose and structure of ISO/IEC 42001",
          "Related standards for AI risk and impact assessment",
          "Certification and conformity concepts",
          "Integrating AI governance with existing quality, security, and privacy programs"
        ]
      },
      {
        topic: "The European Union AI Act",
        items: [
          "Risk-based classification of AI systems",
          "Prohibited and high-risk uses",
          "Obligations for providers and deployers",
          "Transparency obligations and general-purpose AI models"
        ]
      },
      {
        topic: "United States federal approaches to AI",
        items: [
          "Applying existing consumer protection law to AI",
          "Employment discrimination law and AI hiring tools",
          "Sector-specific rules in finance, health care, and education",
          "Executive actions and agency guidance as a changing landscape"
        ]
      },
      {
        topic: "California and state AI laws",
        items: [
          "California privacy law and automated decision-making",
          "State legislation on AI transparency, safety, and disclosure",
          "Local and sector rules affecting AI use",
          "Tracking new and changing state requirements"
        ]
      },
      {
        topic: "Intellectual property, contracts, and liability",
        items: [
          "Copyright questions for training data and AI output",
          "Vendor contracts, warranties, and indemnification",
          "Allocation of liability among developers, vendors, and users",
          "Records and evidence for legal defensibility"
        ]
      },
      {
        topic: "Organizational AI policies",
        items: [
          "Acceptable use policies for generative AI",
          "Procurement and third-party risk requirements",
          "Human review and approval requirements",
          "Training, communication, and enforcement"
        ]
      },
      {
        topic: "Accountability structures and governance operating models",
        items: [
          "AI governance committees and review boards",
          "Roles and responsibilities: owners, reviewers, approvers",
          "Escalation paths and decision rights",
          "Board and executive oversight"
        ]
      },
      {
        topic: "Monitoring, incidents, and continuous compliance",
        items: [
          "Post-deployment monitoring and drift",
          "AI incident reporting and response",
          "Internal audit and assurance",
          "Updating controls as laws and technology change"
        ]
      },
      {
        topic: "Building a responsible AI governance program",
        items: [
          "Assembling policy, risk, documentation, and audit components",
          "Maturity and roadmap for governance",
          "Presenting governance recommendations to leadership",
          "Reflection on professional responsibility"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Lu, Qinghua, Liming Zhu, Jon Whittle, and Xiwei Xu. Responsible AI: Best Practices for Creating Trustworthy AI Systems, 1st ed. Boston: Addison-Wesley, 2023. Recommended",
        "Blackman, Reid. Ethical Machines: Your Concise Guide to Totally Unbiased, Transparent, and Respectful AI, 1st ed. Boston: Harvard Business Review Press, 2022. Recommended",
        "National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. U.S. Department of Commerce, 2023. Free resource. Recommended"
      ],
      supplemental: [
        "National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1. U.S. Department of Commerce, 2024. Free resource.",
        "Current official texts and guidance from the European Union, U.S. federal agencies, and the State of California, plus articles from Harvard Business Review, MIT Sloan Management Review, and law and policy journals on AI governance."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, frameworks, regulatory texts, and case studies to prepare for weekly discussions on AI governance and compliance.",
        "Write an AI risk assessment report for a deployed AI use case, including a stakeholder impact analysis and a risk register.",
        "Draft an organizational generative AI acceptable use policy, using AI tools to produce an initial draft and then writing a memo that documents how the draft was verified, corrected, and aligned to the NIST AI RMF.",
        "Prepare a model card or AI impact assessment for an AI system used by a case organization."
      ],
      critical: [
        "Assess an AI system or dataset for bias using a fairness evaluation tool, interpret the results, and recommend mitigation steps in a written audit report.",
        "Compare how the EU AI Act, U.S. federal law, and California law would apply to the same AI use case and justify the compliance obligations an organization should plan for.",
        "Critique an organization's published responsible AI principles or AI incident against the NIST AI RMF and identify gaps in its governance controls.",
        "Working in a team, design an AI governance program for an organization, including policies, accountability structures, documentation, and a monitoring plan, and defend it in a presentation to a panel."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 271 F Leadership and Business Ethics",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "CIS 258 F Applied AI: Machine Learning, Deep Learning and NLP",
        "STAT C1000 Introduction to Statistics"
      ],
      distinction: "BUS 271 F introduces business ethics and ethical decision-making at the lower-division level, and PHIL 361 F Technology and Ethics, also required in the program, examines ethical theories such as deontology and teleology as applied to technology. HAI 360 is an applied governance and compliance course rather than a course in ethical theory: students apply AI risk management frameworks such as the NIST AI RMF and ISO/IEC 42001, analyze the EU AI Act and U.S. and California AI laws and regulations, conduct bias audits using statistical fairness metrics, prepare model documentation, and design organizational AI policies and accountability structures. Within the program, HAI 360 is distinct from HAI 350, which addresses strategy and investment decisions, by focusing on the controls and obligations that govern AI once it is adopted.",
      criticalThinking: "Demonstrated through writing (risk assessment report, bias audit report, and regulatory comparison), computation (fairness metrics in the bias audit), and oral communication (team governance program defended before a panel).",
      research: "Students locate and evaluate primary regulatory texts, standards, agency guidance, peer-reviewed research, and legal analyses through library databases and official government sources for the regulatory comparison and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 3 (Govern responsible AI: ethical, legal, regulatory)",
        "SLO 2 supports PLO 3 (Govern responsible AI: ethical, legal, regulatory) and PLO 1 (Implement AI-enabled solutions)",
        "SLO 3 supports PLO 3 (Govern responsible AI: ethical, legal, regulatory) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410). A law degree (JD), consistent with the minimum qualifications for the Law discipline, is also appropriate."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management, B75 - Law"
    },
    sampleEssay: "A company plans to use an AI tool to screen job applicants in California and in the European Union. Evaluate the ethical, legal, and governance risks of this plan, and design a governance approach that includes risk assessment, bias testing, documentation, human oversight, and accountability. Defend which risks you would treat as unacceptable and why."
  },
  {
    id: "hai-370",
    prefix: "HAI",
    number: "370",
    title: "Managing AI Projects and Cross-Functional Teams",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the project management and team coordination skills students need to plan, deliver, and evaluate AI initiatives that involve both technical and business staff."
    },
    description: "This course prepares students to manage AI-related projects and collaborate across technical and non-technical teams. Emphasis is placed on project management methodologies, communication, and stakeholder alignment.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Apply project management methodologies to AI initiatives.",
        assessment: "Project"
      },
      {
        outcome: "Coordinate communication across cross-functional teams.",
        assessment: "Oral Presentation"
      },
      {
        outcome: "Evaluate project performance and outcomes.",
        assessment: "Case Analysis Paper"
      }
    ],
    deSamples: [
      {
        objective: "Apply project management methodologies to AI initiatives.",
        assignment: "Team project producing a project charter, work breakdown structure, product backlog, schedule, and risk register for an AI initiative, built in Canvas Groups using a shared project management tool, with milestone check-ins submitted in Canvas.",
        evaluation: "Rubric-scored project deliverables with written instructor feedback in Canvas SpeedGrader, plus peer evaluation of team contributions."
      },
      {
        objective: "Coordinate communication across cross-functional teams.",
        assignment: "Simulated sprint review in which each student presents project status, model performance, and open risks to a mixed technical and executive audience, delivered live through Zoom or as a recorded Canvas Studio presentation, followed by a Canvas discussion responding to stakeholder questions.",
        evaluation: "Oral presentation rubric and discussion rubric."
      },
      {
        objective: "Evaluate project performance and outcomes.",
        assignment: "Case analysis paper evaluating a completed or failed AI project against its business case, schedule, budget, and model performance metrics, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader, and a Canvas quiz on project metrics."
      }
    ],
    objectives: [
      "Compare predictive (waterfall), agile (Scrum and Kanban), and hybrid project management approaches and select an approach suited to a given AI initiative.",
      "Explain how AI projects differ from conventional IT projects, including experimentation, data dependency, probabilistic outputs, and model drift.",
      "Apply an AI project lifecycle such as CRISP-DM to structure the phases of an AI initiative from business understanding through deployment and monitoring.",
      "Develop a project charter, scope statement, and work breakdown structure for an AI-enabled solution.",
      "Assess data availability, quality, access, and labeling requirements as project dependencies and constraints.",
      "Construct a project schedule, resource plan, and budget that account for iteration, compute costs, and vendor services.",
      "Identify, analyze, and prioritize technical, data, ethical, and organizational risks in a risk register with response strategies.",
      "Differentiate the roles of data scientists, engineers, product owners, domain experts, and business sponsors on a cross-functional AI team.",
      "Formulate a stakeholder analysis and communication plan that aligns technical and non-technical audiences.",
      "Translate model performance results and technical tradeoffs into business language for executive decision-makers.",
      "Plan the handoff of an AI solution from development to operations, including monitoring, retraining, and ownership responsibilities.",
      "Evaluate project performance using schedule, cost, scope, quality, adoption, and business value metrics."
    ],
    content: [
      {
        topic: "Foundations of project management for AI initiatives",
        items: [
          "Projects, programs, and portfolios",
          "The project manager's role and core competencies",
          "Project management standards and PMI concepts",
          "Why AI projects fail: common patterns and lessons"
        ]
      },
      {
        topic: "Characteristics of AI projects",
        items: [
          "Experimentation and uncertainty of outcomes",
          "Data as a primary project input",
          "Probabilistic outputs and acceptable error",
          "Build, buy, or configure decisions for AI tools"
        ]
      },
      {
        topic: "Predictive, agile, and hybrid approaches",
        items: [
          "Predictive (waterfall) planning and phase gates",
          "Agile values and principles",
          "Hybrid approaches for regulated and enterprise settings",
          "Selecting an approach based on uncertainty and risk"
        ]
      },
      {
        topic: "Scrum and Kanban in AI delivery",
        items: [
          "Scrum roles, events, and artifacts",
          "Kanban boards, work-in-progress limits, and flow",
          "Time-boxing research spikes and experiments",
          "Definition of done for data and model work"
        ]
      },
      {
        topic: "The AI project lifecycle",
        items: [
          "CRISP-DM phases and iteration",
          "Business understanding and problem framing",
          "Data understanding and preparation",
          "Modeling, evaluation, and deployment decisions"
        ]
      },
      {
        topic: "Initiating the project",
        items: [
          "Business case and feasibility assessment",
          "Project charter and success criteria",
          "Sponsor identification and approval",
          "Defining measurable objectives for AI outcomes"
        ]
      },
      {
        topic: "Scope, requirements, and backlog management",
        items: [
          "Gathering requirements from users and domain experts",
          "Work breakdown structures and user stories",
          "Prioritizing the product backlog",
          "Controlling scope creep and pilot boundaries"
        ]
      },
      {
        topic: "Data dependencies and constraints",
        items: [
          "Data availability, quality, and access",
          "Labeling, annotation, and data preparation effort",
          "Privacy, security, and data governance requirements",
          "Coordinating with data owners and IT"
        ]
      },
      {
        topic: "Scheduling, resources, and budgeting",
        items: [
          "Estimation techniques and story points",
          "Schedules, milestones, and critical path",
          "Compute, licensing, and vendor costs",
          "Resource allocation across shared technical staff"
        ]
      },
      {
        topic: "Risk management for AI projects",
        items: [
          "Risk identification and the risk register",
          "Technical, data, ethical, and adoption risks",
          "Qualitative and quantitative risk analysis",
          "Risk response planning and escalation"
        ]
      },
      {
        topic: "Building and leading cross-functional AI teams",
        items: [
          "Roles: product owner, data scientist, engineer, domain expert, sponsor",
          "Team charters and working agreements",
          "Remote and hybrid collaboration tools",
          "Resolving conflict between technical and business priorities"
        ]
      },
      {
        topic: "Stakeholder alignment and communication",
        items: [
          "Stakeholder identification and analysis",
          "Communication plans and status reporting",
          "Translating model metrics into business terms",
          "Managing expectations about AI capabilities"
        ]
      },
      {
        topic: "Quality, testing, and acceptance",
        items: [
          "Acceptance criteria for AI features",
          "Model evaluation versus business acceptance",
          "User acceptance testing and pilots",
          "Documentation and human review checkpoints"
        ]
      },
      {
        topic: "Deployment and operations handoffs",
        items: [
          "MLOps concepts for project managers",
          "Transition planning and ownership",
          "Monitoring, model drift, and retraining plans",
          "Vendor management and service agreements"
        ]
      },
      {
        topic: "Project performance metrics and control",
        items: [
          "Schedule, cost, and scope variance",
          "Agile metrics: velocity, burndown, and cycle time",
          "Adoption, usage, and business value measures",
          "Dashboards and reporting to sponsors"
        ]
      },
      {
        topic: "Closing, evaluation, and continuous improvement",
        items: [
          "Benefits realization and post-implementation review",
          "Retrospectives and lessons learned",
          "Deciding to scale, revise, or stop an AI initiative",
          "Building organizational project capability"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Quizzes"
    ],
    textbooks: {
      recommended: [
        "Kloppenborg, Timothy J., Vittal S. Anantatmula, and Kathryn N. Wells. Contemporary Project Management: Plan-Driven and Agile Approaches, 5th ed. Boston: Cengage, 2023. Recommended",
        "Bratsis, Irene. AI Product Manager's Handbook, 2nd ed. Birmingham, UK: Packt Publishing, 2024. Recommended"
      ],
      supplemental: [
        "Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK Guide), 8th ed. Newtown Square, PA: Project Management Institute, 2025.",
        "Watt, Adrienne. Project Management, 2nd ed. Victoria, BC: BCcampus, 2014. Open educational resource (free).",
        "Schwaber, Ken, and Jeff Sutherland. The Scrum Guide. Scrum.org, 2020. Free resource.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and PMI publications on managing AI initiatives."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and AI project case studies to prepare for weekly discussions on project methods and team practices.",
        "Write a project charter and scope statement for an AI initiative at a real or simulated organization, including measurable success criteria.",
        "Use an AI assistant to draft a risk register and work breakdown structure, then revise and document the corrections and judgments made by the student.",
        "Prepare a stakeholder communication plan and a sample status report written for technical team members and for executive sponsors."
      ],
      critical: [
        "Compare predictive, agile, and hybrid approaches for a specific AI initiative and justify the recommended approach based on uncertainty, risk, and organizational context.",
        "Assess the data dependencies of a proposed AI project and recommend whether the project should proceed, be re-scoped, or be delayed.",
        "Evaluate a completed or failed AI project against its business case, schedule, cost, and performance metrics, and recommend lessons for future projects.",
        "Working in a cross-functional team, plan and manage a simulated AI project through two sprints and defend status, tradeoffs, and next steps in a sprint review presentation."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 257 F AI Applications for Business",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "CIS 258 F Applied AI: Machine Learning, Deep Learning and NLP",
        "BUS 255 F Introduction to Business and Data Analytics",
        "BUS 271 F Leadership and Business Ethics"
      ],
      distinction: "BUS 257 F introduces business applications of AI tools and CIS 258 F introduces how machine learning models are built and evaluated. Neither course addresses how to plan, staff, schedule, budget, and control an AI initiative. HAI 370 requires students to apply formal project management methodologies and the AI project lifecycle to complete initiatives, manage data and model risk, coordinate technical and business team members, and evaluate project performance with quantitative metrics.",
      criticalThinking: "Demonstrated through writing (project charter, risk assessment, and project evaluation paper), computation (schedule, budget, variance, and agile performance metrics), and oral communication (sprint review presentation to a mixed technical and executive audience).",
      research: "Students locate and evaluate peer-reviewed research, industry reports, and published AI project case studies through library databases for the project evaluation paper.",
      ploAlignment: [
        "SLO 1 supports PLO 1 (Implement AI-enabled solutions)",
        "SLO 2 supports PLO 2 (Lead organizational change and digital transformation) and PLO 4 (Develop and communicate AI strategy)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, management, or computer information systems, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "13-1082 Project Management Specialists; 11-1021 General and Operations Managers",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "An AI chatbot project is three months behind schedule because the training data was incomplete and the business sponsor keeps adding requirements. Analyze the root causes of the problems using project management concepts, and propose a recovery plan that addresses scope, schedule, data dependencies, and stakeholder communication."
  },
  {
    id: "hai-380",
    prefix: "HAI",
    number: "380",
    title: "Human-AI Interaction and Experience Design",
    units: 3,
    block: "Upper Division Core",
    year: "Year 3",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It prepares students to design, prototype, and evaluate AI-enabled tools that people can use effectively and trust appropriately, a core skill for leading AI adoption in organizations."
    },
    description: "This course examines the design of effective human-AI interactions, focusing on usability, trust, and user experience. Students explore how design influences adoption and system performance.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Analyze factors influencing user trust and adoption of AI systems.",
        assessment: "Case Analysis Paper"
      },
      {
        outcome: "Design human-centered AI interaction frameworks.",
        assessment: "Project"
      },
      {
        outcome: "Evaluate usability and user experience in AI-enabled systems.",
        assessment: "Usability Test Report"
      }
    ],
    deSamples: [
      {
        objective: "Analyze factors influencing user trust and adoption of AI systems.",
        assignment: "Case analysis paper examining how interface design, explanations, and error handling affected trust and adoption of a deployed AI tool, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Design human-centered AI interaction frameworks.",
        assignment: "Team project producing user research findings, personas, journey maps, and a clickable low-code prototype of an AI-enabled tool, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      },
      {
        objective: "Evaluate usability and user experience in AI-enabled systems.",
        assignment: "Remote usability test of an AI-enabled tool with at least three participants using a shared test script, followed by a written report with findings and prioritized recommendations submitted in Canvas.",
        evaluation: "Rubric-scored report with written instructor feedback, and a Canvas quiz on usability heuristics and metrics."
      }
    ],
    objectives: [
      "Explain the principles of human-centered design and the user-centered design process as applied to AI-enabled systems.",
      "Analyze how mental models, expectations, and prior experience shape the way users interpret AI outputs.",
      "Assess factors that influence trust, overreliance, and underreliance in AI systems, including transparency, accuracy, and error handling.",
      "Compare explanation and transparency techniques and select ones appropriate to a given user, task, and level of risk.",
      "Apply published human-AI interaction guidelines to critique an existing AI-enabled product.",
      "Conduct user research using interviews, observation, and surveys to identify needs for an AI-enabled tool.",
      "Design conversational and agentic AI interactions, including prompts, turn-taking, confirmation steps, and human override.",
      "Construct personas, journey maps, and task flows that define where AI assists, automates, or defers to people.",
      "Create low-fidelity and interactive prototypes of AI-enabled tools using low-code or no-code prototyping platforms.",
      "Apply accessibility standards and inclusive design practices to AI interfaces.",
      "Evaluate the usability and user experience of AI-enabled systems using heuristic evaluation, usability testing, and standard metrics.",
      "Recommend design improvements based on usability evidence and present them to business stakeholders."
    ],
    content: [
      {
        topic: "Foundations of human-centered design",
        items: [
          "Human-centered design principles and process",
          "User experience, usability, and utility",
          "Design thinking stages",
          "Why AI products require distinct design attention"
        ]
      },
      {
        topic: "How people understand AI systems",
        items: [
          "Mental models and conceptual models",
          "Expectations shaped by marketing and media",
          "Anthropomorphism and perceived intelligence",
          "Communicating capabilities and limits"
        ]
      },
      {
        topic: "Trust, reliance, and adoption",
        items: [
          "Calibrated trust versus overreliance and underreliance",
          "Technology acceptance and adoption models",
          "Factors that build and erode trust over time",
          "Organizational context and user adoption"
        ]
      },
      {
        topic: "Explainability and transparency in interfaces",
        items: [
          "Types of explanations for AI outputs",
          "Confidence indicators and uncertainty displays",
          "Source citation and provenance for generative AI",
          "Matching explanation depth to user and risk"
        ]
      },
      {
        topic: "Human-AI interaction guidelines",
        items: [
          "Google PAIR People + AI Guidebook",
          "Microsoft Guidelines for Human-AI Interaction",
          "Usability heuristics adapted for AI",
          "Using guidelines to critique existing products"
        ]
      },
      {
        topic: "User research for AI-enabled tools",
        items: [
          "Interviews, observation, and contextual inquiry",
          "Surveys and analytics",
          "Synthesizing findings with affinity mapping",
          "Ethical conduct and informed consent in user research"
        ]
      },
      {
        topic: "Defining the human and AI roles",
        items: [
          "Personas and jobs to be done",
          "Journey maps and task flows",
          "Assist, automate, or defer decisions",
          "Human-in-the-loop and human-on-the-loop patterns"
        ]
      },
      {
        topic: "Designing for errors, feedback, and control",
        items: [
          "Failure modes and graceful degradation",
          "User feedback loops and corrections",
          "Undo, override, and escalation to a person",
          "Setting defaults and user preferences"
        ]
      },
      {
        topic: "Conversational interaction design",
        items: [
          "Chat and voice interface fundamentals",
          "Turn-taking, tone, and persona",
          "Prompt guidance and onboarding",
          "Handling ambiguity, refusals, and repair"
        ]
      },
      {
        topic: "Agentic AI interaction design",
        items: [
          "Delegation and levels of autonomy",
          "Plan previews, confirmations, and approvals",
          "Activity logs and status visibility",
          "Boundaries, permissions, and stopping an agent"
        ]
      },
      {
        topic: "Accessibility and inclusive design",
        items: [
          "WCAG principles and success criteria",
          "Assistive technology and AI interfaces",
          "Language, literacy, and cultural considerations",
          "Designing for diverse users and avoiding exclusion"
        ]
      },
      {
        topic: "Prototyping AI experiences",
        items: [
          "Sketching and low-fidelity prototypes",
          "Low-code and no-code prototyping platforms",
          "Wizard-of-Oz and simulated AI prototypes",
          "Using generative AI tools to accelerate prototyping"
        ]
      },
      {
        topic: "Heuristic and expert evaluation",
        items: [
          "Heuristic evaluation methods",
          "Cognitive walkthroughs",
          "Severity ratings and prioritization",
          "Evaluating AI-specific interaction risks"
        ]
      },
      {
        topic: "Usability testing and UX measurement",
        items: [
          "Planning a usability test and writing tasks",
          "Moderated and unmoderated remote testing",
          "Task success, time on task, and error rates",
          "Standardized questionnaires such as the System Usability Scale"
        ]
      },
      {
        topic: "Design, adoption, and system performance",
        items: [
          "Linking UX metrics to adoption and business outcomes",
          "Interaction design effects on human-AI team performance",
          "Iterating after launch with usage data",
          "Dark patterns and manipulative design"
        ]
      },
      {
        topic: "Communicating and defending design decisions",
        items: [
          "Design rationale and documentation",
          "Presenting findings to business stakeholders",
          "Balancing user needs, business goals, and constraints",
          "Reflection on human-centered practice"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Nudelman, Greg, and Daria Kempka. UX for AI: A Framework for Designing AI-Driven Products, 1st ed. Hoboken, NJ: Wiley, 2025. Recommended",
        "Shneiderman, Ben. Human-Centered AI, 1st ed. New York: Oxford University Press, 2022. Recommended"
      ],
      supplemental: [
        "Deibel, Diana, and Rebecca Evanhoe. Conversations with Things: UX Design for Chat and Voice, 1st ed. Brooklyn, NY: Rosenfeld Media, 2021.",
        "Google People + AI Research (PAIR). People + AI Guidebook. Google, online edition. Free resource.",
        "Amershi, Saleema, et al. \"Guidelines for Human-AI Interaction.\" Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems. ACM, 2019. Free resource.",
        "World Wide Web Consortium (W3C). Web Content Accessibility Guidelines (WCAG) 2.2. W3C, 2023. Free resource.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and Nielsen Norman Group on AI user experience."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, guidelines, and case studies to prepare for weekly discussions on human-AI interaction design.",
        "Write a design critique that applies published human-AI interaction guidelines to an AI tool the student uses for school or work.",
        "Conduct and document user interviews for an AI-enabled tool, then write a research summary with personas and a journey map.",
        "Use a generative AI tool and a low-code prototyping platform to build an interactive prototype, and write a design rationale explaining the choices made and the AI outputs that were accepted, revised, or rejected."
      ],
      critical: [
        "Analyze a real AI deployment in which users overrelied on or rejected the system, and interpret how interface design contributed to the outcome.",
        "Compare two explanation or transparency approaches for the same AI task and justify which better supports calibrated trust for the intended users.",
        "Design an interaction flow for an agentic AI tool that defines levels of autonomy, confirmation points, and human override, and defend it in a team presentation.",
        "Evaluate an AI-enabled tool through a usability test and accessibility review, and prioritize recommendations based on severity and business impact."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 108 F Living in an Online World",
        "CIS 258 F Applied AI: Machine Learning, Deep Learning and NLP",
        "STAT C1000 Introduction to Statistics"
      ],
      distinction: "BUS 256 F and BUS 257 F teach students to use AI tools and write effective prompts as end users. HAI 380 shifts the student into the designer's role: students conduct user research, design how people and AI systems share tasks, build interactive prototypes, and evaluate usability and trust with formal methods and quantitative usability metrics. The course applies statistics from STAT C1000 to interpret usability test data and applies knowledge of model behavior from CIS 258 F to design for errors and uncertainty.",
      criticalThinking: "Demonstrated through writing (design critique, case analysis paper, and usability test report), computation (task success rates, time on task, and System Usability Scale scores), and oral communication (team design presentation defended before stakeholders).",
      research: "Students locate and evaluate peer-reviewed human-computer interaction research and industry reports through library databases, and conduct primary user research through interviews and usability testing.",
      ploAlignment: [
        "SLO 1 supports PLO 2 (Lead organizational change and digital transformation) and PLO 3 (Govern responsible AI)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, management, or computer information systems, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "13-1111 Management Analysts; 11-1021 General and Operations Managers",
      fsa: "A35 - Business, B90 - Management, M50 - Computer Information Systems"
    },
    sampleEssay: "Users of a company's AI expense-review assistant either accept every recommendation without checking or ignore the tool entirely. Analyze why both patterns occur using course concepts on trust, explainability, and human-AI interaction guidelines, and propose specific interface and workflow design changes that would encourage appropriate reliance. Explain how you would test your changes with users."
  },
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
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    hours: {
      lecture: 4,
      lab: 0,
      prep: 8,
      total: 216,
      lectureTerm: 72
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is an upper division course that is part of the Applied Human-AI Collaboration and Leadership baccalaureate program. It provides the upper-division organizational behavior and leadership foundation required for students who will lead AI adoption in organizations."
    },
    description: "This course examines advanced concepts in organizational behavior and leadership within technology-driven and AI-enabled environments. Students analyze how artificial intelligence is transforming workplace structures, decision-making, and leadership practices. Emphasis is placed on managing organizational change, leading cross-functional teams, and designing human-AI collaboration strategies that enhance performance and innovation.",
    entrySkills: [
      "Admission into the baccalaureate degree program upon completion of all required lower division courses."
    ],
    slos: [
      {
        outcome: "Analyze the impact of artificial intelligence on organizational behavior, team dynamics, and leadership practices.",
        assessment: "Case Analysis Paper"
      },
      {
        outcome: "Evaluate leadership strategies for managing change in AI-enabled environments.",
        assessment: "Exam"
      },
      {
        outcome: "Design organizational and leadership approaches that support effective human-AI collaboration.",
        assessment: "Project"
      }
    ],
    deSamples: [
      {
        objective: "Analyze the impact of artificial intelligence on organizational behavior, team dynamics, and leadership practices.",
        assignment: "Case analysis paper on a real organization's AI adoption, submitted in Canvas, with a draft reviewed by peers in a Canvas discussion.",
        evaluation: "Rubric-scored paper with written instructor feedback in Canvas SpeedGrader."
      },
      {
        objective: "Evaluate leadership strategies for managing change in AI-enabled environments.",
        assignment: "Weekly discussion comparing leadership approaches in a current AI transformation, followed by a Canvas exam with scenario-based questions.",
        evaluation: "Discussion rubric and Canvas exam."
      },
      {
        objective: "Design organizational and leadership approaches that support effective human-AI collaboration.",
        assignment: "Team project designing a human-AI collaboration strategy, built in Canvas Groups and presented live through Zoom or as a recorded Canvas Studio presentation.",
        evaluation: "Project and oral presentation rubrics, plus peer evaluation of team contributions."
      }
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
      "Communicate leadership recommendations to executive and frontline audiences in writing and in oral presentations."
    ],
    content: [
      {
        topic: "Organizational behavior in the age of AI",
        items: [
          "Levels of analysis: individual, group, organization",
          "Historical waves of workplace technology and their effects on work",
          "Why AI differs: prediction, generation, and autonomy",
          "Evidence-based management and the role of data"
        ]
      },
      {
        topic: "Work design and human-AI task allocation",
        items: [
          "Job characteristics model revisited",
          "Automation versus augmentation",
          "Task decomposition and human-in-the-loop design",
          "Emerging roles: AI champions, prompt specialists, AI operations"
        ]
      },
      {
        topic: "Perception, judgment, and decision-making with AI",
        items: [
          "Bounded rationality and heuristics",
          "Automation bias, algorithm aversion, and appropriate reliance",
          "Explainability and its effect on trust",
          "Group decision processes with AI input"
        ]
      },
      {
        topic: "Motivation, engagement, and well-being",
        items: [
          "Content and process theories of motivation",
          "Self-determination theory and autonomy in AI-assisted work",
          "Technostress, deskilling, and job insecurity",
          "Designing for meaningful work"
        ]
      },
      {
        topic: "Attitudes, trust, and psychological safety",
        items: [
          "Job satisfaction and organizational commitment",
          "Trust in technology and trust in leaders",
          "Psychological safety and experimentation with AI tools",
          "Measuring employee sentiment"
        ]
      },
      {
        topic: "Teams and cross-functional collaboration",
        items: [
          "Team composition, roles, and development stages",
          "Bridging technical and business teams",
          "Virtual and hybrid team practices",
          "AI agents and assistants as team members"
        ]
      },
      {
        topic: "Communication in AI-enabled organizations",
        items: [
          "Communication channels and information richness",
          "Translating technical concepts for non-technical stakeholders",
          "AI-generated communication: benefits, risks, and authenticity",
          "Crisis and change communication"
        ]
      },
      {
        topic: "Conflict, negotiation, and power",
        items: [
          "Sources of conflict in technology change",
          "Negotiation strategies across functions",
          "Bases of power and influence tactics",
          "Organizational politics during AI adoption"
        ]
      },
      {
        topic: "Leadership theories and their application",
        items: [
          "Trait, behavioral, and contingency approaches",
          "Transformational, servant, and authentic leadership",
          "Adaptive leadership for complex problems",
          "Leading with and through AI tools"
        ]
      },
      {
        topic: "Leading digital transformation",
        items: [
          "Strategic vision and sense-making",
          "Leader roles across the AI adoption lifecycle",
          "Balancing efficiency gains with workforce impact",
          "Executive, middle-manager, and frontline leadership"
        ]
      },
      {
        topic: "Organizational change management",
        items: [
          "Lewin, Kotter, and ADKAR models",
          "Readiness for change and resistance",
          "Pilots, scaling, and sustaining change",
          "Measuring change outcomes"
        ]
      },
      {
        topic: "Organizational culture and learning",
        items: [
          "Elements and levels of culture",
          "Innovation and learning cultures",
          "Upskilling and reskilling strategies",
          "Knowledge management with AI"
        ]
      },
      {
        topic: "Organizational structure and design",
        items: [
          "Centralized versus federated AI functions",
          "Centers of excellence and governance bodies",
          "Flattening, span of control, and role redesign",
          "Agile and networked organizational forms"
        ]
      },
      {
        topic: "Ethics, equity, and inclusion in AI-enabled workplaces",
        items: [
          "AI in hiring, evaluation, and promotion",
          "Employee monitoring and privacy",
          "Bias, fairness, and accessibility",
          "Ethical leadership and accountability"
        ]
      },
      {
        topic: "Performance management and human resources",
        items: [
          "Goal setting and feedback with AI analytics",
          "Redefining productivity metrics",
          "Workforce planning and talent strategy",
          "Labor relations and employee voice"
        ]
      },
      {
        topic: "Designing human-AI collaboration strategies",
        items: [
          "Integrating individual, team, and organizational factors",
          "Building a collaboration and adoption roadmap",
          "Presenting recommendations to stakeholders",
          "Reflection on leadership development"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
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
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Robbins, Stephen P., and Timothy A. Judge. Organizational Behavior, 19th ed. Hoboken, NJ: Pearson, 2022. Recommended",
        "Daugherty, Paul R., and H. James Wilson. Human + Machine: Reimagining Work in the Age of AI, Updated and Expanded ed. Boston: Harvard Business Review Press, 2024. Recommended",
        "Mollick, Ethan. Co-Intelligence: Living and Working with AI, 1st ed. New York: Portfolio, 2024. Recommended"
      ],
      supplemental: [
        "Black, J. Stewart, David S. Bright, et al. Organizational Behavior, 1st ed. Houston, TX: OpenStax, 2019. Open educational resource (free).",
        "Northouse, Peter G. Leadership: Theory and Practice, 9th ed. Thousand Oaks, CA: SAGE, 2021.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI and the workforce."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and case studies to prepare for weekly discussions on organizational behavior in AI-enabled workplaces.",
        "Write a case analysis paper that examines how a real organization's AI adoption affected job design, employee attitudes, and team dynamics.",
        "Complete a leadership self-assessment and write a reflective paper on personal leadership strengths for leading technology change.",
        "Prepare a stakeholder communication plan that explains an AI initiative to executive, management, and frontline audiences."
      ],
      critical: [
        "Evaluate two leadership approaches used during an AI transformation and justify which was more effective, using course theories as evidence.",
        "Analyze a workplace decision in which people relied on AI recommendations and assess the risks of automation bias and the safeguards that were or should have been in place.",
        "Design a change management plan for an AI adoption initiative, including readiness assessment, resistance strategies, and success measures.",
        "Working in a cross-functional team, design a human-AI collaboration strategy for an organization and defend it in a presentation to a panel."
      ]
    },
    rigor: {
      buildsOn: [
        "BUS 271 F Leadership and Business Ethics",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 108 F Living in an Online World"
      ],
      distinction: "BUS 271 F introduces leadership theory and business ethics at the lower-division level. BUS 371 requires students to apply and evaluate organizational behavior and leadership theory in AI-driven organizational change, use research evidence to analyze real organizations, and design organization-level strategies for human-AI collaboration.",
      criticalThinking: "Demonstrated through writing (case analysis paper and change management plan) and oral communication (team strategy presentation defended before a panel).",
      research: "Students locate and evaluate peer-reviewed research and industry reports through library databases for the case analysis paper and team project.",
      ploAlignment: [
        "SLO 1 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 2 supports PLO 2 (Lead organizational change and digital transformation)",
        "SLO 3 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, or management, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0506.00 - Business Management",
      soc: "11-1021 General and Operations Managers; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management"
    },
    sampleEssay: "An organization introduced AI tools that doubled productivity on some teams, while other teams report lower morale and resistance. Analyze these different outcomes using organizational behavior theories of motivation, trust, and team dynamics, and recommend a leadership approach that would improve results across the organization. Support your recommendation with evidence from course readings."
  },
  {
    id: "hai-495a",
    prefix: "HAI",
    number: "495A",
    title: "AI Implementation Capstone I",
    units: 3,
    block: "Capstone",
    year: "Year 4",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Fall",
      honors: "No",
      justification: "This is the first course in the two-semester capstone sequence of the Applied Human-AI Collaboration and Leadership baccalaureate program. Students work with a real organizational partner to define a problem, research it, analyze feasibility and stakeholders, assess responsible-AI risks, and win approval for an implementation proposal that they carry out in HAI 495B."
    },
    prerequisite: "HAI 350 F and HAI 370 F with a grade of C or better.",
    prerequisiteType: "Sequential course within and across disciplines",
    prerequisiteJustification: "The capstone proposal requires students to assess organizational readiness, identify and prioritize AI use cases, and build an implementation plan (HAI 350 F), and to define scope, schedule, resources, risks, and stakeholder communication using project management methods (HAI 370 F); students without these skills cannot produce a feasible, approvable project proposal.",
    prerequisiteGrade: "A grade of C or better",
    description: "In this capstone course, students identify a real-world organizational problem and develop a proposal for an AI-enabled solution. Emphasis is placed on research, feasibility, and project planning.",
    entrySkills: [
      "Assess an organization's AI readiness across strategy, data, technology, talent, processes, culture, and governance using a structured maturity model. (HAI 350 F)",
      "Prioritize a portfolio of AI use cases using criteria such as business value, feasibility, data availability, risk, and time to value. (HAI 350 F)",
      "Design a phased implementation roadmap that sequences pilots, milestones, resources, dependencies, and decision gates. (HAI 350 F)",
      "Develop a project charter, scope statement, and work breakdown structure for an AI-enabled solution. (HAI 370 F)",
      "Identify, analyze, and prioritize technical, data, ethical, and organizational risks in a risk register with response strategies. (HAI 370 F)",
      "Formulate a stakeholder analysis and communication plan that aligns technical and non-technical audiences. (HAI 370 F)"
    ],
    slos: [
      {
        outcome: "Define a real-world problem appropriate for AI-enabled solutions.",
        assessment: "Problem Statement and Partner Brief"
      },
      {
        outcome: "Develop a structured project proposal including scope and methodology.",
        assessment: "Capstone Project Proposal"
      },
      {
        outcome: "Conduct feasibility and stakeholder analysis.",
        assessment: "Feasibility and Stakeholder Analysis Report"
      }
    ],
    deSamples: [
      {
        objective: "Define a real-world problem appropriate for AI-enabled solutions.",
        assignment: "Problem statement and partner brief submitted in Canvas, developed after a recorded or live Zoom discovery interview with the organizational partner and refined through peer review in a Canvas discussion.",
        evaluation: "Rubric-scored problem statement with written instructor feedback in Canvas SpeedGrader and a required revision."
      },
      {
        objective: "Develop a structured project proposal including scope and methodology.",
        assignment: "Capstone project proposal (approximately 3,000 to 4,000 words) drafted in stages in Canvas, with individual Zoom conferences with the instructor, and presented live through Zoom or as a recorded Canvas Studio presentation to the instructor and partner for approval.",
        evaluation: "Proposal and oral presentation rubrics, partner approval form, and instructor feedback on each draft."
      },
      {
        objective: "Conduct feasibility and stakeholder analysis.",
        assignment: "Feasibility and stakeholder analysis report submitted in Canvas, including a stakeholder map, interview or survey summary, and technical, operational, financial, and ethical feasibility findings.",
        evaluation: "Rubric-scored report with written instructor feedback in Canvas SpeedGrader."
      }
    ],
    objectives: [
      "Identify a real organizational partner and negotiate a partner agreement that defines access, confidentiality, data handling, and the partner's role in the capstone.",
      "Define an organizational problem or opportunity in measurable terms and justify why it is appropriate for an AI-enabled solution.",
      "Synthesize peer-reviewed research, industry reports, and comparable cases into a literature and industry review that informs the proposed solution.",
      "Analyze the current-state process, data sources, and systems related to the problem using process mapping and root cause analysis.",
      "Conduct a stakeholder analysis that identifies interests, influence, and likely resistance, and gather stakeholder input through interviews or surveys conducted under human-subjects safeguards.",
      "Evaluate the technical, operational, financial, and ethical feasibility of alternative AI-enabled solutions, including low-code, no-code, and generative AI options.",
      "Assess responsible-AI risks, including bias, privacy, security, transparency, and workforce impact, using the NIST AI Risk Management Framework.",
      "Formulate project goals, scope, deliverables, and success metrics that can be measured during the HAI 495B implementation.",
      "Design a project methodology, work breakdown structure, timeline, and resource plan for building or piloting the solution.",
      "Develop a governance and change management approach that addresses data privacy, human oversight, and adoption by affected employees.",
      "Prepare a structured capstone proposal of approximately 3,000 to 4,000 words that integrates research, analysis, and planning.",
      "Communicate and defend the proposal in an oral presentation to the instructor and organizational partner and revise it in response to feedback."
    ],
    content: [
      {
        topic: "Capstone orientation and expectations",
        items: [
          "Purpose of the two-semester capstone and its link to all program learning outcomes",
          "Capstone deliverables, milestones, and evaluation rubrics",
          "Types of partners: employers, nonprofits, campus departments, student workplaces and ventures",
          "Professional conduct, academic integrity, and documented AI use"
        ]
      },
      {
        topic: "Securing an organizational partner",
        items: [
          "Identifying and approaching potential partners",
          "Partner agreements: scope, access, confidentiality, and expectations",
          "Data privacy rules: no confidential or personal data in public AI tools",
          "Managing the partner relationship and communication cadence"
        ]
      },
      {
        topic: "Problem discovery and definition",
        items: [
          "Discovery interviews and site or process observation",
          "Writing a measurable problem statement",
          "Distinguishing symptoms from root causes",
          "Criteria for problems suited to AI-enabled solutions"
        ]
      },
      {
        topic: "Applied research methods for organizational projects",
        items: [
          "Action research and design science approaches",
          "Qualitative, quantitative, and mixed-methods options",
          "Selecting methods that fit the problem and partner",
          "Research ethics and reliability of evidence"
        ]
      },
      {
        topic: "Literature and industry review",
        items: [
          "Searching library databases and evaluating sources",
          "Using industry reports, case studies, and vendor materials critically",
          "Synthesizing findings into a review that informs design",
          "Citation and documentation standards"
        ]
      },
      {
        topic: "Current-state analysis",
        items: [
          "Process mapping and value stream analysis",
          "Root cause analysis techniques",
          "Inventory of data sources, quality, and ownership",
          "Baseline measurement of current performance"
        ]
      },
      {
        topic: "Stakeholder analysis and engagement",
        items: [
          "Stakeholder identification, mapping, and influence analysis",
          "Designing interviews and short surveys",
          "Human-subjects considerations: informed consent, anonymity, and institutional review where applicable",
          "Summarizing stakeholder needs and concerns"
        ]
      },
      {
        topic: "Generating and comparing solution options",
        items: [
          "Design thinking: ideation, concept development, and assumption testing",
          "Build, buy, or configure decisions",
          "Low-code, no-code, and generative AI solution patterns",
          "Human-in-the-loop and augmentation designs"
        ]
      },
      {
        topic: "Feasibility analysis",
        items: [
          "Technical feasibility: tools, data, and integration",
          "Operational feasibility: workflow fit and skills",
          "Financial feasibility: costs, benefits, and return on investment",
          "Selecting and justifying a recommended option"
        ]
      },
      {
        topic: "Responsible-AI risk assessment",
        items: [
          "NIST AI Risk Management Framework functions: govern, map, measure, manage",
          "Bias, fairness, and accessibility risks",
          "Privacy, security, intellectual property, and regulatory considerations",
          "Workforce impact and mitigation plans"
        ]
      },
      {
        topic: "Project scope, goals, and success metrics",
        items: [
          "Writing goals and measurable objectives",
          "Defining scope, deliverables, and exclusions",
          "Selecting key performance indicators and evaluation design",
          "Planning data collection for impact measurement"
        ]
      },
      {
        topic: "Project methodology and planning",
        items: [
          "Agile, iterative, and hybrid approaches for AI projects",
          "Work breakdown structure and timeline for HAI 495B",
          "Resource, tool, and budget planning",
          "Risk register and contingency planning"
        ]
      },
      {
        topic: "Governance and change management planning",
        items: [
          "Decision rights, approvals, and human oversight",
          "Documentation and accountability practices",
          "Change management and adoption planning",
          "Communication plan for affected employees and leaders"
        ]
      },
      {
        topic: "Writing the capstone proposal",
        items: [
          "Proposal structure and professional writing standards",
          "Integrating research, analysis, and planning into one argument",
          "Drafting, peer review, and revision cycles",
          "Executive summary for organizational decision-makers"
        ]
      },
      {
        topic: "Proposal presentation and approval",
        items: [
          "Designing a persuasive proposal presentation",
          "Responding to questions and objections",
          "Partner and instructor approval process",
          "Reflection on leadership growth and planning for HAI 495B"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized instruction",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
    ],
    evaluation: [
      "Class Participation",
      "Class Work",
      "Homework",
      "Oral Presentation",
      "Papers",
      "Projects",
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Saunders, Mark N. K., Philip Lewis, and Adrian Thornhill. Research Methods for Business Students, 9th ed. Hoboken, NJ: Pearson, 2023. Recommended",
        "Booth, Wayne C., Gregory G. Colomb, Joseph M. Williams, Joseph Bizup, and William T. FitzGerald. The Craft of Research, 5th ed. Chicago: University of Chicago Press, 2024. Recommended",
        "National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. U.S. Department of Commerce, 2023. Free resource. Recommended"
      ],
      supplemental: [
        "Coghlan, David. Doing Action Research in Your Own Organization, 5th ed. Thousand Oaks, CA: SAGE, 2019.",
        "Liedtka, Jeanne, Tim Ogilvie, and Rachel Brozenske. The Designing for Growth Field Book: A Step-by-Step Project Guide, 2nd ed. New York: Columbia Business School Publishing, 2019.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI implementation."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, research articles, and case studies outside of class and write weekly research log entries that summarize sources relevant to the capstone problem.",
        "Write a problem statement and partner brief that describes the organization, the problem, its measurable impact, and why an AI-enabled solution is appropriate.",
        "Write an annotated bibliography and a literature and industry review that synthesizes research and comparable cases related to the capstone problem.",
        "Write a capstone project proposal of approximately 3,000 to 4,000 words, developed through multiple drafts with instructor and peer feedback, that includes the problem, research, feasibility, risk assessment, scope, methodology, timeline, and success metrics."
      ],
      critical: [
        "Analyze the partner organization's current-state process and data using process mapping and root cause analysis, and identify where AI could add value.",
        "Evaluate the technical, operational, financial, and ethical feasibility of at least three solution options and justify the recommended option.",
        "Assess the responsible-AI risks of the recommended solution using the NIST AI Risk Management Framework and propose specific mitigation and oversight measures.",
        "Defend the capstone proposal in an oral presentation to the instructor and organizational partner, responding to questions and incorporating feedback into the approved version."
      ]
    },
    rigor: {
      buildsOn: [
        "HAI 300 F Foundations of Human-AI Collaboration",
        "HAI 310 F Applied AI for Organizational Decision-Making",
        "HAI 320 F Data Analytics and Visualization for Leaders",
        "HAI 340 F Organizational Leadership in AI-Enabled Environments",
        "HAI 350 F AI Strategy and Implementation",
        "HAI 360 F Ethics, Governance, and Responsible AI",
        "HAI 370 F Managing AI Projects and Cross-Functional Teams",
        "HAI 380 F Human-AI Interaction and Experience Design",
        "BUS 371 F Advanced Organizational Behavior and Leadership in AI-Enabled Environments",
        "ENGL 301 F Technical Writing",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 255 F Introduction to Business and Data Analytics",
        "BUS 271 F Leadership and Business Ethics"
      ],
      distinction: "Lower-division courses such as BUS 256 F, BUS 257 F, BUS 255 F, and BUS 271 F introduce AI tools, analytics, and leadership ethics through instructor-defined exercises. Upper-division HAI courses develop each competency separately. HAI 495A requires students to integrate the full HAI core in a self-directed project with a real organization: they define an unstructured problem, conduct original stakeholder research, synthesize scholarly and industry literature, evaluate feasibility and responsible-AI risk, and produce a professional proposal that a partner organization must approve before implementation.",
      criticalThinking: "Demonstrated through writing (literature and industry review, feasibility and risk analysis, and a 3,000 to 4,000 word capstone proposal) and oral communication (proposal presentation defended before the instructor and organizational partner).",
      research: "Students locate and evaluate peer-reviewed research and industry reports through library databases for the literature and industry review, and collect primary data through stakeholder interviews or surveys under human-subjects safeguards, including informed consent and institutional review where applicable.",
      ploAlignment: [
        "SLO 1 supports PLO 1 (Implement AI-enabled solutions) and PLO 4 (Develop and communicate AI strategy)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions), PLO 3 (Govern responsible AI), and PLO 4 (Develop and communicate AI strategy)",
        "SLO 3 supports PLO 2 (Lead organizational change and digital transformation) and PLO 3 (Govern responsible AI)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, management, or computer information systems, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1082 Project Management Specialists; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management, M50 - Computer Information Systems"
    },
    sampleEssay: "Your capstone partner wants an AI solution that would require sharing customer records with a public generative AI tool. Evaluate the feasibility and responsible-AI risks of this request, and propose an alternative project design that still meets the partner's goal. Justify your recommendation to the partner using your feasibility analysis and the NIST AI Risk Management Framework."
  },
  {
    id: "hai-495b",
    prefix: "HAI",
    number: "495B",
    title: "AI Implementation Capstone II",
    units: 3,
    block: "Capstone",
    year: "Year 4",
    status: "in-review",
    updated: "2026-10-09",
    header: {
      ccApproved: "",
      dcccApproved: "",
      boardApproved: "",
      stateApproved: "",
      effectiveTerm: "",
      stateControl: "",
      cid: ""
    },
    proposal: {
      startYear: "",
      startSemester: "Spring",
      honors: "No",
      justification: "This is the culminating course of the Applied Human-AI Collaboration and Leadership baccalaureate program. Students implement or pilot the AI-enabled solution approved in HAI 495A with a real organizational partner, measure its impact, document governance and change management, and present results to a professional panel, demonstrating every program learning outcome in an applied setting."
    },
    prerequisite: "HAI 495A F with a grade of C or better.",
    prerequisiteType: "Sequential course within a discipline",
    prerequisiteJustification: "HAI 495B implements, evaluates, and presents the project proposal that the student researched, planned, and had approved by the instructor and organizational partner in HAI 495A F; students cannot begin implementation without an approved proposal, partner agreement, risk assessment, and success metrics.",
    prerequisiteGrade: "A grade of C or better",
    description: "This culminating course requires students to design, implement, and present an AI-enabled solution to an organizational challenge. Students integrate technical, leadership, and ethical considerations.",
    entrySkills: [
      "Define an organizational problem or opportunity in measurable terms and justify why it is appropriate for an AI-enabled solution. (HAI 495A F)",
      "Assess responsible-AI risks, including bias, privacy, security, transparency, and workforce impact, using the NIST AI Risk Management Framework. (HAI 495A F)",
      "Formulate project goals, scope, deliverables, and success metrics that can be measured during the HAI 495B implementation. (HAI 495A F)",
      "Design a project methodology, work breakdown structure, timeline, and resource plan for building or piloting the solution. (HAI 495A F)",
      "Develop a governance and change management approach that addresses data privacy, human oversight, and adoption by affected employees. (HAI 495A F)"
    ],
    slos: [
      {
        outcome: "Design and implement an AI-enabled solution addressing an organizational need.",
        assessment: "Implementation Project and Build Documentation"
      },
      {
        outcome: "Evaluate the effectiveness and impact of the implemented solution.",
        assessment: "Final Capstone Report"
      },
      {
        outcome: "Present findings and recommendations to professional audiences.",
        assessment: "Professional Panel Presentation and E-Portfolio"
      }
    ],
    deSamples: [
      {
        objective: "Design and implement an AI-enabled solution addressing an organizational need.",
        assignment: "Build or pilot the approved solution in iterative sprints, submitting sprint reports, screen-recorded demonstrations in Canvas Studio, and build documentation in Canvas, with individual Zoom check-ins with the instructor.",
        evaluation: "Implementation rubric, sprint report feedback in Canvas SpeedGrader, and partner feedback form."
      },
      {
        objective: "Evaluate the effectiveness and impact of the implemented solution.",
        assignment: "Final capstone report (approximately 5,000 to 6,000 words) drafted in stages in Canvas, reporting baseline and post-implementation metrics, stakeholder feedback, governance documentation, and recommendations, with peer review in a Canvas discussion.",
        evaluation: "Rubric-scored report with written instructor feedback on each draft in Canvas SpeedGrader."
      },
      {
        objective: "Present findings and recommendations to professional audiences.",
        assignment: "Public presentation to a professional panel of advisory board members and employer partners delivered live through Zoom or as a recorded Canvas Studio presentation followed by a live question session, plus a capstone e-portfolio linked in Canvas.",
        evaluation: "Oral presentation rubric scored by the instructor and panel members, and e-portfolio rubric."
      }
    ],
    objectives: [
      "Execute the approved project plan, managing scope, schedule, resources, risks, and partner communication throughout implementation.",
      "Design the AI-enabled solution's workflow, user interaction, and human oversight points based on the approved proposal and stakeholder needs.",
      "Construct a working solution or pilot using appropriate tools, such as low-code, no-code, and generative AI platforms, while protecting confidential and personal data.",
      "Test the solution for accuracy, reliability, usability, bias, and security, and document the results.",
      "Revise the solution through iterative cycles based on stakeholder feedback and test results.",
      "Measure the solution's impact against baseline data and the success metrics defined in HAI 495A.",
      "Evaluate the effectiveness, value, and limitations of the solution, including unintended consequences for employees and customers.",
      "Prepare governance documentation, including a risk register update, data handling procedures, human oversight roles, and a monitoring plan.",
      "Carry out change management and training activities that support adoption by affected users.",
      "Formulate recommendations for scaling, sustaining, modifying, or discontinuing the solution.",
      "Compose a final capstone report of approximately 5,000 to 6,000 words and present findings and recommendations to a professional panel.",
      "Assemble a professional e-portfolio and appraise personal growth as a leader of human-AI collaboration."
    ],
    content: [
      {
        topic: "Implementation kickoff",
        items: [
          "Revalidating the approved proposal, scope, and partner agreement",
          "Confirming success metrics and baseline data",
          "Setting up the project board, sprint plan, and communication cadence",
          "Data privacy and security rules for the build environment"
        ]
      },
      {
        topic: "Solution design",
        items: [
          "Workflow and process redesign",
          "Human-in-the-loop and oversight points",
          "User experience and interaction design",
          "Design documentation and partner sign-off"
        ]
      },
      {
        topic: "Tool selection and environment setup",
        items: [
          "Low-code and no-code platforms",
          "Generative AI assistants, custom instructions, and retrieval approaches",
          "Automation and integration tools",
          "Licensing, cost, and approved-tool considerations"
        ]
      },
      {
        topic: "Data preparation and protection",
        items: [
          "Data sourcing, quality checks, and cleaning",
          "De-identification and use of synthetic or sample data",
          "Keeping confidential and personal data out of public AI tools",
          "Data ownership and retention agreements"
        ]
      },
      {
        topic: "Building the minimum viable solution",
        items: [
          "Prototyping and incremental builds",
          "Prompt and workflow design and documentation",
          "Version control and change logs",
          "Sprint reviews and demonstrations"
        ]
      },
      {
        topic: "Testing and quality assurance",
        items: [
          "Accuracy, reliability, and edge-case testing",
          "Usability testing with representative users",
          "Bias, fairness, and accessibility testing",
          "Security and misuse testing"
        ]
      },
      {
        topic: "Piloting with users",
        items: [
          "Pilot design, scope, and participant selection",
          "Training materials and user guidance",
          "Human-subjects considerations: consent and anonymity in feedback collection",
          "Collecting usage data and observations"
        ]
      },
      {
        topic: "Iteration with stakeholder feedback",
        items: [
          "Gathering structured feedback from users and leaders",
          "Prioritizing changes against scope and timeline",
          "Managing scope change with the partner",
          "Documenting design decisions"
        ]
      },
      {
        topic: "Impact measurement",
        items: [
          "Comparing results with baseline data",
          "Quantitative metrics: time, cost, quality, and accuracy",
          "Qualitative evidence: user experience and trust",
          "Limitations and threats to validity"
        ]
      },
      {
        topic: "Governance and responsible-AI documentation",
        items: [
          "Updating the risk register and mitigation status",
          "Model or system cards and usage policies",
          "Human oversight roles and escalation procedures",
          "Ongoing monitoring and review plan"
        ]
      },
      {
        topic: "Change management and adoption",
        items: [
          "Readiness and resistance during rollout",
          "Communication with affected employees and leaders",
          "Training, support, and reinforcement",
          "Measuring adoption"
        ]
      },
      {
        topic: "Sustainability, scaling, and handoff",
        items: [
          "Total cost of ownership and return on investment",
          "Recommendations to scale, sustain, modify, or discontinue",
          "Handoff documentation for the partner organization",
          "Lessons learned review"
        ]
      },
      {
        topic: "Writing the final capstone report",
        items: [
          "Report structure and professional writing standards",
          "Presenting evidence, data visualizations, and findings",
          "Drafting, peer review, and revision cycles",
          "Executive summary for organizational decision-makers"
        ]
      },
      {
        topic: "Professional panel presentation",
        items: [
          "Designing a presentation for executive and professional audiences",
          "Live demonstration of the solution",
          "Responding to panel questions",
          "Incorporating panel feedback into final recommendations"
        ]
      },
      {
        topic: "E-portfolio and leadership reflection",
        items: [
          "Curating program and capstone artifacts",
          "Mapping evidence to program learning outcomes",
          "Reflection on growth as a leader of human-AI collaboration",
          "Career planning and professional networking"
        ]
      }
    ],
    methods: [
      "Course type: scheduled lecture hours",
      "Lecture",
      "Discussion",
      "Facilitates group activities",
      "Individualized instruction",
      "Individualized feedback on student work",
      "Student presentations",
      "Guest speakers",
      "Show instructional videos"
    ],
    evaluation: [
      "Class Participation",
      "Class Work",
      "Homework",
      "Oral Presentation",
      "Papers",
      "Portfolios",
      "Projects",
      "Research Projects"
    ],
    textbooks: {
      recommended: [
        "Liedtka, Jeanne, Tim Ogilvie, and Rachel Brozenske. The Designing for Growth Field Book: A Step-by-Step Project Guide, 2nd ed. New York: Columbia Business School Publishing, 2019. Recommended",
        "Davenport, Thomas H., and Nitin Mittal. All-in on AI: How Smart Companies Win Big with Artificial Intelligence, 1st ed. Boston: Harvard Business Review Press, 2023. Recommended",
        "National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. U.S. Department of Commerce, 2023. Free resource. Recommended"
      ],
      supplemental: [
        "Coghlan, David. Doing Action Research in Your Own Organization, 5th ed. Thousand Oaks, CA: SAGE, 2019.",
        "Saunders, Mark N. K., Philip Lewis, and Adrian Thornhill. Research Methods for Business Students, 9th ed. Hoboken, NJ: Pearson, 2023.",
        "Current articles from Harvard Business Review, MIT Sloan Management Review, and industry reports on AI implementation and governance."
      ]
    },
    assignments: {
      writing: [
        "Read assigned chapters, articles, and tool documentation outside of class and write weekly implementation journal entries that record progress, decisions, obstacles, and use of AI tools.",
        "Write sprint reports that summarize work completed, test results, stakeholder feedback, and changes to scope, schedule, or risk.",
        "Write governance and change management documentation for the partner, including data handling procedures, human oversight roles, a monitoring plan, and user training materials.",
        "Write a final capstone report of approximately 5,000 to 6,000 words, developed through multiple drafts with instructor and peer feedback, and a reflective essay on growth as a leader of human-AI collaboration for the e-portfolio."
      ],
      critical: [
        "Design and build the approved AI-enabled solution or pilot, justifying tool, workflow, and human oversight choices against stakeholder needs and responsible-AI risks.",
        "Evaluate the solution's impact by comparing post-implementation results with baseline data and the success metrics defined in HAI 495A, and interpret limitations in the evidence.",
        "Recommend whether the partner should scale, sustain, modify, or discontinue the solution, weighing costs, benefits, risks, and workforce impact.",
        "Defend the project's findings and recommendations in a public presentation to a professional panel of advisory board members and employer partners."
      ]
    },
    rigor: {
      buildsOn: [
        "HAI 495A F AI Implementation Capstone I",
        "HAI 300 F Foundations of Human-AI Collaboration",
        "HAI 310 F Applied AI for Organizational Decision-Making",
        "HAI 320 F Data Analytics and Visualization for Leaders",
        "HAI 340 F Organizational Leadership in AI-Enabled Environments",
        "HAI 350 F AI Strategy and Implementation",
        "HAI 360 F Ethics, Governance, and Responsible AI",
        "HAI 370 F Managing AI Projects and Cross-Functional Teams",
        "HAI 380 F Human-AI Interaction and Experience Design",
        "BUS 371 F Advanced Organizational Behavior and Leadership in AI-Enabled Environments",
        "ENGL 301 F Technical Writing",
        "BUS 256 F Artificial Intelligence and Prompt Engineering for Business",
        "BUS 257 F AI Applications for Business",
        "BUS 255 F Introduction to Business and Data Analytics",
        "BUS 271 F Leadership and Business Ethics"
      ],
      distinction: "Lower-division courses such as BUS 256 F and BUS 257 F teach students to use AI tools on assigned tasks, and BUS 255 F and BUS 271 F introduce analytics and leadership ethics. HAI 495B requires students to synthesize the entire HAI core in a real organization: they build and pilot a working solution (HAI 300, 380), measure its impact with data (HAI 310, 320), manage the project and cross-functional stakeholders (HAI 370), lead change and adoption (HAI 340, BUS 371), document governance (HAI 360), and justify strategic recommendations (HAI 350) in a 5,000 to 6,000 word report and a public defense before a professional panel. Students are accountable to a partner organization for actual results, not to a classroom exercise.",
      criticalThinking: "Demonstrated through writing (sprint reports, governance documentation, a 5,000 to 6,000 word final capstone report, and a leadership reflection) and oral communication (public presentation and live demonstration defended before a professional panel of advisory board members and employer partners).",
      research: "Students collect and analyze primary data on solution performance and user experience under human-subjects safeguards, including informed consent, anonymity, and institutional review where applicable, and connect their findings to peer-reviewed research and industry reports located through library databases.",
      ploAlignment: [
        "SLO 1 supports PLO 1 (Implement AI-enabled solutions) and PLO 3 (Govern responsible AI)",
        "SLO 2 supports PLO 1 (Implement AI-enabled solutions), PLO 2 (Lead organizational change and digital transformation), and PLO 3 (Govern responsible AI)",
        "SLO 3 supports PLO 2 (Lead organizational change and digital transformation) and PLO 4 (Develop and communicate AI strategy)"
      ],
      enrollment: "Enrollment limited to students admitted to the baccalaureate degree program.",
      facultyQualifications: "Master's degree in business administration, business management, management, or computer information systems, or the equivalent, under the minimum qualifications for upper-division baccalaureate courses (Title 5 § 53410)."
    },
    geTransfer: [
      "CSU Transfer Course: Yes"
    ],
    masterDb: {
      top: "0501.00 - Business and Commerce, General",
      soc: "11-1021 General and Operations Managers; 13-1082 Project Management Specialists; 13-1111 Management Analysts",
      fsa: "A35 - Business, B90 - Management, M50 - Computer Information Systems"
    },
    sampleEssay: "Your pilot met its efficiency target, but user surveys show low trust and only partial adoption. Evaluate the evidence from your implementation, explain what the results mean for the partner organization, and recommend whether to scale, revise, or stop the solution. Justify your recommendation using your impact measures, stakeholder feedback, and governance documentation."
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
