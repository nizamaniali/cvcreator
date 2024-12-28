const updatedData = document.getElementsByClassName('upData');
const formData = document.getElementsByClassName('formInput');

let appendEduCount = 0;

// const formName = document.getElementById('formName');
// const dataName = document.getElementById('dataName');
// const formImage = document.getElementById('image');
// const cvImage = document.getElementById('cvImage');

// function submitBtn(event) {
//   const formName = document.getElementById('formName');
//   const dataName = document.getElementById('dataName');
//   const formImage = document.getElementById('image');
//   const cvImage = document.getElementById('cvImage');
//   //   const newBtn = null;
//   cvImage.src = URL.createObjectURL(formImage.files[0]);

//   console.log('it works');
//   //   dataName.textContent = formName.value;

//   for (let i = 0; i < formData.length; i++) {
//     updatedData[i].textContent = formData[i].value;
//   }

//   console.log(updatedData);
//   console.log(formData);
// }

function appendEducation() {
  const educationDiv = document.getElementById('education-div');
  const inputBtn = document.getElementById('addEducation');
  //   const newBtn = document.createElement('input');

  for (let i = 0; i < 3; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'extraEducation';
    if (i == 0) {
      input.placeholder = 'Instituion';
    } else if (i == 1) {
      input.placeholder = 'Degree';
    } else if (i == 2) {
      input.placeholder = 'Years';
    }
    educationDiv.appendChild(input);
  }

  if (inputBtn) {
    // console.log('before removing input btn, that if works');
    educationDiv.removeChild(inputBtn);
    newBtn = document.createElement('input');
    newBtn.type = 'button';
    newBtn.value = 'Add Education';
    newBtn.id = 'addEducation';
    newBtn.onclick = 'appendEducation()';
    educationDiv.appendChild(newBtn);
    newBtn.addEventListener('click', appendEducation);
    // newBtn.addEventListener(onclick, secondBtn);
    // console.log('hello worlddddddddd');
  }
  appendEduCount += 1;
}

function appendSkills() {
  const skillsDiv = document.getElementById('skill-div');
  const inputBtn = document.getElementById('addSkills');

  let input = document.createElement('input');
  input.type = 'text';
  input.className = 'extraSkills';
  input.placeholder = 'Skill';
  skillsDiv.appendChild(input);

  if (inputBtn) {
    // console.log('before removing input btn, that if works');
    skillsDiv.removeChild(inputBtn);
    newBtn = document.createElement('input');
    newBtn.type = 'button';
    newBtn.value = 'Add Education';
    newBtn.id = 'addSkills';
    newBtn.onclick = 'appendEducation()';
    skillsDiv.appendChild(newBtn);
    newBtn.addEventListener('click', appendSkills);
  }
}

function appendLang() {
  const langDiv = document.getElementById('lang-div');
  const inputBtn = document.getElementById('addLang');

  let input = document.createElement('input');
  input.type = 'text';
  input.className = 'extraLang';
  input.placeholder = 'Language you speak';
  langDiv.appendChild(input);

  if (inputBtn) {
    // console.log('before removing input btn, that if works');
    langDiv.removeChild(inputBtn);
    newBtn = document.createElement('input');
    newBtn.type = 'button';
    newBtn.value = 'Add Languages';
    newBtn.id = 'addLang';
    newBtn.onclick = 'appendLang()';
    langDiv.appendChild(newBtn);
    newBtn.addEventListener('click', appendLang);
  }
}

function appendExp() {
  const expDiv = document.getElementById('exp-div');
  const inputBtn = document.getElementById('addExp');
  //   const newBtn = document.createElement('input');

  for (let i = 0; i < 3; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'extraExp';
    if (i == 0) {
      input.placeholder = 'Place Where worked';
    } else if (i == 1) {
      input.placeholder = 'Your role there';
    } else if (i == 2) {
      input.placeholder = 'Information about your role';
    }
    expDiv.appendChild(input);
  }

  if (inputBtn) {
    // console.log('before removing input btn, that if works');
    expDiv.removeChild(inputBtn);
    newBtn = document.createElement('input');
    newBtn.type = 'button';
    newBtn.value = 'Add Experience';
    newBtn.id = 'addExp';
    newBtn.onclick = 'appendExp()';
    expDiv.appendChild(newBtn);
    newBtn.addEventListener('click', appendExp);
    // newBtn.addEventListener(onclick, secondBtn);
    // console.log('hello worlddddddddd');
  }
}

function submitBtn(event) {
  //   const formName = document.getElementById('formName');
  const dataName = document.getElementById('dataName');
  const formImage = document.getElementById('image');
  const cvImage = document.getElementById('cvImage');

  //   const mainCv = document.getElementById('mainCv');
  //   mainCv.classList.remove('display');

  //   const cvForm = document.getElementById('cvForm');
  //   cvForm.classList.add('display');

  for (let i = 0; i < formData.length; i++) {
    if (formData[i].value == '') {
      alert('please do not leave any field empty');
      break;
    } else {
      const mainCv = document.getElementById('mainCv');
      mainCv.classList.remove('display');

      const cvForm = document.getElementById('cvForm');
      cvForm.classList.add('display');
      break;
    }
  }

  const formName = document.getElementById('formName');
  const cvName = document.getElementById('cvName');

  cvName.textContent = formName.value;

  //   const newBtn = null;
  cvImage.src = URL.createObjectURL(formImage.files[0]);

  //   console.log('it works');
  //   dataName.textContent = formName.value;

  for (let i = 0; i < formData.length; i++) {
    updatedData[i].textContent = formData[i].value;
  }

  // now i am working for all the extra data here, first by calling  education data

  //   const extraEducation = document.getElementsByClassName('extraEducation');
  //   const eduData = document.getElementsByClassName('eduData');
  //   const eduDiv = document.getElementById('eduDiv');
  //   childDiv = document.getElementById('secEduDiv');
  //   childDivElements = document.getElementsByClassName('secEduDivs');
  //   const individual = document.getElementsByClassName("ed-ed");
  //   let clone = null;

  //   if (appendEduCount > 0)
  //     clone = eduDiv.appendChild(childDiv.cloneNode(true));
  //     eduDiv.appendChild(clone);
  //     console.log(clone.children);
  //   }

  //   for (let i = 0; i < appendEduCount; i++) {
  //     clone = childDiv.appendChild(eduData.clone());
  //     childDiv.appendChild(clone);
  //   }
  //   console.log(childDiv);

  //   updating Education

  const extraEducation = document.getElementsByClassName('extraEducation');
  const eduDiv = document.getElementById('eduDiv');
  const childDiv = document.getElementById('secEduDiv');

  for (let i = 0; i < extraEducation.length; i += 3) {
    const clone = childDiv.cloneNode(true);

    clone.querySelector('h4').textContent = extraEducation[i + 2].value;
    clone.querySelectorAll('p')[1].textContent = extraEducation[i + 1].value;
    clone.querySelectorAll('p')[0].textContent = extraEducation[i].value;

    eduDiv.appendChild(clone);
  }

  //   updating skills
  const extraSkills = document.getElementsByClassName('extraSkills');
  const skillDiv = document.getElementById('skillDiv');
  for (let i = 0; i < extraSkills.length; i++) {
    const newPara = document.createElement('p');
    newPara.textContent = extraSkills[i].value;
    skillDiv.appendChild(newPara);
  }

  //   updating  languages
  const extraLang = document.getElementsByClassName('extraLang');
  const langDiv = document.getElementById('langDiv');
  for (let i = 0; i < extraLang.length; i++) {
    const newPara = document.createElement('p');
    newPara.textContent = extraLang[i].value;
    langDiv.appendChild(newPara);
  }

  //   updating workExperience
  const extraExp = document.getElementsByClassName('extraExp');
  const workExpDiv = document.getElementById('workExpDiv');
  const newExpDiv = document.createElement('div');
  newExpDiv.classList.add('exp');

  for (let i = 0; i < extraExp.length; i += 3) {
    const h4 = document.createElement('h4');
    h4.textContent = extraExp[i].value;
    h4.classList.add('location');
    newExpDiv.appendChild(h4);

    const p1 = document.createElement('p');
    p1.textContent = extraExp[i + 1].value;
    newExpDiv.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = extraExp[i + 2].value;
    newExpDiv.appendChild(p2);

    workExpDiv.appendChild(newExpDiv);
  }
}
