"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const BlogDetails = ({ blog }) => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id={"blog-details"}>
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"posts"}
          colorTitle={"blog"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        <div className="mx-auto max-w-700 down-sm:px-25 xs:pt-85">
          <div
            className={`text-fs-13 text-${
              dark ? "light-grey" : "black-3"
            } font-Open-sans`}
          >
            <span className="pr-15">
              <i className="fa fa-user pr-3 text-accent" /> {blog.author}
            </span>
            <span className="pr-15">
              <i className="fa fa-calendar pr-3 text-accent" /> {blog.date}
            </span>
            <span className="pr-15">
              <i className="fa fa-tags pr-3 text-accent" /> {blog.tags}
            </span>
          </div>
          <h1 className="mt-13 mb-20 font-semibold capitalize text-fs-40 xs:text-fs-26 leading-lh-1.2">
            {blog.title}
          </h1>
          <img className="rounded-5 mb-20 w-full" src={blog.img} alt="img" />
          <div className="font-Open-sans mb-60">
            <p className="mb-32 leading-lh-30">
            1. Ma'qsad va auditoriyani aniqlash
Kim uchun tayyorlanmoqda? Mijozlar, yoshlar yoki professional auditoriya.
Maqsad nima? Xabar berish, sotish, jalb qilish yoki brendni targ‘ib qilish.

<br></br>2. Vizual izchillik
Ranglar: Brend ranglariga mos bo‘lishi va haddan tashqari ko‘p ranglardan foydalanilmasligi kerak.
Shriftlar: O‘qish oson va professional ko‘rinadigan shriftlarni tanlang. Har xil shriftlar sonini cheklang (2-3 xil).
Logotip va identitet: Brendingiz logotipi va dizayn elementlarini joylashtiring.
<br></br>3. Minimalizm va soddalik
Post haddan tashqari band ko‘rinmasligi kerak. Ma'lumotlarni qisqa va mazmunli tarzda joylashtiring.
            </p>
            <p className="mb-32 leading-lh-30">
            <br></br>4. Kompozitsiya va tartib
Markaziy diqqat markazi: Asosiy eʼtibor markazini yarating (masalan, mahsulot yoki sarlavha).
Qoidalar: “Uch qism qoidasi” yoki “Negativ bo‘shliq” texnikalaridan foydalaning.
<br></br>5. Matn va mazmun
Matn qisqa, lekin ta’sirli bo‘lishi kerak.
E’tiborni jalb qiluvchi sarlavha va chaqiruv (CTA) qo‘shing (masalan, “Hoziroq xarid qiling!”, “Qo‘shiling!”).
<br></br>6. Tasvir sifati
Yuqori sifatli rasmlardan foydalaning. Piksellangan yoki noaniq tasvirlar professional emas.
Vizual elementlar brendingizga mos bo‘lishi kerak (masalan, minimalistik yoki energiya bilan to‘ldirilgan).
            </p>
            <p className="mb-32 leading-lh-30">
            <br></br>7. Trendlarga moslashish
Ijtimoiy tarmoqdagi eng so‘nggi dizayn trendlari va formatlarni kuzatib boring (masalan, Reels yoki Karusel postlar).
<br></br>8. Platformaga moslik
Har bir ijtimoiy tarmoqning o‘ziga xos formatlari va o‘lchamlariga e’tibor bering (Instagram uchun kvadrat yoki vertikal post, Facebook uchun keng format, TikTok uchun video).
<br></br>9. Interaktivlik va jalb qilish
Savollar, ovoz berish tugmalari yoki o‘yinlar orqali auditoriyani jalb qilishni rag‘batlantiring.
O‘qish oson bo‘lishi uchun vizual ravishda ko‘zga tashlanadigan elementlarni qo‘shing.
<br></br>10. Test va qayta ishlash
Post tayyor bo‘lgach, turli qurilmalarda ko‘rib chiqing.
Auditoriya reaktsiyasini tahlil qilib, kelgusi postlarni takomillashtirish uchun ishlating.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
