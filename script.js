// 1. Son regl tarihi (10 Ağustos 2026)
const sonReglTarihi = new Date("2026-08-03"); 

// 2. Her güne özel farklı sevgililik mesajları listesi
const gunlukMesajlar = {
    1: "Bugün sana ekstra nazik olma ve pamuklara sarma günü! 🌸",
    2: "Dünyanın en tatlı insanının biraz dinlenmeye ihtiyacı var. 💕",
    3: "Sıcak bir çay, güzel bir battaniye ve ben... Her zaman yanındayım. ☕",
    4: "Bugün modun biraz düşük olabilir ama seni her hâlinle çok seviyorum! ✨",
    5: "Gülüşünle dünyamı aydınlatmaya yavaş yavaş geri dönüyorsun! ☀️",
    6: "Bugün harika bir gün olacak, güzelliğin yine üzerinizde kraliçem! 👑",
    7: "Enerjin yükselmeye başladı, bugün seni gülümsetmek için sabırsızlanıyorum! 😊",
    8: "Günün senin kadar güzel, tatlı ve mükemmel geçsin! 💖",
    9: "Bugün dünyayı fethetmeye hazır gibisin, arkandayım patron! ⚡",
    10: "Gözlerinin içi yine ışıl ışıl, seni çok seviyorum! 🌟",
    11: "Ebedi ilgi servisi bugün sana özel ekstra sarılma teklif ediyor! 🧸",
    12: "Bugün birlikte harika bir şeyler yapalım mı prensesim? 🎨",
    13: "Seni her geçen gün daha çok sevdiğimi söylemiş miydim? ❤️",
    14: "Yüksek enerji alarmı! Bugün enerjinle etrafa ışık saçıyorsun! 🚀",
    15: "Dünyanın en şanslı erkeği yapma görevin bugün de başarıyla devam ediyor! 🍀",
    16: "Bugün kendine çok iyi bak, sen bana emanet edilmiş en güzel şeysin. 🌸",
    17: "Biraz kafa dinleme veya birlikte vakit geçirme? Seçim tamamen senin! 🎬",
    18: "Günün stresi varsa, hepsini kapının dışında bırakıyoruz kraliçem! 🛡️",
    19: "Bugün aklıma her gelişinde yüzümde tatlı bir tebessüm oluştu. 😊",
    20: "Harika bir gün geçirmeni diliyorum, kalbim hep seninle! 💓",
    21: "Ebedi ilgi ve sevgi servisimiz 7/24 kesintisiz hizmete devam ediyor! 🕊️",
    22: "Bugün tatlı bir şeyler aşermek serbest! Siparişlerini bekliyorum. 🍫",
    23: "Modun ne olursa olsun, kollarım her zaman senin güvenli alanın. 🧸",
    24: "Sadece varlığın bile günümü güzelleştirmeye yetiyor küçük hanımım! ✨",
    25: "Sana özel çikolata ve sarılma stoklarımız yenilendi! 📦",
    26: "Bugün biraz nazlanma günü, tüm nazını çekmeye hazırım! 👸",
    27: "Biraz ağrı veya yorgunluk hissediyorsan ben hemen kurye moduna geçiyorum! 🛵",
    28: "Bugün seni dünyadaki tüm kötülüklerden koruma günü! 🛡️",
    29: "Sana olan aşkım her yeni döngüde daha da büyüyor. 💖",
    30: "Uygulamayı açtığın için teşekkürler! Günün harika geçsin hayatımın anlamı. 🌺"
};

// Otomatik Gün ve Mesaj Hesaplama Fonksiyonu
function donguyuHesapla() {
    const bugun = new Date();
    const farkZaman = bugun - sonReglTarihi;
    const donguGunu = Math.floor(farkZaman / (1000 * 60 * 60 * 24)) + 1;

    let fazIsmi = "";
    if (donguGunu <= 5) {
        fazIsmi = "Nazik Olma & Pamuklara Sarma Dönemi 🌸";
    } else if (donguGunu <= 13) {
        fazIsmi = "Enerji Depolama & Tatlış Dönem ✨";
    } else if (donguGunu <= 16) {
        fazIsmi = "Yüksek Enerji & Dünyayı Fethetme Dönemi ⚡";
    } else {
        fazIsmi = "Ebedi Sevgiye En Çok İhtiyaç Duyulan Dönem 💖";
    }

    // Gün başlığını yazdır
    document.getElementById("dongu-gunu").innerText = `Bugün: Döngünün ${donguGunu}. Günü - ${fazIsmi}`;
    
    // Güne özel mesajı seç (Eğer 30 günden fazlaysa mod alarak başa sarar)
    const mesajIndex = ((donguGunu - 1) % 30) + 1;
    document.getElementById("gunluk-mesaj").innerText = `"${gunlukMesajlar[mesajIndex]}"`;
}

// Özel Buton Mesajları
const mesajlar = {
    tatli: "Siparişiniz alındı prensesim! Ebedi hizmetkarınız şu an sizin kadar olmasa da tatlı şeyler alıp gelmek üzere yola çıktı. O ana kadar her gün artan kendi tatlılığınızla idare edebilir misiniz?",
    sarilma: "Ebedi sarılma paketi bugüne özel genişletilip 'her durumda sarıp sarmalama' moduna geçilmiştir. Lütfen yerinizden ayrılmayınız; hemen sizi sarmalamaya geliyorum küçük hanımım!",
    cay: "7/24 Ebedi İlgi Servisi talebinizi onayladı. Sıcak çayınız ve sınırsız dinleme garantimiz yola çıktı. Birazdan yanınızdayım!",
    enerji: "Enerji seviyenize erişilemiyor, çok yüksek! Hemen rotayı oluşturuyorum, bugün nereyi dağıtıyoruz patron?",
    yalniz: "Ebedi beraber olduğumuz için yalnız kalmanıza gönlüm razı gelmiyor... Ama isteğiniz üzerine, yanınızda durup sizi her gün artan aşkımla sessizce izleyeceğim kraliçem."
};

function mesajGoster(tip) {
    document.getElementById('popup-text').innerText = mesajlar[tip];
    document.getElementById('popup').classList.remove('hidden');
}

function popupKapat() {
    document.getElementById('popup').classList.add('hidden');
}

// Sayfa yüklendiğinde otomatik hesaplamayı çalıştır
donguyuHesapla();