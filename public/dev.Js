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
        <div>
          <label class="block text-sm font-medium text-gray-700">Social Media Name</label>
          <input type="text" name="socialMediaName[]" placeholder="LinkedIn" class="socialMediaName mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Social Media Link</label>
          <input type="url" name="socialMediaLink[]" placeholder="https://linkedin.com/in/username" class="link mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
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
        <input type="text" name="technicalSkills[]" placeholder="Python" class="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <button type="button" class="text-red-500 hover:text-red-700" onclick="removeSkill(this)"><svg
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
        <input type="text" name="softSkills[]" placeholder="Leadership" class="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <button type="button" class="text-red-500 hover:text-red-700" onclick="removeSkill(this)"><svg
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
        <input type="text" name="languages[]" placeholder="Spanish" class="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        <select name="proficiency[]" class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" required>
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
        <input type="text" name="hobbies[]" placeholder="Painting" class="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
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
          <input type="text" name="degree[]" placeholder="Master of Arts" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">University Name</label>
          <input type="text" name="university[]" placeholder="Example University" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Field of Study</label>
          <input type="text" name="fieldOfStudy[]" placeholder="History" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Start Year</label>
            <input type="number" name="startYear[]" placeholder="2018" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">End Year</label>
            <input type="number" name="endYear[]" placeholder="2022" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700 mt-2" onclick="removeEducation(this)"><svg
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
          <input type="text" name="jobTitle[]" placeholder="Project Manager" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" name="company[]" placeholder="Example Corp." class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" name="location[]" placeholder="San Francisco, USA" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="month" name="startDate[]" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">End Date</label>
            <input type="month" name="endDate[]" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea name="jobDescription[]" placeholder="Describe your responsibilities and achievements..." rows="3" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700 mt-2" onclick="removeJob(this)"><svg
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
          <input type="text" name="certificationName[]" placeholder="AWS Certified Solutions Architect" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Certification Link</label>
          <input type="url" name="certificationLink[]" placeholder="https://www.example.com/certification" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <button type="button" class="flex items-end justify-end text-red-500 hover:text-red-700 mt-2" onclick="removeCertification(this)"><svg
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

// recuperration de donnees

// function showCv(){

// }

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


let moreSocialMedia = [];
let moreLink = [];


socialMediaNames.forEach((nameInput) => {
  moreSocialMedia.push(nameInput.value.trim());
});

links.forEach((linkInput) => {
  moreLink.push(linkInput.value.trim());
});


  // let socialMediaName = document.querySelector('.socialMediaName').value;
  // let link = document.querySelector('.link').value;


  document.getElementById('cv').innerHTML = `
  <div class="bg-gray-100 font-sans leading-relaxed">

  <!-- Main CV Container -->
  <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10 p-8">

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
      <div class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2 ">
      <p> <span class="font-semibold">${socialMediaNames}:</span>  ${links}</p>
      </div>
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Profile Summary</h2>
      <p class="mt-4 text-gray-700">
        ${profile}
      </p>
    </section>

    <!-- Work Experience Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Work Experience</h2>
      <div class="mt-4 space-y-6">
        <article>
          <h3 class="text-lg font-bold text-gray-800">Software Engineer</h3>
          <p class="text-sm text-gray-600">Example Corp | 2019 - Present</p>
          <p class="mt-2 text-gray-700">Developed full-stack web applications in an agile environment, collaborated with designers and project managers to deliver optimized, user-friendly solutions.</p>
        </article>
        <article>
          <h3 class="text-lg font-bold text-gray-800">Junior Developer</h3>
          <p class="text-sm text-gray-600">Another Company | 2017 - 2019</p>
          <p class="mt-2 text-gray-700">Assisted in various projects, focusing on both frontend and backend tasks, and gained experience in team collaboration and client communication.</p>
        </article>
      </div>
    </section>

    <!-- Education Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Education</h2>
      <div class="mt-4">
        <h3 class="text-lg font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
        <p class="text-sm text-gray-600">XYZ University | 2013 - 2017</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Skills</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-3">
        <li>JavaScript</li>
        <li>React & Node.js</li>
        <li>Python & Django</li>
        <li>Project Management</li>
      </ul>
    </section>

    <!-- Certifications Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Certifications</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
        <li>AWS Certified Solutions Architect</li>
        <li>Google Analytics Certification</li>
      </ul>
    </section>

    <!-- Languages Section -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Languages</h2>
      <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 grid grid-cols-2">
        <li>English - Fluent</li>
        <li>Spanish - Intermediate</li>
      </ul>
    </section>

  </div>

</div>
  `;
});
