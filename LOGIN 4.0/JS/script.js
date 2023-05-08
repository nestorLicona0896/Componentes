function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
  
  function socialLogin(provider) {
    // Handle social media login based on the selected provider
    console.log('Logging in with ' + provider);
    // Add your implementation here
  }
  