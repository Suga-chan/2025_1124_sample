document.querySelector('button').addEventListener('click', function() {
  // クリック時にカラフルな円を生成
  const colors = ['#ff1493', '#00ffff', '#ffff00', '#ff69b4', '#00ff00', '#ff6347'];
  
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement('div');
    circle.style.position = 'fixed';
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.left = Math.random() * window.innerWidth + 'px';
    circle.style.top = Math.random() * window.innerHeight + 'px';
    circle.style.pointerEvents = 'none';
    circle.style.zIndex = '999';
    circle.style.boxShadow = `0 0 10px ${circle.style.backgroundColor}`;
    
    document.body.appendChild(circle);
    
    // アニメーション
    setTimeout(() => circle.remove(), 1000);
  }
  
  // ページを揺らす効果
  document.body.style.animation = 'shake 0.5s';
  setTimeout(() => {
    document.body.style.animation = '';
  }, 500);
});

// shake アニメーションを追加
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);