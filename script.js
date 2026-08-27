/* =========================================
   TERRAWATCH
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
            "Climate intelligence focuses on long-term changes in temperature, precipitation, atmospheric conditions and climate patterns across the planet."
    },

    oceans: {
        icon: "🌊",
        title: "Ocean Intelligence",
        text:
            "Ocean intelligence helps us understand sea-level change, ocean temperatures, marine ecosystems and the relationship between oceans and Earth's climate."
    },

    forests: {
        icon: "🌳",
        title: "Forest Intelligence",
        text:
            "Forest intelligence focuses on forest coverage, deforestation, ecosystem health, biodiversity and the role forests play in the global carbon cycle."
    },

    air: {
        icon: "🌬️",
        title: "Air Quality Intelligence",
        text:
            "Air-quality intelligence examines atmospheric pollutants and environmental conditions that influence the quality of the air people and ecosystems depend on."
    },

    wildlife: {
        icon: "🐘",
        title: "Biodiversity Intelligence",
        text:
            "Biodiversity intelligence explores ecosystems, species diversity, habitats and the environmental pressures affecting wildlife."
    },

    disasters: {
        icon: "🌋",
        title: "Natural Events Intelligence",
        text:
            "Environmental monitoring can help identify and visualize events such as wildfires, storms, floods and volcanic activity."
    },

    energy: {
        icon: "⚡",
        title: "Energy Intelligence",
        text:
            "Energy intelligence examines how societies produce and consume energy, including the growing role of renewable energy systems."
    },

    satellite: {
        icon: "🛰️",
        title: "Earth Observation",
        text:
            "Earth-observation satellites provide valuable information about Earth's surface, atmosphere, oceans and environmental changes."
    }

};


/* =========================================
   OPEN MODULE
========================================= */

window.openModule = function(moduleName) {

    const module = modules[moduleName];

    if (!module) return;

    createModal(
        module.icon,
        module.title,
        module.text
    );

};


/* =========================================
   MODAL
========================================= */

function createModal(icon, title, text) {

    closeModal();

    const modal = document.createElement("div");

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
                    ${icon}
                </div>

                <h2>
                    ${title}
                </h2>

                <p>
                    ${text}
                </p>

                <div class="terra-modal-status">

                    <span></span>

                    TerraWatch Intelligence Module

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    addModalStyles();

    const closeButton =
        modal.querySelector(".terra-modal-close");

    closeButton.addEventListener(
        "click",
        closeModal
    );

    modal
        .querySelector(".terra-modal-backdrop")
        .addEventListener("click", function(event) {

            if (
                event.target ===
                this
            ) {
                closeModal();
            }

        });


    document.addEventListener(
        "keydown",
        handleEscape
    );


    requestAnimationFrame(() => {

        modal.classList.add("show");

    });

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    const modal =
        document.getElementById("terraModal");

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {

        modal.remove();

    }, 250);

    document.removeEventListener(
        "keydown",
        handleEscape
    );

}


function handleEscape(event) {

    if (event.key === "Escape") {

        closeModal();

    }

}


/* =========================================
   MODAL STYLES
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

    style.id =
        "terraModalStyles";


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
                blur(14px);

        }


        .terra-modal {

            position: relative;

            width: min(
                600px,
                100%
            );

            padding: 45px;

            border-radius: 28px;

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
                transform .35s ease;

        }


        #terraModal.show
        .terra-modal {

            transform:
                translateY(0)
                scale(1);

        }


        .terra-modal-close {

            position: absolute;

            top: 18px;
            right: 20px;

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

            transition: .25s;

        }


        .terra-modal-close:hover {

            background:
                rgba(239,68,68,.2);

            transform:
                rotate(90deg);

        }


        .terra-modal-icon {

            font-size: 55px;

            margin-bottom: 20px;

        }


        .terra-modal h2 {

            font-size: 32px;

            margin-bottom: 18px;

        }


        .terra-modal p {

            color: #94a3b8;

            line-height: 1.8;

            font-size: 16px;

        }


        .terra-modal-status {

            display: flex;

            align-items: center;

            gap: 9px;

            margin-top: 30px;

            padding-top: 20px;

            border-top:
                1px solid
                rgba(255,255,255,.08);

            color: #64748b;

            font-size: 12px;

        }


        .terra-modal-status span {

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

                padding: 32px 25px;

            }

            .terra-modal h2 {

                font-size: 26px;

            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================
   SMOOTH SCROLL HELPERS
========================================= */

window.scrollToExplorer = function() {

    const section =
        document.getElementById("explorer");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

};


window.scrollToMetrics = function() {

    const section =
        document.getElementById("intelligence");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

};


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(2, 6, 23, 0.92)";

        } else {

            navbar.style.background =
                "rgba(2, 6, 23, 0.72)";

        }

    },
    { passive: true }
);


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements =
    document.querySelectorAll(
        ".metric-card, .explorer-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element, index) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            `
            opacity .7s ease,
            transform .7s ease
            `;

        element.style.transitionDelay =
            `${(index % 4) * 0.08}s`;

        revealObserver.observe(
            element
        );

    }
);


/* =========================================
   HERO ENTRANCE
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const hero =
            document.querySelector(
                ".hero-content"
            );

        const earth =
            document.querySelector(
                ".earth-container"
            );


        if (hero) {

            hero.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translateY(35px)"
                    },
                    {
                        opacity: 1,
                        transform:
                            "translateY(0)"
                    }
                ],
                {
                    duration: 1000,
                    easing:
                        "cubic-bezier(.16,1,.3,1)",
                    fill: "both"
                }
            );

        }


        if (earth) {

            earth.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "scale(.75)"
                    },
                    {
                        opacity: 1,
                        transform:
                            "scale(1)"
                    }
                ],
                {
                    duration: 1200,
                    delay: 250,
                    easing:
                        "cubic-bezier(.16,1,.3,1)",
                    fill: "both"
                }
            );

        }

    }
);


/* =========================================
   EARTH MOUSE PARALLAX
========================================= */

const earth =
    document.querySelector(
        ".earth-container"
    );


if (
    earth &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 12;

            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 12;


            earth.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================
   BUTTON RIPPLE
========================================= */

document
    .querySelectorAll(
        ".primary-btn, .secondary-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "10px";

                ripple.style.height =
                    "10px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.45)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.left =
                    `${event.offsetX}px`;

                ripple.style.top =
                    `${event.offsetY}px`;

                ripple.animate(
                    [
                        {
                            transform:
                                "translate(-50%,-50%) scale(1)",
                            opacity: .7
                        },
                        {
                            transform:
                                "translate(-50%,-50%) scale(15)",
                            opacity: 0
                        }
                    ],
                    {
                        duration: 600,
                        easing: "ease-out"
                    }
                );

                this.style.position =
                    "relative";

                this.style.overflow =
                    "hidden";

                this.appendChild(ripple);

                setTimeout(
                    () => ripple.remove(),
                    650
                );

            }
        );

    });


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%c🌍 TerraWatch",
    "color:#34d399;font-size:22px;font-weight:bold;"
);

console.log(
    "%cGlobal Environmental Intelligence System Online",
    "color:#22d3ee;font-size:13px;"
);

/* =========================================
   EARTH INTERACTION
========================================= */

const earthVisual =
    document.querySelector(".earth");

if (earthVisual) {

    earthVisual.addEventListener("mousemove", (event) => {

        const rect =
            earthVisual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;

        earthVisual.style.transform =
            `translate(${x * 12}px, ${y * 12}px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;

    });

    earthVisual.addEventListener("mouseleave", () => {

        earthVisual.style.transform = "";

    });

}
