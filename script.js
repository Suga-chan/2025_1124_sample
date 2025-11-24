document.querySelector('button').addEventListener('click', function() {
  // 色褪せた色合い
  const colors = ['#8b008b', '#ff1493', '#4b0082', '#2f4f4f', '#696969'];
  
  // スターダスト効果
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 8 + 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = window.innerWidth / 2 + 'px';
    particle.style.top = window.innerHeight / 2 + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.opacity = '0.8';
    particle.style.boxShadow = `0 0 15px ${particle.style.backgroundColor}`;
    
    document.body.appendChild(particle);
    
    const angle = (Math.PI * 2 * i) / 15;
    const velocity = 3;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let life = 1;
    
    const animate = () => {
      x += vx;
      y += vy;
      life -= 0.02;
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.opacity = life.toString();
      
      if (life > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    animate();
  }
  
  // ページ揺れ効果（より穏やか）
  const originalTransform = document.body.style.transform;
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      document.body.style.transform = `translateX(${(i % 2 === 0 ? -1 : 1) * 5}px)`;
    }, i * 50);
  }
  
  setTimeout(() => {
    document.body.style.transform = originalTransform;
  }, 300);
});

// ページ読み込み時の効果
window.addEventListener('load', () => {
  console.log('ヒッピー時代の終わり...');
});

// マウス追跡エフェクト（オプション）
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.95) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.width = '3px';
    spark.style.height = '3px';
    spark.style.borderRadius = '50%';
    spark.style.backgroundColor = '#ff1493';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.pointerEvents = 'none';
    spark.style.boxShadow = '0 0 8px #ff1493';
    spark.style.opacity = '0.8';
    
    document.body.appendChild(spark);
    
    setTimeout(() => {
      spark.style.opacity = '0';
      spark.style.transform = `translateY(${Math.random() * 20 - 10}px)`;
      spark.style.transition = 'all 0.5s ease-out';
    }, 10);
    
    setTimeout(() => spark.remove(), 550);
  }
});