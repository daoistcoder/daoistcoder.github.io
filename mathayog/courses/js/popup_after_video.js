const video = document.getElementById('videoLesson');
const popUp = document.getElementById('afterVideoPopup');
const videoLessonContainer = document.querySelector('.video-lesson-container');
const nextBtn = document.getElementById('popupBtn');

window.addEventListener('load', () => {
    setTimeout( (e) => {
        popUp.style.height = '15vh';
        videoLessonContainer.style.paddingBottom = '50px';
    }, 10000

    )
});

video.onended = () => {
    popUp.style.height = '15vh';
    videoLessonContainer.style.paddingBottom = '50px';
}

nextBtn.addEventListener('click', () => {
    popUp.style.height = '0';
    videoLessonContainer.style.paddingBottom = '150px';
    window.location.href = '../views/activity.html';
});
