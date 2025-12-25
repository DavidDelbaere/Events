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