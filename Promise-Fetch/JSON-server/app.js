const courseAPI = "http://localhost:3000/courses";

(function start() {
  getCourses(renderCourse);

  handleCreateForm();
})();

// Functions
function getCourses(callback) {
  fetch(courseAPI)
    .then((response) => response.json())
    .then(callback);
}

function createCourse(data, callback) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(callback);
}

function handleDeleteCourse(courseID) {
  fetch(`${courseAPI}/${courseID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const courseItem = document.querySelector(`.course__item-${courseID}`);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

function updateCouse(courseID, data) {
  fetch(`${courseAPI}/${courseID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      const course = document.querySelector(`.course__item-${courseID}`);
      course.document.querySelector(".course__item__image").src = data.image;
      course.document.querySelector(".course__item__title").textContent =
        data.name;
      course.document.querySelector(".course__item__des").textContent =
        data.description;
    });
}

function renderUpdateBlock(courseID) {
  const course = document.querySelector(`.course__item-${courseID}`);
  const courseImg = course.querySelector(".course__item__image").src;
  const courseTitle = course.querySelector(".course__item__title").textContent;
  const courseDes = course.querySelector(".course__item__des").textContent;

  const htmls = `
          <div class="form-update-course">
            <div>
              <label for="name">Name</label>
              <input type="text" name="name" value="${courseTitle}"/>
            </div>
            <div>
              <label for="description">Description</label>
              <input type="text" name="description" value="${courseDes}"/>
            </div>
            <div>
              <label for="image">Image Source</label>
              <input type="text" name="image" value="${courseImg}"/>
            </div>
            <div>
              <button class="btn btn--update">Save</button>
            </div>
          </div>
  `;
  course.innerHTML += htmls;
}

function handleUpdateCourse(courseID) {
  renderUpdateBlock(courseID);

  const course = document.querySelector(`.course__item-${courseID}`);
  const updateBtn = course.querySelector(".btn--update");

  updateBtn.addEventListener("click", () => {
    const name = course.querySelector("input[name=name]").value;
    const description = course.querySelector("input[name=description]").value;
    const image = course.querySelector("input[name=image]").value;

    const formData = {
      name: name,
      description: description,
      image: image,
    };

    course.querySelector(".form-update-course").remove();

    updateCouse(courseID, formData);
  });
}

function renderCourse(courses) {
  const listCourses = document.querySelector(".courses__lists");
  let htmls = courses.map((course) => {
    return `
        <div class="course__item-${course.id}">
          <img class="course__item__image" src="${course.image}" alt="Course Image">
          <h4 class= "course__item__title">${course.name}</h4>
          <p class="course__item__des">${course.description}</p>
          <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
          <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
        </div>
    `;
  });
  listCourses.innerHTML = htmls.join("");
}

function handleCreateForm() {
  const createBtn = document.querySelector(".btn--create");

  createBtn.addEventListener("click", () => {
    const name = document.querySelector("input[name=name]").value;
    const description = document.querySelector("input[name=description]").value;
    const image = document.querySelector("input[name=image]").value;

    const formData = {
      name: name,
      description: description,
      image: image,
    };

    createCourse(formData, function () {
      getCourses(renderCourse);
    });
  });
}
