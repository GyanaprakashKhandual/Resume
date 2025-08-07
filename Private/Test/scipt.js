<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - Gyana Prakash Khandual | QA Engineer</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    
  <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.3;
  color: #2c3e50;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  max-width: 800px;
  min-width: 800px;
  min-height: 11.69in;
  max-height: 11.69in;
  margin: 0 auto;
  padding: 20px 0;
  font-size: 11px;
}

.resume-container {
  min-height: 11.69in;
  max-height: 11.69in;
  display: flex;
  background: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* LEFT SIDEBAR - Updated color theme */
.sidebar {
  flex: 0 0 280px;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  padding: 25px 20px;
  position: relative;
  overflow-y: auto;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff);
}

.profile-section {
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.2);
}

.name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  background: linear-gradient(45deg, #feca57, #ff9ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  font-size: 10px;
  color: #ecf0f1;
  font-weight: 300;
  letter-spacing: 1px;
}

.sidebar h2 {
  font-size: 14px;
  color: #feca57;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-left: 15px;
}

.sidebar h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
}

.contact-info {
  margin-bottom: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 9px;
  color: #bdc3c7;
}

.contact-item::before {
  content: '●';
  color: #48dbfb;
  margin-right: 8px;
  font-size: 12px;
}

/* Education section in sidebar styling */
.education-section {
  margin-bottom: 25px;
}

.education-category > div {
  background: rgba(255,255,255,0.1);
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 8px;
  border-left: 3px solid #ff9ff3;
  transition: all 0.3s ease;
}

.education-category > div:hover {
  background: rgba(255,255,255,0.15);
  transform: translateX(5px);
}

.education-category p {
  margin-bottom: 4px;
  color: #ecf0f1;
  line-height: 1.2;
}

.education-category p:first-child {
  font-size: 10px;
  font-weight: 600;
  color: #feca57;
  margin-bottom: 6px;
}

.education-category p:nth-child(2) {
  font-size: 8px;
  color: #bdc3c7;
  font-weight: 500;
}

.education-category p:last-child {
  font-size: 7px;
  color: #48dbfb;
  background: rgba(72, 219, 251, 0.2);
  padding: 2px 6px;
  border-radius: 10px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  margin-top: 4px;
}

.education-category div:nth-child(3) p:last-child {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.2);
}

.skills-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill-category {
  margin-bottom: 15px;
}

.skill-category h3 {
  font-size: 11px;
  color: #48dbfb;
  margin-bottom: 8px;
  font-weight: 600;
}

.skill-item {
  background: rgba(255,255,255,0.1);
  margin-bottom: 4px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 8px;
  border-left: 3px solid #ff6b6b;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(255,255,255,0.2);
  transform: translateX(5px);
}

/* RIGHT MAIN CONTENT */
.main-content {
  flex: 1;
  padding: 25px 30px;
  background: white;
  overflow-y: auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px solid transparent;
  background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: bottom;
}

.header h1 {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 12px;
  color: #7f8c8d;
  font-weight: 400;
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
  font-weight: 600;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border-radius: 3px;
}

.profile-summary {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 15px;
  border-radius: 10px;
  border-left: 5px solid #48dbfb;
  font-size: 11px;
  line-height: 1.4;
  color: #495057;
  font-style: italic;
}

.project {
  background: linear-gradient(135deg, #fff, #f8f9fa);
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
}

.project::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b6b, #feca57, #48dbfb);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.project-title {
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
  flex: 1;
}

.project-duration {
  font-size: 9px;
  color: #7f8c8d;
  background: #ecf0f1;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.project-description {
  font-size: 10px;
  color: #495057;
  margin-bottom: 8px;
  line-height: 1.3;
}

.project-highlights {
  margin: 8px 0;
}

.project-highlights ul {
  list-style: none;
  padding: 0;
}

.project-highlights li {
  font-size: 9px;
  margin-bottom: 3px;
  padding-left: 15px;
  position: relative;
  color: #495057;
}

.project-highlights li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #48dbfb;
  font-size: 8px;
}

.project-tech {
  margin-top: 8px;
  font-size: 8px;
  color: #6c757d;
  background: linear-gradient(135deg, #f1f3f4, #e9ecef);
  padding: 6px 10px;
  border-radius: 15px;
  border: 1px solid #dee2e6;
}

.project-tech strong {
  color: #495057;
}

.education-item {
  background: linear-gradient(135deg, #fff, #f8f9fa);
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;
  border-left: 5px solid #ff9ff3;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
}

.education-degree {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 3px;
}

.education-institution {
  font-size: 10px;
  color: #7f8c8d;
  margin-bottom: 3px;
  font-weight: 500;
}

.education-duration {
  font-size: 9px;
  color: #6c757d;
  font-style: italic;
  margin-bottom: 6px;
}

.education-item ul {
  list-style: none;
  margin: 6px 0 0 0;
  padding: 0;
}

.education-item li {
  font-size: 9px;
  margin-bottom: 2px;
  padding-left: 12px;
  position: relative;
  color: #495057;
}

.education-item li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff9ff3;
  font-weight: bold;
}

.download-section {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
}

.download-btn {
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  font-weight: 600;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.download-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Scrollbar styling */
.sidebar::-webkit-scrollbar,
.main-content::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.1);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
}

.main-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.main-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}
  </style>
</head>
<body>
  <div class="resume-container">
    <!-- LEFT SIDEBAR -->
    <div class="sidebar">
      <div class="profile-section">
        <div class="name">Gyana Prakash Khandual</div>
        <div class="title">Age - 21</div>
      </div>
      
      <div class="contact-info">
        <div class="contact-item">gyanaprakashkhnadual@gmail.com</div>
        <div class="contact-item">+91 7606939833. Odisha, India</div>
        <div class="contact-item">github.com/GyanaprakashKhandual</div>
        <div class="contact-item">https://codetestrepeat.vercel.app</div>
      </div>
      
      <div class="education-section">
        <h2>Education</h2>
        <div class="education-category">
         <div>
           <p>Bachelor of Science (Physics)</p>
           <p>From: Utkal University (2021 - 2024)</p>
           <p>Full Time (Completed)</p>
        </div>
         <div>
           <p>Quality Assurance Engineering</p>
           <p>From: MASAI (2024 - 2025)</p>
           <p>Full Time (Completed)</p>
        </div>
        <div>
           <p>Master in Computer Application</p>
           <p>From: IGNOU (2025 - 2027)</p>
           <p>ODL (Ongoing)</p>
        </div>
        </div>
      </div>
      
      <div class="skills-section">
        <h2>Skills</h2>
        
        <div class="skill-category">
          <h3>Test Automation</h3>
          <div class="skill-item">Cypress, Selenium, Playwright, Appium, NightJS, Puppeteer</div>
        </div>
        
        <div class="skill-category">
          <h3>API Testing</h3>
          <div class="skill-item">Rest Assured, Super Test, Postman, Karate DSL, PyTest </div>
        </div>
        
        <div class="skill-category">
          <h3>Performance Testing</h3>
          <div class="skill-item">Grafana, Artillery, Locust, JMeter, Gatling</div>
        </div>
        
        <div class="skill-category">
          <h3>Security Testing</h3>
          <div class="skill-item">NMap, Burp Suite, OWSAP ZAP, Beef, Linux</div>
        </div>
        
        <div class="skill-category">
          <h3>Development</h3>
          <div class="skill-item">Next JS, Express JS, MongoDB, MySQL, Rest API</div>
        </div>
        
        <div class="skill-category">
          <h3>Tools & Others</h3>
          <div class="skill-item">Cucumber, Allure Report, JIRA, ZOHO, Google Workspace</div>
        </div>
      </div>
    </div>
    
    <!-- RIGHT MAIN CONTENT -->
    <div class="main-content">
      <div class="header">
        <h1>Quality Assurance Engineer</h1>
      </div>
      
      <div class="section">
        <h2 class="section-title">Profile Summary</h2>
        <div class="profile-summary">
          Unlike most Gen-Zs, I don't chase hobbies or social trends. I invest that time in building myself professionally—earning respect through impact, solving real problems, and strengthening systems by breaking them first.
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Projects</h2>
        
        <div class="project">
          <div class="project-header">
            <div class="project-title">Pioneer Swine - Livestock Management Platform</div>
            <div class="project-duration">Jan 2024 - Present</div>
          </div>
          <div class="project-description">
            End-to-end testing of a comprehensive livestock management web application with 50,000+ active users.
          </div>
          <div class="project-highlights">
            <ul>
              <li>Built automation framework from scratch using Selenium WebDriver with Java and TestNG</li>
              <li>Implemented CI/CD pipeline with Jenkins for nightly test execution</li>
            </ul>
          </div>
          <div class="project-tech">
            <strong>Technologies:</strong> Selenium, Java, TestNG, Jenkins, Allure Report, MySQL, JIRA
          </div>
        </div>
        
        <div class="project">
          <div class="project-header">
            <div class="project-title">Orange HRM - Human Resource Management System</div>
            <div class="project-duration">Aug 2023 - Dec 2023</div>
          </div>
          <div class="project-description">
            Test automation for open-source HR management software with 300+ test cases.
          </div>
          <div class="project-highlights">
            <ul>
              <li>Implemented BDD framework using Cucumber with Gherkin syntax</li>
              <li>Developed 85+ automated test scripts covering core HR functionalities</li>
            </ul>
          </div>
          <div class="project-tech">
            <strong>Technologies:</strong> Selenium, Cucumber, Java, Extent Report, BrowserStack, Page Object Model
          </div>
        </div>
        
        <div class="project">
          <div class="project-header">
            <div class="project-title">Makeup Jewelers - E-commerce Platform</div>
            <div class="project-duration">Mar 2023 - Jul 2023</div>
          </div>
          <div class="project-description">
            Quality assurance for jewelry e-commerce website with 500+ products.
          </div>
          <div class="project-highlights">
            <ul>
              <li>Performed comprehensive manual testing of UI/UX, functionality, and checkout flow</li>
              <li>Automated critical user journeys using Cypress</li>
            </ul>
          </div>
          <div class="project-tech">
            <strong>Technologies:</strong> Cypress, JavaScript, JMeter, Applitools, Postman, TestRail
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Experience</h2>
        
        <div class="education-item">
          <div class="education-degree">QA Engineer - Automation & Performance Testing</div>
          <div class="education-institution">Avisun Interactive</div>
          <div class="education-duration">April 2024 - Present (4+ months)</div>
          <ul>
            <li>Implemented performance testing solutions using JMeter and Artillery for load analysis</li>
            <li>Collaborated with development teams to identify and resolve critical bugs in production</li>
            <li>Established CI/CD testing pipelines for automated regression testing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="download-section">
    <button class="download-btn" onclick="downloadPDF()">
      📄 Download Resume as PDF
    </button>
  </div>

  <script>
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const resumeElement = document.querySelector(".resume-container"); // Fixed: changed to querySelector

  // Show loading state
  const btn = document.querySelector(".download-btn");
  const originalText = btn.textContent;
  btn.textContent = "📄 Generating PDF...";
  btn.disabled = true;

  try {
    // Create canvas from the resume content
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      height: resumeElement.scrollHeight,
      width: resumeElement.scrollWidth,
    });

    // Create PDF
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF - Fixed filename to match the actual name
    pdf.save("Gyana_Prakash_Khandual_Resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  } finally {
    // Reset button state
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

// Add smooth animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 200);
  });
});
  </script>
</body>
</html>