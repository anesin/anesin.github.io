// 우클릭 메뉴 막기
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U, Ctrl+A 등 막기
document.addEventListener('keydown', function (e) {
  if (!e.ctrlKey && !e.metaKey) return;

  const key = e.key.toLowerCase();
  const blocked = ['c', 'x', 's', 'u', 'a']; // 복사, 잘라내기, 저장, 소스보기, 전체선택

  if (blocked.includes(key)) {
    e.preventDefault();
  }
});