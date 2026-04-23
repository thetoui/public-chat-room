import { defineConfig } from 'vite';

export default defineConfig({
  // ตั้งค่าสำหรับ Development Server
  server: {
    port: 3000,       // กำหนดพอร์ตเริ่มต้น
    open: true,       // ให้เปิดเบราว์เซอร์อัตโนมัติเมื่อรัน npm run dev
  },
  
  // ตั้งค่าสำหรับการ Build ไปใช้งานจริง
  build: {
    outDir: 'dist',   // โฟลเดอร์ปลายทางที่เก็บไฟล์หลัง build
    emptyOutDir: true // ลบไฟล์เก่าในโฟลเดอร์ dist ก่อน build ใหม่เสมอ
  }
});