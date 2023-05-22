
function createResume() {
  // Retrieve values from form inputs
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipcode = document.getElementById("zipcode").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const linkedin = document.getElementById("linkedin").value;
  const portfolio = document.getElementById("portfolio").value;
  const coding = document.getElementById("coding").value;
  const writing = document.getElementById("writing").value;
  const certification = document.getElementById("certification").value;
  const javascript = document.getElementById("javascript").value;
  const php = document.getElementById("php").value;
  const html = document.getElementById("html").value;
  const css = document.getElementById("css").value;
  const education = document.getElementById("education").value;
  const date1 = document.getElementById("date1").value;
  const company1 = document.getElementById("company1").value;
  const position1 = document.getElementById("position1").value;
  const responsibilities1 = document.getElementById("responsibilities1").value;
  const date2 = document.getElementById("date2").value;
  const company2 = document.getElementById("company2").value;
  const position2 = document.getElementById("position2").value;
  const responsibilities2 = document.getElementById("responsibilities2").value;
  const date3 = document.getElementById("date3").value;
  const company3 = document.getElementById("company3").value;
  const position3 = document.getElementById("position3").value;
  const responsibilities3 = document.getElementById("responsibilities3").value;
  const ref1 = document.getElementById("ref1").value;
  const ref2 = document.getElementById("ref2").value;
  const ref3 = document.getElementById("ref3").value;

  // Create a new window for the resume
  const resumeWindow = window.open("", "resumeWindow", "width=800,height=600");

  // Write the HTML for the resume into the new window
  resumeWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${name} - Resume</title>
        <style>
          h1 {
            background-color: #A9A9A9;
          }
          h2 {
            background-color: #F5F5F5;
          }
        </style>
      </head>
      <body>
        <h1>${name}</h1>
        <p>${city}, ${state} ${zipcode}</p>
        <p>${phone} | ${email}</p>
        <p>${linkedin} | ${portfolio}</p>

        <h2>Skill Set</h2>
        <p><strong>Coding Skills:</strong> ${coding}</p>
        <p><strong>Writing Skills:</strong> ${writing}</p>
        <p><strong>Certifications:</strong> ${certification}</p>

        <h2>Technical Skills</h2>
        <p><strong>JavaScript:</strong> ${javascript}</p>
        <p><strong>PHP:</strong> ${php}</p>
        <p><strong>HTML:</strong> ${html}</p>
        <p><strong>CSS:</strong> ${css}</p>

        <h2>Educational Background</h2>
        <p>${education}</p>

        <h2>Employment History</h2>
        <p><strong>${company1}</strong></p>
        <p>${position1}</p>
        <p>${date1}</p>
        <p>${responsibilities1}</p>

        <p><strong>${company2}</strong></p>
        <p>${position2}</p>
        <p>${date2}</p>
        <p>${responsibilities2}</p>

        <p><strong>${company3}</strong></p>
        <p>${position3}</p>
        <p>${date3}</p>
        <p>${responsibilities3}</p>

        <h2>References</h2>
        <p>${ref1}</p>
        <p>${ref2}</p>
        <p>${ref3}</p>

      </body>
    </html>
  `);
}
