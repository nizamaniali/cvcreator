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

    appendEduCount += 1;
  }
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
  const formName = document.getElementById('formName');
  const dataName = document.getElementById('dataName');
  const formImage = document.getElementById('image');
  const cvImage = document.getElementById('cvImage');
  //   const newBtn = null;
  cvImage.src = URL.createObjectURL(formImage.files[0]);

  console.log('it works');
  //   dataName.textContent = formName.value;

  for (let i = 0; i < formData.length; i++) {
    updatedData[i].textContent = formData[i].value;
  }

  // now i am working for all the extra data here, first by calling  education data

  const extraEducation = document.getElementsByClassName('extraEducation');
  const eduData = document.getElementsByClassName('eduData');
  const eduDiv = document.getElementById('eduDiv');
  childDiv = document.getElementById('secEduDiv');

  //   for (let i = 0; i <= appendEduCount; i++) {
  //     const clone = eduDiv.appendChild(childDiv.cloneNode(true));
  //     eduDiv.appendChild(clone);
  //   }

  console.log(extraEducation);
  //   console.log(eduData);

  //   const clone = c

  for (let i = 0; i < extraEducation.length; i++) {
    // eduData[i].textContent
    //    const clone =  eduDiv.appendChild(childDiv[i].cloneNode(true));

    const clone = eduDiv.appendChild(childDiv.cloneNode(true));
    eduDiv.appendChild(clone);

    // ******** i need value of class extraEducation and i get it with this
    console.log(extraEducation[i].value);

    // i need to update the value now

    // clone is the entire div that is being cloned, thrice due to the loop
    console.log(clone.children);

    // clone[i].textContent = extraEducation[i].value;

    // const updatingData = (eduData[i] = extraEducation[i].value);
    // eduDiv.appendChild((eduData[i] = extraEducation[i].value));
  }

  // eduDiv.appendChild((extraEducation[i].textContent = eduData[i].value));
  //   console.log(extraEducation[0].value);
  // console.log(eduData[0].value);

  //   const educationDiv = document.getElementById('eduDiv');

  //   const h3 = document.createElement('h3');
  //   const p1 = document.createElement('p1');
  //   const p2 = document.createElement('p2');

  //   const h3Text = document.createTextNode(extraEducation[0].value);
  //   const p1Text = document.createTextNode(extraEducation[1].value);
  //   const p2Text = document.createTextNode(extraEducation[2].value);

  //   h3.appendChild(h3Text);
  //   p1.appendChild(p1Text);
  //   p2.appendChild(p2Text);

  //   educationDiv.appendChild(h3, p1, p2);

  //   h3.create
}
