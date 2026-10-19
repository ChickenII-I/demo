document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Lắng nghe sự kiện click nút menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Xóa màu active của nút cũ
            navLinks.forEach(nav => nav.classList.remove('active'));

            // 2. Ẩn tất cả các form/section
            tabContents.forEach(tab => tab.classList.remove('active'));

            // 3. Đánh dấu nút vừa bấm là active
            this.classList.add('active');

            // 4. CHỈ HIỂN THỊ đúng section tương ứng
            const targetTab = this.getAttribute('data-tab');
            const targetSection = document.getElementById(targetTab);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Xử lý gửi Form liên hệ/góp ý
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🎉 Cảm ơn bạn đã gửi đóng góp ý kiến cho Nhóm 1!');
            feedbackForm.reset();
        });
    }
});