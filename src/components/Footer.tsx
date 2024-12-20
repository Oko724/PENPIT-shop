import SocialMediaFooter from "./SocialMediaFooter";
import { HiChevronDown } from "react-icons/hi2";


const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5 max-[400px]:px-3">
        <div className="flex justify-center gap-24 text-center mt-12 max-[800px]:flex-col max-[800px]:gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">บริการลูกค้า</h3>
            <p className="text-lg max-sm:text-base">บริการหลังการขาย</p>
            <p className="text-lg max-sm:text-base">ประกันภัยฟรี</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">แบรนด์ของเรา</h3>
            <p className="text-lg max-sm:text-base">บริษัท</p>
            <p className="text-lg max-sm:text-base">ความเป็นเลิศ</p>
            <p className="text-lg max-sm:text-base">รางวัลระดับนานาชาติ</p>
            <p className="text-lg max-sm:text-base">เรื่องราวของเรา</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">เสื้อผ้าหรูหรา</h3>
            <p className="text-lg max-sm:text-base">ฉบับพิเศษ</p>
            <p className="text-lg max-sm:text-base">ฉบับฤดูร้อน</p>
            <p className="text-lg max-sm:text-base">คอลเลคชั่นพิเศษ</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-20">
          <p className="flex justify-center items-center text-2xl gap-2 max-sm:text-xl">ทั่วโลก / ภาษาอังกฤษ <HiChevronDown /></p>
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">FASHION</h2>
          <p className="text-base text-center max-sm:text-sm">สงวนลิขสิทธิ์ ©2024</p>
          <ul className="flex justify-center items-center gap-7 text-base max-sm:text-sm max-[350px]:flex-col max-[350px]:gap-5">
            <li>นโยบายคุกกี้</li>
            <li>นโยบายความเป็นส่วนตัว</li>
            <li>หมายเหตุทางกฎหมาย</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
