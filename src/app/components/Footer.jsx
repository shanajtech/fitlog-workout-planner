import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0b0e12] border-t border-[#20242b]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/images/footer-logo.png"
            alt="FitLog"
            width={120}
            height={40}
            className="w-auto h-8 object-contain"
          />

          <p className="text-[#8d9198] text-xs md:text-sm text-center md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;