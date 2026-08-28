"use strict";

/* =========================================
   TERRAWATCH V2
   GLOBAL ENVIRONMENTAL INTELLIGENCE
========================================= */


/* =========================================
   MODULE DATA
========================================= */

const modules = {

    climate: {
        icon: "🌡️",
        title: "Climate Intelligence",
        text: "Monitor temperature trends, atmospheric conditions and long-term climate patterns."
    },

    oceans: {
        icon: "🌊",
        title: "Ocean Intelligence",
        text: "Explore ocean temperature, sea-level conditions and marine environmental systems."
    },

    forests: {
        icon: "🌳",
        title: "Forest Intelligence",
        text: "Explore forest coverage, ecosystem health, biodiversity and environmental change."
    },

    air: {
        icon: "🌬️",
        title: "Air Quality Intelligence",
        text: "Monitor atmospheric conditions and environmental indicators related to air quality."
    },

    wildlife: {
        icon: "🐘",
        title: "Biodiversity Intelligence",
        text: "Explore ecosystems, habitats, wildlife and biodiversity indicators."
    },

    disasters: {
        icon: "🔥",
        title: "Natural Events Intelligence",
        text: "Track environmental events including wildfires, storms, floods and volcanic activity."
    },

    energy: {
        icon: "⚡",
        title: "Energy Intelligence",
        text: "Explore renewable energy systems, electricity generation and global energy patterns."
    },

    satellite: {
        icon: "🛰️",
        title: "Earth Observation",
        text: "Understand how satellites observe Earth's atmosphere, oceans, land and environmental change."
    }

};


/* =========================================
   MODULE MODAL
========================================= */

window.openModule = function (moduleName) {

    const module = modules[moduleName];

    if (!module) return;

    closeModal();

    const modal = document.createElement("div");

    modal.id = "terraModal";

    modal.innerHTML = `
        <div class="terra-modal-backdrop">

            <div class="terra-modal">

                <button class="terra-modal-close">
                    ×
                </button>

                <div class="terra-modal-icon">
                    ${module.icon}
                </div>

                <div class="terra-modal-label">
                    TERRAWATCH INTELLIGENCE
                </div>

                <h2>
                    ${module.title}
                </h2>

                <p>
                    ${module.text}
                </p>

                <div class="terra-modal-status">
                    <span></span>
                    Monitoring module active
                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    addModalStyles();

    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    modal.querySelector(".terra-modal-close")
        .addEventListener("click", closeModal);

    modal.querySelector(".terra-modal-backdrop")
        .addEventListener("click", event => {

            if (event.target.classList.contains("terra-modal-backdrop")) {
                closeModal();
            }

        });

};


function closeModal() {

    const modal = document.getElementById("terraModal");

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {
        modal.remove();
    }, 250);

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   MODAL CSS
========================================= */

function addModalStyles() {

    if (document.getElementById("terraModalStyles")) return;

    const style = document.createElement("style");

    style.id = "terraModalStyles";

    style.textContent = `

        #terraModal {
            position: fixed;
            inset: 0;
            z-index: 99999;
            opacity: 0;
            transition: opacity .25s ease;
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
            padding: 24px;
            background: rgba(0,0,0,.72);
            backdrop-filter: blur(18px);
        }

        .terra-modal {
            position: relative;
            width: min(580px,100%);
            padding: 42px;
            border-radius: 28px;
            background:
                linear-gradient(
                    145deg,
                    rgba(15,23,42,.98),
                    rgba(3,30,25,.98)
                );
            border: 1px solid rgba(52,211,153,.25);
            box-shadow: 0 40px 120px rgba(0,0,0,.55);
            transform: translateY(30px) scale(.96);
            transition: transform .35s ease;
        }

        #terraModal.show .terra-modal {
            transform: translateY(0) scale(1);
        }

        .terra-modal-close {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.1);
            background: rgba(255,255,255,.05);
            color: white;
            font-size: 25px;
            cursor: pointer;
        }

        .terra-modal-icon {
            font-size: 55px;
            margin-bottom: 18px;
        }

        .terra-modal-label {
            color: #34d399;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 12px;
        }

        .terra-modal h2 {
            font-size: 32px;
            margin-bottom: 16px;
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
            margin-top: 28px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,.08);
            color: #64748b;
            font-size: 12px;
        }

        .terra-modal-status span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #34d399;
            box-shadow: 0 0 10px #34d399;
        }

        @media(max-width:600px) {

            .terra-modal {
                padding: 32px 24px;
            }

            .terra-modal h2 {
                font-size: 26px;
            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================
   SCROLL BUTTONS
========================================= */

window.scrollToExplorer = function () {

    document
        .getElementById("explorer")
        ?.scrollIntoView({
            behavior: "smooth"
        });

};


window.scrollToMetrics = function () {

    document
        .getElementById("intelligence")
        ?.scrollIntoView({
            behavior: "smooth"
        });

};


/* =========================================
   NAVBAR
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    navbar.style.background =
        window.scrollY > 40
            ? "rgba(2,6,23,.94)"
            : "rgba(2,6,23,.72)";

}, { passive: true });


/* =========================================
   CARD REVEAL
========================================= */

const cards = document.querySelectorAll(
    ".metric-card, .explorer-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: .12
        }
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity .7s ease, transform .7s ease";

        card.style.transitionDelay =
            `${(index % 4) * .08}s`;

        observer.observe(card);

    });

}


/* =========================================
   BUTTON RIPPLE
========================================= */

document.querySelectorAll(
    ".primary-btn, .secondary-btn"
).forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.position = "absolute";
        ripple.style.left =
            `${event.clientX - rect.left}px`;
        ripple.style.top =
            `${event.clientY - rect.top}px`;
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,.45)";
        ripple.style.pointerEvents = "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        ripple.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: .7
                },
                {
                    transform:
                        "translate(-50%,-50%) scale(18)",
                    opacity: 0
                }
            ],
            {
                duration: 600,
                easing: "ease-out"
            }
        );

        setTimeout(() => ripple.remove(), 650);

    });

});


/* =========================================
   3D EARTH
========================================= */

(function initEarth() {

    const container =
        document.getElementById("earth");

    if (!container || typeof THREE === "undefined") {
        console.warn("TerraWatch: Three.js unavailable.");
        return;
    }

    const scene = new THREE.Scene();

    const camera =
        new THREE.PerspectiveCamera(
            45,
            1,
            .1,
            100
        );

    camera.position.z = 3.2;

    const renderer =
        new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    container.innerHTML = "";

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

    const texture =
        new THREE.TextureLoader().load(
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

    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            1.25
        )
    );

    const sun =
        new THREE.DirectionalLight(
            0xffffff,
            2
        );

    sun.position.set(5, 3, 5);

    scene.add(sun);

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
                opacity: .08,
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

        },
        { passive: true }
    );

    /* TOUCH */

    let lastTouchX = null;

    container.addEventListener(
        "touchstart",
        event => {

            lastTouchX =
                event.touches[0].clientX;

        },
        { passive: true }
    );

    container.addEventListener(
        "touchmove",
        event => {

            const currentX =
                event.touches[0].clientX;

            if (lastTouchX !== null) {

                globe.rotation.y +=
                    (currentX - lastTouchX) * .008;

            }

            lastTouchX = currentX;

        },
        { passive: true }
    );

    container.addEventListener(
        "touchend",
        () => {
            lastTouchX = null;
        },
        { passive: true }
    );

    /* ANIMATION */

    function animate() {

        requestAnimationFrame(animate);

        globe.rotation.y += .0018;

        globe.rotation.x +=
            (targetX - globe.rotation.x) * .01;

        globe.rotation.y +=
            (targetY - .0018) * .01;

        atmosphere.rotation.y =
            globe.rotation.y;

        renderer.render(
            scene,
            camera
        );

    }

    /* RESPONSIVE */

    function resize() {

        const size =
            window.innerWidth <= 450
                ? 210
                : window.innerWidth <= 750
                    ? 240
                    : 280;

        renderer.setSize(
            size,
            size,
            false
        );

        camera.aspect = 1;

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
   HERO ENTRANCE
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const hero =
            document.querySelector(".hero-content");

        const earth =
            document.querySelector(".earth-container");

        if (hero) {

            hero.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(35px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 900,
                    easing: "cubic-bezier(.16,1,.3,1)",
                    fill: "both"
                }
            );

        }

        if (earth) {

            earth.animate(
                [
                    {
                        opacity: 0,
                        transform: "scale(.8)"
                    },
                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 1100,
                    delay: 200,
                    easing: "cubic-bezier(.16,1,.3,1)",
                    fill: "both"
                }
            );

        }

    }
);


/* =========================================
   SYSTEM STATUS
========================================= */

console.log(
    "%c🌍 TerraWatch V2",
    "color:#34d399;font-size:22px;font-weight:800;"
);

console.log(
    "%cGlobal Environmental Intelligence System Online",
    "color:#22d3ee;font-size:13px;"
);
