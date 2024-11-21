// toggle
document.getElementById('toggle').addEventListener('click', function () {
  let navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
});

// step 1

function ProfilePhoto() {
  let input = document.getElementById('profilePhoto');
  let Text = document.getElementById('Text');
  let profileImage = document.getElementById('profileImage');

  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function (e) {
      profileImage.src = e.target.result;
      profileImage.classList.remove('hidden');
      Text.classList.add('hidden');
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function addSocialMedia() {
  let div = document.getElementById('socialMedia');

  let addDiv = document.createElement('div');
  addDiv.classList.add(
    'social-media-entry',
    'bg-gray-100',
    'p-4',
    'rounded-lg',
    'space-y-2',
    'mt-2'
  );

  addDiv.innerHTML = `
        <div class="">
          <label class="block text-sm font-medium text-gray-700">Social Media Name</label>
          <input type="text" name="socialMediaName[]" placeholder="LinkedIn" class="socialMediaName mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Social Media Link</label>
          <input type="url" name="socialMediaLink[]" placeholder="https://linkedin.com/in/username" class="link mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700 grid justify-self-end" onclick="removeSocialMedia(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(addDiv);
}

// remove a social media
function removeSocialMedia(button) {
  button.parentElement.remove();
}

// step 2

//  step 3

function addTechnicalSkill() {
  let div = document.getElementById('technicalSkills');

  let newSkillDiv = document.createElement('div');
  newSkillDiv.classList.add(
    'technical-skill-entry',
    'flex',
    'items-center',
    'space-x-2',
    'mt-2'
  );

  newSkillDiv.innerHTML = `
        <input type="text" name="technicalSkills[]" placeholder="Python" class="technicalSkills border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <button type="button" class="text-red-500 hover:text-red-700 grid justify-self-end" onclick="removeSkill(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newSkillDiv);
}

function addSoftSkill() {
  let div = document.getElementById('softSkills');

  let newSkillDiv = document.createElement('div');
  newSkillDiv.classList.add(
    'soft-skill-entry',
    'flex',
    'items-center',
    'space-x-2',
    'mt-2'
  );

  newSkillDiv.innerHTML = `
        <input type="text" name="softSkills[]" placeholder="Leadership" class="softSkills border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <button type="button" class="text-red-500 hover:text-red-700 grid justify-self-end" onclick="removeSkill(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newSkillDiv);
}

function removeSkill(button) {
  button.parentElement.remove();
}

// etape 4

function addLanguage() {
  let div = document.getElementById('languages');

  let newLanguageDiv = document.createElement('div');
  newLanguageDiv.classList.add(
    'language-entry',
    'flex',
    'items-center',
    'space-x-2',
    'mt-2'
  );

  newLanguageDiv.innerHTML = `
        <input type="text" name="languages[]" placeholder="Spanish" class="languages border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <select name="proficiency[]" class="languagesDegree border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" required>
          <option value="" disabled selected>Proficiency Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="button" class="text-red-500 hover:text-red-700" onclick="removeLanguage(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newLanguageDiv);
}

function removeLanguage(button) {
  button.parentElement.remove();
}

// etape 5

function addHobby() {
  let div = document.getElementById('hobbies');

  let newHobbyDiv = document.createElement('div');
  newHobbyDiv.classList.add(
    'hobby-entry',
    'flex',
    'items-center',
    'space-x-2',
    'mt-2'
  );

  newHobbyDiv.innerHTML = `
        <input type="text" name="hobbies[]" placeholder="Painting" class="hobbies border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <button type="button" class="text-red-500 hover:text-red-700" onclick="removeHobby(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newHobbyDiv);
}

function removeHobby(button) {
  button.parentElement.remove();
}

// etape 6

function addEducation() {
  let div = document.getElementById('education');

  let newEducationDiv = document.createElement('div');
  newEducationDiv.classList.add(
    'academic-entry',
    'bg-gray-100',
    'p-4',
    'rounded-lg',
    'space-y-4',
    'mt-2'
  );

  newEducationDiv.innerHTML = `
        <div>
          <label class="block text-sm font-medium text-gray-700">Degree Name</label>
          <input type="text" name="degree[]" placeholder="Master of Arts" class="DegreeName mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">University Name</label>
          <input type="text" name="university[]" placeholder="Example University" class="UniversityName mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Field of Study</label>
          <input type="text" name="fieldOfStudy[]" placeholder="History" class="FieldOfStudy mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Start Year</label>
            <input type="number" name="startYear[]" placeholder="2018" class="StartYear mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">End Year</label>
            <input type="number" name="endYear[]" placeholder="2022" class="EndYear mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700 mt-2 grid justify-self-end" onclick="removeEducation(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newEducationDiv);
}

function removeEducation(button) {
  button.parentElement.remove();
}

// etape 7

function addJob() {
  let div = document.getElementById('experience');

  let newJobDiv = document.createElement('div');
  newJobDiv.classList.add(
    'job-entry',
    'bg-gray-100',
    'p-4',
    'rounded-lg',
    'space-y-4',
    'mt-2'
  );

  newJobDiv.innerHTML = `
        <div>
          <label class="block text-sm font-medium text-gray-700">Job Title</label>
          <input type="text" name="jobTitle[]" placeholder="Project Manager" class="experience mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" name="company[]" placeholder="Example Corp." class="CompanyName mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" name="location[]" placeholder="San Francisco, USA" class="experienceLocation mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="month" name="startDate[]" class="StartDate mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">End Date</label>
            <input type="month" name="endDate[]" class="EndDate mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea name="jobDescription[]" placeholder="Describe your responsibilities and achievements..." rows="3" class="experienceDescription mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700 mt-2 grid justify-self-end" onclick="removeJob(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newJobDiv);
}

function removeJob(button) {
  button.parentElement.remove();
}

// etape 8

function addCertification() {
  let div = document.getElementById('certifications');

  let newCertificationDiv = document.createElement('div');
  newCertificationDiv.classList.add(
    'bg-gray-100',
    'p-4',
    'rounded-lg',
    'space-y-4',
    'mt-2'
  );

  newCertificationDiv.innerHTML = `
        <div>
          <label class="block text-sm font-medium text-gray-700">Certification Name</label>
          <input type="text" name="certificationName[]" placeholder="AWS Certified Solutions Architect" class="Certification mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <button type="button" class=" text-red-500 hover:text-red-700 mt-2 grid justify-self-end" onclick="removeCertification(this)"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff0000">
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg></button>
      `;

  div.appendChild(newCertificationDiv);
}

function removeCertification(button) {
  button.parentElement.remove();
}

// slide continue

let format = document.getElementsByClassName('format');
let step = document.getElementsByClassName('step');

let count = 0;

format[count].style.display = 'block';
step[count].style.backgroundColor = 'orange';

function slide() {
  // validation de champs name phone
  validationName();
  validationPhone();
  validateEmail();
  validateLink();

  if (
    validationName() &&
    validationPhone() &&
    validateEmail() &&
    validateLink()
  ) {
    format[count].style.display = 'none';

    count++;

    format[count].style.display = 'block';
    step[count].style.backgroundColor = 'orange';
  }
}

//  previous slide
function reSlide() {
  format[count].style.display = 'none';
  count--;
  format[count].style.display = 'block';
  step[count].style.backgroundColor = 'orange';
  step[count + 1].style.backgroundColor = '';
}

// Validation
function validationName() {
  let name = document.getElementById('name');
  let errorName = document.getElementById('errorInputName');
  let namevalide = name ? name.value.trim() : '';
  let nameRegex = /^[A-Za-z\s]+$/;

  if (nameRegex.test(namevalide)) {
    name.style.border = '';
    errorName.style.display = 'none';
    return true;
  } else {
    name.style.border = '1px solid red';
    errorName.style.display = 'block';
    return false;
  }
}

function validationPhone() {
  let phone = document.getElementById('phone');
  let errorPhone = document.getElementById('errorInputPhone');

  let phonevalide = phone ? phone.value.trim() : '';
  let phoneRegex =
    /^(\+?(\d{1,3})[-\s.]?)?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (phoneRegex.test(phonevalide)) {
    phone.style.border = '';
    errorPhone.style.display = 'none';
    return true;
  } else {
    phone.style.border = '1px solid red';
    errorPhone.style.display = 'block';
    return false;
  }
}

// regex email
function validateEmail() {
  let email = document.getElementById('email');
  let errorEmail = document.getElementById('errorInputEmail');

  let emailvalide = email ? email.value.trim() : '';
  let emailRegex = /^[\w.]+@[\w.]+\.[a-zA-Z]{2,4}$/;

  if (emailvalide === '') {
    clearErrorEmail();
    return true;
  }
  if (emailRegex.test(emailvalide)) {
    clearErrorEmail();
    return true;
  } else {
    email.style.border = '1px solid red';
    errorEmail.style.display = 'block';
    return false;
  }
}

// clear error email
function clearErrorEmail() {
  let errorEmail = document.getElementById('errorInputEmail');
  let email = document.getElementById('email');
  email.style.border = '';
  errorEmail.style.display = 'none';
}

//regex link

function validateLink() {
  let socialMediaName = document.getElementById('socialMediaName');
  let errorLinkName = document.getElementById('errorLinkName');
  let link = document.getElementById('link');
  let errorInputLink = document.getElementById('errorInputLink');

  let socialMediaNameValide = socialMediaName
    ? socialMediaName.value.trim()
    : '';
  let linkValide = link ? link.value.trim() : '';

  let linkRegex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  let socialMediaNameRegex = /^[A-Za-z\s]+$/;

  if (socialMediaNameValide === '' && linkValide === '') {
    clearErrors();
    return true;
  }

  if (
    socialMediaNameRegex.test(socialMediaNameValide) &&
    linkRegex.test(linkValide)
  ) {
    clearErrors();
    return true;
  }

  if (socialMediaNameValide === '' || linkValide === '') {
    if (socialMediaNameValide === '') {
      showError(socialMediaName, errorLinkName);
    } else {
      clearError(socialMediaName, errorLinkName);
    }

    if (linkValide === '') {
      showError(link, errorInputLink);
    } else {
      clearError(link, errorInputLink);
    }

    return false;
  }

  if (!socialMediaNameRegex.test(socialMediaNameValide)) {
    showError(socialMediaName, errorLinkName);
  } else {
    clearError(socialMediaName, errorLinkName);
  }

  if (!linkRegex.test(linkValide)) {
    showError(link, errorInputLink);
  } else {
    clearError(link, errorInputLink);
  }

  return false;
}

function showError(input, error) {
  input.style.border = '1px solid red';
  error.style.display = 'block';
}

// clear error link

function clearError(input, error) {
  input.style.border = 'none';
  error.style.display = 'none';
}
function clearErrors() {
  clearError(
    document.getElementById('socialMediaName'),
    document.getElementById('errorLinkName')
  );
  clearError(
    document.getElementById('link'),
    document.getElementById('errorInputLink')
  );
}


// recuperration des donnees

document.querySelector('.GetYourCV').addEventListener('click', () => {

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let address = document.getElementById('address').value.trim();
  let jobTitle = document.getElementById('jobTitle').value.trim();
  let profile = document.getElementById('profile').value.trim();

  // more social media
  let socialMediaNames = document.querySelectorAll('.socialMediaName');
  let links = document.querySelectorAll('.link');
  let socialMediaData = [];

  socialMediaNames.forEach((nameInput, index) => {
    let name = nameInput.value.trim();
    let link = links[index]?.value.trim();
    if (name && link) {
      socialMediaData.push({ name, link });
    }
  });

  // Technical skills
  let technicalSkills = document.querySelectorAll('.technicalSkills');
  let tecSkills = [];
  technicalSkills.forEach((skill) => {
    let skillTeclName = skill.value.trim();
    if (skillTeclName) {
      tecSkills.push(skillTeclName);
    }
  });

  // soft skills
  let softSkills = document.querySelectorAll('.softSkills');
  let sofSkills = [];
  softSkills.forEach((skill) => {
    let skillSoftName = skill.value.trim();
    if (skillSoftName) {
      sofSkills.push(skillSoftName);
    }
  });

  // languages
  let languages = document.querySelectorAll('.languages');
  let languagesDegree = document.querySelectorAll('.languagesDegree');
  let langues = [];

  languages.forEach((lang, index) => {
    let langName = lang.value.trim();
    let langDegree = languagesDegree[index].value.trim();
    if (langName && langDegree) {
      langues.push({ langName, langDegree });
    }
  });

  // hobbies
  let hobbies = document.querySelectorAll('.hobbies');
  let hobbiesData = [];
  hobbies.forEach((hobby) => {
    let hobbyName = hobby.value.trim();
    if (hobbyName) {
      hobbiesData.push(hobbyName);
    }
  });

  // education
  let DegreeName = document.querySelectorAll('.DegreeName');
  let UniversityName = document.querySelectorAll('.UniversityName');
  let FieldOfStudy = document.querySelectorAll('.FieldOfStudy');
  let StartYear = document.querySelectorAll('.StartYear');
  let EndYear = document.querySelectorAll('.EndYear');
  let educationData = [];

  DegreeName.forEach((degree, index) => {
    let degreeName = degree.value.trim();
    let universityName = UniversityName[index].value.trim();
    let fieldOfStudy = FieldOfStudy[index].value.trim();
    let startYear = StartYear[index].value.trim();
    let endYear = EndYear[index].value.trim();
    if (degreeName && universityName && fieldOfStudy && startYear && endYear) {
      educationData.push({
        degreeName,
        universityName,
        fieldOfStudy,
        startYear,
        endYear,
      });
    }
  });

  // experience
  let experience = document.querySelectorAll('.experience');
  let CompanyName = document.querySelectorAll('.CompanyName');
  let ExperienceLocation = document.querySelectorAll('.experienceLocation');
  let StartDate = document.querySelectorAll('.StartDate');
  let EndDate = document.querySelectorAll('.EndDate');
  let ExperienceDescription = document.querySelectorAll(
    '.experienceDescription'
  );
  let experienceData = [];

  experience.forEach((exp, index) => {
    let experienceName = experience[index].value.trim();
    let companyName = CompanyName[index].value.trim();
    let experienceLocation = ExperienceLocation[index].value.trim();
    let startDate = StartDate[index].value.trim();
    let endDate = EndDate[index].value.trim();
    let experienceDescription = ExperienceDescription[index].value.trim();
    if (
      experienceName &&
      companyName &&
      experienceLocation &&
      startDate &&
      endDate &&
      experienceDescription
    ) {
      experienceData.push({
        experienceName,
        companyName,
        experienceLocation,
        startDate,
        endDate,
        experienceDescription,
      });
    }
  });

  // certificates
  let CertificationName = document.querySelectorAll('.Certification');
  let certificatesData = [];
  CertificationName.forEach((cert) => {
    let certificationName = cert.value.trim();
    if (certificationName) {
      certificatesData.push(certificationName);
    }
    
  });

  


  let cv = document.getElementById('cv');
  cv.innerHTML = `
  <div class=" bg-gray-100 font-sans leading-relaxed">

  <!-- Main CV Container -->
  <div id="cvContent" class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4 mb-4 p-4 w-[8.5in] h-[11in]">

    <!-- Header - Personal Information -->
    <header class="text-center border-b border-gray-200 pb-6 flex items-center justify-between ">
      <div class="gap-2 grid">
      <h1 class="text-4xl font-bold text-gray-800">${name}</h1>
      <p class="flex items-start text-lg text-gray-600">${jobTitle}</p>
      </div>
      <div class="mt-2 text-gray-500">
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Location: ${address}</p>
      </div>
    </header>

    <!-- Profile Summary Section -->
    <section class="">
    <div class=" mt-1 text-gray-700 grid grid-cols-2 gap-2">
        ${socialMediaData
          .map(
            (socialMediaData) => `
            <p class=""> <span class="font-semibold">${socialMediaData.name}:</span><a href="${socialMediaData.link}"> ${socialMediaData.link}</a></p>
        `
          )
          .join('')}
          </div>
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mt-3">Profile Summary</h2>
      <p class="mt-4 text-gray-700">
        ${profile}
      </p>
    </section>

    <!-- Work Experience Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Work Experience</h2>
      <div class="mt-4 space-y-6 ">
      ${experienceData
        .map(
          (experience) =>
            ` <article>
          <h3 class="text-lg font-bold text-gray-800">${experience.experienceName}</h3>
          <p class="text-sm text-gray-600">${experience.companyName} / ${experience.experienceLocation} | ${experience.startDate} - ${experience.endDate}</p>
          <p class="mt-2 text-gray-700"> ${experience.experienceDescription}</p>
        </article>`
        )
        .join('')}
      </div>
    </section>

    <!-- Education Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Education</h2>
      <div class="mt-4 space-y-6">
      ${educationData
        .map(
          (education) =>
            ` <article
            <h3 class="text-lg font-bold text-gray-800">${education.degreeName} in ${education.fieldOfStudy}</h3>
        <p class="text-sm text-gray-600">${education.universityName} | ${education.startYear} - ${education.endYear} </p>
        </article>`
        )
        .join('')}

      </div>
    </section>

    <!-- Skills Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Technical Skills</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
        ${tecSkills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Soft Skills</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
        ${sofSkills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    </section>

    <!-- Certifications Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Certifications</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
      ${certificatesData
        .map((certification) => `<li>${certification}</li>`)
        .join('')}
      </ul>
    </section>

    <!-- Languages Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Languages</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
      ${langues
        .map((lang) => `<li>${lang.langName} - ${lang.langDegree}</li>`)
        .join('')}
      </ul>
    </section>

    <!-- Loisirs et intérêts -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Loisirs et intérêts</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
      ${hobbiesData.map((hoppy) => `<li>${hoppy}</li>`).join('')}
      </ul>
    </section>

  </div>
</div>

<div class="text-center mt-6 mb-6">
          <button type="button"
            id="downloadPDF"
            class="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-500">
            Télécharger en PDF
          </button>

        </div>

  `;

//  download PDF
const downloadButton = document.getElementById('downloadPDF');
    downloadButton.addEventListener('click', () => {
      const content = document.getElementById('cvContent');
      const options = {
        margin: 0,
        filename: 'MyCV.pdf',
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      
      html2pdf().set(options).from(content).save();

    });
    
});


