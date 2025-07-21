console.info("GameHubJSX is running...");

// تابع برای تولید تصادفی بازی‌ها
function generateRandomGames(count) {
  const genres = ['اکشن', 'ماجراجویی', 'پازل', 'مسابقه‌ای', 'استراتژی', 'ورزشی'];
  const games = [];
  
  for (let i = 1; i <= count; i++) {
    games.push({
      id: Date.now() + i, // شناسه منحصر به فرد
      title: `بازی ${i}`,
      genre: genres[Math.floor(Math.random() * genres.length)],
      rating: (Math.random() * 5).toFixed(1),
      image: `game-${i}.jpg`,
      description: `توضیحات نمونه برای بازی ${i}`,
      isFavorite: Math.random() > 0.7 // 30% احتمال علاقه‌مندی
    });
  }
  
  return games;
}

// هنگام لود صفحه
window.addEventListener('DOMContentLoaded', () => {
  // بررسی وجود بازی‌ها در حافظه محلی
  let games = JSON.parse(localStorage.getItem('gameHubGames'));
  
  // اگر وجود نداشت، نمونه‌ها را ایجاد کن
  if (!games || games.length === 0) {
    games = generateRandomGames(10); // 10 بازی تصادفی
    localStorage.setItem('gameHubGames', JSON.stringify(games));
    console.log('لیست بازی‌های جدید ایجاد و ذخیره شد');
  } else {
    console.log('بازی‌ها از حافظه محلی بارگذاری شدند');
  }
  
  // حالا می‌توانید از آرایه games در برنامه استفاده کنید
  console.log(games);
});