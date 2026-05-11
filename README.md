# Applied Human-AI Collaboration & Leadership BS Proposal Hub

Static planning and development website for the proposed Fullerton College Applied Human-AI Collaboration & Leadership Bachelor of Science.

## Pages

- `index.html` - Home and strategic overview
- `checklist.html` - Interactive BDP requirements tracker with localStorage
- `program.html` - Program description, outcomes, sequence, and capstone
- `partners.html` - Advisory board and workforce partner information
- `timeline.html` - Research, development, regional approval, and state submission phases
- `lmi.html` - Labor market evidence placeholders and target occupations
- `student-interest.html` - Student interest survey plan and Google Form placeholder
- `qa.html` - Common questions and short answers
- `contact.html` - Project lead, advisory interest, and form placeholders

## Editing Forms

Replace the placeholder blocks on `student-interest.html` and `contact.html` with Google Form iframe embed code when the live forms are ready.

## FormSubmit Notes

The Q&A page currently uses the hosted FormSubmit email-link form:

`https://formsubmit.co/el/kiwoxo`

This is different from FormSubmit's custom HTML form endpoint. The `/el/...` link opens FormSubmit's hosted form, while a custom embedded form would need either the direct email endpoint or the random "invisible email" POST endpoint from FormSubmit.

FormSubmit's API is for retrieving archived submissions after requesting an API key. The API key should stay private and should not be committed to this public GitHub Pages repository. If submission exports are needed later, request the API key from FormSubmit and use it locally or in a private workflow, not in frontend HTML or JavaScript.

## Deployment

This is a static site and can be deployed directly with GitHub Pages. Use `index.html` as the entry point.
