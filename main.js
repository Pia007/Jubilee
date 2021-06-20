function changeTheme() {
    window.theme = typeof window.theme === "string" ? window.theme : "traditional";
    let switchToTheme = window.theme === "traditional" ? "commemorative" : "traditional";
    window.theme = switchToTheme;
    document.querySelector("body").setAttribute("theme", switchToTheme); 
};
