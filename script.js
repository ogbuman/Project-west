//search box

document.getElementById("submitsearch").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = document.getElementById("Search_product").value.trim();
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    window.location.href = `https://westgatelifecare.com.ng/search/cat/${encodeURIComponent(inputValue)}`;
});



    document.getElementById("search_mobile").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = document.getElementById("Search_product_mobile").value.trim();    
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    window.location.href = `https://westgatelifecare.com.ng/search/cat/${encodeURIComponent(inputValue)}`;
});












const categoriesContainer = document.getElementById('categories_side');

for (const category in categories) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category_side');

    const categoryHeader = document.createElement('span');
    const categoryLink = document.createElement('a');
    categoryLink.setAttribute("href", `https://westgatelifecare.com.ng/search/cat/${category}`);       
    categoryLink.textContent = category;
    categoryHeader.appendChild(categoryLink);

    const icon = document.createElement('span');
    icon.classList.add('icon_side');
    icon.textContent = '>';
    categoryHeader.appendChild(icon);

    const subcategoryDiv = document.createElement('div');
    subcategoryDiv.classList.add('subcategory_side');

    const subcategoryList = document.createElement('ul');
    for (const subcategory of categories[category]) {
        const subcategoryItem = document.createElement('li');
        const subcategoryLink = document.createElement('a');
        subcategoryLink.setAttribute("href", `https://westgatelifecare.com.ng/search/cat/${subcategory}`);

        subcategoryLink.textContent = subcategory;

        const subcategoryDetails = document.createElement('ul');
        subcategoryDetails.classList.add('subcategoryDetails_side');

        if (subcategories[subcategory]) {
            for (const detail of subcategories[subcategory]) {
                const detailItem = document.createElement('li');
                const detailLink = document.createElement('a');
                detailLink.setAttribute("href", `https://westgatelifecare.com.ng/search/cat/${detail}`);


                detailLink.textContent = detail;
                detailItem.appendChild(detailLink);
                subcategoryDetails.appendChild(detailItem);
            }
        }
        subcategoryItem.appendChild(subcategoryLink);
        subcategoryList.appendChild(subcategoryItem);
        subcategoryItem.appendChild(subcategoryDetails);
    }

    subcategoryDiv.appendChild(subcategoryList);
    categoryDiv.appendChild(categoryHeader);
    categoryDiv.appendChild(subcategoryDiv);
    categoriesContainer.appendChild(categoryDiv);

  
        categoryDiv.querySelector('.subcategory_side');
        subcategoryDiv.style.display = subcategoryDiv.style.display === 'none' ? 'block' : 'none';
        icon.textContent = subcategoryDiv.style.display === 'none' ? '>' : 'v';
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        const subcategoryDiv = categoryDiv.querySelector('.subcategory_side');
        subcategoryDiv.style.display = subcategoryDiv.style.display === 'none' ? 'block' : 'none';
        icon.textContent = subcategoryDiv.style.display === 'none' ? '>' : 'v';
    });
}