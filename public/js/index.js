const program = [
    {
        id: 101,
        image: `/img/roofweb-p.png`,
        title: `AirBnB Project`,
        description: `Humber College, Web Application Programming, Back-end functionality: Node JS and Express. Views created with Express-Handlebars. Used MongoDB as database engine.`,
        link: `https://maftuna-kh-webapp.herokuapp.com/`,
        type: `web`
    },
    {
        id: 102,
        image: `/img/ui-p.png`,
        title: `GoodFood Ui Design`,
        description: ``,
        link: `/goodfood`,
        type: `ui`
       
    },
    {
        id:103,
        image: `/img/peach-p-1.png`,
        title: `Identity for Lady's Farm`,
        description: ``,
        link: `/peach-branding`,
        type: `identity`
    },
    {
        id:103,
        image: `/img/framework-p.png`,
        title: `Custom SPA Framework Project`,
        description: `Humber College Media Pros Website Full-Stack Development.`,
        link: `https://humbercollege-project.herokuapp.com/`,
        skills: [`Modelling`, `Texturing`, `Visual effects`, `Compositing`, `Digital cinematography`],
        type: `web`
    },
    {
        id:103,
        image: `/img/webstore-p.png`,
        title: `Webstore Project`,
        description: `Humber College Web Programming Project | JavaScript`,
        link: `https://maftuna-cs.github.io/webstore/`,
        skills: [`Modelling`, `Texturing`, `Visual effects`, `Compositing`, `Digital cinematography`],
        type: `web`
    },
    {
        id:103,
        image: `/img/ik-p.png`,
        title: `Identiy for UK TRADE`,
        description: ``,
        link: ``,
        type: `identity`
    }
]

const programBtn = event => {
    let programs;
    if (document.getElementById("web").checked) {
        programs = program.filter(program => program.type == `web`);
    } else if (document.getElementById("ui").checked) {
        programs = program.filter(program => program.type == `ui`);
    } else if (document.getElementById("identity").checked) {
        programs = program.filter(program => program.type == `identity`);
    } else {
      return;
    }
    renderItemsFromArray(programs);
}

const getItemsAsHtmlString = program => {

    return `
   
    <div class="works-body">
    
    <div class="program-title-container">
    <a href="" class="works-link"></a>
       <a href="${program.link}"><img src=${program.image} class="works-img"></a>
        <h1 class="works-title">${program.title}</h1>
        <a href=${program.link} class="works-link">See More</a>
       
        
        <p class="description">${program.description}</p>
        
     </div> `;
}

const renderItemsFromArray = arr => {
    if (arr.length > 0) {
        document.getElementById('items').innerHTML = arr.map(getItemsAsHtmlString).join('\n');
    } else {
        return;
    }}

window.addEventListener('load', () => {
    document.getElementById('program').addEventListener('click', programBtn);
    renderItemsFromArray(program);
});