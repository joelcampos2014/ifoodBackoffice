function toggleVisibility(elementId, maskedValue, realValue) {
    var element = document.getElementById(elementId);
    if (element.textContent === maskedValue) {
        element.textContent = realValue;
    } else {
        element.textContent = maskedValue;
    }
}
