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
          <input type="text" name="socialMediaName[]" placeholder="LinkedIn" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Social Media Link</label>
          <input type="url" name="socialMediaLink[]" placeholder="https://linkedin.com/in/username" class="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500" required>
        </div>
        <button type="button" class="text-red-500 hover:text-red-700" onclick="removeSocialMedia(this)"><svg
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
  // validation de champs
  if (validation()) {
    format[count].style.display = 'none';
    step[count].style.backgroundColor = '#3b82f6';

    count++;
    format[count].style.display = 'block';
    step[count].style.backgroundColor = 'orange';
  } else {
    alert('invalid input!');
  }
}

//  previous slide
function reSlide() {
  if (count > 0) {
    format[count].style.display = 'none';
    step[count].style.backgroundColor = '#3b82f6';

    count--;

    format[count].style.display = 'block';
    step[count].style.backgroundColor = 'orange';
  }
}

// Validation 
function validation() {
  let name = document.getElementById('name');
  let namevalide = name ? name.value.trim() : ''; 
  let nameRegex = /^[A-Za-z\s]+$/; 

  return nameRegex.test(namevalide);
}
