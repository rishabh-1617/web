function selectPlan(plan) {
    // Remove the 'selected' class from all pricing plans
    document.querySelectorAll('.pricing-plan').forEach((item) => {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked plan
    plan.classList.add('selected');

    // Scroll to the pricing section for a better user experience
    const pricingSection = document.getElementById('pricingSection');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
}
