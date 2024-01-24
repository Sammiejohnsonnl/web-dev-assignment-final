function toggleNav() {
    const navList = document.querySelector('.container nav ul');
    if (navList) {
        navList.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href;

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkUrl = link.href;

        if (currentUrl === linkUrl) {
            link.parentElement.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('C:\Users\SJ\Desktop\webdev-final\web-dev-assignment-final')
        .then(response => response.json())
        .then(data => {
            const coursesSection = document.querySelector('.courses-section');

            data.courses.forEach(course => {
                const courseContainer = document.createElement('div');
                courseContainer.classList.add('course');

                const courseTitle = document.createElement('h2');
                courseTitle.textContent = course.courseTitle;
                const courseSummary = document.createElement('p');
                courseSummary.textContent = course.courseSummary;
                courseContainer.appendChild(courseTitle);
                courseContainer.appendChild(courseSummary);
                coursesSection.appendChild(courseContainer);
            });
        })
        .catch(error => console.error('Error fetching courses data:', error));
});

