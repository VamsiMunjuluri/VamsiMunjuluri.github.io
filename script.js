document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('is-open');
        if (button.classList.contains('is-open')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

// This function is updated to handle custom accordion class names
function toggleCustomAccordion(event) {
    const item = event.currentTarget;
    const content = item.nextElementSibling;

    // Toggle the 'active' class on the title
    item.classList.toggle('active');

    // Check if the title has the 'active' class and set the height accordingly
    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }
}

// Add event listeners once the DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.custom-accordion .custom-accordion-title').forEach(title => {
        title.addEventListener('click', toggleCustomAccordion);
    });
});

