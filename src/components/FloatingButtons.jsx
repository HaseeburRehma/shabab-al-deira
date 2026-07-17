import { motion } from "framer-motion";
import { BRAND } from "../site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${BRAND.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_-10px_rgba(37,211,102,0.8)]"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.5 14.4c-.3-.15-1.77-.87-2-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.8.8-2.95-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
        </svg>
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${BRAND.phoneRaw}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_14px_35px_-10px_rgba(224,149,90,0.9)]"
        aria-label="Call us"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-accent/40" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="relative h-6 w-6">
          <path d="M3 5a2 2 0 0 1 2-2h2l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" />
        </svg>
      </motion.a>
    </div>
  );
}
