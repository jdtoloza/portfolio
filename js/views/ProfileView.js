//js/views/ProfileView.js

// 1. Landing / Hero Section
export function renderLandingSection(model, container) {
    container.insertAdjacentHTML('beforeend',
        <section class="profile-hero">
            <h1>${model.name}</h1>
            <h2>%{model.title}</h2>
            <p>${model.seeking}</p>
        </section>
    );
}

// 2. Bio & Background Section

export function renderBioSection(model, container) {
    container.insertAdjacentHTML('beforeend',
        <section class="profile-bio">
            <h3>About Me</h3>
            <p>${model.bio}</p>
            <p>${model.background}</p>
        </section>

    )
}