document.addEventListener("DOMContentLoaded", () => {
    const tree = document.querySelector(".tree");
    if (!tree) return;

    let k = parseFloat(getComputedStyle(tree).getPropertyValue("--k")) || 0;
    let velocity = 0;
    const accel = 0.1;
    const friction = 0.92;

    let rightHeld = false;
    let leftHeld = false;

    document.addEventListener("keydown", (e) => {
        if (e.key === "d") rightHeld = true;
        if (e.key === "a") leftHeld = true;
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "d") rightHeld = false;
        if (e.key === "a") leftHeld = false;
    });

    function update() {
        if (rightHeld) velocity += accel;
        if (leftHeld) velocity -= accel;

        velocity *= friction;
        k += velocity;

        tree.style.setProperty("--k", k);
        requestAnimationFrame(update);
    }

    update();
});
let clickedCount = 9;

shadowScale = 1;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".Photo");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // Prevent double-clicking just in case
            if (button.disabled) return;

            // Increment global value
            clickedCount++;

            // Disable button
            button.disabled = true;

            // Visual feedback
            button.style.cursor = "default";
            const ornament = button.closest("span");
            const shadow = document.querySelector(".shadow");
            shadowScale += 0.15;
            shadow.style.transform =
                `rotateX(90deg) translateZ(-350px) scale(${shadowScale})`;
            ornament.style.background =
                "radial-gradient(circle at 20% 30%, #ffffff, #ffee00)";

            // Optional: remove hover effects
            button.classList.add("clicked");

            if (clickedCount==10){
                document.body.style.backgroundColor = "#90beff";
                setTimeout(ending,3000)

            }
        });
    });
});

function ending(){
    document.getElementById("tree").style.filter = "blur(20px)"
 document.getElementById("message").classList.add("visible");
}