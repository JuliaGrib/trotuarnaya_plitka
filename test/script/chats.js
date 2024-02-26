const chatIcon = document.querySelector('.chats-first');
const chatSecond = document.querySelector('.chats-second');
const chatThird = document.querySelector('.chats-third');

chatIcon.addEventListener('click', () => {
  chatIcon.classList.toggle('active');
  chatSecond.classList.toggle('active');
  chatThird.classList.toggle('active');
});
