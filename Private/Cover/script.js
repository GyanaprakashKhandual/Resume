async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const resumeElement = document.querySelector(".letter-container"); // Fixed: changed to querySelector

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
