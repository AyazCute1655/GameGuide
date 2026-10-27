"use strict";

const pvpContent = document.getElementById("pvpContent");

const pvpPages = {

    "pvp-kilic.html": {
        title: "Kılıç PvP",
        icon: "⚔️",
        category: "Yakın Dövüş",
        description: "Minecraft kılıç savaşlarında zamanlamanı, hareketlerini ve savunmanı geliştir.",
        sections: [
            {
                title: "Kılıç PvP'nin temelleri",
                description: "Kılıç savaşlarında yalnızca saldırmak değil, mesafeyi ve zamanlamayı yönetmek de önemlidir.",
                tips: [
                    {
                        title: "Saldırı zamanlamasını öğren",
                        text: "Minecraft Java'nın modern savaş sisteminde saldırıların yeniden güç kazanmasını beklemek önemlidir. Sürümüne uygun saldırı mekaniklerini öğren."
                    },
                    {
                        title: "Nişangâhını kontrol et",
                        text: "Rakibinin hareketlerini takip et ve nişangâhını hedef üzerinde tutmaya çalış."
                    },
                    {
                        title: "Mesafeni ayarla",
                        text: "Rakibe yaklaşırken çevrendeki engellere dikkat et. Gereğinden fazla yaklaşmak veya çok uzak kalmak saldırılarını zorlaştırabilir."
                    },
                    {
                        title: "Hareketlerini değiştir",
                        text: "Sürekli aynı yönde ilerlemek yerine kontrollü yön değişiklikleri yap. Rakibin hareketlerini takip etmeyi öğren."
                    }
                ]
            },
            {
                title: "Kılıç için ekipman önerileri",
                description: "Ekipmanını oynadığın sunucunun kurallarına ve oyun moduna göre seç.",
                tips: [
                    {
                        title: "Keskinlik büyüsü",
                        text: "Keskinlik, uygun yakın dövüş saldırılarının hasarını artırır."
                    },
                    {
                        title: "Kırılmazlık",
                        text: "Kırılmazlık büyüsü, eşyanın dayanıklılığının daha yavaş azalmasına yardımcı olur."
                    },
                    {
                        title: "Tamir",
                        text: "Tamir büyüsü, kazanılan deneyimi kullanarak uygun eşyaların dayanıklılığını yenileyebilir."
                    }
                ]
            },
            {
                title: "Sık yapılan hatalar",
                description: "Bu hataları azaltmak savaş sırasında daha iyi kararlar vermene yardımcı olabilir.",
                tips: [
                    {
                        title: "Sadece saldırmaya odaklanmak",
                        text: "Rakibin saldırılarını, kendi canını ve çevrendeki tehlikeleri de takip et."
                    },
                    {
                        title: "Envanteri düzensiz tutmak",
                        text: "Kılıcını, yiyeceklerini ve yardımcı eşyalarını hızlıca erişebileceğin yuvalara yerleştir."
                    },
                    {
                        title: "Sürüm farklarını unutmak",
                        text: "Java ve Bedrock savaş mekanikleri tamamen aynı değildir. Oynadığın sürüme göre çalış."
                    }
                ]
            }
        ],
        related: [
            "pvp-taktikleri.html",
            "pvp-ekipman.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-balta.html": {
        title: "Balta PvP",
        icon: "🪓",
        category: "Yakın Dövüş",
        description: "Baltanın savaşta kullanımını, saldırı zamanlamasını ve kalkanlara karşı mekaniklerini öğren.",
        sections: [
            {
                title: "Baltayla savaşmak",
                description: "Balta, özellikle belirli Java Edition savaş düzenlerinde farklı saldırı özelliklerine sahip bir silahtır.",
                tips: [
                    {
                        title: "Saldırı zamanlamasına dikkat et",
                        text: "Baltayla saldırırken saldırıların yeniden güç kazanmasını beklemeyi öğren. Çok hızlı saldırmak her durumda en iyi sonucu vermez."
                    },
                    {
                        title: "Kalkan mekaniklerini öğren",
                        text: "Belirli Java Edition sürümlerinde balta saldırıları kalkanı geçici olarak devre dışı bırakabilir. Mekanikler sürüme ve sunucu ayarlarına göre değişebilir."
                    },
                    {
                        title: "Saldırı fırsatını değerlendir",
                        text: "Rakibin savunmaya odaklandığında veya hareketini yanlış yaptığında uygun saldırı fırsatlarını değerlendirmeyi öğren."
                    }
                ]
            },
            {
                title: "Balta ve kılıç karşılaştırması",
                description: "İki silahın avantajları oynadığın sürüme, büyülere ve savaş koşullarına göre değişir.",
                tips: [
                    {
                        title: "Balta",
                        text: "Java Edition'ın belirli savaş mekaniklerinde güçlü tekil saldırılar ve kalkan karşısında avantaj sağlayabilir."
                    },
                    {
                        title: "Kılıç",
                        text: "Kılıç, birçok oyun durumunda daha hızlı saldırı yapabilen ve çok yönlü kullanılabilen bir silahtır."
                    },
                    {
                        title: "Duruma göre seç",
                        text: "Sunucunun kurallarını, ekipmanını ve rakibinin kullandığı savunma araçlarını dikkate al."
                    }
                ]
            },
            {
                title: "Alıştırmalar",
                description: "Baltayı daha iyi kullanmak için temel becerilerini güvenli bir alanda çalış.",
                tips: [
                    {
                        title: "Zamanlama çalış",
                        text: "Hedefe saldırdıktan sonra sonraki saldırıyı doğru zamanda yapmaya odaklan."
                    },
                    {
                        title: "Mesafe çalış",
                        text: "Rakibe ne zaman yaklaşman ve ne zaman geri çekilmen gerektiğini öğren."
                    }
                ]
            }
        ],
        related: [
            "pvp-kilic.html",
            "pvp-taktikleri.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-yay.html": {
        title: "Yay PvP",
        icon: "🏹",
        category: "Menzilli Savaş",
        description: "Yay kullanımı, hedef takibi, uygun mesafe ve ok yönetimi hakkında bilgi edin.",
        sections: [
            {
                title: "Daha isabetli ok atmak",
                description: "Menzilli savaşlarda hedefin hareketlerini izlemek ve atış zamanlamasını ayarlamak önemlidir.",
                tips: [
                    {
                        title: "Hareketi takip et",
                        text: "Rakibin yalnızca bulunduğu yere değil, hareket ettiği yöne de dikkat et."
                    },
                    {
                        title: "Yayı uygun şekilde çek",
                        text: "Okun hızını ve uçuşunu etkileyen yay çekme süresini öğren. Atışlarını kontrollü yap."
                    },
                    {
                        title: "Siper kullan",
                        text: "Açık alanda uzun süre hareketsiz kalmak yerine uygun engellerden yararlan."
                    },
                    {
                        title: "Mesafeyi değerlendir",
                        text: "Hedef uzaklaştıkça okun uçuş süresini ve hareketini hesaba kat."
                    }
                ]
            },
            {
                title: "Yay büyüleri",
                description: "Yay büyülerinin kullanım alanlarını öğren.",
                tips: [
                    {
                        title: "Güç",
                        text: "Güç büyüsü yaydan atılan okların hasarını artırır."
                    },
                    {
                        title: "Alev",
                        text: "Alev büyüsü, uygun koşullarda hedefin yanmasına neden olur."
                    },
                    {
                        title: "Yumruk",
                        text: "Yumruk büyüsü, okun hedefi daha fazla geri itmesine yardımcı olur."
                    },
                    {
                        title: "Sonsuzluk ve Tamir",
                        text: "Java Edition'da Sonsuzluk ve Tamir büyüleri normal kurallarda aynı yayda birlikte bulunamaz."
                    }
                ]
            },
            {
                title: "Yay savaşındaki hatalar",
                description: "Atışlarını daha etkili hâle getirmek için bu noktalara dikkat et.",
                tips: [
                    {
                        title: "Hareketsiz kalma",
                        text: "Atış yaparken çevrendeki rakipleri gözlemle ve gerektiğinde konum değiştir."
                    },
                    {
                        title: "Oklarını kontrol et",
                        text: "Savaş başlamadan önce yeterli ok taşıdığını kontrol et."
                    },
                    {
                        title: "Yakın mesafeyi unutma",
                        text: "Rakip çok yakına geldiğinde alternatif silahına geçmen gerekebilir."
                    }
                ]
            }
        ],
        related: [
            "pvp-ekipman.html",
            "pvp-taktikleri.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-kristal.html": {
        title: "Crystal PvP",
        icon: "💎",
        category: "İleri Seviye PvP",
        description: "End kristalleri, obsidyen yerleşimi, ekipman hazırlığı ve Crystal PvP'nin temel mantığını öğren.",
        sections: [
            {
                title: "Crystal PvP nedir?",
                description: "Crystal PvP, End kristallerinin patlamasını savaş mekaniğinin merkezine alan ileri seviye bir Minecraft PvP türüdür.",
                tips: [
                    {
                        title: "Obsidyenin rolünü öğren",
                        text: "End kristalleri uygun blokların üzerinde yerleştirilebilir. Obsidyen ve diğer gerekli blokların konumlarını anlamak temel becerilerden biridir."
                    },
                    {
                        title: "Kendi güvenliğini takip et",
                        text: "Kristal patlamaları sana da hasar verebilir. Zırhını, canını ve bulunduğun konumu dikkatli takip et."
                    },
                    {
                        title: "Yerleşim mekaniğini öğren",
                        text: "Kristal yerleşimi, patlama mesafesi ve çevredeki blokların etkisini önce uygun bir antrenman alanında öğren."
                    }
                ]
            },
            {
                title: "Ekipman hazırlığı",
                description: "Crystal PvP için gerekli ekipman sunucuya ve oynanan sürüme göre değişebilir.",
                tips: [
                    {
                        title: "Zırh ve koruma",
                        text: "Patlama hasarını azaltmaya yardımcı olan uygun zırh ve büyüleri değerlendir."
                    },
                    {
                        title: "Ölümsüzlük Totemi",
                        text: "Sunucu kuralları izin veriyorsa Ölümsüzlük Totemi acil durumlarda önemli olabilir."
                    },
                    {
                        title: "Envanter düzeni",
                        text: "Kristalleri, obsidyeni, iyileştirme eşyalarını ve diğer yardımcı araçları hızlı erişebileceğin şekilde yerleştir."
                    }
                ]
            },
            {
                title: "Dikkat edilmesi gerekenler",
                description: "Bu PvP türü hızlı karar verme ve oyun mekaniğini iyi tanıma gerektirir.",
                tips: [
                    {
                        title: "Önce antrenman yap",
                        text: "Mekanikleri tanımadan gerçek bir karşılaşmada deneme yapmak yerine kontrollü bir alanda alıştırma yap."
                    },
                    {
                        title: "Sunucu kurallarını kontrol et",
                        text: "Bazı sunucular kristalleri veya belirli ekipmanları kısıtlayabilir."
                    }
                ]
            }
        ],
        related: [
            "pvp-ekipman.html",
            "pvp-taktikleri.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-ekipman.html": {
        title: "PvP Ekipmanları",
        icon: "🛡️",
        category: "Hazırlık",
        description: "Savaş moduna göre silahını, zırhını ve yardımcı eşyalarını seç.",
        sections: [
            {
                title: "Temel savaş ekipmanları",
                description: "Doğru envanter düzeni savaş sırasında daha hızlı karar vermene yardımcı olur.",
                tips: [
                    {
                        title: "Silah",
                        text: "Oynadığın moda ve sürüme uygun kılıç, balta veya menzilli silah seç."
                    },
                    {
                        title: "Zırh",
                        text: "Zırh parçalarının dayanıklılığını ve üzerlerindeki büyüleri kontrol et."
                    },
                    {
                        title: "Yiyecek ve iyileştirme",
                        text: "Kuralların izin verdiği yiyecekleri ve iyileştirme eşyalarını hazır tut."
                    },
                    {
                        title: "Kalkan",
                        text: "Kalkanın mevcut olduğu ve kullanımının uygun olduğu modlarda savunma için değerlendir."
                    }
                ]
            },
            {
                title: "Yardımcı eşyalar",
                description: "Her eşya her PvP modunda gerekli değildir. Envanterini oyun moduna göre hazırla.",
                tips: [
                    {
                        title: "Su kovası",
                        text: "Uygun durumlarda düşme hasarını engellemeye veya araziyi kontrol etmeye yardımcı olabilir."
                    },
                    {
                        title: "Bloklar",
                        text: "İzin verilen oyun modlarında geçici engeller ve hareket yolları oluşturmak için kullanılabilir."
                    },
                    {
                        title: "Ender İncisi",
                        text: "Uygun koşullarda hızlı konum değiştirmek için kullanılabilir; atış yönünü ve varış noktasını dikkatle değerlendir."
                    },
                    {
                        title: "Dayanıklılık",
                        text: "Savaş öncesinde zırhının ve silahlarının dayanıklılığını kontrol et."
                    }
                ]
            },
            {
                title: "Envanter düzeni",
                description: "Savaş sırasında önemli eşyaları bulmak için zaman kaybetme.",
                tips: [
                    {
                        title: "Sık kullanılan eşyalar",
                        text: "Ana silahını ve en çok ihtiyaç duyduğun yardımcı eşyaları kolay erişilebilir yuvalara yerleştir."
                    },
                    {
                        title: "Fazla eşya taşıma",
                        text: "Kullanmayacağın eşyalarla envanterini doldurmak yerine gerekli malzemelere öncelik ver."
                    }
                ]
            }
        ],
        related: [
            "pvp-kilic.html",
            "pvp-balta.html",
            "pvp-kristal.html"
        ]
    },

    "pvp-taktikleri.html": {
        title: "PvP Savaş Taktikleri",
        icon: "🎯",
        category: "Strateji",
        description: "Hareket, mesafe, hedef takibi ve savaş sırasında karar verme becerilerini geliştir.",
        sections: [
            {
                title: "Hareket ve mesafe",
                description: "Konumunu ve rakibinle arandaki mesafeyi yönetmek önemli bir PvP becerisidir.",
                tips: [
                    {
                        title: "Yön değiştir",
                        text: "Hareketlerini çeşitlendirerek rakibinin seni takip etmesini zorlaştır."
                    },
                    {
                        title: "Çevreni kontrol et",
                        text: "Uçurumlara, lavlara, dar geçitlere ve kaçış yollarına dikkat et."
                    },
                    {
                        title: "Mesafeni ayarla",
                        text: "Silahının menzilini ve saldırı mekaniklerini öğrenerek uygun mesafeyi koru."
                    }
                ]
            },
            {
                title: "Savaş sırasında karar verme",
                description: "Bazen geri çekilmek, saldırmaya devam etmekten daha iyi bir seçim olabilir.",
                tips: [
                    {
                        title: "Canını takip et",
                        text: "Canın düştüğünde durumu değerlendir ve kuralların izin verdiği şekilde korunma veya iyileşme fırsatı ara."
                    },
                    {
                        title: "Hedefini seç",
                        text: "Takım savaşlarında bütün rakiplere aynı anda saldırmaya çalışmak yerine takımınla koordinasyon kur."
                    },
                    {
                        title: "Envanterini kullan",
                        text: "Savaş sırasında sık kullandığın eşyalarına hızlıca ulaşabilecek şekilde hazırlan."
                    }
                ]
            },
            {
                title: "Savaştan sonra",
                description: "Her karşılaşma hangi becerileri geliştirebileceğini anlamak için fırsattır.",
                tips: [
                    {
                        title: "Kararlarını değerlendir",
                        text: "Hangi noktada avantaj kazandığını ve hangi kararların seni zor durumda bıraktığını düşün."
                    },
                    {
                        title: "Bir beceriye odaklan",
                        text: "Aynı anda her şeyi değiştirmek yerine hareket, nişan veya zamanlama gibi bir beceriyi çalış."
                    }
                ]
            }
        ],
        related: [
            "pvp-kilic.html",
            "pvp-yay.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-antrenman.html": {
        title: "PvP Antrenman Rehberi",
        icon: "🎯",
        category: "Gelişim",
        description: "Temel becerilerini düzenli çalışarak geliştir ve kendi ilerlemeni takip et.",
        sections: [
            {
                title: "Antrenmana başlarken",
                description: "Kısa ve odaklı çalışmalar, hangi beceriyi geliştirdiğini anlamanı kolaylaştırır.",
                tips: [
                    {
                        title: "Kontrollü bir ortam seç",
                        text: "Önce özel bir dünya, eğitim alanı veya kurallarını bildiğin bir antrenman sunucusu kullan."
                    },
                    {
                        title: "Nişan çalış",
                        text: "Hareket eden hedefleri izlemeye ve nişangâhını kontrol etmeye odaklan."
                    },
                    {
                        title: "Zamanlama çalış",
                        text: "Saldırı mekaniklerini öğren ve farklı silahların kullanımını dene."
                    }
                ]
            },
            {
                title: "İlerlemeyi takip et",
                description: "Sadece kazanma sayısına değil, temel becerilerindeki gelişime de dikkat et.",
                tips: [
                    {
                        title: "Bir hedef belirle",
                        text: "Örneğin bu antrenmanda sadece nişanını veya hareketini geliştirmeye odaklan."
                    },
                    {
                        title: "Hatalarını gözlemle",
                        text: "Karşılaşmalarda ne zaman gereksiz hasar aldığını ve hangi hareketlerin işe yaradığını not et."
                    },
                    {
                        title: "Farklı rakiplerle oyna",
                        text: "Farklı oyun stillerine karşı oynayarak yeni durumlara uyum sağlamayı öğren."
                    }
                ]
            }
        ],
        related: [
            "pvp-taktikleri.html",
            "pvp-kilic.html",
            "pvp-ekipman.html"
        ]
    },

    "pvp-boxpvp.html": {
        title: "BoxPvP Rehberi",
        icon: "🟩",
        category: "Oyun Modları",
        description: "BoxPvP arenasında ekipman, kaynak yönetimi ve savaş kararları hakkında öneriler.",
        sections: [
            {
                title: "Arena ortamını tanı",
                description: "BoxPvP sunucularındaki kurallar ve sistemler birbirinden farklı olabilir.",
                tips: [
                    {
                        title: "Sunucu kurallarını öğren",
                        text: "Özel eşyalar, güvenli bölgeler, koruma sistemleri ve PvP sınırları hakkında bilgi edin."
                    },
                    {
                        title: "Ekipmanını tanı",
                        text: "Kullandığın zırhın, silahın ve yardımcı eşyaların özelliklerini öğren."
                    },
                    {
                        title: "Çevreni kontrol et",
                        text: "Rakiplerin konumlarını, arena sınırlarını ve güvenli geri çekilme yollarını gözlemle."
                    }
                ]
            },
            {
                title: "Kaynak ve ekipman yönetimi",
                description: "Her sunucuda ekonomi ve ekipman sistemleri farklı olabilir.",
                tips: [
                    {
                        title: "Önemli eşyalarını koru",
                        text: "Ölüm durumunda eşya kaybı olup olmadığını öğren ve buna göre risk al."
                    },
                    {
                        title: "Yükseltmeleri incele",
                        text: "Sunucu sisteminde ekipman geliştirme bulunuyorsa kullandığın oyun stiline uygun yükseltmeleri değerlendir."
                    },
                    {
                        title: "Takım kurallarına uy",
                        text: "Takım sistemi varsa takım arkadaşlarınla iletişim kur ve ortak hareket et."
                    }
                ]
            }
        ],
        related: [
            "pvp-ekipman.html",
            "pvp-taktikleri.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-bedwars.html": {
        title: "BedWars Rehberi",
        icon: "🛏️",
        category: "Oyun Modları",
        description: "Yatak savunması, kaynak yönetimi ve takım stratejileri hakkında bilgi edin.",
        sections: [
            {
                title: "Başlangıç stratejisi",
                description: "BedWars'ta savaşın yanında takımın yatağını korumak ve kaynakları yönetmek de önemlidir.",
                tips: [
                    {
                        title: "Yatağını koru",
                        text: "Haritanın ve oyun kurallarının sunduğu bloklarla yatağını savun. Kullanılan malzemelerin özelliklerini öğren."
                    },
                    {
                        title: "Kaynaklarını planla",
                        text: "Başlangıç kaynaklarını silah, blok ve diğer gerekli ekipmanlar arasında dengeli kullan."
                    },
                    {
                        title: "Takımınla iletişim kur",
                        text: "Hangi oyuncunun savunma yapacağını ve kimin kaynak toplayacağını önceden kararlaştır."
                    }
                ]
            },
            {
                title: "Harita üzerinde hareket",
                description: "Adalar arasındaki hareket ve kaynak noktalarının kontrolü oyun planını etkiler.",
                tips: [
                    {
                        title: "Köprü kurmayı öğren",
                        text: "Güvenli bir alanda köprü kurma ve dar alanlarda hareket etme becerilerini çalış."
                    },
                    {
                        title: "Rakipleri gözlemle",
                        text: "Rakip takımların yataklarının durumunu ve haritadaki hareketlerini takip et."
                    },
                    {
                        title: "Geri çekilme fırsatını değerlendir",
                        text: "Uygun olmayan bir çatışmayı sürdürmek yerine takımının durumunu ve hedeflerini yeniden değerlendir."
                    }
                ]
            }
        ],
        related: [
            "pvp-taktikleri.html",
            "pvp-ekipman.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-skywars.html": {
        title: "SkyWars Rehberi",
        icon: "☁️",
        category: "Oyun Modları",
        description: "Ada ganimetleri, hareket, ekipman ve çevre kontrolünü öğren.",
        sections: [
            {
                title: "Adaya hazırlan",
                description: "SkyWars'ta başlangıç kaynaklarını hızlıca değerlendirmek önemlidir.",
                tips: [
                    {
                        title: "Sandıkları kontrol et",
                        text: "Başlangıç ekipmanını ve yardımcı eşyalarını öncelik sırasına göre seç."
                    },
                    {
                        title: "Adanın sınırlarına dikkat et",
                        text: "Dar platformlarda hareket ederken düşme riskini ve diğer oyuncuları hesaba kat."
                    },
                    {
                        title: "Envanterini düzenle",
                        text: "Silahını, bloklarını ve diğer gerekli eşyalarını kolayca erişebileceğin yuvalara yerleştir."
                    }
                ]
            },
            {
                title: "Haritayı kullan",
                description: "Hareket yollarını ve rakiplerin konumunu takip etmek avantaj sağlayabilir.",
                tips: [
                    {
                        title: "Çevreni gözlemle",
                        text: "Rakiplerin hangi adalarda olduğunu ve nereye hareket ettiklerini takip et."
                    },
                    {
                        title: "Menzilli eşyaları değerlendir",
                        text: "Yay veya diğer menzilli araçlar, kurallara ve envanterine bağlı olarak uzaktaki rakiplere karşı işe yarayabilir."
                    },
                    {
                        title: "Kontrollü hareket et",
                        text: "Blok yerleştirirken veya dar alanlardan geçerken acele etmek yerine güvenli konumu değerlendir."
                    }
                ]
            }
        ],
        related: [
            "pvp-yay.html",
            "pvp-ekipman.html",
            "pvp-taktikleri.html"
        ]
    },

    "pvp-potpvp.html": {
        title: "Potion PvP",
        icon: "🧪",
        category: "Oyun Modları",
        description: "İksir kullanımı, envanter düzeni ve savaş sırasında durum etkilerini yönetmeyi öğren.",
        sections: [
            {
                title: "İksirleri tanı",
                description: "İksir türleri ve kullanımları sunucuya, sürüme ve oyun moduna göre değişebilir.",
                tips: [
                    {
                        title: "İksir etkilerini öğren",
                        text: "Hız, güç, iyileştirme ve diğer etkilerin ne işe yaradığını öğren."
                    },
                    {
                        title: "Envanteri düzenle",
                        text: "İhtiyaç duyduğun iksirleri kolayca seçebileceğin yuvalara yerleştir."
                    },
                    {
                        title: "Zamanlamaya dikkat et",
                        text: "İksir kullanmak için uygun anı değerlendir ve çevrendeki rakipleri takip etmeyi sürdür."
                    }
                ]
            },
            {
                title: "Savaş hazırlığı",
                description: "Potion PvP'de ekipman ve iksir yönetimi birlikte düşünülmelidir.",
                tips: [
                    {
                        title: "Malzemelerini kontrol et",
                        text: "Karşılaşma başlamadan önce oyun kurallarının izin verdiği iksirleri ve gerekli eşyaları kontrol et."
                    },
                    {
                        title: "Etkileri takip et",
                        text: "Mevcut durum etkilerini ve sürelerini izleyerek kararlarını buna göre ver."
                    }
                ]
            }
        ],
        related: [
            "pvp-ekipman.html",
            "pvp-taktikleri.html",
            "pvp-antrenman.html"
        ]
    },

    "pvp-uhc.html": {
        title: "UHC Rehberi",
        icon: "❤️",
        category: "Oyun Modları",
        description: "Kaynak yönetimi, ekipman hazırlığı ve risk değerlendirmesi üzerine UHC önerileri.",
        sections: [
            {
                title: "Kaynakları planla",
                description: "UHC kuralları sunucuya göre değişebilir. Oyuna başlamadan önce sağlık, iyileştirme ve kaynak kurallarını öğren.",
                tips: [
                    {
                        title: "Yiyecek topla",
                        text: "Keşif sırasında yeterli yiyeceğin olmasına dikkat et."
                    },
                    {
                        title: "Ekipmanını hazırla",
                        text: "Kazma, silah, zırh ve diğer temel eşyaları oyun ilerledikçe geliştir."
                    },
                    {
                        title: "Çevreyi gözlemle",
                        text: "Mağaralarda, yüksek bölgelerde ve diğer tehlikeli yerlerde dikkatli hareket et."
                    }
                ]
            },
            {
                title: "Karşılaşmalarda karar ver",
                description: "Kaynakların sınırlı olduğu oyun modlarında riskleri hesaplamak önemlidir.",
                tips: [
                    {
                        title: "Durumunu takip et",
                        text: "Canını, yiyecek seviyeni, zırh dayanıklılığını ve elindeki iyileştirme kaynaklarını kontrol et."
                    },
                    {
                        title: "Gerekirse geri çekil",
                        text: "Avantajlı olmadığın bir mücadeleyi sürdürmek yerine güvenli bir konuma geçmeyi değerlendir."
                    },
                    {
                        title: "Oyun kurallarını öğren",
                        text: "Doğal iyileşme, eşya kaybı ve diğer UHC kuralları her sunucuda aynı olmayabilir."
                    }
                ]
            }
        ],
        related: [
            "pvp-ekipman.html",
            "pvp-hayatta-kalma.html",
            "pvp-taktikleri.html"
        ]
    },

    "pvp-hayatta-kalma.html": {
        title: "PvP'de Hayatta Kalma",
        icon: "❤️",
        category: "Savunma",
        description: "Can yönetimi, çevre kontrolü ve doğru zamanda geri çekilme hakkında öneriler.",
        sections: [
            {
                title: "Canını ve kaynaklarını yönet",
                description: "Savaş sırasında durumunu takip etmek, ne zaman saldırıp ne zaman savunmaya geçeceğini belirlemene yardımcı olur.",
                tips: [
                    {
                        title: "Canını kontrol et",
                        text: "Canın azaldığında çevrendeki tehlikeleri değerlendir. Kurallar izin veriyorsa iyileşmek için uygun bir fırsat ara."
                    },
                    {
                        title: "Yiyecek taşı",
                        text: "Oynadığın modda yiyeceğin ve doygunluğun nasıl çalıştığını öğren."
                    },
                    {
                        title: "Zırhını kontrol et",
                        text: "Savaş öncesi ekipmanının dayanıklılığını kontrol etmeyi alışkanlık hâline getir."
                    }
                ]
            },
            {
                title: "Çevreyi kullan",
                description: "Harita ve arazi koşulları savaşın sonucunu etkileyebilir.",
                tips: [
                    {
                        title: "Tehlikeli alanlardan uzak dur",
                        text: "Lav, uçurum ve dar geçitler gibi tehlikeleri takip et."
                    },
                    {
                        title: "Kaçış yolunu bil",
                        text: "Bir mücadele başlamadan önce hangi yöne hareket edebileceğini gözlemle."
                    },
                    {
                        title: "Gereksiz risk alma",
                        text: "Rakibin ekipmanı veya sayısı karşısında dezavantajlıysan durumu yeniden değerlendir."
                    }
                ]
            }
        ],
        related: [
            "pvp-taktikleri.html",
            "pvp-ekipman.html",
            "pvp-antrenman.html"
        ]
    }
};


/* TÜRKÇE DESTEKLİ METİN */

function normalizePvpText(value) {
    return String(value || "")
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


/* HTML METNİNİ GÜVENLİ HÂLE GETİR */

function escapePvpHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


/* KATEGORİ KARTI */

function createPvpCard(filename, page) {
    return `
        <a class="pvp-card" href="${filename}">
            <div class="pvp-card-icon">
                ${escapePvpHTML(page.icon)}
            </div>

            <span class="badge">
                ${escapePvpHTML(page.category)}
            </span>

            <h3>${escapePvpHTML(page.title)}</h3>

            <p>${escapePvpHTML(page.description)}</p>

            <span class="text-link">
                Sayfayı aç →
            </span>
        </a>
    `;
}


/* ANA PVP SAYFASI */

function renderPvpHome() {
    document.title = "Minecraft PvP Merkezi | GameGuide";

    const cards = Object.entries(pvpPages)
        .map(([filename, page]) => createPvpCard(filename, page))
        .join("");

    pvpContent.innerHTML = `
        <section class="page-hero pvp-hero">
            <div class="container">

                <div class="breadcrumbs">
                    <a href="index.html">Ana Sayfa</a>
                    /
                    <a href="onemli-oneriler.html">Önemli Öneriler</a>
                    /
                    PvP Merkezi
                </div>

                <span class="eyebrow">GAMEGUIDE PVP MERKEZİ</span>

                <h1>
                    PvP'de kendini geliştir.<br>
                    <span>Daha bilinçli savaş.</span>
                </h1>

                <p>
                    Kılıç, balta, yay, Crystal PvP, BoxPvP ve diğer
                    oyun modları için taktikleri, ekipman önerilerini
                    ve antrenman rehberlerini keşfet.
                </p>

                <div class="pvp-search">
                    <input
                        id="pvpSearch"
                        type="search"
                        placeholder="Kılıç, BoxPvP, ekipman..."
                        aria-label="PvP sayfalarında ara">

                    <span id="pvpResultCount"></span>
                </div>

            </div>
        </section>

        <section class="section">
            <div class="container">

                <div class="section-heading">
                    <div>
                        <h2>PvP rehberleri</h2>
                        <p>İncelemek istediğin konuyu seç.</p>
                    </div>
                </div>

                <div class="pvp-grid" id="pvpCardGrid">
                    ${cards}
                </div>

                <p id="pvpNoResults" class="empty-message" hidden>
                    Aramana uygun bir PvP rehberi bulunamadı.
                </p>

            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                <div class="pvp-callout">
                    <h2>Hangi konuda gelişmek istiyorsun?</h2>

                    <p>
                        Temel hareket becerilerinden ekipman yönetimine
                        kadar farklı konularda çalış. Oynadığın Minecraft
                        sürümünü ve sunucu kurallarını her zaman dikkate al.
                    </p>

                    <a class="btn btn-primary" href="pvp-antrenman.html">
                        Antrenman rehberini aç →
                    </a>
                </div>
            </div>
        </section>
    `;

    const search = document.getElementById("pvpSearch");
    const grid = document.getElementById("pvpCardGrid");
    const resultCount = document.getElementById("pvpResultCount");
    const noResults = document.getElementById("pvpNoResults");

    if (!search || !grid) return;

    const cards = [...grid.querySelectorAll(".pvp-card")];

    function filterCards() {
        const query = normalizePvpText(search.value);
        let visible = 0;

        cards.forEach(card => {
            const text = normalizePvpText(card.innerText);
            const matches = text.includes(query);

            card.hidden = !matches;

            if (matches) visible++;
        });

        resultCount.textContent = `${visible} rehber`;

        noResults.hidden = visible !== 0;
    }

    search.addEventListener("input", filterCards);

    filterCards();
}


/* AYRINTILI PVP SAYFASI */

function renderPvpDetail(filename, page) {
    document.title = `${page.title} | GameGuide`;

    const sections = page.sections.map((section, index) => `
        <section class="pvp-article-section" id="pvp-section-${index + 1}">

            <div class="pvp-section-heading">
                <span class="badge">
                    BÖLÜM ${String(index + 1).padStart(2, "0")}
                </span>

                <h2>${escapePvpHTML(section.title)}</h2>

                <p>${escapePvpHTML(section.description)}</p>
            </div>

            <div class="pvp-tip-list">
                ${section.tips.map((tip, tipIndex) => `
                    <article class="pvp-tip">
                        <div class="pvp-tip-number">
                            ${String(tipIndex + 1).padStart(2, "0")}
                        </div>

                        <div>
                            <h3>${escapePvpHTML(tip.title)}</h3>
                            <p>${escapePvpHTML(tip.text)}</p>
                        </div>
                    </article>
                `).join("")}
            </div>

        </section>
    `).join("");

    const related = page.related
        .filter(relatedFilename => pvpPages[relatedFilename])
        .map(relatedFilename => createPvpCard(
            relatedFilename,
            pvpPages[relatedFilename]
        ))
        .join("");

    pvpContent.innerHTML = `
        <section class="page-hero pvp-hero">
            <div class="container">

                <div class="breadcrumbs">
                    <a href="index.html">Ana Sayfa</a>
                    /
                    <a href="onemli-oneriler.html">Önemli Öneriler</a>
                    /
                    <a href="pvp.html">PvP Merkezi</a>
                    /
                    ${escapePvpHTML(page.title)}
                </div>

                <span class="eyebrow">
                    ${escapePvpHTML(page.category)}
                </span>

                <h1>
                    ${escapePvpHTML(page.icon)}
                    ${escapePvpHTML(page.title)}
                </h1>

                <p>${escapePvpHTML(page.description)}</p>

                <div class="pvp-hero-actions">
                    <a class="btn btn-primary" href="pvp.html">
                        ← PvP Merkezine dön
                    </a>

                    <a class="btn" href="onemli-oneriler.html">
                        Önemli Öneriler
                    </a>
                </div>

            </div>
        </section>

        <section class="section">
            <div class="container pvp-article-container">

                <div class="pvp-note">
                    <strong>GameGuide önerisi</strong>

                    <p>
                        Bu rehber genel bilgi ve oyun içi gelişim amaçlıdır.
                        Minecraft Java ve Bedrock sürümlerinde savaş
                        mekanikleri farklılık gösterebilir. Sunucu kurallarını
                        ve oynadığın sürümü dikkate al.
                    </p>
                </div>

                ${sections}

                <div class="pvp-callout">
                    <h2>Bu konudaki diğer rehberlere de göz at.</h2>

                    <p>
                        İlgili konuları inceleyerek bilgini genişletebilirsin.
                    </p>

                    <a class="btn btn-primary" href="pvp.html">
                        Bütün PvP rehberleri →
                    </a>
                </div>

            </div>
        </section>

        <section class="section section-alt">
            <div class="container">

                <div class="section-heading">
                    <div>
                        <h2>İlgili PvP rehberleri</h2>
                        <p>Bu konuyla bağlantılı diğer sayfalar.</p>
                    </div>
                </div>

                <div class="pvp-grid pvp-related-grid">
                    ${related}
                </div>

            </div>
        </section>
    `;
}


/* SAYFAYI AÇ */

if (pvpContent) {
    const filename = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (filename === "pvp.html" || filename === "") {
        renderPvpHome();
    } else if (pvpPages[filename]) {
        renderPvpDetail(filename, pvpPages[filename]);
    } else {
        document.title = "Sayfa Bulunamadı | GameGuide";

        pvpContent.innerHTML = `
            <section class="section">
                <div class="container">
                    <h1>PvP sayfası bulunamadı.</h1>

                    <p>
                        Aradığın rehber henüz oluşturulmamış olabilir.
                    </p>

                    <a class="btn btn-primary" href="pvp.html">
                        PvP merkezine dön
                    </a>
                </div>
            </section>
        `;
    }
}
