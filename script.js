/* =========================================
   TERRAWATCH V2
   GLOBAL ENVIRONMENTAL INTELLIGENCE
========================================= */

"use strict";


/* =========================================
   MODULE DATA
========================================= */

const modules = {

    climate: {
        icon: "🌡️",
        title: "Climate Intelligence",
        text:
            "Explore temperature patterns, atmospheric conditions and long-term climate signals."
    },

    oceans: {
        icon: "🌊",
        title: "Ocean Intelligence",
        text:
            "Explore ocean conditions, marine systems and changes affecting planetary waters."
    },

    forests: {
        icon: "🌳",
        title: "Forest Intelligence",
        text:
            "Explore forest coverage, ecosystems, biodiversity and deforestation signals."
    },

    air: {
        icon: "🌬️",
        title: "Air Quality Intelligence",
        text:
            "Explore atmospheric conditions and environmental pollution indicators."
    },

    wildlife: {
        icon: "🐘",
        title: "Biodiversity Intelligence",
        text:
            "Explore ecosystems, wildlife and biodiversity systems across the planet."
    },

    disasters: {
        icon: "🔥",
        title: "Natural Events Intelligence",
        text:
            "Monitor environmental events including wildfires, storms, floods and volcanic activity."
    },

    energy: {
        icon: "⚡",
        title: "Energy Intelligence",
        text:
            "Explore renewable energy, electricity and global energy systems."
    },

    satellite: {
        icon: "🛰️",
        title: "Earth Observation",
        text:
            "Explore how satellite observation can monitor Earth's surface, atmosphere and environmental change."
    }

};


/* =========================================
   SCROLL FUNCTIONS
========================================= */

window.scrollToDashboard = function () {

    document
        .getElementById("dashboard")
        ?.scrollIntoView({
            behavior: "smooth"
        });

};


window.scrollToExplorer = function () {

    document
        .getElementById("explorer")
        ?.scrollIntoView({
            behavior: "smooth"
        });

};


/* =========================================
   MODULE MODAL
========================================= */

window.openModule = function (name) {

    const module = modules[name];

    if (!module) return;

    closeModal();

    const modal =
        document.createElement("div");

    modal.id = "terraModal";

    modal.innerHTML = `

        <div class="terra-modal-backdrop">

            <div class="terra-modal">

                <button
                    class="terra-modal-close"
                    aria-label="Close"
                >
                    ×
                </button>

                <div class="terra-modal-icon">
                    ${module.icon}
                </div>

                <div class="modal-label">
                    TERRAWATCH INTELLIGENCE
                </div>

                <h2>
                    ${module.title}
                </h2>

                <p>
                    ${module.text}
                </p>

                <div class="modal-status">
                    <span></span>
                    Intelligence module ready
                </div>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    addModalStyles();

    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    modal
        .querySelector(".terra-modal-close")
        .addEventListener(
            "click",
            closeModal
        );

    modal
        .querySelector(".terra-modal-backdrop")
        .addEventListener(
            "click",
            event => {

                if (
                    event.target.classList.contains(
                        "terra-modal-backdrop"
                    )
                ) {
                    closeModal();
                }

            }
        );

};


function closeModal() {

    const modal =
        document.getElementById(
            "terraModal"
        );

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {
        modal.remove();
    }, 250);

}


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =========================================
   MODAL CSS
========================================= */

function addModalStyles() {

    if (
        document.getElementById(
            "terraModalStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id = "terraModalStyles";

    style.textContent = `

        #terraModal {
            position: fixed;
            inset: 0;
            z-index: 9999;

            opacity: 0;

            transition:
                opacity .25s ease;
        }

        #terraModal.show {
            opacity: 1;
        }

        .terra-modal-backdrop {
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 25px;

            background:
                rgba(0,0,0,.72);

            backdrop-filter:
                blur(15px);
        }

        .terra-modal {
            position: relative;

            width: min(580px,100%);

            padding: 42px;

            border-radius: 26px;

            background:
                linear-gradient(
                    145deg,
                    rgba(15,23,42,.98),
                    rgba(3,25,22,.98)
                );

            border:
                1px solid
                rgba(52,211,153,.25);

            box-shadow:
                0 40px 120px
                rgba(0,0,0,.55);

            transform:
                translateY(30px)
                scale(.96);

            transition:
                transform .3s ease;
        }

        #terraModal.show
        .terra-modal {
            transform:
                translateY(0)
                scale(1);
        }

        .terra-modal-close {
            position: absolute;

            top: 17px;
            right: 18px;

            width: 40px;
            height: 40px;

            border-radius: 50%;

            border:
                1px solid
                rgba(255,255,255,.1);

            background:
                rgba(255,255,255,.05);

            color: white;

            font-size: 25px;

            cursor: pointer;
        }

        .terra-modal-icon {
            font-size: 55px;
            margin-bottom: 18px;
        }

        .modal-label {
            color: #34d399;

            font-size: 10px;
            font-weight: 800;

            letter-spacing: 1.5px;

            margin-bottom: 10px;
        }

        .terra-modal h2 {
            font-size: 30px;
            margin-bottom: 16px;
        }

        .terra-modal p {
            color: #94a3b8;

            font-size: 15px;

            line-height: 1.8;
        }

        .modal-status {
            display: flex;
            align-items: center;
            gap: 8px;

            margin-top: 25px;
            padding-top: 18px;

            border-top:
                1px solid
                rgba(255,255,255,.08);

            color: #64748b;

            font-size: 11px;
        }

        .modal-status span {
            width: 7px;
            height: 7px;

            border-radius: 50%;

            background: #34d399;

            box-shadow:
                0 0 10px
                #34d399;
        }

        @media(max-width:600px) {

            .terra-modal {
                padding: 32px 24px;
            }

            .terra-modal h2 {
                font-size: 25px;
            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================
   REGION EXPLORER
========================================= */

window.selectRegion = function (region) {

    const output =
        document.getElementById(
            "regionOutput"
        );

    if (!output) return;

    output.innerHTML = `
        <strong style="color:#34d399">
            ${region}
        </strong>
        <br>
        Environmental intelligence systems available:
        climate, atmosphere, forests, oceans and biodiversity.
    `;

};


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById(
        "moduleSearch"
    );

const explorerCards =
    document.querySelectorAll(
        ".explorer-card"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();

            explorerCards.forEach(card => {

                const searchableText =
                    card.dataset.search
                        .toLowerCase();

                const visible =
                    searchableText
                        .includes(query);

                card.classList.toggle(
                    "hidden",
                    !visible
                );

            });

        }
    );

}


/* =========================================
   CHART ENGINE
========================================= */

function drawChart(
    canvasId,
    data,
    labels
) {

    const canvas =
        document.getElementById(
            canvasId
        );

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    function render() {

        const rect =
            canvas.getBoundingClientRect();

        const dpr =
            window.devicePixelRatio || 1;

        canvas.width =
            rect.width * dpr;

        canvas.height =
            rect.height * dpr;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const width = rect.width;
        const height = rect.height;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /* GRID */

        ctx.strokeStyle =
            "rgba(255,255,255,.07)";

        ctx.lineWidth = 1;

        for (
            let i = 1;
            i < 5;
            i++
        ) {

            const y =
                20 +
                (
                    height - 45
                ) *
                i / 5;

            ctx.beginPath();

            ctx.moveTo(
                0,
                y
            );

            ctx.lineTo(
                width,
                y
            );

            ctx.stroke();

        }


        /* LABELS */

        ctx.fillStyle =
            "#64748b";

        ctx.font =
            "10px Inter, sans-serif";

        labels.forEach(
            (label, index) => {

                const x =
                    index *
                    (
                        width /
                        (labels.length - 1)
                    );

                ctx.fillText(
                    label,
                    Math.max(
                        0,
                        x - 10
                    ),
                    height - 10
                );

            }
        );


        /* LINE */

        const max =
            Math.max(...data);

        const min =
            Math.min(...data);

        const range =
            max - min || 1;

        ctx.beginPath();

        data.forEach(
            (value, index) => {

                const x =
                    index *
                    (
                        width /
                        (data.length - 1)
                    );

                const y =
                    20 +
                    (
                        height - 55
                    ) *
                    (
                        1 -
                        (
                            value - min
                        ) / range
                    );

                if (index === 0) {
                    ctx.moveTo(x,y);
                } else {
                    ctx.lineTo(x,y);
                }

            }
        );

        ctx.strokeStyle =
            "#34d399";

        ctx.lineWidth = 3;

        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        ctx.stroke();


        /* AREA */

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                0,
                height
            );

        gradient.addColorStop(
            0,
            "rgba(52,211,153,.18)"
        );

        gradient.addColorStop(
            1,
            "rgba(52,211,153,0)"
        );

        ctx.lineTo(
            width,
            height - 25
        );

        ctx.lineTo(
            0,
            height - 25
        );

        ctx.closePath();

        ctx.fillStyle =
            gradient;

        ctx.fill();


        /* POINTS */

        data.forEach(
            (value,index) => {

                const x =
                    index *
                    (
                        width /
                        (data.length - 1)
                    );

                const y =
                    20 +
                    (
                        height - 55
                    ) *
                    (
                        1 -
                        (
                            value - min
                        ) / range
                    );

                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    3.5,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    "#22d3ee";

                ctx.fill();

            }
        );

    }

    render();

    window.addEventListener(
        "resize",
        render
    );

}


/* =========================================
   CHART DATA
========================================= */

drawChart(
    "temperatureChart",
    [
        0.62,
        0.71,
        0.68,
        0.82,
        0.91,
        0.96,
        1.02,
        1.08,
        1.01,
        1.07,
        1.10,
        1.12
    ],
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
);


drawChart(
    "co2Chart",
    [
        414,
        415,
        416,
        417,
        418,
        419,
        419,
        420,
        421,
        421,
        422,
        423
    ],
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
);


/* =========================================
   3D EARTH
========================================= */

(function init3DEarth() {

    const container =
        document.getElementById(
            "earth"
        );

    if (
        !container ||
        typeof THREE === "undefined"
    ) {
        console.warn(
            "TerraWatch: Three.js unavailable."
        );
        return;
    }


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            1,
            0.1,
            100
        );

    camera.position.z = 3.2;


    const renderer =
        new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    container.appendChild(
        renderer.domElement
    );


    /* EARTH */

    const geometry =
        new THREE.SphereGeometry(
            1,
            64,
            64
        );


    const loader =
        new THREE.TextureLoader();


    const texture =
        loader.load(
            "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
        );


    const material =
        new THREE.MeshPhongMaterial({
            map: texture,
            shininess: 15
        });


    const globe =
        new THREE.Mesh(
            geometry,
            material
        );


    scene.add(globe);


    /* LIGHT */

    const ambient =
        new THREE.AmbientLight(
            0xffffff,
            1.25
        );

    scene.add(ambient);


    const sunlight =
        new THREE.DirectionalLight(
            0xffffff,
            2.2
        );

    sunlight.position.set(
        5,
        3,
        5
    );

    scene.add(sunlight);


    /* ATMOSPHERE */

    const atmosphere =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                1.045,
                64,
                64
            ),
            new THREE.MeshBasicMaterial({
                color: 0x22d3ee,
                transparent: true,
                opacity: .09,
                side: THREE.BackSide
            })
        );

    scene.add(atmosphere);


    /* INTERACTION */

    let targetX = 0;
    let targetY = 0;

    document.addEventListener(
        "mousemove",
        event => {

            targetY =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * .6;

            targetX =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * .3;

        }
    );


    /* ANIMATION */

    function animate() {

        requestAnimationFrame(
            animate
        );

        globe.rotation.y += .0018;

        globe.rotation.y +=
            (
                targetY -
                globe.rotation.y
            ) * .002;

        globe.rotation.x +=
            (
                targetX -
                globe.rotation.x
            ) * .002;

        atmosphere.rotation.y =
            globe.rotation.y;

        renderer.render(
            scene,
            camera
        );

    }


    function resize() {

        const width =
            container.clientWidth;

        const height =
            container.clientHeight;

        renderer.setSize(
            width,
            height,
            false
        );

        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

    }


    window.addEventListener(
        "resize",
        resize
    );

    resize();

    animate();

})();


/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.querySelector(
        ".navbar"
    );

window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        navbar.style.background =
            window.scrollY > 40
                ? "rgba(2,6,23,.94)"
                : "rgba(2,6,23,.78)";

    },
    { passive: true }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%c🌍 TerraWatch V2",
    "color:#34d399;font-size:22px;font-weight:800;"
);

console.log(
    "%cEnvironmental Intelligence Dashboard Online",
    "color:#22d3ee;font-size:13px;"
);
