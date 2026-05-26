console.log(projects);
const projectGrid = document.querySelector("#projectGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter");
const emptyState = document.querySelector("#emptyState");
const boardCount = document.querySelector("#board-count");
const caseCount = document.querySelector("#case-count");
const deviceCount = document.querySelector("#device-count");


let activeFilter = "all";

function normalize(value) {
    return value.toLowerCase().trim();
}

function getSearchableText(project) {
    return [
        project.name,
        project.category,
        project.status,
        project.description,
        ...project.compatibility,
        ...project.tags
    ].join(" ");
}

function getStatusClass(status) {
    if (status === "prototype" || status === "beta") {
        return "prototype";
    }

    if (status === "archived") {
        return "archived";
    }

    return "";
}

function renderProjects() {
    const query = normalize(searchInput.value);

    const filteredProjects = projects.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const matchesSearch = normalize(getSearchableText(project)).includes(query);

        return matchesFilter && matchesSearch;
    });

    projectGrid.innerHTML = filteredProjects.map((project) => {
        const links = Object.entries(project.links)
            .map(([label, url]) => {
                const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);

                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${formattedLabel}</a>`;
            })
            .join("");

        const tags = [...project.compatibility, ...project.tags]
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("");

        return `
            <article class="card">
                <div class="card-top">
                    <div class="project-icon" aria-hidden="true">${project.icon}</div>
                    <span class="status ${getStatusClass(project.status)}">${project.status}</span>
                </div>

                <h3>${project.name}</h3>
                <p>${project.description}</p>

                <div class="tags">
                    ${tags}
                </div>

                <div class="card-links">
                    ${links}
                </div>
            </article>
        `;
    }).join("");

    emptyState.style.display = filteredProjects.length ? "none" : "block";
    boardCount.textContent = projects.filter((project) => project.category === "board").length.toString();
    caseCount.textContent = projects.filter((project) => project.category === "case").length.toString();
    deviceCount.textContent = projects.filter((project) => project.category === "device").length.toString();
    console.log(projects);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        activeFilter = button.dataset.filter;
        renderProjects();
    });
});

searchInput.addEventListener("input", renderProjects);

renderProjects();


