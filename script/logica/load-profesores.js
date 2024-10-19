const courses = [];
const forumQuestions = [];
let currentCourseIndex = null;
document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('courseName').value;
    const maxStudents = document.getElementById('maxStudents').value;
    const description = document.getElementById('courseDescription').value;

    const newCourse = { name, maxStudents, description, students: [], posts: [] };
    courses.push(newCourse);
    renderCourses();
    $('#createCourseModal').modal('hide');
    this.reset();
});
function renderCourses() {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';
    courses.forEach((course, index) => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${course.name}</h5>
                        <p class="card-text">${course.description}</p>
                        <p><strong>Alumnos:</strong> ${course.students.length}/${course.maxStudents}</p>
                        <button class="btn btn-info" onclick="viewPosts(${index})">Ver Publicaciones</button>
                        <button class="btn btn-warning" onclick="editCourse(${index})">Modificar</button>
                        <button class="btn btn-danger" onclick="confirmDeleteCourse(${index})">Eliminar</button>
                    </div>
                </div>
            </div>`;
        container.innerHTML += card;
    });
}
function editCourse(index) {
    currentCourseIndex = index;
    const course = courses[index];
    document.getElementById('editCourseName').value = course.name;
    document.getElementById('editMaxStudents').value = course.maxStudents;
    document.getElementById('editCourseDescription').value = course.description;
    $('#editCourseModal').modal('show');
}
document.getElementById('editCourseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('editCourseName').value;
    const maxStudents = document.getElementById('editMaxStudents').value;
    const description = document.getElementById('editCourseDescription').value;
    courses[currentCourseIndex].name = name;
    courses[currentCourseIndex].maxStudents = maxStudents;
    courses[currentCourseIndex].description = description;
    renderCourses();
    $('#editCourseModal').modal('hide');
});
function confirmDeleteCourse(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este curso? Esta acción no se puede deshacer.")) {
        deleteCourse(index);
    }
}
function deleteCourse(index) {
    courses.splice(index, 1);
    renderCourses();
}
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    const content = document.getElementById('postContent').value;
    const media = document.getElementById('postMedia').value;

    const newPost = { title, description, content, media };
    courses[currentCourseIndex].posts.push(newPost);
    renderPosts(currentCourseIndex);
    $('#createPostModal').modal('hide');
    this.reset();
});
function viewPosts(courseIndex) {
    currentCourseIndex = courseIndex;
    renderPosts(courseIndex);
    $('#postsModal').modal('show');
}
function renderPosts(courseIndex) {
    const container = document.getElementById('postsContainerModal');
    const posts = courses[courseIndex].posts;
    container.innerHTML = '';
    posts.forEach((post) => {
        container.innerHTML += `
            <div>
                <h5>${post.title}</h5>
                <p>${post.description}</p>
                <p>${post.content}</p>
                ${post.media ? `<p><a href="${post.media}" target="_blank">Ver media</a></p>` : ''}
            </div>`;
    });
}
document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('forumQuestion').value;

    forumQuestions.push({ question });
    renderForum();
    $('#createForumModal').modal('hide');
    this.reset();
});
function renderForum() {
    const forumContainer = document.getElementById('forumContainer');
    forumContainer.innerHTML = '';
    forumQuestions.forEach((q, index) => {
        forumContainer.innerHTML += `<p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p>`;
    });
}
