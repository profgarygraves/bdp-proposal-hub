# Applied Human-AI Collaboration & Leadership BS Proposal Hub

Static application and review website for the proposed Fullerton College Applied Human-AI Collaboration & Leadership Bachelor of Science. The Cycle 9 application was submitted to the CCCCO in August 2026 and received provisional approval on October 2, 2026. It is now in intersegmental duplication review, with ACCJC and Board of Governors approval still pending.

## Pages

- `index.html` - Home and strategic overview
- `checklist.html` - Interactive submitted-package and post-submission tracker with localStorage
- `program.html` - Program description, outcomes, sequence, and capstone
- `curriculum/` - Curriculum review section: program outline and single-page course outlines in Fullerton College curriculum (CurricUNET) field order. All course content and review status live in `curriculum/data/courses.js`; set each course's `status` to `not-started`, `drafting`, `in-review`, `revising`, or `complete`.
- `partners.html` - Advisory board and workforce partner information
- `alignment.html` - CCCCO Vision 2030 goals, outcomes, strategic directions, and accountability crosswalk
- `timeline.html` - Research, regional recommendation, state submission, review, and implementation phases
- `lmi.html` - Labor market findings, target occupations, and the downloadable COE report
- `student-interest.html` - Submitted student survey findings, projections, and ongoing Google Form
- `qa.html` - Common questions and short answers
- `contact.html` - Project lead, advisory interest, employer feedback, and student survey links

## FormSubmit Notes

The Q&A page currently uses the hosted FormSubmit email-link form:

`https://formsubmit.co/el/kiwoxo`

This is different from FormSubmit's custom HTML form endpoint. The `/el/...` link opens FormSubmit's hosted form, while a custom embedded form would need either the direct email endpoint or the random "invisible email" POST endpoint from FormSubmit.

FormSubmit's API is for retrieving archived submissions after requesting an API key. The API key should stay private and should not be committed to this public GitHub Pages repository. If submission exports are needed later, request the API key from FormSubmit and use it locally or in a private workflow, not in frontend HTML or JavaScript.

## Deployment

This is a static site and can be deployed directly with GitHub Pages. Use `index.html` as the entry point.
