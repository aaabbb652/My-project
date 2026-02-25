const songs = [
    {
        id: 1,
        name: "The Man",
        title: "Taylor Swift",
        cover: "./images/The man - Taylor swifp.jpg",
        path: "./music/Taylor Swift - The Man (Official Video).mp3", // Namuna uchun
        asl: [
            { time: 5, text: "I would be complex" },
            { time: 8, text: "I would be cool" },
            { time: 10, text: "They'd say I played the fiel before I found someone to commit to" },
            { time: 14, text: "And that would be OK" },
            { time: 16, text: "For Me to do" },
            { time: 18, text: "Every conquest I had made would make Me more of a BOSS to YOU" },
            { time: 24, text: "I'd be fearless LEADER" },
            { time: 26, text: "I'd be an ALPHA type" },
            { time: 28, text: "When everyone believes ya" },
            { time: 31, text: "What's that like?" },
            { time: 32, text: "I'm so sick of running as fast as I can" },
            { time: 37, text: "Wondering If I'd get there quicker If I was a man" },
            { time: 41, text: "And I'm so sick of them coming at Me again" },
            { time: 45, text: "Cause if I was a man" },
            { time: 47, text: "Then I'd be The man" },
            { time: 49, text: "I'd be the man" },
            { time: 51, text: "" },
            { time: 53, text: "I'd be the man" },
            { time: 55, text: "" },
            { time: 58, text: "I'd be the man" },
            { time: 60, text: "" },
            { time: 63, text: "I'd be the man" },
            { time: 66, text: "They'd say I Hustled" },
            { time: 69, text: "Put in the work" },
            { time: 71, text: "They wouldn't shake Their heads questions how much of this I deserve" },
            { time: 75, text: "What I was wearing " },
            { time: 78, text: "If I was rude" },
            { time: 80, text: "Could all be separated from My good ideas and power moves" },
            { time: 85, text: "And They would toast to Me oh" },
            { time: 87, text: "let the players play" },
            { time: 90, text: "I'd be just like Leo" },
            { time: 92, text: "In SINT-TROPEZ" },
            { time: 93, text: "I'm so sick of running as fast as I can" },
            { time: 98, text: "Wondering if I'd get There Quicker if I was a man" },
            { time: 102, text: "And I'm so sick of Them coming at Me again" },
            { time: 106, text: "Cause if I was a Man" },
            { time: 108, text: "Then I'd be the Man" },
            { time: 112, text: "" },
            { time: 115, text: "I'd be the Man" },
            { time: 117, text: "" },
            { time: 119, text: "I'd be the Man" },
            { time: 121, text: "" },
            { time: 123, text: "I'd be the Man" },
            { time: 125, text: "" },
            { time: 127, text: "What's it like to brag about racing in dollars" },
            { time: 129, text: "And getting bitches and models" },
            { time: 132, text: "And it's all good if You're bad" },
            { time: 134, text: "And it's okay if you're mad if I was out flashing My dollars" },
            { time: 138, text: "I'd be a bitch, not a baller" },
            { time: 141, text: "They paint me out to be bad" },
            { time: 143, text: "So it's okay That I'm mad" },
            { time: 146, text: "I'm so sick of running as fast as I can" },
            { time: 150, text: "Wondering if I'd get There quicker if I was a Man" },
            { time: 154, text: "I'm so sick of Them coming at Me again (Coming at Me again)" },
            { time: 159, text: "Cause if I was a Man (If I was a Man)" },
            { time: 160, text: "Then I'd be the Man (I'd be the Man)" },
            { time: 163, text: "I'm so sick of running as fast as I can (as fast as I can)" },
            { time: 167, text: "wondering if I'd get there quicker (I was a Man)" },
            { time: 172, text: "And I'm so sick of Them coming at Me again (Coming at Me again)" },
            { time: 176, text: "'Cause if I was a Man (if I was a Man" },
            { time: 178, text: "Then I'd be the Man" },
            { time: 180, text: "I'd be the Man" },
            { time: 182, text: "" },
            { time: 184, text: "I'd be the Man" },
            { time: 186, text: "" },
            { time: 189, text: "I'd be the Man (Yeah)" },
            { time: 191, text: "" },
            { time: 192, text: "I'd be the Man" },
            { time: 195, text: "I'd be the Man" },
            { time: 198, text: "" },
            { time: 200, text: "If I was a Man" },
            { time: 204, text: "(I'd be the Man)" },
            { time: 207, text: "" },
            { time: 214, text: "Conversation" },
            { time: 227, text: "End..." },




        ],
        uzb: [
            
            { time: 5, text: "Men murakkab bo‘lardim" },
            { time: 8, text: "Men zo‘r bo‘lardim" },
            { time: 10, text: "Birov bilan jiddiy bog‘lanishdan oldin ko‘p tanlov qilganimni aytishardi" },
            { time: 14, text: "Va bu normal hol bo‘lardi" },
            { time: 16, text: "Buni qilishim mumkin bo‘lardi" },
            { time: 18, text: "Har bir yutug‘im meni siz uchun yanada katta boshliq qilib ko‘rsatardi" },
            { time: 24, text: "Men qo‘rqmas lider bo‘lardim" },
            { time: 26, text: "Men alfa tipidagi inson bo‘lardim" },
            { time: 28, text: "Hamma senga ishonsa" },
            { time: 31, text: "Bu qanday his ekan?" },
            { time: 32, text: "Qo‘limdan kelgancha tez yugurishdan charchadim" },
            { time: 37, text: "Agar erkak bo‘lganimda tezroq yetarmidim deb o‘ylayman" },
            { time: 41, text: "Va ularning yana menga tashlanishidan charchadim" },
            { time: 45, text: "Chunki agar men erkak bo‘lganimda" },
            { time: 47, text: "Unda men o‘sha hurmatli odam bo‘lardim" },
            { time: 49, text: "Men erkak bo‘lardim" },
            { time: 51, text: "" },
            { time: 53, text: "Men erkak bo‘lardim" },
            { time: 55, text: "" },
            { time: 58, text: "Men erkak bo‘lardim" },
            { time: 60, text: "" },
            { time: 63, text: "Men erkak bo‘lardim" },
            { time: 66, text: "Ular men tinimsiz ishladim der edi" },
            { time: 69, text: "Mehnat qildim der edi" },
            { time: 71, text: "Ular bosh chayqab, bunga qanchalik loyiq ekanimni so‘rashmas edi" },
            { time: 75, text: "Nima kiyganimni muhokama qilishmas edi" },
            { time: 78, text: "Qo‘pol bo‘lganimda ham" },
            { time: 80, text: "Yaxshi g‘oyalarimni va kuchli qarorlarimni ajratib ko‘rishardi" },
            { time: 85, text: "Va ular menga qadah ko‘tarishardi" },
            { time: 87, text: "O‘yinchilar o‘ynayversin der edi" },
            { time: 90, text: "Men xuddi Leo kabi bo‘lardim" },
            { time: 92, text: "Sen-Trope shahrida" },
            { time: 93, text: "Qo‘limdan kelgancha tez yugurishdan charchadim" },
            { time: 98, text: "Agar erkak bo‘lganimda tezroq yetarmidim deb o‘ylayman" },
            { time: 102, text: "Va ularning yana menga tashlanishidan charchadim" },
            { time: 106, text: "Chunki agar men erkak bo‘lganimda" },
            { time: 108, text: "Unda men o‘sha hurmatli odam bo‘lardim" },
            { time: 112, text: "" },
            { time: 115, text: "Men erkak bo‘lardim" },
            { time: 117, text: "" },
            { time: 119, text: "Men erkak bo‘lardim" },
            { time: 121, text: "" },
            { time: 123, text: "Men erkak bo‘lardim" },
            { time: 125, text: "" },
            { time: 127, text: "Pulni ko‘plab topayotganing bilan maqtanish qanday ekan?" },
            { time: 129, text: "Model va qizlar bilan yurish-chi?" },
            { time: 132, text: "Yomon bo‘lsang hammasi yaxshi deyishadi" },
            { time: 134, text: "Agar men pulimni ko‘z-ko‘z qilsam, jahlim chiqsa ham mayli deyishmas edi" },
            { time: 138, text: "Meni badjahl deb atashardi, boy emas" },
            { time: 141, text: "Meni yomon qilib ko‘rsatishadi" },
            { time: 143, text: "Shuning uchun jahlim chiqsa ham mayli" },
            { time: 146, text: "Qo‘limdan kelgancha tez yugurishdan charchadim" },
            { time: 150, text: "Agar erkak bo‘lganimda tezroq yetarmidim deb o‘ylayman" },
            { time: 154, text: "Ularning yana menga tashlanishidan charchadim" },
            { time: 159, text: "Chunki agar men erkak bo‘lganimda" },
            { time: 160, text: "Unda men o‘sha odam bo‘lardim" },
            { time: 163, text: "Qo‘limdan kelgancha tez yugurishdan charchadim" },
            { time: 167, text: "Agar erkak bo‘lganimda tezroq yetarmidim deb o‘ylayman" },
            { time: 172, text: "Va ularning yana menga tashlanishidan charchadim" },
            { time: 176, text: "Chunki agar men erkak bo‘lganimda" },
            { time: 178, text: "Unda men o‘sha odam bo‘lardim" },
            { time: 180, text: "Men erkak bo‘lardim" },
            { time: 182, text: "" },
            { time: 184, text: "Men erkak bo‘lardim" },
            { time: 186, text: "" },
            { time: 189, text: "Men erkak bo‘lardim (ha)" },
            { time: 191, text: "" },
            { time: 195, text: "Men erkak bo‘lardim" },
            { time: 192, text: "Men erkak bo‘lardim" },
            { time: 200, text: "Agar men erkak bo‘lganimda" },
            { time: 198, text: "" },
            { time: 207, text: "" },
            { time: 204, text: "(Men erkak bo‘lardim)" },
            { time: 227, text: "Tugadi..." },
            { time: 214, text: "Suhbat" },
        ],
   },
    {
        id: 2,
        name: "You Need Calm Down",
        title: "Taylor Swift",
        cover: "./images/images (2).jfif",
        path: "./music/Taylor Swift - You Need To Calm Down.mp3",
        asl: [
            { time: 11 , text: "You are somebody that I don't know" },
            { time: 14 , text: "But you're taking shots at me like it's Patrón" },
            { time: 16 , text: "And I'm just like 'Damn, it's 7:00 a.m.'" },
            { time: 22 , text: "Say it in the street, that's a knock-out" },
            { time: 25 , text: "But you say it in a Tweet, that's a cop-out" },
            { time: 27 , text: "And I'm just like, 'Hey, are you okay?'" },
            { time: 33 , text: "And I ain't trying to mess with your self-expression" },
            { time: 36 , text: "But I've learned the lesson that stressin'"},
            { time: 37 , text: "And obsessin' 'bout somebody else is no fun"},
            { time: 42 , text: "And snakes and stones never broke my bones so"},
            { time: 45 , text: "So, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh"},
            { time: 50 , text: "You need to calm down"},
            { time: 53 , text: "You're being too loud"},
            { time: 55 , text: "And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)"},
            { time: 61 , text: "You need to just stop"},
            { time: 64 , text: "Like, can you just not step on my gown?"},
            { time: 67 , text: "You need to calm down"},
            { time: 70 , text: ""},
            { time: 80 , text: "You are somebody that we don't know"},
            { time: 82 , text: "But you're coming at my friends like a missile"},
            { time: 84 , text: "Why are you mad?"},
            { time: 87 , text: "When you could be GLAAD? (You could be GLAAD)"},
            { time: 90 , text: "Sunshine on the street at the parade"},
            { time: 93 , text: "But you would rather be in the dark ages"},
            { time: 95 , text: "Making that sign, must've taken all night"},
            { time: 102 , text: "You just need to take several seats and then try to restore the peace"},
            { time: 103 , text: "And control your urges to scream about all the people you hate"},
            { time: 109 ,text:  "'Cause shade never made anybody less gay so"},
            { time: 113 ,text:  "So, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh"},
            { time: 117 ,text:  "You need to calm down"},
            { time: 121 ,text:  "You're being too loud"},
            { time: 123 ,text:  "And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)"},
            { time: 128 ,text:  "You need to just stop"},
            { time: 132 ,text:  "Like, can you just not step on his gown?"},
            { time: 134 ,text:  "You need to calm down"},
            { time: 138 ,text:  ""},
            { time: 141 ,text:  "And we see you over there on the internet"},
            { time: 145 ,text:  "Comparing all the girls who are killing it"},
            { time: 147 ,text:  "But we figured you out"},
            { time: 149 ,text:  "We all know now, we all got crowns"},
            { time: 151 ,text:  "You need to calm down"},
            { time: 153 , text: "Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh"},
            { time: 157 , text: "You need to calm down (you need to calm down)"},
            { time: 160 , text: "You're being too loud (you're being too loud)"},
            { time: 163 , text: "And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)"},
            { time: 169 , text: "You need to just stop (can you stop?)"},
            { time: 171 , text: "Like, can you just not step on our gowns?"},
            { time: 174 , text: "You need to calm down"},
            { time: 175 , text: "" },
            { time: 191 , text: "You need to just stop" },
            { time: 194 , text: "Like, can you just not step on our gowns?"},
            { time: 197 , text: "You need to calm down"},
            { time: 200 , text: "" },
        ], 
        uzb: [
            { time: 11 , text: "Sen meni tanimaydigan bir odamsan" },
{ time: 14 , text: "Lekin men bilan urishayapsan, xuddi Patrón ichgandek" },
{ time: 16 , text: "Men esa shunchaki 'Voy, soat ertalab 7:00'" },
{ time: 22 , text: "Agar ko‘chada aytsang, bu haqiqiy zarba" },
{ time: 25 , text: "Lekin Tweet’da aytsang, bu qochish hisoblanadi" },
{ time: 27 , text: "Men esa shunchaki 'Hey, hammasi joyidami?'" },
{ time: 33 , text: "Men sening o‘z ifodangni buzmoqchi emasman" },
{ time: 36 , text: "Lekin men bir dars oldim, stress va" },
{ time: 37 , text: "Boshqalar haqida ortiqcha o‘ylash zerikarli ekan" },
{ time: 42 , text: "Minglab yomon so‘zlar va toshlar mendagi suyaklarni sindirmadi" },
{ time: 45 , text: "Shuning uchun, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh" },
{ time: 50 , text: "Sen tinchlanishing kerak" },
{ time: 53 , text: "Sen juda shovqinli bo‘lyapsan" },
{ time: 55 , text: "Men esa shunchaki oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)" },
{ time: 61 , text: "Senga faqat to‘xtash kerak" },
{ time: 64 , text: "Xuddi, mening libosimga qadam bosmasang bo'lmaydimi?" },
{ time: 67 , text: "Sening tinchlanishing kerak" },
{ time: 70 , text: "" },
{ time: 80 , text: "Sen biz bilmagan bir odamsan" },
{ time: 82 , text: "Lekin do‘stlarimga raketa kabi kelayapsan" },
{ time: 84 , text: "Nega jahling chiqqan?" },
{ time: 87 , text: "Sen esa baxtli bo‘lishing mumkin edi (baxtli bo‘lishing mumkin edi)" },
{ time: 90 , text: "Ko‘chalarda paradda quyosh nur sochmoqda" },
{ time: 93 , text: "Lekin sen qorong‘ulikda bo‘lishni afzal ko‘rasan" },
{ time: 95 , text: "O‘sha belgi qilish, butun kechani olgan bo‘lishi kerak" },
{ time: 102 , text: "Sen bir necha o‘rinni egallab, tinchlikni tiklashga harakat qil" },
{ time: 103 , text: "Va g‘azab bilan nafrat qilgan odamlarga baqirishni nazorat qil" },
{ time: 109 , text: "Chunki boshqalarni tanqid qilish ularni kamroq gay qilmaydi" },
{ time: 113 , text: "Shuning uchun, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh" },
{ time: 117 , text: "Sening tinchlanishing kerak" },
{ time: 121 , text: "Senga juda shovqinli bo‘lyapsan" },
{ time: 123 , text: "Men esa shunchaki oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)" },
{ time: 128 , text: "Senga faqat to‘xtash kerak" },
{ time: 132 , text: "Xuddi, mening libosimga qadam bosmasang bo'lmaydimi?" },
{ time: 134 , text: "Sen tinchlanishing kerak" },
{ time: 138 , text: "" },
{ time: 141 , text: "Internetda seni kuzatib turibmiz" },
{ time: 145 , text: "Va muvaffaqiyat qozonayotgan barcha qizlarni solishtirayapsan" },
{ time: 147 , text: "Lekin biz seni tushundik" },
{ time: 149 , text: "Endi hammamiz bilamiz, hammamizda toj bor" },
{ time: 151 , text: "Sen tinchlanishing kerak" },
{ time: 153 , text: "Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh" },
{ time: 157 , text: "Sen tinchlanishing kerak (sen tinchlanishing kerak)" },
{ time: 160 , text: "Sen juda shovqinli bo‘lyapsan (juda shovqinli bo‘lyapsan)" },
{ time: 163 , text: "Men esa shunchaki oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (oh)" },
{ time: 169 , text: "Senga faqat to‘xtash kerak (to‘xtay olasanmi?)" },
{ time: 171 , text: "Xuddi, mening libosimga qadam bosmasang bo'lmaydimi?" },
{ time: 174 , text: "Sen tinchlanishing kerak" },
{ time: 175 , text: "" },
{ time: 191 , text: "Senga faqat to‘xtash kerak" },
{ time: 194 , text: "Xuddi, mening libosimga qadam bosmasang bo'lmaydimi?" },
{ time: 197 , text: "Sen tinchlanishing kerak" },
{ time: 200 , text: "" },
        ],
    },
     {
        id: 3,
        name: "Style",
        title: "Taylor Swift",
        cover: "https://i1.sndcdn.com/artworks-3h6q6wfIgTTH-0-t500x500.jpg",
        path: "./music/Taylor Swift - Style.mp3",
        asl: [
            { time: 30 ,  text: "Midnight"  } ,
            { time: 33 , text: "You come and pick me up, no headlights" }, 
            { time: 28 , text: "" },
            { time: 40 , text: "Long drive "},
            { time: 43 , text: "Could end in burning flames or paradise"},
            { time: 50 , text: "Fade into view, oh"},
            { time: 53 , text: "It's been a while since I have even heard from you (Heard from you)"},
            { time: 61 , text: "I should just tell you to leave 'cause I"},
            { time: 64 , text: "Know exactly where it leads but I"} ,
            { time: 66 , text: "Watch us go 'round and 'round each time"},
            { time: 69 , text: "You got that James Dean daydream look in your eye"},
            { time: 74 , text: "And I got that red lip classic thing that you like"},
            { time: 79 , text: "And when we go crashing down we come back every time"},
            { time: 84 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 89 , text: "You got that long hair, slicked back, white t-shirt"},
            { time: 94 , text: "And I got that good girl faith and a tight little skirt"},
            { time: 100 , text: "And when we go crashing down we come back every time"},
            { time: 105 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 111 , text: "So it goes"},
            { time: 114 , text: "He can't keep his wild eyes on the road"},
            { time: 121 , text: "Takes me home"},
            { time: 124 , text: "Lights are off, he's taking off his coat"},
            { time: 130 , text: "I say 'I heard oh' "},
            { time: 133 , text: "That you've been out and about with some other girl, some other girl."},
            { time: 142 , text: "He says, 'What you've heard is true but I '"},
            { time: 144 , text: "Can't stop thinking about you.' And I ' "},
            { time: 147 , text: "I said, 'I've been there too a few times.' "},
            { time: 150 , text: "'Cause you got that James Dean daydream look in your eye"},
            { time: 155 , text: "And I got that red lip classic thing that you like"},
            { time: 160 , text: "And when we go crashing down we come back every time"},
            { time: 165 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 170 , text: "You got that long hair, slicked back, white t-shirt"},
            { time: 175 , text: "And I got that good girl faith and a tight little skirt"},
            { time: 181 , text: "And when we go crashing down we come back every time"},
            { time: 186 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 191 , text: "Take me home"},
            { time: 196 , text: "Just take me home, yeah"},
            { time: 201 , text: "Just take me home"},
            { time: 205 , text: ""},
            { time: 209 , text: "Out of style"},
            { time: 211 , text: "Oh, you got that James Dean daydream look in your eye"},
            { time: 216 , text: "And I got that red lip classic thing that you like"},
            { time: 221 , text: "And when we go crashing down we come back every time"},
            { time: 226 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 230 , text: "" },
        ],
        uzb: [
            { time: 30 , text: "Yarim tun..." },
            { time: 33 , text: "Sen indamay kelasan, chiroqlarsiz meni olib ketgani" },
            { time: 28 , text: "" },
            { time: 40 , text: "Uzoq tungi yo‘l..." },
            { time: 43 , text: "Oxiri alangaga aylanishi ham mumkin, yoki jannatga" },
            { time: 50 , text: "Sekin-asta yana ko‘rinishing paydo bo‘ladi" },
            { time: 53 , text: "Ancha bo‘ldi sendan bir og‘iz ham xabar eshitmaganimga" },
            { time: 61 , text: "Aslida ketishingni aytishim kerak edi, chunki men" },
            { time: 64 , text: "Bu yo‘l qayerga olib borishini juda yaxshi bilaman, lekin baribir..." },
            { time: 66 , text: "Har safar yana o‘sha aylana ichiga qaytamiz" },
            { time: 69 , text: "Ko‘zlaringda James Dean’ga o‘xshash isyonkor orzu bor" },
            { time: 74 , text: "Menda esa sen yoqtiradigan qizil labli klassik joziba" },
            { time: 79 , text: "Biz qulasak ham, baribir yana bir-birimizga qaytamiz" },
            { time: 84 , text: "Chunki bizning muhabbat hech qachon urfdan chiqmaydi" },
            { time: 89 , text: "Sening uzun, orqaga taralgan sochlaring, oddiy oq futbolkang" },
            { time: 94 , text: "Menda esa ‘yaxshi qiz’ ishonchi va tor yubka" },
            { time: 100 , text: "Biz qulasak ham, yana qaytamiz har safar" },
            { time: 105 , text: "Chunki biz hech qachon eskirmaymiz" },
            { time: 111 , text: "Shunday davom etadi hammasi" },
            { time: 114 , text: "U yovvoyi nigohlarini yo‘ldan uzolmaydi" },
            { time: 121 , text: "Meni yana uyga olib boradi" },
            { time: 124 , text: "Chiroqlar o‘chiq, u paltosini yechmoqda" },
            { time: 130 , text: "Men sekin aytaman: 'Eshitdim...'" },
            { time: 133 , text: "Sen boshqa bir qiz bilan ko‘rinib yuribsan deyishdi" },
            { time: 142 , text: "U javob beradi: 'Eshitganing rost, lekin...'" },
            { time: 144 , text: "Seni o‘ylashni to‘xtata olmayapman'" },
            { time: 147 , text: "Men kulib: 'Men ham shunaqa bo‘lganman bir necha marta'" },
            { time: 150 , text: "Chunki ko‘zlaringda o‘sha isyonkor orzu hali ham bor" },
            { time: 155 , text: "Menda esa sen yaxshi ko‘radigan o‘sha o‘zgarmas joziba" },
            { time: 160 , text: "Yana qulaymiz, yana qaytamiz" },
            { time: 165 , text: "Bizning muhabbat hech qachon eskirmaydi" },
            { time: 170 , text: "Uzun sochlaring, oq futbolkang bilan" },
            { time: 175 , text: "Va mening sodda, ammo o‘ziga tortadigan ko‘rinishim bilan" },
            { time: 181 , text: "Har safar yana bir-birimizni topamiz" },
            { time: 186 , text: "Chunki bizning hikoya urfdan chiqmaydi" },
            { time: 191 , text: "Meni uyga olib ket..." },
            { time: 196 , text: "Faqat meni uyga olib ket..." },
            { time: 201 , text: "Yana bir bor meni uyga olib ket" },
            { time: 205 , text: "" },
            { time: 209 , text: "Biz hech qachon uslubdan chiqmaymiz" },
            { time: 211 , text: "Ko‘zlaringdagi o‘sha orzu hali ham o‘zgarmagan" },
            { time: 216 , text: "Mening klassik jozibam ham o‘zgarmagan" },
            { time: 221 , text: "Qulashimiz mumkin, lekin baribir qaytamiz" },
            { time: 226 , text: "Chunki biz — hech qachon eskirmaydigan hikoyamiz" },
            { time: 230 , text: "" },
        ],


    },
    {
        id: 4,
        name: "Everything I Wanted",
        title: "Billie Eilish",
        cover: "https://i1.sndcdn.com/artworks-000664048924-d78xkx-t1080x1080.jpg",
        path: "./music/Billie Eilish - everything i wanted (Official Music Video).mp3",
        asl: [
            { time: 26 , text: "I had a dream"},
            { time: 29 , text: "I got everything I wanted"},
            { time: 34 , text: "Not what you'd think"},
            { time: 37 , text: "And if I'm being honest"},
            { time: 40 , text: "It might've been a nightmare"},
            { time: 44 , text: "To anyone who might care"},
            { time: 47 , text: ""},
            { time: 50 , text: "Thought I could fly (fly)"},
            { time: 53 , text: "So I stepped off the Golden, mm"},
            { time: 57 , text: "Nobody cried (cried, cried, cried, cried)"},
            { time: 61 , text: "Nobody even noticed"},
            { time: 63 , text: "I saw them standing right there"},
            { time: 67 , text: "Kinda thought they might care (might care, might care)"},
            { time: 74 , text: "I had a dream"},
            { time: 77 , text: "I got everything I wanted"},
            { time: 80 , text: "But when I wake up, I see"},
            { time: 84 , text: "You with me"},
            { time: 87 , text: "And you say"},
            { time: 89 , text: "'As long as I'm here, no one can hurt you'"},
            { time: 96 , text: "Don't wanna lie here, but you can learn to"},
            { time: 104 , text: "If I could change the way that you see yourself"},
            { time: 113 , text: "You wouldn't wonder why you hear"},
            { time: 117 , text: "'They don't deserve you'"},
            { time: 120 , text: ""},
            { time: 128 , text: "I tried to scream"},
            { time: 132 , text: "But my head was underwater"},
            { time: 137 , text: "They called me weak"},
            { time: 140 , text: "Like I'm not just somebody's daughter"},
            { time: 142 , text: "It could've been a nightmare"},
            { time: 146 , text: "But it felt like they were right there"},
            { time: 150 , text: "And it feels like yesterday was a year ago"},
            { time: 154 , text: "But I don't wanna let anybody know"},
            { time: 159 , text: "'Cause everybody wants something from me now"},
            { time: 163 , text: "And I don't wanna let 'em down"},
            { time: 167 , text: ""},
            { time: 169 , text: "I had a dream"},
            { time: 172 , text: "I got everything I wanted"},
            { time: 176 , text: "But when I wake up, I see"},
            { time: 179 , text: "You with me"},
            { time: 183 , text: "And you say"},
            { time: 184 , text: "'As long as I'm here, no one can hurt you'"},
            { time: 192 , text: "Don't wanna lie here, but you can learn to"},
            { time: 199 , text: "If I could change the way that you see yourself"},
            { time: 207 , text: "You wouldn't wonder why you hear"},
            { time: 212 , text: "'They don't deserve you'"},
            { time: 216 , text: "If I knew it all then, would I do it again?"},
            { time: 220 , text: "Would I do it again?"},
            { time: 223 , text: "If they knew what they said would go straight to my head"},
            { time: 228 , text: "What would they say instead?"},
            { time: 232 , text: "If I knew it all then, would I do it again?"},
            { time: 236 , text: "Would I do it again?"},
            { time: 240 , text: "If they knew what they said would go straight to my head"},
            { time: 244 , text: "What would they say instead?"},
            { time: 245 , text: ""},

        ],
        uzb: [
            { time: 26 , text: "Men bir tush ko'rdim"},
            { time: 29 , text: "(O'sha tushda) O'zim hohlagan hamma narsaga erishibman"},
            { time: 34 , text: "Siz o'ylagandek emas"},
            { time: 37 , text: "Va agar men rostgo'y bo'lsam"},
            { time: 40 , text: "Bu daxshatli tush bo'lishi mumkin"},
            { time: 44 , text: "G'amxorlik qilishi mumkin bo'lgan har kishiga"},
            { time: 47 , text: ""},
            { time: 50 , text: "Ucha olaman deb o'yladim"},
            { time: 53 , text: "Shuning uchun Golden(mashxur ko'prik) ga qadam qo'ydim"},
            { time: 57 , text: "Hech kim yig'lamadi (yig'lamadi,yig'lamadi,yig'lamadi)"},
            { time: 61 , text: "Hech kim hatto etibor ham bermadi"},
            { time: 63 , text: "Men ko'rdim Ular u yerda turishgan edi"},
            { time: 67 , text: "Ular g'amxorlik qilishlari mumkin deb o'ylagandim(qayg'rishi mumkin,)"},
            { time: 74 , text: "Men bir tush ko'rdim"},
            { time: 77 , text: "(O'sha tushda) O'zim hohlagan hamma narsaga erishibman"},
            { time: 80 , text: "Lekin qachonki ug'onganimda ,seni ko'rdim"},
            { time: 84 , text: "Sen men bilansan"},
            { time: 87 , text: "Va aytasan"},
            { time: 89 , text: "Madomiki men shu yerda ekanman , hech kim senga ozor bera olmaydi"},
            { time: 96 , text: "Bu yerda yolg'on gapirishni hohlamayman, lekin o'rganishing mumkin"},
            { time: 104 , text: "Agar o'zingni qanday ko'rishingni o'zgartira olsam edi"},
            { time: 113 , text: "Nima uchun bu yerda ekanligingdan hayron qolmagan bo'larding"},
            { time: 117 , text: "'They don't deserve you'"},
            { time: 120 , text: ""},
            { time: 128 , text: "Qichqirishdan charchadim"},
            { time: 132 , text: "Lekin boshim suv tubida edi"},
            { time: 137 , text: "Ular meni ojiz deb atashdi"},
            { time: 140 , text: "Xuddi men faqat kimningdir qizi bo'lib qolmaydiganimdek"},
            { time: 142 , text: "Bu qorqinchi tush bolishi mumkin edi"},
            { time: 146, text: "Lekin ular xuddi shu yerda turgandek tuyulardi" },
            { time: 150, text: "Va xuddi kechagi kun bir yil oldindek tuyulmoqda" },
            { time: 154, text: "Lekin buni hech kimga bildirgim kelmayapti" },
            { time: 159, text: "Chunki endi hamma mendan nimadir kutmoqda" },
            { time: 163, text: "Men esa ularni umidsizlantirishni xohlamayman" },
            { time: 167, text: "" },
            { time: 169, text: "Men tush ko'rdim" },
            { time: 172, text: "Men xohlagan hamma narsamga erishganmishman" },
            { time: 176, text: "Lekin uyg'onganimda ko'ryapmanki" },
            { time: 179, text: "Sen men bilansan" },
            { time: 183, text: "Va sen aytyapsan:" },
            { time: 184, text: "'Men shu yerda ekanman, hech kim senga ozor bera olmaydi'" },
            { time: 192, text: "Bu yerda yotishni xohlamayman, lekin sen o'rganishing mumkin" },
            { time: 199, text: "Agar sening o'zingga bo'lgan qarashingni o'zgartira olganimda edi" },
            { time: 207, text: "Sen nega bu yerda ekanligingdan hayron qolmasding" },
            { time: 212, text: "'Ular senga loyiq emaslar'" },
            { time: 216, text: "Agar hammasini o'shanda bilganimda, yana shunday qilarmidim?" },
            { time: 220, text: "Yana shunday qilarmidim?" },
            { time: 223, text: "Ular aytgan gaplari miyamga muhrlanishini bilishganida" },
            { time: 228, text: "Ular buning o'rniga nima deyishgan bo'lardi?" },
            { time: 232, text: "Agar hammasini o'shanda bilganimda, yana shunday qilarmidim?" },
            { time: 236, text: "Yana shunday qilarmidim?" },
            { time: 240, text: "Ular aytgan gaplari miyamga muhrlanishini bilishganida" },
            { time: 244, text: "Ular buning o'rniga nima deyishgan bo'lardi?" },
            { time: 245 , text: ""},

  

        ],
    },
    {
        id: 5,
        name: "No Time To Die" ,
        title: "Billie Eilish" ,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONkeaEvsA0qvNss4PSkhJ1EMfd6367t0_Ag&s",
        path: "./music/Billie Eilish - No Time To Die (Official Music Video).mp3",
        asl: [
            { time: 28, text: "I should have known" },
{ time: 32, text: "" },
{ time: 34, text: "I'd leave alone" },
{ time: 39, text: "" },
{ time: 41, text: "Just goes to show" },
{ time: 46, text: "That the blood you bleed" },
{ time: 49, text: "Is just the blood you owe" },
{ time: 52, text: "" },
{ time: 55, text: "We were a pair" },
{ time: 61, text: "But I saw you there" },
{ time: 68, text: "Too much to bear" },
{ time: 73, text: "You were my life, but life is far away from fair" },
{ time: 80, text: "Was I stupid to love you?" },
{ time: 83, text: "Was I reckless to help?" },
{ time: 87, text: "Was it obvious to everybody else?" },
{ time: 93, text: "That I'd fallen for a lie" },
{ time: 100, text: "You were never on my side" },
{ time: 107, text: "Fool me once, fool me twice" },
{ time: 110, text: "Are you death or paradise?" },
{ time: 114, text: "Now you'll never see me cry" },
{ time: 119, text: "There's just no time to die" },
{ time: 123, text: "" },
{ time: 135, text: "I let it burn" },
{ time: 142, text: "You're no longer my concern, mmm" },
{ time: 148, text: "Faces from my past return" },
{ time: 153, text: "Another lesson yet to learn" },
{ time: 160, text: "That I'd fallen for a lie" },
{ time: 167, text: "You were never on my side" },
{ time: 173, text: "Fool me once, fool me twice" },
{ time: 177, text: "Are you death or paradise?" },
{ time: 180, text: "Now you'll never see me cry" },
{ time: 186, text: "There's just no time to die" },
{ time: 190, text: "" },
{ time: 193, text: "No time to die, mmm" },
{ time: 200, text: "No time to die, ooh" },
{ time: 214, text: "Fool me once, fool me twice" },
{ time: 217, text: "Are you death or paradise?" },
{ time: 221, text: "Now you'll never see me cry" },
{ time: 226, text: "There's just no time to die" },
{ time: 229, text: "" }
        ],
        uzb: [
            { time: 28, text: "Buni bilishim kerak edi" },
  { time: 32, text: "" },
  { time: 34, text: "Yolg'iz tark etishimni" },
  { time: 39, text: "" },
  { time: 41, text: "Bu shuni ko'rsatadiki" },
  { time: 46, text: "Sening oqqan qoning" },
  { time: 49, text: "Sening qarzing bo'lgan qondir" },
  { time: 52, text: "" },
  { time: 55, text: "Biz bir juftlik edik" },
  { time: 61, text: "Lekin seni u yerda ko'rdim" },
  { time: 68, text: "Bunga chidash juda qiyin" },
  { time: 73, text: "Sen hayotim eding, lekin hayot adolatdan juda yiroq" },
  { time: 80, text: "Seni sevib ahmoq bo'ldimmi?" },
  { time: 83, text: "Senga yordam berib laqma bo'ldimmi?" },
  { time: 87, text: "Boshqalarga hammasi ayonmidi?" },
  { time: 93, text: "Yolg'onga uchib qolganim" },
  { time: 100, text: "Sen hech qachon men tomonda bo'lmagansan" },
  { time: 107, text: "Meni bir bor aldading, ikki bor aldading" },
  { time: 110, text: "Sen o'limmisan yoki jannat?" },
  { time: 114, text: "Endi mening yig'laganimni ko'rmaysan" },
  { time: 119, text: "Hozir o'lishga vaqt yo'q" },
  { time: 123, text: "" },
  { time: 135, text: "Yonishiga qo'yib berdim" },
  { time: 142, text: "Sen endi mening tashvishim emassan" },
  { time: 148, text: "O'tmishimdagi siymolar qaytmoqda" },
  { time: 153, text: "Hali olinishi kerak bo'lgan yana bir dars" },
  { time: 160, text: "Yolg'onga uchib qolganim" },
  { time: 167, text: "Sen hech qachon men tomonda bo'lmagansan" },
  { time: 173, text: "Meni bir bor aldading, ikki bor aldading" },
  { time: 177, text: "Sen o'limmisan yoki jannat?" },
  { time: 180, text: "Endi mening yig'laganimni ko'rmaysan" },
  { time: 186, text: "Hozir o'lishga vaqt yo'q" },
  { time: 190, text: "" },
  { time: 193, text: "O'lishga vaqt yo'q" },
  { time: 200, text: "O'lishga vaqt yo'q" },
  { time: 214, text: "Meni bir bor aldading, ikki bor aldading" },
  { time: 217, text: "Sen o'limmisan yoki jannat?" },
  { time: 221, text: "Endi mening yig'laganimni ko'rmaysan" },
  { time: 226, text: "Hozir o'lishga vaqt yo'q" },
  { time: 229, text: "" }

        ],
    }
];

let currentSongIndex = localStorage.getItem('lastSongIndex') || 0;
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const lyricsContent = document.getElementById('lyricsContent');
const langSelect = document.getElementById('langSelect');
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const search = document.getElementById("searchBar")
const matn = document.querySelector(".option-h3")
function loadSong(index) {
    const song = songs[index];
    document.getElementById('songName').innerText = song.name;
    document.getElementById('songTitle').innerText = song.title;
    document.getElementById('cover').src = song.cover;
    audio.src = song.path;
    localStorage.setItem('lastSongIndex', index);
    renderLyrics();
}

function renderLyrics() {
    const lang = langSelect.value;
    const lyrics = songs[currentSongIndex][lang];
    lyricsContent.innerHTML = lyrics.map(l => `<p id="t-${l.time}">${l.text}</p>`).join('');
    // matn.textContent = "" ;
}

audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const lang = langSelect.value;
    const currentLyrics = songs[currentSongIndex][lang];

    currentLyrics.forEach(line => {
        if (currentTime === line.time) {
            document.querySelectorAll('.lyrics-content p').forEach(p => p.classList.remove('active-lyric'));
            const active = document.getElementById(`t-${line.time}`);
            if (active) {
                active.classList.add('active-lyric');
                active.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Timebar yangilash
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('timeBar').value = progress || 0;
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "Pause";
        document.querySelector('.disk').style.animationPlayState = 'running';
    } else {
        audio.pause();
        playBtn.innerText = "Play";
        document.querySelector('.disk').style.animationPlayState = 'paused';
    }
});

// Playlistni yaratish
const playlistDiv = document.getElementById('playlist');
songs.forEach((song, index) => {
    const div = document.createElement('div');
    div.className = 'playlist-item';
    div.innerText = `${song.name} - ${song.title}`;
    div.onclick = () => { currentSongIndex = index; loadSong(index); audio.play(); };
    playlistDiv.appendChild(div);
});

langSelect.onchange = renderLyrics;
loadSong(currentSongIndex);

const volumeBar = document.getElementById('volumeBar');

volumeBar.addEventListener('input', (e) => {
    // Input 0-100 oralig'ida, audio.volume esa 0-1 oralig'ida bo'ladi
    audio.volume = e.target.value / 100;
});

const timeBar = document.getElementById('timeBar');

timeBar.addEventListener('input', (e) => {
    // Foizni vaqtga aylantirish
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Qo'shiqning umumiy vaqtini ko'rsatish (Duration)
audio.addEventListener('loadedmetadata', () => {
    const durationMin = Math.floor(audio.duration / 60);
    const durationSec = Math.floor(audio.duration % 60);
    document.getElementById('durationTime').innerText =
        `${durationMin}:${durationSec < 10 ? '0' + durationSec : durationSec};`
});

// Joriy vaqtni matn ko'rinishida yangilab borish
audio.addEventListener('timeupdate', () => {
    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    document.getElementById('currentTime').innerText =
        `${currentMin}:${currentSec < 10 ? '0' + currentSec : currentSec};`
});

audio.addEventListener('ended', () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) currentSongIndex = 0;
    loadSong(currentSongIndex);
    audio.play();
});

// Keyingi qo'shiqqa o'tish funksiyasi
function nextSong() {
    currentSongIndex++;

    // Agar oxirgi qo'shiqdan o'tib ketsa, birinchisiga qaytadi
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playMusic();
}

// Oldingi qo'shiqqa o'tish funksiyasi
function prevSong() {
    currentSongIndex--;

    // Agar birinchi qo'shiqdan orqaga o'tsa, oxirgisiga qaytadi
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex);
    playMusic();
}

// Musiqani ijro etish va diskni aylantirishni boshqarish
function playMusic() {
    audio.play();
    playBtn.innerText = "Pause";
    document.querySelector('.disk').style.animationPlayState = 'running';
}

// Hodisalarni (Events) tinglash
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Qo'shiq tugaganda avtomatik keyingisiga o'tishi uchun
audio.addEventListener('ended', nextSong)

audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const lang = langSelect.value;
    const currentLyrics = songs[currentSongIndex][lang];

    currentLyrics.forEach((line, index) => {
        if (currentTime === line.time) {
            // Hamma qatorlardan aktivlikni olib tashlash
            const allLines = document.querySelectorAll('.lyrics-content p');
            allLines.forEach(p => p.classList.remove('active-lyric'));

            const activeLine = document.getElementById(`t-${line.time}`);
            if (activeLine) {
                activeLine.classList.add('active-lyric');

                // Matnni yuqoriga/pastga siljitish (Scroll effect)
                const containerHeight = document.querySelector('.lyrics-section').offsetHeight;
                const offset = activeLine.offsetTop - (containerHeight / 2) + (activeLine.offsetHeight / 2);

                // Lyrics-contentni yuqoriga suramiz
                document.getElementById('lyricsContent').style.transform = ` translateY(-${offset - 100}px)`;
            }
        }
    });

    // Timebar va vaqtlar kodi o'zgarishsiz qoladi...
});

const playlistContainer = document.querySelector('.playlist');
const searchInput = document.querySelector('#searchBar');

// 1. Qidiruv funksiyasi
searchInput.addEventListener('input', (e) => {
    let query = e.target.value;

    // Birinchi harfni katta qilish
    if (query.length > 0) {
        query = query.charAt(0).toUpperCase() + query.slice(1);
        e.target.value = query;
    }

    // Filtrlash
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.title.toLowerCase().includes(query.toLowerCase())
    );

    // 2. Playlistni yangilash
    // Agar query bo'sh bo'lsa hamma qo'shiqlar, bo'lmasa filtrlanganlar chiqadi
    renderPlaylist(filteredSongs);
});

// 3. Ekranga chiqaruvchi funksiya (buni o'zingnikiga mosla)
function renderPlaylist(data) {
    playlistContainer.innerHTML = ''; // Clear old items

    data.forEach((song, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        div.innerText = `${song.name} - ${song.title}`;

        // Attach click handler
        div.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            audio.play();
        });

        playlistContainer.appendChild(div);
    });

    // Optional back button
    if (searchInput.value !== "") {
        const backBtn = document.createElement('button');
        backBtn.textContent = "⬅ Back (All)";
        backBtn.style.marginBottom = "10px";
        backBtn.addEventListener('click', resetSearch);
        playlistContainer.insertBefore(backBtn, playlistContainer.firstChild);
    }
}


const showText = document.querySelector(".showtext")
const showPlay = document.querySelector(".showplay")
const playerBox = document.querySelector(".player-section")
const playlistBox = document.querySelector(".playlist-section")
const textBox = document.querySelector(".box-sect")
const showplayer = document.querySelector(".show-player")
showText.addEventListener("click", () => {
    playerBox.style.display = "none"
    textBox.style.display = "block"
    showplayer.style.display = "block"

});
showplayer.addEventListener("click", () => {
    playerBox.style.display = "block"
    textBox.style.display = "none"
    // showplayer.style.display = "none"

})
showPlay.addEventListener( "click" , () => {
     playerBox.style.display = "none"
     playlistBox.style.display = "block"
    // showplayer.style.display = "block"

})



function checkWindowSize() {
    if (window.innerWidth > 500) {
        playerBox.style.display = "block";
    }
}

// Run on page load
checkWindowSize();

// Run whenever the window is resized
window.addEventListener('resize', checkWindowSize);

const btnBack = document.querySelector("#back")

btnBack.addEventListener("click", () => {
    playerBox.style.display = "block"
    textBox.style.display = "none"
    playlistBox.style.display = "none"

    // showplayer.style.display = "none"

})



// ================= LOCAL STORAGE SAVE =================

// Song index numberga aylantirish (agar yuqorida bo'lmasa)
currentSongIndex = parseInt(localStorage.getItem('lastSongIndex')) || 0;

// Volume saqlash
volumeBar.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    localStorage.setItem('volume', audio.volume);
});

// Vaqt saqlash
audio.addEventListener('timeupdate', () => {
    localStorage.setItem('currentTime', audio.currentTime);
});

// Pause / Play holatini saqlash
audio.addEventListener('play', () => {
    localStorage.setItem('isPaused', false);
});

audio.addEventListener('pause', () => {
    localStorage.setItem('isPaused', true);
});

// Sahifadan chiqishda ham saqlash
window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentTime', audio.currentTime);
    localStorage.setItem('volume', audio.volume);
    localStorage.setItem('isPaused', audio.paused);
});


// ================= LOCAL STORAGE RESTORE =================

audio.addEventListener('loadedmetadata', () => {

    const savedTime = localStorage.getItem('currentTime');
    const savedVolume = localStorage.getItem('volume');
    const isPaused = localStorage.getItem('isPaused');

    if (savedVolume !== null) {
        audio.volume = parseFloat(savedVolume);
        volumeBar.value = savedVolume * 100;
    }

    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }

    if (isPaused === "false") {
        audio.play();
    }

}, { once: true });
