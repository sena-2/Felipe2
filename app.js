document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item, .video-item');

    galleryItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const likeBtn = item.querySelector('.like-btn');
        const dislikeBtn = item.querySelector('.dislike-btn');
        const likesCountElem = item.querySelector('.likes-count');
        const dislikesCountElem = item.querySelector('.dislikes-count');

        // Cargar los conteos desde el localStorage
        const counts = JSON.parse(localStorage.getItem('counts')) || {};
        const itemCounts = counts[id] || { likes: 0, dislikes: 0 };

        likesCountElem.textContent = `Likes: ${itemCounts.likes}`;
        dislikesCountElem.textContent = `Dislikes: ${itemCounts.dislikes}`;

        likeBtn.addEventListener('click', () => {
            
            itemCounts.likes += 1;
            updateCounts(id, itemCounts);
            likesCountElem.textContent = `Likes: ${itemCounts.likes}`;
        });

        dislikeBtn.addEventListener('click', () => {
            itemCounts.dislikes += 1;
            updateCounts(id, itemCounts);
            dislikesCountElem.textContent = `Dislikes: ${itemCounts.dislikes}`;
        });
    });

    function updateCounts(id, counts) {
        const allCounts = JSON.parse(localStorage.getItem('counts')) || {};
        allCounts[id] = counts;
        localStorage.setItem('counts', JSON.stringify(allCounts));
    }

   
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
    
        menuToggle.addEventListener('click', () => {
            const isOpen = sidebar.style.right === '0px';
            sidebar.style.right = isOpen ? '-250px' : '0px';
            overlay.style.display = isOpen ? 'none' : 'block';
        });
    
        overlay.addEventListener('click', () => {
            sidebar.style.right = '-250px';
            overlay.style.display = 'none';
        });
    
    
});
