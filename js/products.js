document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.card-product');
    
    const animationDuration = 300;
    const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            filterButtons.forEach(btn => {
                btn.classList.remove('active-filter');
                if(btn === this) {
                    btn.classList.add('active-filter');
                }
            });
            
            products.forEach(product => {
                const productCategory = product.querySelector('.category').textContent.toLowerCase();
                
                if(category === 'all' || productCategory === category.toLowerCase()) {
                    product.style.display = 'block';
                    product.style.animation = `fadeIn ${animationDuration}ms ${easing}`;
                } else {
                    product.style.animation = `fadeOut ${animationDuration}ms ${easing}`;
                    setTimeout(() => {
                        product.style.display = 'none';
                    }, animationDuration);
                }
            });
        });
    });
    
    document.querySelector('.filter-btn[data-category="all"]').classList.add('active-filter');
});