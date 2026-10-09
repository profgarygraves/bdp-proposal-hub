/* Renders the curriculum index and single-page course outlines from data/courses.js */
(function () {
  const COURSES = window.BDP_COURSES || [];
  const D = window.BDP_COURSE_DEFAULTS || {};
  const EXISTING = window.BDP_EXISTING || [];

  const STATUS = {
    "not-started": "Not started",
    drafting: "Drafting",
    "in-review": "In review",
    revising: "Revising",
    complete: "Complete",
  };

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  // Escape, then highlight [CONFIRM ...] markers
  const txt = (s) =>
    esc(s).replace(/\[(CONFIRM[^\]]*)\]/g, '<mark class="confirm">$1</mark>');

  const badge = (status) =>
    `<span class="status-badge is-${esc(status)}">${esc(STATUS[status] || status)}</span>`;

  const code = (c) => `${c.prefix} ${c.number}`;

  function hoursFor(c) {
    if (c.hours) return c.hours;
    const u = Number(c.units) || 3;
    return { lecture: u, lab: 0, prep: u * 2, total: u * 54, lectureTerm: u * 18 };
  }

  const TODO = '<p class="todo">To be drafted.</p>';

  function list(items, ordered) {
    if (!items || !items.length) return TODO;
    const tag = ordered ? "ol" : "ul";
    return `<${tag} class="outline-list">${items.map((i) => `<li>${txt(i)}</li>`).join("")}</${tag}>`;
  }

  function fields(rows) {
    return `<dl class="field-grid">${rows
      .map(
        ([k, v]) =>
          `<div${String(v == null ? "" : v).length > 70 ? ' class="wide"' : ""}><dt>${esc(k)}</dt><dd>${v === "" || v == null ? '<span class="blank">Pending</span>' : txt(v)}</dd></div>`
      )
      .join("")}</dl>`;
  }

  function section(n, title, body) {
    const id = "s" + n;
    return `<section class="outline-section" id="${id}" aria-labelledby="${id}-h">
      <h2 id="${id}-h"><span class="sec-num">${n}</span>${esc(title)}</h2>
      ${body}
    </section>`;
  }

  /* ---------------- Course outline page ---------------- */
  function renderCourse(root) {
    const params = new URLSearchParams(location.search);
    const id = (params.get("id") || "").toLowerCase();
    const c = COURSES.find((x) => x.id === id);

    if (!c) {
      root.innerHTML = `<section class="page-hero"><p class="eyebrow">Course Outline</p><h1>Course not found</h1>
        <p><a href="index.html">Return to the curriculum overview</a>.</p></section>`;
      return;
    }

    document.title = `${code(c)} Course Outline | Applied Human-AI BS`;
    const h = hoursFor(c);
    const hd = c.header || {};
    const p = c.proposal || {};
    const mdb = c.masterDb || {};
    const prereq = c.prerequisite || D.prerequisite;
    const catalog = `Prerequisite: ${prereq} ${h.lectureTerm} hours lecture per term. ${c.description} (Degree Credit) (CSU)`;
    const idx = COURSES.indexOf(c);
    const prev = COURSES[idx - 1];
    const next = COURSES[idx + 1];

    const tocNames = [
      "Approval Information",
      "Basic Course Information",
      "Requisites",
      "Descriptions",
      "Entry Level Skills",
      "Student Learning Outcomes",
      "Instructional Objectives",
      "Course Content and Scope",
      "Instructional Methodologies",
      "Distance Education",
      "Methods of Evaluation",
      "Textbooks and Resources",
      "Assignments",
      "Library/Media Center Review",
      "General Education and Transfer",
      "Comparable Courses",
      "Multicultural Requirement",
      "Master Database",
    ];

    const s = [];
    s.push(
      section(
        1,
        "Approval Information",
        fields([
          ["Course Prefix & Number", `${code(c)} F`],
          ["CC Approved", hd.ccApproved],
          ["DCCC Approved", hd.dcccApproved],
          ["Board Approved", hd.boardApproved],
          ["State Approved", hd.stateApproved],
          ["Effective Term", hd.effectiveTerm],
          ["State Control #", hd.stateControl],
          ["C-ID #", hd.cid || "Not applicable"],
        ])
      )
    );
    s.push(
      section(
        2,
        "Basic Course Information",
        fields([
          ["Division", D.division],
          ["Department/Subject Area", D.department],
          ["Course Prefix", c.prefix],
          ["Course Number", `${c.number} F`],
          ["Course Title", c.title],
          ["Units", c.units],
          ["Lecture Hours (Full Term Hrs/Wk)", h.lecture],
          ["Lab Hours (Full Term Hrs/Wk)", h.lab],
          ["Assignment Preparation Hours", h.prep],
          ["Total Course Hours", h.total],
          ["Proposed Start", p.startYear ? `${p.startSemester || ""} ${p.startYear}` : ""],
          ["Class Size", c.classSize || D.classSize],
          ["Justification for Class Size", p.classSizeJustification],
          ["Honors Course", p.honors || "No"],
          ["Justification for Proposal", p.justification],
        ])
      )
    );
    s.push(
      section(
        3,
        "Requisites",
        fields([
          ["Entry Skill Requisites", prereq],
          ["Prerequisite(s)", prereq],
          ["Requisite Type", D.prerequisiteType],
          ["Requisite Justification", D.prerequisiteJustification],
          ["Minimum Grade", D.prerequisiteGrade],
          ["Corequisite(s)", "None"],
          ["Advisory(ies)", "None"],
          ["Repeatability", D.repeatability],
        ])
      )
    );
    s.push(
      section(
        4,
        "Descriptions",
        `<h3>Catalog Description</h3><p>${txt(catalog)}</p>
         <h3>Schedule Description</h3><p>${txt(c.description)}</p>`
      )
    );
    s.push(
      section(
        5,
        "Entry Level Skills and Knowledge",
        `<p class="field-note">Upon entering this course, the student needs to be able to:</p>${list(c.entrySkills || [prereq])}`
      )
    );
    s.push(
      section(
        6,
        "Student Learning Outcomes",
        `<ol class="outline-list slo-list">${(c.slos || [])
          .map(
            (o) =>
              `<li><span>${txt(o.outcome)}</span>${
                o.assessment ? `<em class="assess">Assessment: ${txt(o.assessment)}</em>` : '<em class="assess blank">Assessment: Pending</em>'
              }</li>`
          )
          .join("")}</ol>`
      )
    );
    s.push(
      section(
        7,
        "Instructional Objectives",
        `<p class="field-note">Upon completion of this course, the student will be able to:</p>${list(c.objectives, true)}`
      )
    );
    s.push(
      section(
        8,
        "Course Content and Scope",
        c.content && c.content.length
          ? `<ol class="content-list">${c.content
              .map((t) => `<li><strong>${txt(t.topic)}</strong>${list(t.items)}</li>`)
              .join("")}</ol>`
          : TODO
      )
    );
    s.push(section(9, "Instructional Methodologies", list(c.methods)));
    s.push(
      section(
        10,
        "Distance Education",
        `<h3>Delivery Methods</h3>${list(c.deliveryMethods || (c.methods ? D.deliveryMethods : null))}
         <h3>Contact Types</h3>${list(c.contactTypes || (c.methods ? D.contactTypes : null))}`
      )
    );
    s.push(section(11, "Multiple Methods of Evaluation", list(c.evaluation)));
    const tb = c.textbooks || {};
    s.push(
      section(
        12,
        "Textbooks and Resources",
        `<h3>Recommended Textbooks</h3><p class="field-note">Texts such as the following are appropriate:</p>${list(tb.recommended)}
         <h3>Supplemental Textbooks or Materials</h3>${list(tb.supplemental)}`
      )
    );
    const as = c.assignments || {};
    s.push(
      section(
        13,
        "Assignments",
        `<h3>Writing Assignments and/or Proficiency Demonstration</h3>${list(as.writing)}
         <h3>Assignments that Demonstrate Critical Thinking</h3>${list(as.critical)}`
      )
    );
    const lib = c.library || (c.methods ? D.library : null);
    s.push(
      section(
        14,
        "Library/Media Center Review",
        lib
          ? fields([
              ["Adequate Materials", lib.adequate],
              ["Estimated Cost", lib.cost],
              ["Additional Information", lib.notes || "None"],
            ])
          : TODO
      )
    );
    s.push(section(15, "General Education and Transfer", list(c.geTransfer)));
    s.push(section(16, "Comparable Courses", list(c.comparable)));
    s.push(
      section(17, "Multicultural Requirement", c.methods ? `<p>${txt(c.multicultural || D.multicultural)}</p>` : TODO)
    );
    s.push(
      section(
        18,
        "Master Database",
        fields([
          ["Division Code", D.divisionCode],
          ["Department Code", D.departmentCode],
          ["Units", Number(c.units).toFixed(2)],
          ["Class Size", c.classSize || D.classSize],
          ["Open Entry/Open Exit", D.openEntry],
          ["Repeatability", D.repeatability],
          ["Schedule Type", D.scheduleTypes],
          ["Grading Option", D.grading],
          ["Basic Skills", D.basicSkills],
          ["Credit Status", D.creditStatus],
          ["CB26 Support Course Status", D.cb26],
          ["Lecture Hrs/Week", h.lecture],
          ["Lab Hrs/Week", h.lab],
          ["Preparation Hours", h.prep],
          ["Total Course Hours", h.total],
          ["Course Transfer Code", D.transferCode],
          ["Course Classification Code", D.classification],
          ["Budget Code", D.budgetCode],
          ["Special Funding", D.specialFunding],
          ["TOP Code", mdb.top],
          ["CIP Code", D.cip],
          ["Stand Alone Course", D.standAlone],
          ["SOC Code", mdb.soc],
          ["SAM Code", D.sam],
          ["State Discipline (FSA) Code", mdb.fsa],
          ["State Control #", hd.stateControl],
          ["C-ID Descriptor", "Not applicable"],
        ])
      )
    );

    root.innerHTML = `
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Curriculum</a> <span aria-hidden="true">/</span> ${esc(code(c))}</nav>
      <section class="page-hero outline-hero">
        <p class="eyebrow">Fullerton College Course Outline · ${esc(c.block)} · ${esc(c.year)}</p>
        <h1>${esc(code(c))} F <span class="hero-sub">${esc(c.title)}</span></h1>
        <p class="hero-meta">${badge(c.status)} <span>${esc(c.units)} units</span>${
          c.updated ? `<span>Updated ${esc(c.updated)}</span>` : ""
        }<button type="button" class="button small secondary print-btn" onclick="window.print()">Print / Save PDF</button></p>
        ${c.reviewNotes ? `<p class="review-note"><strong>Review note:</strong> ${txt(c.reviewNotes)}</p>` : ""}
        ${
          c.status === "not-started"
            ? `<p class="review-note">Only the application content (description and learning outcomes) is in place. The remaining sections will be drafted next.</p>`
            : ""
        }
      </section>
      <div class="outline-layout">
        <nav class="outline-toc" aria-label="Outline sections">
          <p class="eyebrow">Sections</p>
          <ol>${tocNames.map((n, i) => `<li><a href="#s${i + 1}">${esc(n)}</a></li>`).join("")}</ol>
        </nav>
        <article class="outline-body">${s.join("")}</article>
      </div>
      <nav class="pager" aria-label="Other courses">
        ${prev ? `<a href="course.html?id=${esc(prev.id)}">&larr; ${esc(code(prev))}</a>` : "<span></span>"}
        <a href="index.html">All courses</a>
        ${next ? `<a href="course.html?id=${esc(next.id)}">${esc(code(next))} &rarr;</a>` : "<span></span>"}
      </nav>`;
  }

  /* ---------------- Curriculum index ---------------- */
  function renderIndex(root) {
    const counts = {};
    COURSES.forEach((c) => (counts[c.status] = (counts[c.status] || 0) + 1));
    const statusSummary = root.querySelector("[data-status-summary]");
    if (statusSummary) {
      statusSummary.innerHTML = Object.keys(STATUS)
        .map((k) => `<div><strong>${counts[k] || 0}</strong><span>${esc(STATUS[k])}</span></div>`)
        .join("");
    }

    const newTable = root.querySelector("[data-new-courses]");
    if (newTable) {
      newTable.innerHTML = COURSES.map(
        (c) => `<tr>
          <td><a href="course.html?id=${esc(c.id)}"><strong>${esc(code(c))}</strong></a></td>
          <td><a href="course.html?id=${esc(c.id)}">${esc(c.title)}</a></td>
          <td>${esc(c.units)}</td>
          <td>${esc(c.block)}</td>
          <td>${badge(c.status)}</td>
        </tr>`
      ).join("");
    }

    const exTable = root.querySelector("[data-existing-courses]");
    if (exTable) {
      exTable.innerHTML = EXISTING.map((e) => {
        const q = encodeURIComponent(e.code).replace(/%20/g, "+");
        return `<tr>
          <td><a href="https://catalog.nocccd.edu/search/?caturl=%2Ffullerton-college&amp;search=${q}" target="_blank" rel="noopener">${esc(e.code)}</a></td>
          <td>${esc(e.title)}${e.note ? `<br><small>${esc(e.note)}</small>` : ""}${
            e.alts ? `<br><small>or ${e.alts.map((a) => esc(a.code)).join(", or ")}</small>` : ""
          }</td>
          <td>${esc(e.units)}</td>
          <td>${esc(e.block)}</td>
        </tr>`;
      }).join("");
    }
  }

  /* ---------------- Program page course blocks ---------------- */
  function renderProgramBlocks(root) {
    const blocks = [
      ["Lower Division Required", 15],
      ["Restricted Lower Division Electives", 13],
      ["Upper Division Core", 24],
      ["Upper Division Breadth", 10],
      ["Capstone", 6],
      ["Restricted Electives", 18],
    ];
    const rows = [];
    blocks.forEach(([name, units]) => {
      rows.push(`<tr class="block-row"><th scope="rowgroup" colspan="3">${esc(name)} (${units} units)</th></tr>`);
      EXISTING.filter((e) => e.block === name).forEach((e) => {
        rows.push(`<tr><td>${esc(e.code)}</td><td>${esc(e.title)}</td><td>${esc(e.units)}</td></tr>`);
        (e.alts || []).forEach((a) => {
          rows.push(`<tr class="or-row"><td colspan="3">or</td></tr>`);
          rows.push(`<tr><td>${esc(a.code)}</td><td>${esc(a.title)}</td><td>${esc(a.units)}</td></tr>`);
        });
      });
      COURSES.filter((c) => c.block === name).forEach((c) =>
        rows.push(
          `<tr><td><a href="course.html?id=${esc(c.id)}">${esc(code(c))} F</a></td><td>${esc(c.title)} <span class="new-tag">New</span></td><td>${esc(c.units)}</td></tr>`
        )
      );
    });
    rows.push(`<tr class="total-row"><th scope="row" colspan="2">Total Units</th><td>86</td></tr>`);
    root.innerHTML = rows.join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const course = document.querySelector("[data-course-root]");
    if (course) renderCourse(course);
    const idx = document.querySelector("[data-curriculum-index]");
    if (idx) renderIndex(idx);
    const blocks = document.querySelector("[data-program-blocks]");
    if (blocks) renderProgramBlocks(blocks);
  });
})();
